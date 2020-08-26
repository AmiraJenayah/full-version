import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import { mobileStyle } from "../forms/form-elements/number-input/InputStyles";
import DataServices from "d:/react/full-version/src/services/services";
import { Dropdown } from 'semantic-ui-react';

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
  Label,
} from "reactstrap";
import Select from "react-select";

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
  constructor(props) {
    super(props);
    this.onChangeCompetitionId = this.onChangeCompetitionId.bind(this);
    this.onChangeJournee = this.onChangeJournee.bind(this);
    this.onChangeEquipeId = this.onChangeEquipeId.bind(this);
    this.onChangeAdversaire = this.onChangeAdversaire.bind(this);
    this.onChangeJoueA = this.onChangeJoueA.bind(this);
    this.onChangeExtraTime = this.onChangeExtraTime.bind(this);
    this.onChangeTerrain = this.onChangeTerrain.bind(this);
    this.onChangeArbitre = this.onChangeArbitre.bind(this);
    this.saveMatch = this.saveMatch.bind(this);
    this.newMatch = this.newMatch.bind(this);
    this.state = {
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
  }

  onChangeCompetitionId(e) {
    this.setState({
      competitionId: e.target.value,
    });
  }
  onChangeJournee(e) {
    this.setState({
      journee: e.target.value,
    });
  }
  onChangeEquipeId(e) {
    this.setState({
      equipe_id: e.target.value,
    });
  }
  onChangeAdversaire(e) {
    this.setState({
      adversaire: e.target.value,
    });
  }
  onChangeJoueA(e) {
    this.setState({
      joue_a: e.target.value,
    });
  }
  onChangeExtraTime(e) {
    this.setState({
      extra_time: e.target.value,
    });
  }
  onChangeTerrain(e) {
    this.setState({
      terrain: e.target.value,
    });
  }
  onChangeArbitre(e) {
    this.setState({
      arbitre: e.target.value,
    });
  }
  saveMatch() {
    var data = {
      competitionId: this.state.competitionId,
      journee: this.state.journee,
      equipe_id: this.state.equipe_id,
      adversaire: this.state.adversaire,
      joue_a: this.state.joue_a,
      extra_time: this.state.extra_time,
      terrain: this.state.terrain,
      arbitre: this.state.arbitre,
    };
    DataServices.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          competitionId: response.data.competitionId,
          journee: response.data.journee,
          equipe_id: response.data.equipe_id,
          adversaire: response.data.adversaire,
          joue_a: response.data.joue_a,
          extra_time: response.data.extra_time,
          terrain: response.data.terrain,
          arbitre: response.data.arbitre,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newMatch() {
    this.setState({
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
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Multiple Column</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="mt-2">
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Compétition</h5>
                    <Dropdown
                     placeholder='Choisir compétition'
                     fluid
                     search
                     className="React"
                     classNamePrefix="select"
                      value={this.state.competitionId}
                      onChange={this.onChangeCompetitionId}
                      name="competitionID"
                      options={competition}
                   / >
                    
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
                      classNamePrefix="select"
                      name="journee"
                      options={journe}
                      value={this.state.journee}
                      onChange={this.onChangeJournee}
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
                      classNamePrefix="select"
                      defaultValue={equipe[0]}
                      name="equipe"
                      options={equipe}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Adversaire</h5>{" "}
                    <Input type="text" name="Adversaire" placeholder=" " />
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
                      classNamePrefix="select"
                      defaultValue={joueA[0]}
                      name="joueA"
                      options={joueA}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Match</h5>{" "}
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="basicRadio"
                          defaultChecked
                          size="lg"
                        />
                        Retour
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="radio" name="basicRadio" size="lg" /> Aller
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Temps Total (min)</h5>{" "}
                    <NumericInput
                      mobile
                      autoComplete="on"
                      autoCorrect="on"
                      autoFocus={true}
                      value={80}
                      style={mobileStyle}
                    />
                  </FormGroup>
                </Col>

                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Stade</h5>{" "}
                    <Input type="text" name="Stade" placeholder=" " />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group">
                    <h5 className="my-1 text-bold-600">Arbitre</h5>{" "}
                    <Input type="text" name="Arbitre" placeholder=" " />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <FormGroup className="form-label-group">
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mr-1 mb-1"
                      onClick={this.saveMatch}
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
export default FormMatch;
