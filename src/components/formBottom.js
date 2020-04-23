import React, { Component } from 'react'
import { Row, Col, FormGroup,FormControl, Button, FormLabel } from 'react-bootstrap'

export default class formBottom extends Component {
    render() {
        return (
            <Row className="my-5">
            <Col md={6}>
              <Row className="my-2">
                <Col sm={12}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Suscipit eligendi numquam obcaecati iure ullam, enim repellendus
                    at sit, officiis earum sed distinctio adipisci tempore error
                    voluptate molestiae. Illum, facilis! Aliquid.
                  </p>
                </Col>
    
                <Col sm={6}>
                  <h3>ADDRESS</h3>
                  <p>Lorem, ipsum.</p>
                </Col>
                <Col sm={6}>
                  <h3>ADDRESS</h3>
                  <p>Lorem, ipsum.</p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row className="my-2">
                <Col sm={6}>
                  <FormGroup>
                    <FormLabel for="name">Name</FormLabel>
                    <FormControl
                      name="name"
                      id="name"
                      placeholder="Input your name"
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <FormLabel for="name">Name</FormLabel>
                    <FormControl
                      name="name"
                      id="name"
                      placeholder="Input your name"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <FormLabel for="messenger">Messenger</FormLabel>
                    <FormControl 
                    className="textarea"
                    as="textarea"
                      name="messenger"
                      id="messenger"
                      rows="3"
                    ></FormControl>
                  </FormGroup>
                  <Button
                    name="btn_signUp"
                    id="btn_signUp"
                    className="btn_signUp"
                  >
                    Sign up now
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )
    }
}
