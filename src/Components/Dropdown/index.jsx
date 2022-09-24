import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { CustomToggleIcon, DeletePostIcon, EditPostIcon } from "../../graphics";
import { usePostList } from "../../providers/PostListProvider";
import { useShowModal } from "../../providers/ShowModalProvider";

// ** CUSTOMIZED DROPDOWN COMPONENT FROM REACT-BOOTSTRAP ***

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

export const CustomDropdown = ({ id }) => {
  const { postList, addPost, deletePost } = usePostList();
  const { showModal, hideModal, getShowModal } = useShowModal();

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
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

  //using id key to edit and delete posts

  const handleClick = (e) => {
    console.log(e.target.innerHTML.substring(e.target.innerHTML.length - 6));
    const actionType = e.target.innerHTML.substring(
      e.target.innerHTML.length - 6
    );
    console.log(actionType);

    if (actionType === "xcluir") {
      deletePost(id);
    } else if (actionType === "Editar") {
      showModal("edit");
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1" onClick={(e) => handleClick(e)}>
          <EditPostIcon />
          Editar
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={(e) => handleClick(e)}>
          <DeletePostIcon />
          Excluir
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
