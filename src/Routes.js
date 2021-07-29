import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Home from "./pages/Home";
import Product from "./pages/Product";
import RecentList from "./pages/RecentList";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/recentList" component={RecentList} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
