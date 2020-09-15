import React, { Component } from "react";
import { addexercice } from "../../redux/actions/exercice/exerciceAction";
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

class FormExercices extends Component {
  state = {
    ExName: "",
    temps: "",
    exercice_theme: "",
    nb_series: "",
    difficulte: "",
    phase_jeu: "",
    repos_series: "",
    objectif: "",
    consignes: "",
    realisation: "",
  };

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addexercice(this.state);
    history.push("/exercices/ListExercices");
  };
  handleButt = (e) => {
    e.preventDefault();
    history.push("/exercices/ListExercices");
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            {" "}
            <Row>
              {" "}
              <Button onClick={this.handleButt}>
                return to exercices list
              </Button>
            </Row>
            <CardTitle>
              <h4>Create</h4>
            </CardTitle>
          </CardHeader>

          <CardBody>
            <Form className="mt-2" onSubmit={this.handleOnSubmit}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Exercice name</h5>
                    <Input
                      type="text"
                      placeholder=" Exercice name"
                      className="React"
                      name="ExName"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">temps</h5>{" "}
                    <Input
                      type="number"
                      placeholder="temps"
                      className="React"
                      name="temps"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">exercice_theme</h5>{" "}
                    <Input
                      placeholder="exercice_theme"
                      type="text"
                      className="React"
                      name="exercice_theme"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">nb_series</h5>{" "}
                    <Input
                      type="number"
                      placeholder="adversaire"
                      name="nb_series"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">difficulte</h5>{" "}
                    <Input
                      placeholder="difficulte"
                      className="React"
                      name="difficulte"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>

                <Col sm="4" md="4">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">phase_jeu</h5>{" "}
                    <input
                      sm="4"
                      min={0}
                      max={20}
                      type="number"
                      name="phase_jeu"
                      onChange={this.handleTextChange}
                      value={this.state.name}
                    />
                  </FormGroup>
                </Col>

                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">repos_series</h5>{" "}
                    <Input
                      sm=""
                      min={0}
                      max={100}
                      type="number"
                      name="repos_series"
                      onChange={this.handleTextChange}
                      value={this.state.name}
                      placeholder=" "
                    />
                  </FormGroup>
                </Col>

                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">objectif</h5>{" "}
                    <Input
                      type="text"
                      name="objectif"
                      onChange={this.handleTextChange}
                      value={this.state.name}
                      placeholder=" "
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">consignes</h5>{" "}
                    <Input
                      type="text"
                      name="consignes"
                      onChange={this.handleTextChange}
                      value={this.state.name}
                      placeholder=" "
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">realisation</h5>{" "}
                    <Input
                      type="text"
                      name="realisation"
                      onChange={this.handleTextChange}
                      value={this.state.name}
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
    values: state.exercice,
  };
};
export default connect(mapStateToProps, { addexercice })(FormExercices);
