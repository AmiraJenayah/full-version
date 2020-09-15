import React, { Component } from "react";

import exerc1 from "../../assets/img/terain/exerc1.jpg";
import exerc2 from "../../assets/img/terain/exerc2.jpg";
import exerc3 from "../../assets/img/terain/exerc3.jpg";
import exerc4 from "../../assets/img/terain/exerc4.jpg";

//import { FormGroup, Row, Col, Input, Form } from "reactstrap";

import { Accordion, Icon, Table } from "semantic-ui-react";

class Entrenements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: "",
      activeInd: "",
  
     
    };
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handelCli = (e, titleProps) => {
    const { index } = titleProps;
    const { activeInd } = this.state;
    const newIndex = activeInd === index ? -1 : index;

    this.setState({ activeInd: newIndex });
  };



  render() {
    const { activeIndex } = this.state;
    const { activeInd } = this.state;
 
 
   

    return (
      <div>
        <Accordion fluid styled>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <h3>
                {" "}
                <Icon name="dropdown" />
                technique et concentration
              </h3>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Accordion fluid styled>
                        <Accordion.Title
                          active={activeInd === 0}
                          index={0}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            organisation :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 0}>
                          <h3>
                            {" "}
                            Groupes de 2 joueurs. <br /> 2 ballons par paire.
                            <br /> Travail par station.
                          </h3>
                        </Accordion.Content>

                        <Accordion.Title
                          active={activeInd === 1}
                          index={1}
                          onClick={this.handelCli}
                        >
                          {" "}
                          <h3>
                            <Icon name="dropdown" /> déroulement :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 1}>
                          <h4>
                            {" "}
                            2 joueurs face à face : passes à 2. <br />
                            Les ballons ne doivent pas se toucher : <br />• jeu
                            à terre
                            <br /> • un ballon à terre, un ballon en l’air{" "}
                            <br />• augmenter la distance
                            <br /> • avec ou sans contrôles
                            <br /> • déplacement latéral; etc.
                          </h4>
                        </Accordion.Content>
                        <Accordion.Title
                          active={activeInd === 2}
                          index={2}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            Variante :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 2}>
                          <h3>
                            {" "}
                            Le joueur B suit A en utilisant les mêmes surfaces
                            de contact. <br /> Limiter le temps à ne pas faire
                            de fautes techniques
                          </h3>
                        </Accordion.Content>
                      </Accordion>
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      <img src={exerc1} alt="" />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <h3>
                {" "}
                <Icon name="dropdown" />
                technique et concentration
              </h3>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Accordion fluid styled>
                        <Accordion.Title
                          active={activeInd === 0}
                          index={0}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            organisation :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 0}>
                          <h3>
                            {" "}
                            Groupes de 6 joueurs, disposés en colonnes. <br /> 1
                            ballon par groupe.
                          </h3>
                        </Accordion.Content>

                        <Accordion.Title
                          active={activeInd === 1}
                          index={1}
                          onClick={this.handelCli}
                        >
                          {" "}
                          <h3>
                            <Icon name="dropdown" /> déroulement :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 1}>
                          <h4>
                            {" "}
                            2 groupes de joueurs de même équipe face à face.{" "}
                            <br />
                            Passes avec la tête d’un groupe à l’autre. <br />{" "}
                            Après la passe, aller dans le groupe opposé
                          </h4>
                        </Accordion.Content>
                        <Accordion.Title
                          active={activeInd === 2}
                          index={2}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            Variante :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 2}>
                          <h3>
                            {" "}
                            La première équipe qui arrive à 60 passes. Réussir
                            le plus grand nombre de passes en 1’. <br /> Aussi
                            passes directes en volée ou à 2 touches.
                          </h3>
                        </Accordion.Content>
                      </Accordion>
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      <img src={exerc2} alt="" />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <h3>
                {" "}
                <Icon name="dropdown" />
                technique, concentration et prise de repères dans l’espace
              </h3>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Accordion fluid styled>
                        <Accordion.Title
                          active={activeInd === 0}
                          index={0}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            organisation :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 0}>
                          <h3>
                            {" "}
                            Groupes de 4 joueurs. <br />
                            Surface délimitée + cônes ou piquets. <br /> 1
                            ballon par groupe / travail par station.
                          </h3>
                        </Accordion.Content>

                        <Accordion.Title
                          active={activeInd === 1}
                          index={1}
                          onClick={this.handelCli}
                        >
                          {" "}
                          <h3>
                            <Icon name="dropdown" /> déroulement :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 1}>
                          <h4>
                            {" "}
                            <br /> Jouer le ballon à un co-équipier, et course à
                            un poste libre. <br /> variation de la vitesse{" "}
                            <br /> variation de l’espace <br /> jeu libre, puis
                            à 2 touches, à 1 touche
                          </h4>
                        </Accordion.Content>
                        <Accordion.Title
                          active={activeInd === 2}
                          index={2}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            Variante :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 2}>
                          <h3>
                            {" "}
                            Dans le même dispositif, conservation du ballon à 3
                            contre 1, 1 touche ou 2 touches obligatoires.
                          </h3>
                        </Accordion.Content>
                      </Accordion>
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      <img src={exerc3} alt="" />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion>{" "}
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <h3>
                {" "}
                <Icon name="dropdown" />
                technique pour maintenir la concentration
              </h3>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Accordion fluid styled>
                        <Accordion.Title
                          active={activeInd === 0}
                          index={0}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            organisation :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 0}>
                          <h3>
                            {" "}
                            Groupes de 5 joueurs; surface délimitée. <br />1
                            ballon par groupe; travail par station.
                          </h3>
                        </Accordion.Content>

                        <Accordion.Title
                          active={activeInd === 1}
                          index={1}
                          onClick={this.handelCli}
                        >
                          {" "}
                          <h3>
                            <Icon name="dropdown" /> déroulement :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 1}>
                          <h4>
                            {" "}
                            En carré, passe-et-suit avec une-deux. <br /> A
                            donne à B qui lui remet; A donne le ballon dans la
                            course de B. <br /> B donne à C qui lui remet; B
                            donne le ballon dans la course de C. Etc. <br />{" "}
                            Toujours garder le ballon au sol (1 et 2 touches).{" "}
                            <br /> Augmenter la vitesse des passes. <br />
                            Changer le sens des passes.
                          </h4>
                        </Accordion.Content>
                        <Accordion.Title
                          active={activeInd === 2}
                          index={2}
                          onClick={this.handelCli}
                        >
                          <h3>
                            <Icon name="dropdown" />
                            Variante :
                          </h3>
                        </Accordion.Title>

                        <Accordion.Content active={activeInd === 2}>
                          <h3>
                            {" "}
                            Travail chronométré sur 1’, en essayant de ne pas
                            faire de faute. <br /> Si un joueur commet une faute
                            technique, tout le groupe doit effectuer 2 tours de
                            la surface de jeu en course intense.
                          </h3>
                        </Accordion.Content>
                      </Accordion>
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      <img src={exerc1} alt="" />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion>
        </Accordion>
      </div>
    );
  }
}
export default Entrenements;
