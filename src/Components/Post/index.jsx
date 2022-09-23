import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import { CustomDropdown } from "../Dropdown/index";
import { Container, PostHeader, ProfileInfo, StyledContainer } from "./styles";
import ReactReadMoreReadLess from "react-read-more-read-less";

export const Post = ({
  id,
  avatar,
  authorName,
  date,
  category,
  image,
  text,
}) => {
  return (
    <StyledContainer>
      <li>
        <PostHeader>
          <ProfileInfo>
            <Figure>
              <Image
                roundedCircle
                width={80}
                height={80}
                alt="avatar"
                src={avatar}
              />
            </Figure>
            <div>
              <h2>{authorName}</h2>
              <h6>
                Publicado em{" "}
                {
                  date //12 de Dezembro de 2012 as 16:00
                }
              </h6>
            </div>
          </ProfileInfo>
          <CustomDropdown id={id} />
        </PostHeader>
        <h3>{category}</h3>
        <p>
          <ReactReadMoreReadLess
            charLimit={500}
            readMoreText={"Read more"}
            readLessText={"Read less"}
          >
            {text}
          </ReactReadMoreReadLess>
        </p>
        {image && (
          <Figure>
            <Figure.Image alt="post-image" src={image} />
          </Figure>
        )}
      </li>
    </StyledContainer>
  );
};
