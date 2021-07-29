import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
`;

export default class Product extends React.Component {
  render() {
    return <Container>Product</Container>;
  }
}
