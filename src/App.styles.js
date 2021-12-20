import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px;

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
