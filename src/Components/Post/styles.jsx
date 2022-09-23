import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #fff;
  color: #666;
  margin: 5px 0px;
  padding: 15px;
  list-style: none;
  text-align: start;
  border-radius: 5px;

  h1 {
    font-size: 1.3rem;
    font-weight: 900;
    color: var(--title-blue);
  }

  h3 {
    font-size: 1rem;
    font-weight: 900;
    color: var(--title-blue);
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.9rem;
  }

  h1,
  h6 {
    margin: 0;
  }

  img {
    margin: 0 5px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  figure {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 0 5px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 15px 0;

  h3,
  svg {
    margin: 2px;
  }
`;
