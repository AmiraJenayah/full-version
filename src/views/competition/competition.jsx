import React, { Component } from "react";
import { history } from "../../history";
import { connect } from "react-redux";
import { addComp } from "../../redux/actions/competiton/competitionAction";
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

class Competiton extends Component {
  state = {
    Compname: "",
    Saison: "",
    Number_equipe: "",
    Prix: "",
   
  };

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addComp(this.state);
    history.push("/competition/competition");
  };
  handleButt = (e) => {
    e.preventDefault();
     history.push("/competition/CompetitionList");
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            {" "}
            <Row>
              {" "}
              <Button onClick={this.handleButt}>Competition List</Button>
            </Row>
            <CardTitle>
              <h4>Create Competition</h4>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="mt-2" onSubmit={this.handleOnSubmit}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Competition name</h5>
                    <Input
                      type="text"
                      placeholder=" compétition name"
                      className="React"
                      name="Compname"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Number_equipe </h5>{" "}
                    <Input
                      type="number"
                      placeholder="Number_equipe"
                      className="React"
                      name="Number_equipe"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Saison </h5>{" "}
                    <Input
                      type="text"
                      placeholder="Saison"
                      className="React"
                      name="Saison"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Prix</h5>{" "}
                    <Input
                      type="number"
                      placeholder="Prix"
                      name="Prix"
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
    values: state.comp,
  };
};
export default connect(mapStateToProps, { addComp })(Competiton);
