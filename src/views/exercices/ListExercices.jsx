import React, { Component } from "react";
import axios from "axios";
import { history } from "../../history";

import { Button, Card, Accordion, Icon, Label, Table } from "semantic-ui-react";
import { Row, Col } from "reactstrap";
class ListExercices extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind();
    this.state = {
      activeIndex: 0,
      exercices: [],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/exercices").then((res) => {
      const exercices = res.data;
      this.setState({ exercices });
    });
  }

  handleRemove = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/exercice/` + id).then((res) => {
      console.log(res.data);
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
    history.push("/exercices/FormExercices");
  };

  renderExercice() {
    const { activeIndex } = this.state;
    return this.state.exercices.map((exercice) => {
      return (
        <div>
          <Col key={exercice.id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {exercice.ExName} {"   "}
                </Card.Header>
                <Card.Meta> {exercice.difficulte}</Card.Meta>
                <Card.Description>
                  <Accordion fluid styled>
                    <Accordion.Title
                      active={activeIndex === 0}
                      index={0}
                      onClick={this.handleClick}
                    >
                      <Icon name="dropdown" />
                      feature
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>temps</Label>
                            </Table.Cell>
                            <Table.Cell>{exercice.temps}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>series number</Label>
                            </Table.Cell>
                            <Table.Cell>{exercice.nb_series}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>phase_jeu</Label>
                            </Table.Cell>
                            <Table.Cell>{exercice.phase_jeu}</Table.Cell>
                          </Table.Row>{" "}
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>repos_series</Label>
                            </Table.Cell>
                            <Table.Cell>{exercice.repos_series}</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>

                    <Accordion.Title
                      active={activeIndex === 1}
                      index={1}
                      onClick={this.handleClick}
                    >
                      <Icon name="dropdown" />
                      detail
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>objectif</Label>
                            </Table.Cell>
                            <Table.Cell>{exercice.objectif}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>consignes</Label>
                            </Table.Cell>
                            <Table.Cell>{exercice.consignes}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>realisation</Label>
                            </Table.Cell>
                            <Table.Cell>{exercice.realisation}</Table.Cell>
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
                    onClick={(e) => this.handleRemove(exercice.id, e)}
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
          <Button onClick={this.handleButton}>Creacte new Exercice</Button>
        </Row>
        <Row>{this.renderExercice()}</Row>
      </div>
    );
  }
}
export default ListExercices;
