import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { CustomToggleIcon, DeletePostIcon, EditPostIcon } from "../../graphics";
import { usePostList } from "../../providers/PostList";
import { useShowModal } from "../../providers/ShowModal";
import { usePostToEdit } from "../../providers/PostToEdit";
import { StyledContainer } from "./styles";

// ** CUSTOMIZED DROPDOWN COMPONENT FROM REACT-BOOTSTRAP ***

export const CustomDropdown = ({ id }) => {
  const { postList, deletePost } = usePostList();
  const { showModal } = useShowModal();
  const { setPostToEdit } = usePostToEdit();

  //handleModal function sets the id for the post edit or delete
  const handleShowModal = () => {
    const postToEdit = postList.find((e) => e.id === id);
    setPostToEdit(postToEdit);
    showModal();
  };

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <CustomToggleIcon />
    </a>
  ));

  return (
    <Dropdown as={StyledContainer}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1" onClick={() => handleShowModal()}>
          <EditPostIcon />
          Editar
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={() => deletePost(id)}>
          <DeletePostIcon />
          Excluir
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
