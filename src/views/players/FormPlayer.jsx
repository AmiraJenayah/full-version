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
    birthplace: "",
    email: "",
    num_tenue: "",
    taille: "",
    date_arrive: "",
    poids: "",
    mutation: "",
    last_equipe: "",
    meilleur_pied: "",
    post_player: "",
    num_license: "",
    number_anneJoue: "",
    num_mobile: "",
    num_fixe:"",
    adresse:"",
    code_postal: "",
    ville: "",
    pays: "",
    speed: "",
    endurance: "",
    tactical: "",
    technical: "",
    attack: "",
    defense: "",
    salaire : "",
    prime:"",
    contrat:"",
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
                    name="num_tenue"
                    id="t_shirt_numbe_player"
                    placeholder="num_tune"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="birthplace_city_player">Birthplace </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="birthplace"
                    id="birthplace_city_player"
                    placeholder="birthplace city"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="size_player"> Taille</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="taille"
                    id="size_player"
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
                <Label> Better foot </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="meilleur_pied"
                    id="meilleur_pied"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="date_arriv_player">date d'arrive</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    name="date_arrive"
                    placeholder="date arrivé"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="mutation_player">mutation</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="mutation"
                    id="mutation_player"
                    placeholder="mutation"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label> Post </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="post_player"
                    id="post_player"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label> last_equipe </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="last_equipe"
                    id="last_equipe"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label> num license </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="num_license"
                    id="num_license"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label> number anneJoue </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="number_anneJoue"
                    id="number_anneJoue"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Segment className="col-12 bg-primary">
                <center>
                  {" "}
                  <h2>Address / Contact </h2>
                </center>
              </Segment>
              <Col md="6" sm="12">
                <Label for="adress_player">Adresse</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="textArea"
                    name="adresse"
                    id="adress_player"
                    placeholder="adresse"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="zip_code_player">Zip code</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="code_postal"
                    id="zip_code_player"
                    placeholder="zip code"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6" sm="12">
                <Label for="city_player">City</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="ville"
                    id="city_player"
                    placeholder="city"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="Country_player">Country</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="pays"
                    id="Country_player"
                    placeholder="Country"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="phone_number_player">Phone number</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="num_mobile"
                    id="phone_number_player"
                    placeholder="phone number"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <Label for="fixphone_number_player"> fix</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="num_fixe"
                    id="fix_phone_number_player"
                    placeholder="fixphone number"
                    onChange={this.handleTextChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Segment className="col-12 bg-primary">
                <center>
                  {" "}
                  <h2>Performance </h2>
                </center>
              </Segment>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <div>Speed: </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={this.handleChangeSpeed}
                    name="speed"
                  />
                  <br />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <div>Endurance: </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={this.handleChangeEndurance}
                    name="endurance"
                  />
                  <br />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <div>Tactical: </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={this.handleChangeTactical}
                    name="tactical"
                  />
                  <br />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <div>Technical: </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={this.handleChangeTechnical}
                    name="technical"
                  />
                  <br />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <div>Attack: </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={this.handleChangeAttack}
                    name="attack"
                  />
                  <br />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <div>Defense: </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={this.handleChangeDefense}
                    name="defense"
                  />
                  <br />
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
              <Col md="6" sm="12">
                <Label for="contart">Contrat</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="contrat"
                    id="contart"
                    placeholder="Contrat"
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
