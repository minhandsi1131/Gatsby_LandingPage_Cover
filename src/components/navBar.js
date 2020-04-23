import React from "react"
import { Link } from "gatsby"

import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap"
import logo from "../assets/img/logo.png"
const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="light" bg="white" expand="lg" id="site-navbar">
        <Container>
          <Link to="/" className="link-no-style">
            <div class="img-logo">
              <img src={logo} class="img-fluid" alt="" />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Page 2
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Page 2
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Page 2
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Page 2
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Page 2
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
