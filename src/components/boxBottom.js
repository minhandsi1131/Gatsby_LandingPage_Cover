import React, { Component } from 'react'
import hinh1 from '../assets/img/hinh1.png'
import { Col } from 'react-bootstrap'
export default class boxBottom extends Component {
    render() {
        return (
            <Col md={4} className="d-flex align-items-center flex-column">
            <img src={hinh1} class="img-fluid" alt="" />
            <h3>Excersice</h3>
            <p>Short description about the product</p>
          </Col>
        )
    }
}
