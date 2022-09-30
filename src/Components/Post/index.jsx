import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import { CustomDropdown } from "../Dropdown/index";
import {
  CategoryContainer,
  PostHeader,
  ProfileInfo,
  StyledContainer,
  StyledReadMore,
} from "./styles";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { CategorySymbol } from "../CategorySymbol";

//Renders post on screen
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
              <h6>{date}</h6>
            </div>
          </ProfileInfo>
          <CustomDropdown id={id} />
        </PostHeader>
        <CategoryContainer>
          <CategorySymbol category={category} />
          <h3>{category}</h3>
        </CategoryContainer>
        <div>
          <StyledReadMore>
            <ReactReadMoreReadLess
              charLimit={500}
              readMoreText={"Leia mais"}
              readLessText={"Ocultar"}
            >
              {text}
            </ReactReadMoreReadLess>
          </StyledReadMore>
        </div>
        {image && (
          <Figure>
            <Figure.Image alt="post-image" src={image} />
          </Figure>
        )}
      </li>
    </StyledContainer>
  );
};
