import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { CustomToggleIcon, DeletePostIcon, EditPostIcon } from "../../graphics";

// ** CUSTOMIZED DROPDOWN COMPONENT FROM REACT-BOOTSTRAP ***

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

export const CustomDropdown = ({ id }) => {
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

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">
          <EditPostIcon />
          Editar
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <DeletePostIcon />
          Excluir
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
