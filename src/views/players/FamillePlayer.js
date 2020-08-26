import React, { Component } from 'react';
import {
FormGroup,
Input,
Label,

Row,
Col,
Card,
CardBody,
CardTitle,
CardHeader,

// Button
} from "reactstrap";


import { Segment } from 'semantic-ui-react';

import Radio from "../../components/@vuexy/radio/RadioVuexy"


export default class FamillePlayer extends Component {
  render() {
    return (
      <div>

        <Segment className="col-12 bg-primary"><center><h2>Family information</h2></center></Segment>
       <Row>

              <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
            <CardHeader>
              <CardTitle>Parents' situation</CardTitle>
            </CardHeader>
            <CardBody>

              <div className="d-inline-block mr-1">
                <Radio label="married"
                 name="married" />
              </div>
              <div className="d-inline-block mr-1">
                <Radio
                  label="single"

                  name="single"
                />
              </div>
              <div className="d-inline-block mr-1">
                <Radio
                  label="divorced"

                  name="divorced"
                />
              </div>
              <div className="d-inline-block mr-1">
                <Radio
                  label="other"

                  name="other"
                />
              </div>


            </CardBody>
          </Card>
          </FormGroup>
       </Col>

     <Col md="6" sm="12">
          <Label for="father's_first_name">Father's first name</Label>
            <FormGroup className="form-label-group">

              <Input type="text"
              name="Father's first name"
              id="father's_first_name"
              placeholder="Father's first name"/>

            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="Mother's_first_name">Mother's first name</Label>
            <FormGroup className="form-label-group">

              <Input type="text"
              name="mother's first name"
              id="mother's_first_namer"
              placeholder="Mother's first name" />

            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="Fathers_profession">Fathers profession</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="Fathers profession"
                    id="Fathers_profession"
                    placeholder="Fathers profession"
                  />

                </FormGroup>
              </Col>
          <Col md="6" sm="12">
          <Label for="Mother's_profession">Mother's profession </Label>
            <FormGroup className="form-label-group">

              <Input type="text"
               name="Mother's profession"
               id="Mother's_profession"
               placeholder="Mother's_profession" />

            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="Father's_phone">Father's phone</Label>
                <FormGroup className="form-label-group">

                  <Input
                    type="number"
                    name="Father's_phone"
                    id="Father's_phone"
                    placeholder="Father's_phone"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="Mother's_phone">Mother's phone</Label>
                <FormGroup className="form-label-group">

                  <Input
                    type="number"
                    name="Mother's phone"
                    id="Mother's_phone"
                    placeholder="Mother's phone"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="Father's_cellphone"> Father's cellphone</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="Father's cellphone"
                    id="Father's_cellphone"
                    placeholder="Father's cellphone"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="Mather's_cellphone">Mather's cellphone</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="Mather's cellphone"
                    id="Mather's_cellphone"
                    placeholder="Mather's cellphone"
                  />

                </FormGroup>
              </Col>

          <Col md="6" sm="12">
          <Label for="Father's_email">Father's email</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name=" Father's email"
                    id="Father's_email"
                    placeholder="Father's email"
                  />
                </FormGroup>
              </Col>
          <Col md="6" sm="12">
          <Label for="Mather's_email">Mather's email</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="mather's_email"
                    id="Mather's_email"
                    placeholder="Mather's email"
                  />
                </FormGroup>
              </Col>
              <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
            <CardHeader>
              <CardTitle>Does the player have any known allergies or illnesses?</CardTitle>

              <div className="d-inline-block mr-1">
                <Radio label="Yes"
                 name="yes" />
              </div>
              <div className="d-inline-block mr-1">
                <Radio
                  label="No"

                  name="no"
                />
              </div>

              </CardHeader>


          </Card>
          </FormGroup>
       </Col>
       <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
              <CardHeader>
                <CardTitle>If yes,which ones?</CardTitle>
                <Col md="6" sm="12">

                  <FormGroup className="form-label-group">
                    <Input
                      type="textarea"
                      name="inlesses"
                      id="inlesses"

                    />
                  </FormGroup>
                </Col>
              </CardHeader>
           </Card>
          </FormGroup>
       </Col>
       <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
              <CardHeader>
                <CardTitle>What treatment should he follow??</CardTitle>
                <Col md="6" sm="12">

                  <FormGroup className="form-label-group">
                    <Input
                      type="textarea"
                      name="treatment"
                      id="treatment"

                    />
                  </FormGroup>
                </Col>
              </CardHeader>
           </Card>
          </FormGroup>
       </Col>

       <Segment className="col-12 bg-primary"><center><h2>Sport information</h2></center></Segment>

       <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
              <CardHeader>
                <CardTitle>Last club attended</CardTitle>
                <Col md="6" sm="12">

                  <FormGroup className="form-label-group">
                    <Input
                      type="text"
                      name="lastclub"
                      id="last_club"

                    />
                  </FormGroup>
                </Col>
              </CardHeader>
           </Card>
          </FormGroup>
       </Col>
       <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
              <CardHeader>
                <CardTitle>Pratical year's numbers</CardTitle>
                <Col md="6" sm="12">

                  <FormGroup className="form-label-group">
                    <Input
                      type="number"
                      name="number year"
                      id="number_year"

                    />
                  </FormGroup>
                </Col>
              </CardHeader>
           </Card>
          </FormGroup>
       </Col>
       <Segment className="col-12 bg-primary"><center><h2>School information</h2></center></Segment>
       <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
              <CardHeader>
                <CardTitle>Establishment frequented</CardTitle>
                <Col md="6" sm="12">

                  <FormGroup className="form-label-group">
                    <Input
                      type="text"
                      name="school"
                      id="school"

                    />
                  </FormGroup>
                </Col>
              </CardHeader>
           </Card>
          </FormGroup>
       </Col>
       <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
              <CardHeader>
                <CardTitle>Current class</CardTitle>
                <Col md="6" sm="12">

                  <FormGroup className="form-label-group">
                    <Input
                      type="text"
                      name="class"
                      id="class"

                    />
                  </FormGroup>
                </Col>
              </CardHeader>
           </Card>
          </FormGroup>
       </Col>
       <Col  md="12" sm="12">
              <FormGroup className="form-label-group">
            <Card>
              <CardHeader>
                <CardTitle>Name of head teacher or teacher</CardTitle>
                <Col md="6" sm="12">

                  <FormGroup className="form-label-group">
                    <Input
                      type="text"
                      name="name teacher"
                      id="name_teacher"

                    />
                  </FormGroup>
                </Col>
              </CardHeader>
           </Card>
          </FormGroup>
       </Col>

    </Row>
   </div>
    )
  }
}
