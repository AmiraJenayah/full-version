import React, { Component } from "react";
import axios from "axios";
import { history } from "../../history";

import { Button, Card, Accordion, Icon, Label, Table } from "semantic-ui-react";
import { Row, Col } from "reactstrap";
class entrainementList extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind();
    this.state = {
      activeIndex: 0,
      entrainement: [],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/entrainements").then((res) => {
      const entrainement = res.data;
      this.setState({ entrainement });
    });
  }

  handleRemove = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/entrainement/` + id).then((res) => {
      console.log(res.data);
      history.push("/entrainement/entrainementList");
    });
  };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handleButton = (e) => {
    e.preventDefault();
    history.push("/entrainement/entrainement");
  };

  renderentrainement() {
    const { activeIndex } = this.state;
    return this.state.entrainement.map((entrainement) => {
      return (
        <div>
          <Col key={entrainement.id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {entrainement.EntName} {"   "}
                </Card.Header>
                <Card.Description>
                  <Accordion fluid styled>
                    <Accordion.Title
                      active={activeIndex === 0}
                      index={0}
                      onClick={this.handleClick}
                    >
                      <Icon name="dropdown" />
                      entrainement Detail{" "}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon> Dureation</Label>
                             
                            </Table.Cell>
                            <Table.Cell>{entrainement.Period}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Location </Label>
                            </Table.Cell>
                            <Table.Cell>{entrainement.Lieu}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Schedule</Label>
                            </Table.Cell>
                            <Table.Cell>{entrainement.Horaire}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Nb_exercise</Label>
                            </Table.Cell>
                            <Table.Cell>{entrainement.Nb_exercice}</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Accordion>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Update
                  </Button>
                  <Button
                    basic
                    color="red"
                    onClick={(e) => this.handleRemove(entrainement.id, e)}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Col>

          <br />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Button onClick={this.handleButton}>Creacte new entrainement</Button>
        </Row>
        <Row>{this.renderentrainement()}</Row>
      </div>
    );
  }
}
export default entrainementList;
