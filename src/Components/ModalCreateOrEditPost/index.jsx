import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledForm,
  StyledModalFooter,
  StyledModalHeader,
  StyledOpenModal,
} from "./styles";
import { usePostList } from "../../providers/PostListProvider";
import moment from "moment";
import "moment/locale/pt-br";
import { CreatePostIcon } from "../../graphics";
import { useShowModal } from "../../providers/ShowModalProvider";
import { usePostToEdit } from "../../providers/PostToEditProvider";

//Used one component for rendering modals for both editing and adding post
//Worked that out using conditional renders

export const ModalCreateOrEditPost = () => {
  const { postList, addPost, editPost, axiosRefreshPostList } = usePostList();
  const { showModal, hideModal, getShowModal } = useShowModal();
  const { getPostToEdit, setPostToEdit } = usePostToEdit();

  const [getAuthorName, setAuthorName] = useState(getPostToEdit.authorName);
  const [getText, setText] = useState(getPostToEdit.text);
  const [getCategory, setCategory] = useState(getPostToEdit.category);

  //useEffect to update states according to context
  useEffect(() => {
    if (getPostToEdit) {
      setAuthorName(getPostToEdit.authorName);
      setText(getPostToEdit.text);
      setCategory(getPostToEdit.category);
    }
  }, [getPostToEdit]);

  const onChangeInput = (event) => {
    setAuthorName(event.target.value);
  };

  const onChangeTextArea = (event) => {
    setText(event.target.value);
  };

  const onChangeSelect = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    hideModal();
    setPostToEdit(false);
  };

  const schema = yup.object().shape({
    authorName: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    text: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    getPostToEdit
      ? editPost({
          id: getPostToEdit.id,
          avatar: getPostToEdit.avatar,
          authorName: formData.authorName,
          date: `Editado em ${moment().format("LLL")}`,
          category: formData.category,
          image: getPostToEdit.image,
          text: formData.text,
        })
      : addPost({
          id: Math.max(postList.map((e) => e.id)) + 1, //finding the higher number and incrementing its value by 1
          avatar:
            "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
          authorName: formData.authorName,
          date: `Publicado em ${moment().format("LLL")}`, //moment library for timestamps
          category: formData.category,
          image: formData.image === undefined ? null : formData.image,
          text: formData.text,
        });
    handleClose();
  };

  return (
    <>
      <StyledOpenModal>
        <button
          onClick={() => {
            showModal();
          }}
        >
          <CreatePostIcon />
          <p>Criar Post</p>
        </button>
      </StyledOpenModal>
      <Modal show={getShowModal} onHide={handleClose}>
        <StyledModalHeader>
          <Modal.Header closeButton>
            <Modal.Title>
              {getPostToEdit ? "Editar Post" : "Criar Post"}
            </Modal.Title>
          </Modal.Header>
        </StyledModalHeader>
        <Modal.Body>
          <StyledForm>
            <form id="form1" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("authorName")}
                id="name_input"
                placeholder="Autor do post"
                type="text"
                value={getAuthorName}
                onChange={onChangeInput}
              />
              <select
                {...register("category")}
                name="category"
                placeholder="Selecione uma categoria"
                value={getCategory}
                onChange={onChangeSelect}
              >
                <option value="Post">Post</option>
                <option value="Artigo">Artigo</option>
                <option value="Evento">Evento</option>
              </select>

              <textarea
                {...register("text")}
                placeholder="Escrever publicação"
                rows={5}
                cols={50}
                value={getText}
                onChange={onChangeTextArea}
              />
            </form>
          </StyledForm>
        </Modal.Body>
        <Modal.Footer>
          <StyledModalFooter>
            <label htmlFor="photo-upload">
              <div>Imagem</div>
            </label>
            <input style={{ display: "none" }} id="photo-upload" type="file" />
            <button type="submit" form="form1" value="Submit">
              PUBLICAR
            </button>
          </StyledModalFooter>
        </Modal.Footer>
      </Modal>
    </>
  );
};
