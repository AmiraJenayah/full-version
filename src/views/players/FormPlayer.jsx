import React, { Component } from "react";

import { connect } from "react-redux";
import { addPlayer } from "../../redux/actions/player/playerAction";
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
   Button
} from "reactstrap";
import { Segment } from "semantic-ui-react";

class FormPlayer extends Component {

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addPlayer(this.state);
    
  };
  handleChangeSpeed = (e) => this.setState({ speed: e.target.value });
  handleChangeEndurance = (e) => this.setState({ endurance: e.target.value });
  handleChangeTactical = (e) => this.setState({ tactical: e.target.value });
  handleChangeTechnical = (e) => this.setState({ technical: e.target.value });
  handleChangeAttack = (e) => this.setState({ attack: e.target.value });
  handleChangeDefense = (e) => this.setState({ defense: e.target.value });

  state = {
         
             
    first_name: "",
    last_name: "",
    birthday: "",
  numero_tenue:"",
    email: "",
    hauteur: "",
    poids: "",
    etatdeSante: "",
    salaire : "",
    primes:"",
  
    published: false,
    submitted: false,
  };


  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>create player</CardTitle>
        </CardHeader>

        <CardBody>
          <Form onSubmit={this.handleOnSubmit}>
            <Row>
              <Segment className="col-12 bg-primary">
                <center>
                  <h2>Profil</h2>
                </center>
              </Segment>
              <Col md="6" sm="12">
                <Label for="first_name_player">First Name</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="first_name"
                    id="first_name_player"
                    placeholder="first name"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="last_name_player">Last Name</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="last_name"
                    id="last_name_player"
                    placeholder="last name"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="birthdayPlayer">Birthday</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    name="birthday"
                    id="birthdayPlayer"
                    placeholder="birthday"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="emailPlayer">Email </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="email"
                    id="emailPlayer"
                    placeholder="Email"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="t_shirt_numbe_player">T shirt numbe</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="numero_tenue"
                    id="t_shirt_numbe_player"
                    placeholder="num_tune"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6" sm="12">
                <Label for="hauteur"> Taille</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="hauteur"
                    id="hauteur"
                    placeholder="Size"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="weightMulti">Weight</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="poids"
                    id="weightMulti"
                    placeholder="weight"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6" sm="12">
                <Label for="health">health</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="etatdesante"
                    id="health"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Segment className="col-12 bg-primary">
                <center>
                  {" "}
                  <h2>Funding</h2>
                </center>
              </Segment>
              <Col md="6" sm="12">
                <Label for="salaire">Salary</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="salaire"
                    id="salaire"
                    placeholder="Salary"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="prime">Premium </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="prime"
                    id="prime"
                    placeholder="Premium"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              {" "}
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
    );
  }
};

const mapStateToProps = (state) => {
  return {
    values: state.joueur,
  };
};
export default connect(mapStateToProps, { addPlayer })(FormPlayer);
