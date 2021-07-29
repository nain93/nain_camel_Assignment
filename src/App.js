import React from "react";
import styled from "styled-components";
import GlobalStyles from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import Routes from "./Routes";

const GlobalContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 50px;
`;

export default class App extends React.Component {
  render() {
    return (
      <GlobalContainer>
        <GlobalStyles />
        <Nav />
        <Routes />
      </GlobalContainer>
    );
  }
}
