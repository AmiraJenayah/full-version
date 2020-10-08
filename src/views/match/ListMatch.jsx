import React, { Component } from "react";
import axios from "axios";
import { Button, Card } from "semantic-ui-react";
import { Row, Col } from "reactstrap";
import { history } from "../../history";




class ListMatch extends Component {
      constructor(props) {
        super(props);
    this.handleRemove = this.handleRemove.bind();

        this.state = {
          matches: [],
        };
      }

      componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/matches").then((res) => {
          const matches = res.data;
          this.setState({ matches });
        });
      }

   handleRemove = (id)=> {
          axios
            .delete(`http://127.0.0.1:8000/api/match/`+ id )
            .then((res) => {
              console.log(res.data);
            })
           } 
          handleButton = (e)=>{
           e.preventDefault();
    history.push("/match/CreateMatch");
          }
       

  renderMatches() {
    return this.state.matches.map((match) => {
      return (
        <div>
          <Col key={match.id}>
            <Card>
              <Card.Content>
                <Card.Header>match Name : {match.matchName}</Card.Header>

                <Card.Description>
                  <h4> adversaire : {match.adversaire}</h4>
                </Card.Description>
                <Card.Description>
                  <h4> date : {match.date}</h4>
                </Card.Description>
              
              
                <Card.Description>
                  <h4>arbitre : {match.arbitre}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>equipe : {match.equipe}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>tenue : {match.tenue}</h4>
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
                    onClick={(e) => this.handleRemove(match.id, e)}
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
        <Row><Button onClick={this.handleButton}>Create match</Button></Row>
        <Row>{this.renderMatches()}</Row>
      </div>
    );
  }
}
export default ListMatch;
