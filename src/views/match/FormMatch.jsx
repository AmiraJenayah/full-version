import React, { Component } from "react";
import { addMatch } from "../../redux/actions/match/matchform";
import { connect } from "react-redux";
import { history } from "../../history";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
} from "reactstrap";

class FormMatch extends Component {
  state = {
    competitionId: "",
    competitionName: "",
    adversaire: "",
    joue_a: "",
    journee: "",
    terrain: "",
    arbitre: "",
    equipe_id: "",
    extra_time: "",
    score: "",

  };

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addMatch(this.state);
    history.push("/match/ListMatch");
  };
  
  handleButt = (e) => {
    e.preventDefault();
    history.push("/match/ListMatch");
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            {" "}
            <Row>
              {" "}
              <Button onClick={this.handleButt}>return to matchs list</Button>
            </Row>
            <CardTitle><h4>Create</h4></CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="mt-2" onSubmit={this.handleOnSubmit}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Match name</h5>
                    <Input
                      placeholder=" compétition name"
                      className="React"
                      name="matchName"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">journe</h5>{" "}
                    <Input
                      placeholder="Choisir Journée"
                      className="React"
                      name="journee"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">equipe</h5>{" "}
                    <Input
                      placeholder="equipe number"
                      type="number"
                      className="React"
                      name="equipe_id"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Adversaire</h5>{" "}
                    <Input
                      placeholder="adversaire"
                      name="adversaire"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">jouè à</h5>{" "}
                    <Input
                      placeholder="jouè a"
                      className="React"
                      name="joue_a"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>

                <Col sm="4" md="4">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Temps Total (min)</h5>{" "}
                    <input
                      sm="4"
                      min={0}
                      max={20}
                      type="number"
                      name="extra_time"
                      onChange={this.handleTextChange}
                      value={this.state.name}
                    />
                  </FormGroup>
                </Col>

                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">terrain</h5>{" "}
                    <Input
                      type="text"
                      name="terrain"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      placeholder=" "
                    />
                  </FormGroup>
                </Col>

                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Arbitre</h5>{" "}
                    <Input
                      type="text"
                      name="arbitre"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      placeholder=" "
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <FormGroup className="form-label-group">
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mr-1 mb-1"
                    >
                      Submit
                    </Button.Ripple>
                    <Button.Ripple
                      outline
                      color="warning"
                      type="reset"
                      className="mb-1"
                    >
                      Reset
                    </Button.Ripple>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.match,
  };
};
export default connect(mapStateToProps, { addMatch })(FormMatch);
