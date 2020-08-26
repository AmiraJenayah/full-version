import React from "react"
import FamillePmayer from './FamillePlayer';
import Performance from './Performance';
import Wizard from "../../components/@vuexy/wizard/WizardComponent"
import {
  // Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,

  // Button
} from "reactstrap";
import { Segment } from 'semantic-ui-react';


class FormPlayer extends React.Component {


  handleChange = (e) => this.setState({ rating: e.target.value })

  state = {
    rating: 0 ,
    steps: [
      {
        title:1,
        content: <Row>
          <Segment className="col-12 bg-primary"><center><h2>Profil</h2></center></Segment>
          <Col md="6" sm="12">
          <Label for="first_name_player">First Name</Label>
            <FormGroup className="form-label-group">

              <Input type="text"
              name="first name"
              id="first_name_player"
              placeholder="first name"/>

            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="last_name_player">Last Name</Label>
            <FormGroup className="form-label-group">

              <Input type="text"
              name="last name"
              id="last_name_player"
              placeholder="last name" />

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
                  />

                </FormGroup>
              </Col>
          <Col md="6" sm="12">
          <Label for="emailPlayer">Email </Label>
            <FormGroup className="form-label-group">

              <Input type="email"
               name="email"
               id="emailPlayer"
               placeholder="Email" />

            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="t_shirt_numbe_player">T shirt numbe</Label>
                <FormGroup className="form-label-group">

                  <Input
                    type="number"
                    name="t_shirt_number"
                    id="t_shirt_numbe_player"
                    placeholder="t shirt numbe"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="birthplace_city_player">Birthplace city</Label>
                <FormGroup className="form-label-group">

                  <Input
                    type="text"
                    name="birthplace_city"
                    id="birthplace_city_player"
                    placeholder="birthplace city"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="size_player"> Size</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="size"
                    id="size_player"
                    placeholder="Size"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="weightMulti">Weight</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="weight"
                    id="weightMulti"
                    placeholder="weight"
                  />

                </FormGroup>
              </Col>
          <Col md="6" sm="12">
          <Label> Better foot </Label>
            <FormGroup className="form-label-group">

              <CustomInput type="select" name="select" id="Better_foot">
                <option>right</option>
                <option>left</option>
                <option>both  </option>

              </CustomInput>
            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="date_arriv_player">date d'arr</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    name=" date-arriv"
                    id="date_arriv_player"
                    placeholder="date arrivé"
                  />
                </FormGroup>
              </Col>
          <Col md="6" sm="12">
          <Label for="mutation_player">mutation</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name=" mutation"
                    id="mutation_player"
                    placeholder="mutation"
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
          <Label> Post </Label>
            <FormGroup className="form-label-group">

              <CustomInput type="select" name="select" id="post_player">
                <option>right</option>
                <option>left</option>
                <option>both  </option>

              </CustomInput>
            </FormGroup>
          </Col>

        </Row>
      }, {
        title: 2,
        content: <Row>
          <Segment className="col-12 bg-primary" ><center> <h2>Address / Contact </h2></center></Segment>
          <Col md="6" sm="12">
          <Label for="adress_player">Adress</Label>
            <FormGroup className="form-label-group">
              <Input type="textArea"
              name="adress"
              id="adress_player"
              placeholder="adress" />

            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="zip_code_player">Zip code</Label>
            <FormGroup className="form-label-group">
              <Input type="number"
              name="zip_code"
              id="zip_code_player"
              placeholder="zip code" />

            </FormGroup>
          </Col>

          <Col md="6" sm="12">
          <Label for="city_player">City</Label>
            <FormGroup className="form-label-group">
              <Input type="text"
              name="city"
              id="city_player"
              placeholder="city" />

            </FormGroup>
          </Col>
          <Col md="6" sm="12">
          <Label for="Country_player">Country</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="country"
                    id="Country_player"
                    placeholder="Country"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="phone_number_player">Phone number</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="phone_number"
                    id="phone_number_player"
                    placeholder="phone number"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="fixphone_number_player"> Telephone</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="fix_phone_number"
                    id="fix_phone_number_player"
                    placeholder="fixphone number"
                  />

                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Label for="fixphone_number_player"> Fax</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="fax"
                    id="fax_player"
                    placeholder="fax number"
                  />

                </FormGroup>
              </Col>


        </Row>
      },
      {
        title: 3,
        content:

          <FamillePmayer/>

          },
          {
        title: 4,
        content:

           <Performance/>

          }
        ]
      };

      render() {
        const { steps , } = this.state

        return (
          <Card>
            <CardHeader>
              <CardTitle>create player</CardTitle>
            </CardHeader>
            <CardBody>
              <Wizard
                enableAllSteps
                onFinish={() => alert("submitted")}
                steps={steps}
              />
            </CardBody>
          </Card>
    )
  }
}

export default FormPlayer;
