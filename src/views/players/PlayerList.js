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
                <Card.Meta> {joueur.num_mobile}</Card.Meta>
                <Card.Meta> {joueur.email}</Card.Meta>

                <Card.Description>
                  <Accordion fluid styled>
                    <Accordion.Title
                      active={activeIndex === 0}
                      index={0}
                      onClick={this.handleClick}
                    >
                      <Icon name="dropdown" />
                      player performance
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>speed</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.speed}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>endurance</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.endurance}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>tactical</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.tactical}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>technical</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.technical}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>attack</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.attack}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>defense</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.defense}</Table.Cell>
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
                              <Label ribbon>birthday</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.birthday}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>birthplace</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.birthplace}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>num_tenue</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.num_tenue}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>taille</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.taille}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>poids</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.poids}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>date_arrive</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.date_arrive}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>mutation</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.mutation}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>last_equipe</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.last_equipe}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>meilleur_pied</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.meilleur_pied}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>post_player</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.post_player}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>num_license</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.num_license}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>number_anneJoue</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.number_anneJoue}</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>

                    <Accordion.Title
                      active={activeIndex === 2}
                      index={2}
                      onClick={this.handleClick}
                    >
                      <Icon name="dropdown" />
                      Adress/contact
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>num_fixe</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.num_fixe}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>adresse</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.adresse}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>code_postal</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.code_postal}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>ville</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.ville}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>pays</Label>
                            </Table.Cell>
                            <Table.Cell>{joueur.pays}</Table.Cell>
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
