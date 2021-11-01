import styled from "styled-components";

export const Card = styled.div`
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 700px;
  height: 800px;
  margin: auto;
  padding: 14px;
  max-width: 40%;
  background-color: lightgray;
  border-radius: 20px;
`;

export const Button = styled.button`
  color: darkgray;
  font-size: 10px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid darkgray;
  border-radius: 3px;
`;

export const Bubble = styled.span`
  display: flexbox;
  min-width: 100px;
  max-width: max-content;
  margin: 5px;
  padding: 5px;
  border: 4px solid black;
  border-radius: 25px;
  color: white;
  background-color: gray;
  border-color: grey;
`;

export const OutputTodo = styled.span`
  font-size: 20px;
  padding: 5px;
`;

export const OutputDate = styled.span`
  font-size: 10px;
  text-align: left;
  padding-right: 5px;
`;

export const InputTodo = styled.input`
    width: 40%;
    padding: 6px 20px;
    margin: 8px;
    box-sizing: border-box;
`;

export const InputDate = styled.input`
    width: 40%;
    padding: 6px 20px;
    margin: 8px;
    box-sizing: border-box;
`;