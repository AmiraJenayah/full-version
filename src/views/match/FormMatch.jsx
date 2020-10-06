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
    matchName: "",
    adversaire: "",
    date: "",
    stade: "",
    arbitre: "",
   equipe: "",
    tenue: "",

  

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
            <CardTitle>
              <h4>Create</h4>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="mt-2" onSubmit={this.handleOnSubmit}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Match name</h5>
                    <Input
                      placeholder=" Match name"
                      className="React"
                      name="matchName"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">date</h5>{" "}
                    <Input
                      type="date"
                      placeholder="date"
                      className="React"
                      name="date"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">equipe</h5>{" "}
                    <Input
                      placeholder="equipe "
                      type="text"
                      className="React"
                      name="equipe"
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
                    <h5 className="my-1 text-bold-600">stade</h5>{" "}
                    <Input
                      type="text"
                      name="stade"
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
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Tenue</h5>{" "}
                    <Input
                      type="text"
                      name="tenue"
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
