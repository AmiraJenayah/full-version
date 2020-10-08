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
    type: "",
    Duree: "",
    activite: "",
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
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Type</h5>{" "}
                    <Input
                      placeholder="type"
                      className="React"
                      name="type"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Duration MN</h5>{" "}
                    <Input
                      type="number"
                      placeholder="Duration"
                      className="React"
                      name="Duree"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">activity</h5>{" "}
                    <Input
                      placeholder="activity"
                      type="text"
                      className="React"
                      name="activite"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      required
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
