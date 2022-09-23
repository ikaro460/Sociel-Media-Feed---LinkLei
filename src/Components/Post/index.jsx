import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import { CustomDropdown } from "../Dropdown/index";
import {
  CategoryContainer,
  Container,
  PostHeader,
  ProfileInfo,
  StyledContainer,
} from "./styles";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { CategorySymbol } from "../CategorySymbol";

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
                width={50}
                height={50}
                alt="avatar"
                src={avatar}
              />
            </Figure>
            <div>
              <h1>{authorName}</h1>
              <h6>Publicado em {date}</h6>
            </div>
          </ProfileInfo>
          <CustomDropdown id={id} />
        </PostHeader>
        <CategoryContainer>
          <CategorySymbol category={category} />
          <h3>{category}</h3>
        </CategoryContainer>
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
