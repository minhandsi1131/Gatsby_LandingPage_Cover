import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class Box extends Component {
    render() {
            const {reverse}= this.props;
        return (
            <Row className={`${reverse && "d-flex flex-row-reverse"} my-5`}>
            <Col md={6} className="my-2 d-flex align-items-center">
              <div>
                <p className="mb-2 textSub">All-in-one solution</p>
                <h3 className="mb-5">One solution to solve all your business needs</h3>
                <button
                  type="button"
                  name="btn_signUp"
                  id="btn_signUp"
                  className="btn btn-primary btn_signUp"
                >
                  Sign up now
                </button>
              </div>
            </Col>
            <Col md={6} className="my-2">
              <iframe
              title="success"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ntHG5LCGaxE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        )
    }
}
