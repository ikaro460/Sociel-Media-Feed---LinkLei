import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #fff;
  margin: 30px;
  width: 700px;
  list-style: none;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
`;
