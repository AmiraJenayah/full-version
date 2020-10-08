import React, { Component } from "react";
import axios from "axios";
import { history } from "../../history";

import {
  Button,
  Card,
  Accordion,
  Icon,
  Label,
  Table,
} from "semantic-ui-react";
import { Row, Col } from "reactstrap";
class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind();
    this.state = {
      activeIndex: 0,
      joueurs: [],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/joueurs").then((res) => {
      const joueurs = res.data;
      this.setState({ joueurs });
    });
  }

  handleRemove = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/joueur/` + id).then((res) => {
      console.log(res.data);
    })
  };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handleButton = (e) =>  { e.preventDefault();
      history.push("/players/Createplayer");
  }

  renderJoueurs() {
    const { activeIndex } = this.state;
    return this.state.joueurs.map((joueur) => {
      return (
        <div>
          <Col key={joueur.id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {joueur.first_name} {"   "}
                  {joueur.last_name}
                </Card.Header>
                <Card.Meta> {joueur.email}</Card.Meta>
                <Card.Description>
                  <Accordion fluid styled>
                    <Accordion.Title
                      active={activeIndex === 0}
                      index={0}
                      onClick={this.handleClick}
                    >
                      <Icon name="dropdown" />
                      Profil{" "}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>birthday</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.birthday}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>num_tenue</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.numero_tenue}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>hauteur</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.hauteur}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>poids</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.poids}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Health</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.etatdeSante}</Table.Cell>
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
                      Funding
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Salary</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.salaire}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Premium</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.primes}</Table.Cell>
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
                    onClick={(e) => this.handleRemove(joueur.id, e)}
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
          <Button onClick={this.handleButton}>Creacte new player</Button>
        </Row>
        <Row>{this.renderJoueurs()}</Row>
      </div>
    );
  }
}
export default PlayerList;
