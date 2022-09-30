import styled from "styled-components";

export const StyledOpenModal = styled.div`
  display: flex;
  justify-content: center;

  background-color: #fff;
  padding: 15px;
  margin: 5px 0px;
  width: 100%;
  list-style: none;
  object-fit: contain;
  border-radius: 5px;

  > * {
    background-color: var(--button-grey);

    display: flex;
    align-items: center;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;

    :hover {
      background-color: lightgrey;
      transition: 0.5s;
    }

    svg,
    p {
      margin: 5px;
      color: var(--title-blue);
      font-weight: 600;
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  background-color: #fff;
  padding: 15px;
  margin: 5px 0px;
  width: 100%;
  list-style: none;
  object-fit: contain;
  border-radius: 5px;

  form {
    margin: 5px;
  }
`;

export const StyledModalHeader = styled.div`
  * {
    color: var(--title-blue);
    font-weight: 700;
  }
  button {
    opacity: 100;
    background-color: var(--purple-1);
    position: absolute;
    left: 450px;
    top: -10px;
  }

  button:hover {
    opacity: 100;
  }

  border-left: 5px solid var(--purple-1);
`;

export const StyledModalFooter = styled.div`
  button {
    background-color: var(--purple-1);
    margin: 5px 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    color: var(--post-white);
    font-weight: 700;
  }
`;

export const StyledForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  select {
    padding: 5px;
    width: 100px;
  }
  input {
    width: 300px;
  }

  form > * {
    margin: 5px;
  }

  span {
    margin: 0 5px;
    font-size: 0.8em;
    color: red;
  }
`;
