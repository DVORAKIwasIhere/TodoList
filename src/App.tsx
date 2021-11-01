import { TodoList } from "./components/List";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: #145094;
    font-family: Roboto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

        <TodoList />

    </>
  );
}

export default App;
