import React, { Component } from 'react';
import { Rating,Segment } from 'semantic-ui-react';

import {
  // Form,
  FormGroup,

  Row,
  Col,
  // Button
} from "reactstrap";



export default class Performance extends Component {
  state = { speed: 0,
            endurance:0,
            tactical:0,
            technical:0,
            attack:0,
            defense:0 }
  handleChangeSpeed = (e) => this.setState({ speed: e.target.value });
  handleChangeEndurance = (e) => this.setState({ endurance: e.target.value });
  handleChangeTactical = (e) => this.setState({ tactical: e.target.value });
  handleChangeTechnical = (e) => this.setState({ technical: e.target.value });
  handleChangeAttack = (e) => this.setState({ attack: e.target.value });
  handleChangeDefense= (e) => this.setState({ defense: e.target.value });
  render() {
    const { speed} = this.state;
    const {endurance} =this.state;
    const {tactical} = this.state;
    const {technical} = this.state;
    const {attack} = this.state;
    const{defense} = this.state;

    return (

      <Row>
         <Segment className="col-12 bg-primary" ><center> <h2>Performance </h2></center></Segment>
        <Col md="6" sm="12" >

          <FormGroup className="form-label-group">
            <div>Speed: {speed}</div>
            <input
              type='range'
              min={0}
              max={100}
              value={speed}
              onChange={this.handleChangeSpeed}
            />
            <br />
            <Rating rating={this.state.speed} maxRating={5} />
          </FormGroup>
        </Col>
        <Col md="6" sm="12" >

          <FormGroup className="form-label-group">
            <div>Endurance: {endurance}</div>
            <input
              type='range'
              min={0}
              max={100}
              value={endurance}
              onChange={this.handleChangeEndurance}
            />
            <br />
            <Rating rating={this.state.endurance} maxRating={5} />
          </FormGroup>
        </Col>
        <Col md="6" sm="12" >

        <FormGroup className="form-label-group">
          <div>Tactical: {tactical}</div>
          <input
            type='range'
            min={0}
            max={100}
            value={tactical}
            onChange={this.handleChangeTactical}
          />
          <br />
          <Rating rating={this.state.tactical} maxRating={5} />
        </FormGroup>
        </Col>
        <Col md="6" sm="12" >

        <FormGroup className="form-label-group">
          <div>Technical: {technical}</div>
          <input
            type='range'
            min={0}
            max={100}
            value={technical}
            onChange={this.handleChangeTechnical}
          />
          <br />
          <Rating rating={this.state.technical} maxRating={5} />
        </FormGroup>
        </Col>
        <Col md="6" sm="12" >

        <FormGroup className="form-label-group">
          <div>Attack: {attack}</div>
          <input
            type='range'
            min={0}
            max={100}
            value={attack}
            onChange={this.handleChangeAttack}
          />
          <br />
          <Rating rating={this.state.attack} maxRating={5} />
        </FormGroup>
        </Col>
        <Col md="6" sm="12" >

        <FormGroup className="form-label-group">
          <div>Defense: {defense}</div>
          <input
            type='range'
            min={0}
            max={100}
            value={defense}
            onChange={this.handleChangeDefense}
          />
          <br />
         
             <Rating rating={this.state.defense} maxRating={5} />
          

        </FormGroup>
        </Col>

      </Row>
    )
  }
}
