import React, { Component } from "react";
import { history } from "../../history";
import { connect } from "react-redux";
import { addEntrainement } from "../../redux/actions/entrainement/entrainementAction";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
} from "reactstrap";

class Entrainement extends Component {
  state = {
    EntName: "",
    Period: "",
    Lieu: "",
    Horaire: "",
    Nb_exercice: "",
  };

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addEntrainement(this.state);
  };
  handleButt = (e) => {
                        e.preventDefault();
                          history.push("/entrainement/entrainementList");
                      };

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            {" "}
            <Row>
              {" "}
              <Button onClick={this.handleButt}>Training List</Button>
            </Row>
            <CardTitle>
              <h4>Create </h4>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="mt-2" onSubmit={this.handleOnSubmit}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Training name</h5>
                    <Input
                      type="text"
                      placeholder="training"
                      className="React"
                      name="EntName"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Period </h5>
                    <Input
                      type="text"
                      placeholder="Period"
                      className="React"
                      name="Period"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>

                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Location</h5>{" "}
                    <Input
                      type="text"
                      placeholder="Location"
                      className="React"
                      name="Lieu"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Schedule </h5>{" "}
                    <Input
                      type="date"
                      placeholder="Schedule"
                      className="React"
                      name="Horaire"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Nb_exercice</h5>{" "}
                    <Input
                      type="number"
                      placeholder="Nb_exercice"
                      name="Nb_exercice"
                      value={this.state.name}
                      onChange={this.handleTextChange}
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
    values: state.entrainement,
  };
};
export default connect(mapStateToProps, { addEntrainement })(Entrainement);
