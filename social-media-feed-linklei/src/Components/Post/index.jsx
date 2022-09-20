import { Figure, Image } from "react-bootstrap";

export const Post = ({ avatar, authorName, date, category, image, text }) => {
  return (
    <li>
      <Image
        roundedCircle={true}
        width={171}
        height={180}
        alt="avatar"
        src={avatar}
      />
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
          <Figure.Image width={171} height={180} alt="post-image" src={image} />
        </Figure>
      )}
    </li>
  );
};
