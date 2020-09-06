import React, { Component } from 'react';
import { Row, Col} from "reactstrap";
import Swiper from '../../extensions/swiper/Swiper';
import CalendarHome from './CalendarHome';



export default class Home extends Component {
  render() {
    return (
      <React.Fragment>

        <Row>
          <Col className="col-12">
           <Swiper/>
          </Col>
          <Col className="col-8">
           <CalendarHome/>
          </Col>

        </Row>
      </React.Fragment>


    )
  }
}
