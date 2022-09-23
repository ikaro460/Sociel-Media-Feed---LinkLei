import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostTextInput, StyledContainer } from "./styles";
import { usePostList } from "../../providers/PostListProvider";

export const ModalCreatePost = () => {
  const { postList, addPost } = usePostList();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = yup.object().shape({
    authorName: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    text: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    console.log(formData);

    const handledFormData = {
      id: postList.length + 1,
      avatar:
        "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
      authorName: formData.authorName,
      date: "11-02-2022",
      category: formData.category,
      image: formData.image === undefined ? null : formData.image,
      text: formData.text,
    };

    addPost(handledFormData);
    handleClose();
    console.log(postList);
  };

  return (
    <StyledContainer>
      <button onClick={handleShow}>Criar post</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <PostTextInput>
              <textarea
                placeholder="Escrever publicação"
                rows={5}
                cols={60}
                {...register("text")}
              />
            </PostTextInput>
          </form>
        </Modal.Body>
        <Modal.Footer>
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
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </StyledContainer>
  );
};
