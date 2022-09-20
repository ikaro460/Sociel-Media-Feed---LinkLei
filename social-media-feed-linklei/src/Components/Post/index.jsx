import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "./styles";

export const Post = ({ avatar, authorName, date, category, image, text }) => {
  return (
    <Container>
      <li>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Editar</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Excluir</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Figure>
          <Image
            roundedCircle
            width={171}
            height={180}
            alt="avatar"
            src={avatar}
          />
        </Figure>
        <h2>{authorName}</h2>
        <h6>
          Publicado em{" "}
          {
            date //12 de Dezembro de 2012 as 16:00
          }
        </h6>
        <h3>{category}</h3>
        <p>{text}</p>
        {image && (
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="post-image"
              src={image}
            />
          </Figure>
        )}
      </li>
    </Container>
  );
};
