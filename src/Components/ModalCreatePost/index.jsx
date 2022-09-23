import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledContainer,
  StyledForm,
  StyledModalFooter,
  StyledModalHeader,
  StyledOpenModal,
} from "./styles";
import { usePostList } from "../../providers/PostListProvider";
import moment from "moment";
import "moment/locale/pt-br";

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
    <StyledContainer>
      <StyledOpenModal onClick={handleShow}>
        <svg
          width="20"
          height="15"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.67589 0C1.4356 0 1.2007 0.0744391 1.0009 0.213904C0.801101 0.353369 0.645378 0.551596 0.553421 0.783517C0.461464 1.01544 0.437404 1.27064 0.484283 1.51685C0.531162 1.76305 0.646875 1.98921 0.81679 2.16671C0.986704 2.34422 1.20319 2.4651 1.43887 2.51407C1.67454 2.56305 1.91883 2.53791 2.14083 2.44185C2.36284 2.34578 2.55259 2.1831 2.68609 1.97438C2.81959 1.76565 2.89084 1.52026 2.89084 1.26923C2.89084 0.93261 2.76284 0.609776 2.53499 0.371749C2.30715 0.133722 1.99812 0 1.67589 0ZM1.67589 4.23077C1.4356 4.23077 1.2007 4.30521 1.0009 4.44467C0.801101 4.58414 0.645378 4.78236 0.553421 5.01429C0.461464 5.24621 0.437404 5.50141 0.484283 5.74761C0.531162 5.99382 0.646875 6.21998 0.81679 6.39748C0.986704 6.57499 1.20319 6.69587 1.43887 6.74484C1.67454 6.79382 1.91883 6.76868 2.14083 6.67262C2.36284 6.57655 2.55259 6.41387 2.68609 6.20515C2.81959 5.99642 2.89084 5.75103 2.89084 5.5C2.89084 5.16338 2.76284 4.84054 2.53499 4.60252C2.30715 4.36449 1.99812 4.23077 1.67589 4.23077ZM1.67589 8.46154C1.4356 8.46154 1.2007 8.53598 1.0009 8.67544C0.801101 8.81491 0.645378 9.01313 0.553421 9.24506C0.461464 9.47698 0.437404 9.73218 0.484283 9.97838C0.531162 10.2246 0.646875 10.4507 0.81679 10.6283C0.986704 10.8058 1.20319 10.9266 1.43887 10.9756C1.67454 11.0246 1.91883 10.9995 2.14083 10.9034C2.36284 10.8073 2.55259 10.6446 2.68609 10.4359C2.81959 10.2272 2.89084 9.9818 2.89084 9.73077C2.89084 9.39415 2.76284 9.07131 2.53499 8.83329C2.30715 8.59526 1.99812 8.46154 1.67589 8.46154ZM13.0155 8.88461H4.91577C4.80836 8.88461 4.70535 8.92919 4.6294 9.00853C4.55345 9.08787 4.51078 9.19548 4.51078 9.30769V10.1538C4.51078 10.2661 4.55345 10.3737 4.6294 10.453C4.70535 10.5323 4.80836 10.5769 4.91577 10.5769H13.0155C13.1229 10.5769 13.2259 10.5323 13.3018 10.453C13.3778 10.3737 13.4204 10.2661 13.4204 10.1538V9.30769C13.4204 9.19548 13.3778 9.08787 13.3018 9.00853C13.2259 8.92919 13.1229 8.88461 13.0155 8.88461ZM13.0155 0.423077H4.91577C4.80836 0.423077 4.70535 0.467651 4.6294 0.546993C4.55345 0.626336 4.51078 0.733947 4.51078 0.846154V1.69231C4.51078 1.80451 4.55345 1.91213 4.6294 1.99147C4.70535 2.07081 4.80836 2.11538 4.91577 2.11538H13.0155C13.1229 2.11538 13.2259 2.07081 13.3018 1.99147C13.3778 1.91213 13.4204 1.80451 13.4204 1.69231V0.846154C13.4204 0.733947 13.3778 0.626336 13.3018 0.546993C13.2259 0.467651 13.1229 0.423077 13.0155 0.423077V0.423077ZM13.0155 4.65385H4.91577C4.80836 4.65385 4.70535 4.69842 4.6294 4.77776C4.55345 4.8571 4.51078 4.96472 4.51078 5.07692V5.92308C4.51078 6.03528 4.55345 6.1429 4.6294 6.22224C4.70535 6.30158 4.80836 6.34615 4.91577 6.34615H13.0155C13.1229 6.34615 13.2259 6.30158 13.3018 6.22224C13.3778 6.1429 13.4204 6.03528 13.4204 5.92308V5.07692C13.4204 4.96472 13.3778 4.8571 13.3018 4.77776C13.2259 4.69842 13.1229 4.65385 13.0155 4.65385Z"
            fill="#29325D"
          ></path>
        </svg>
        <p>Criar Post</p>
      </StyledOpenModal>

      <Modal show={show} onHide={handleClose}>
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
    </StyledContainer>
  );
};
