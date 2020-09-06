import React, { Component } from "react";
import axios from "axios";
import { Button, Card } from "semantic-ui-react";
import { Row, Col } from "reactstrap";



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

   handleRemove = (id, extra)=> {
          axios
            .delete(`http://127.0.0.1:8000/api/match/`+ id )
            .then((res) => {
              console.log(res.data);
            }); } 
          
       

  renderMatches() {
    return this.state.matches.map((match) => {
      return (
        <div>
          <Col key={match.id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  competition Name : {match.competitionName}
                </Card.Header>
                <Card.Meta>competitionId : {match.competitionId}</Card.Meta>
                <Card.Description>
                  <h4> adversaire : {match.adversaire}</h4>
                </Card.Description>
                <Card.Description>
                  <h4> joue_a : {match.joue_a}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>journee : {match.journee}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>terrain : {match.terrain}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>arbitre : {match.arbitre}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>equipe_id : {match.equipe_id}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>extra_time : {match.extra_time}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>score : {match.score}</h4>
                </Card.Description>{" "}
                <Card.Description>
                  <h4>user_id : {match.user_id}</h4>
                </Card.Description>
                <Card.Description>
                  <h4>owner_id : {match.owner_id}</h4>
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
        <Row>{this.renderMatches()}</Row>
      </div>
    );
  }
}
export default ListMatch;
