import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #fff;
  margin: 10px 0px;
  padding: 15px;
  width: 100%;
  list-style: none;
  text-align: start;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin: 0 5px;
  }
  fig {
    width: 100%;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 0 5px;
  }
`;
