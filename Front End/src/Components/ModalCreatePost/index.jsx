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

export const ModalCreatePost = () => {
  const { postList, addPost, editPost } = usePostList();
  const { showModal, hideModal, getShowModal } = useShowModal();
  const { getPostToEdit } = usePostToEdit();

  const handleClose = () => hideModal();
  const handleShow = () => showModal("add");

  const schema = yup.object().shape({
    authorName: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    text: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    console.log(formData);

    const handledFormData = {
      id: postList.length + 1,
      avatar:
        "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
      authorName: formData.authorName,
      date: moment().format("LLL"),
      category: formData.category,
      image: formData.image === undefined ? null : formData.image,
      text: formData.text,
    };

    addPost(handledFormData);
    handleClose();
    console.log(postList);
  };

  return (
    <>
      <StyledOpenModal>
        <button onClick={handleShow}>
          <CreatePostIcon />
          <p>Criar Post</p>
        </button>
      </StyledOpenModal>
      <Modal show={getShowModal === "add" ? true : false} onHide={handleClose}>
        <StyledModalHeader>
          <Modal.Header closeButton>
            <Modal.Title>Criar Post</Modal.Title>
          </Modal.Header>
        </StyledModalHeader>
        <Modal.Body>
          <StyledForm>
            <form id="form1" onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Autor do post" {...register("authorName")} />
              <select
                name="category"
                placeholder="Selecione uma categoria"
                {...register("category")}
              >
                <option value="Post">Post</option>
                <option value="Artigo">Artigo</option>
                <option value="Evento">Evento</option>
              </select>

              {/*  Didn´t use Auto Expand TextArea because it was bugging with hook-form register  */}
              <textarea
                placeholder="Escrever publicação"
                rows={5}
                cols={50}
                {...register("text")}
              />
            </form>
          </StyledForm>
        </Modal.Body>
        <Modal.Footer>
          <StyledModalFooter>
            <label htmlFor="photo-upload">
              <div>Imagem</div>
            </label>
            <input
              style={{ display: "none" }}
              id="photo-upload"
              type="file"
              onChange={() => console.log("click")}
            />
            <button type="submit" form="form1" value="Submit">
              PUBLICAR
            </button>
          </StyledModalFooter>
        </Modal.Footer>
      </Modal>
    </>
  );
};
