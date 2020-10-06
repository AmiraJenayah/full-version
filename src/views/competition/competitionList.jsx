import React, { Component } from "react";
import axios from "axios";
import { history } from "../../history";

import { Button, Card, Accordion, Icon, Label, Table } from "semantic-ui-react";
import { Row, Col } from "reactstrap";
class CompetitionList extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind();
    this.state = {
      activeIndex: 0,
      competition: [],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/comp").then((res) => {
      const competition = res.data;
      this.setState({ competition });
    });
  }

  handleRemove = (id ) => {
    axios.delete(`http://127.0.0.1:8000/api/comp/` + id).then((res) => {
      console.log(res.data);
        history.push("/competition/competitionList");
       
    })
  
  };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handleButton = (e) => {
    e.preventDefault();
    history.push("/competition/competition");
  };

  rendercompetition() {
    const { activeIndex } = this.state;
    return this.state.competition.map((competition) => {
      return (
        <div>
          <Col key={competition.id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {competition.Compname} {"   "}
                </Card.Header>
                <Card.Description>
                  <Accordion fluid styled>
                    <Accordion.Title
                      active={activeIndex === 0}
                      index={0}
                      onClick={this.handleClick}
                    >
                      <Icon name="dropdown" />
                      Competition Detail{" "}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <Table celled>
                        <Table.Body>
                          <Table.Row>
                            
                            <Table.Cell>
                              <Label ribbon>Saison </Label>
                            </Table.Cell>
                            <Table.Cell>{competition.Saison}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Number_equipe</Label>
                            </Table.Cell>
                            <Table.Cell>{competition.Number_equipe}</Table.Cell>
                          </Table.Row>

                          <Table.Row>
                            <Table.Cell>
                              <Label ribbon>Prix</Label>
                            </Table.Cell>
                            <Table.Cell>{competition.Prix}</Table.Cell>
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
                    onClick={(e) => this.handleRemove(competition.id, e)}
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
          <Button onClick={this.handleButton}>
            Creacte new Competition
          </Button>
        </Row>
        <Row>{this.rendercompetition()}</Row>
      </div>
    );
  }
}
export default CompetitionList;
