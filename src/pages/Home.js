import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getProductInfo from "../api";

const Container = styled.div`
  width: 100%;
`;

const ItemList = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Item = styled(Link)`
  border: 1px solid blue;
`;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: "",
      loading: true,
    };
    this.getData = this.getData.bind(this);
  }

  async getData() {
    try {
      const { data } = await getProductInfo();
      this.setState({
        items: data,
      });
    } catch (e) {
      this.setState({
        error: "Can't find anything.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return (
      <Container>
        <ItemList>
          {this.state.items.map((item, idx) => (
            <Item to="/product" key={idx}>
              <div>{item.title}</div>
              <div>{item.brand}</div>
              <div>{item.price}</div>
            </Item>
          ))}
        </ItemList>
      </Container>
    );
  }
}

export default Home;
