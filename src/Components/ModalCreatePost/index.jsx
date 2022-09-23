import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { InputImg, PostTextInput, StyledContainer } from "./styles";

export const ModalCreatePost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledContainer>
      <button onClick={handleShow}>Criar post</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input placeholder="Autor do post" />
            <select name="" id="" placeholder="Selecione uma categoria">
              <option value="valor1">Post</option>
              <option value="valor2">Valor 2</option>
            </select>
            <PostTextInput>
              <textarea placeholder="Escrever publicação" rows={5} cols={60} />
            </PostTextInput>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <label for="photo-upload">
            <div>Imagem</div>
          </label>
          <input
            style={{ display: "none" }}
            id="photo-upload"
            type="file"
            onChange={() => console.log("click")}
          />
          <button variant="primary" onClick={() => console.log("post")}>
            Publicar
          </button>
        </Modal.Footer>
      </Modal>
    </StyledContainer>
  );
};
