import React, { Component } from "react";
import FormPlayer from "./FormPlayer";
import { Button } from "semantic-ui-react";
import { Row ,Col } from "reactstrap";
import { history } from "../../history";

class CreatePlayer extends Component {
  handleButton = (e) => {
    e.preventDefault();
    history.push("/players/PlayerList");
  };
  render() {
    return (
      <div>
        <Row>
          <Col>          <Button onClick={this.handleButton}> Return to players List</Button>
</Col>
        </Row>
        <Row>
          {" "}
          <FormPlayer />
        </Row>
      </div>
    );
  }
}

export default CreatePlayer;
