import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { addMatch } from "../../redux/actions/match/matchform";
import { connect } from "react-redux";


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

const competition = [
  { value: "Championnat d'espagne", text: "Championnat d'espagne" },
  { value: "Amical Ligue 1", text: "Amical Ligue 1" },
  { value: "Super Coupe super", text: "Super Coupe super" },
];
const journe = [
  { value: "1ère j", text: "1ère j" },
  { value: "2ème j", text: "2ème j" },
  { value: "3ème j", text: "3ème j" },
  { value: "4ème j", text: "4ème j" },
  { value: "6ème j", text: "6ème j" },
  { value: "7ème j", text: "8ème j" },
  { value: "9ème j", text: "9ème j" },
  { value: "10ème j", text: "10ème j" },
  { value: "11ème j", text: "11ème j" },
  { value: "12ème j", text: "12ème j" },
  { value: "13ème j", text: "13ème j" },
  { value: "14ème j", text: "14ème j" },
  { value: "15ème j", text: "15ème j" },
  { value: "16ème j", text: "16ème j" },
  { value: "17ème j", text: "17ème j" },
  { value: "18ème j", text: "18ème j" },
  { value: "19ème j", text: "19ème j" },
  { value: "20ème j", text: "20ème j" },
  { value: "21ème j", text: "21ème j" },
];
const equipe = [{ value: "Mon equipe", text: "Mon equipe" }];
const joueA = [
  { value: "à Domicil", text: "à Domicil" },
  { value: "Exterieur", text: "Exterieur" },
];

class FormMatch extends Component {
  
  state = {
    id: null,
    competitionId: "",
    journee: "",
    equipe_id: "",
    adversaire: "",
    joue_a: "",
    extra_time: "",
    terrain: "",
    arbitre: "",
    published: false,
    submitted: false,
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
    this.setState({
      competitionId: "",
      journee: "",
      equipe_id: "",
      adversaire: "",
      joue_a: "",
      extra_time: "",
      terrain: "",
      arbitre: "",
    
    });
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Multiple Column</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="mt-2" onSubmit={this.handleOnSubmit}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Compétition</h5>
                    <Dropdown
                      placeholder="Choisir compétition"
                      fluid
                      search
                      className="React"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      name="competitionID"
                      options={competition}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">journe</h5>{" "}
                    <Dropdown
                      placeholder="Choisir Journée"
                      fluid
                      search
                      className="React"
                      name="journee"
                      options={journe}
                      value={this.state.name}
                      onChange={this.handleTextChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">equipe</h5>{" "}
                    <Dropdown
                      placeholder="equipe"
                      fluid
                      search
                      className="React"
                      name="equipe"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      options={equipe}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Adversaire</h5>{" "}
                    <Input
                      type="text"
                      name="Adversaire"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      placeholder=" "
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">jouè à</h5>{" "}
                    <Dropdown
                      placeholder="jouè a"
                      fluid
                      search
                      className="React"
                      name="joueA"
                      value={this.state.name}
                      onChange={this.handleTextChange}
                      options={joueA}
                    />
                  </FormGroup>
                </Col>
                {/*   <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Match</h5>{" "}
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="basicRadio"
                          defaultChecked
                          bsSize="lg"
                          name=""
                          
                          
                        />
                        Retour
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="basicRadio"
                        
                          bsSize="lg"
                        />{" "}
                        Aller
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col> */}

                <Col sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Temps Total (min)</h5>{" "}
                    {/*  <NumericInput
                      mobile
                      autoComplete="on"
                      autoCorrect="on"
                      autoFocus={true}
                      value={10}
                      style={mobileStyle}
                      name="extra_time"
                      onChange={this.handleTextChange}
                    /> */}
                    <input
                      sm="12"
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
export default connect(null, { addMatch })(FormMatch);
