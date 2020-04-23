import React, { Component } from 'react'
import { Row, Col, Container } from "react-bootstrap"
import logo from '../assets/img/logo.png'
export default class Footer extends Component {
    render() {
        return (
            <footer>
            <Container>
              <Row className="my-2">
                <Col md={3}>
                  <div className="img-logo">
                    <img src={logo} className="img-fluid" alt="" />
                  </div>
                </Col>
                <Col md={9} className="col-12 col-md-9 d-flex justify-content-end">
                    <a className="mx-2" href="http://www.google.com">Privacy Policy</a>
                    <a className="mx-2" href="http://www.google.com">Terms & Condititions</a>
                </Col>
              </Row>
            </Container>
          </footer>
        )
    }
}
