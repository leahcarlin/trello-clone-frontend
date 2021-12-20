import styled from "styled-components";

// export const Header = styled.div``;

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 10px;

  body,
  h1,
  h3,
  p {
    font-family: "Signika", sans-serif;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 10px;
  }
`;

export const ListColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ListDiv = styled.div`
  margin: 0px 10px 10px 0px;
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;

  p {
    font-weight: bold;
    margin: 5px 0px;
  }
`;

export const Card = styled.div`
  button {
    padding: 10px;
    background-color: #cef7ce;
    border: none;
    width: 300px;
    text-align: left;
    border-radius: 10px;
    margin: 10px 0px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const AddCardDiv = styled.div`
  form {
    padding: 10px 0px;
    background-color: #e8e8e8;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;

    .list-btn {
      border: none;
      background-color: #e8e8e8;
      display: flex;
      margin-bottom: 10px;
      padding: 0px;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: #cef7ce;
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;

  button {
    background-color: white;
    width: auto;
    border: 1px solid;
    padding: 5px;
  }

  input {
    width: 100%;
    padding: 5px;
    margin: 5px 0px 15px 0px;
  }

  label {
    margin-right: 5px;
  }
  select {
    padding: 5px;
  }

  .close {
    color: Black;
    float: right;
  }

  .close:hover {
    color: #cef7ce;
    cursor: pointer;
  }

  .move-card {
    display: flex;
    flex-direction: row;
  }

  .move-card p {
    margin-right: 10px;
  }
`;

// export const Footer = styled.div``;
