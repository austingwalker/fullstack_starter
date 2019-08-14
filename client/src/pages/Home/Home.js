import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";


class Home extends Component {
  state = {
    test: {},
  };

  componentDidMount() {
    API.getTest()
      .then(res =>
        this.setState({ test: res.data})
      )
      .catch(err => console.log(err));
  }

  

  render() {
    return (
      <div>
        {this.state.test.success}
      </div>
    );
  }
}

export default Home;