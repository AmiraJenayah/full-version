import React, { Component } from "react";

import axios from "axios";

class ListMatch extends Component {
  state = {
    matchs: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/matchs`).then((res) => {
      const matchs = res.data;
      this.setState({ matchs });
    });
  }

  render() {
    return (
      <ul>
        {this.state.matchs.map((matchs) => (
          <ul>
            <li>{matchs.competitionID}</li>
           
            <li>{matchs.adversaire}</li>
          </ul>
        ))}
      </ul>
    );
  }
}
export default ListMatch;
