import React from "react"
import { Container, Row, Col} from "react-bootstrap"
import Box from "../components/box"
import Footer from "../components/footer"
import CustomNavbar from "../components/navBar"
import BoxBottom from "../components/boxBottom"
import FormBottom from "../components/formBottom"
const IndexPage = () => (
  <>
    <CustomNavbar />
    <Container>
      <Box />
      <Box reverse />
      <Box />
      <Box reverse />
      <Row className="my-5">
        <Col md={12} >
        <h3 class="text-center">Explore our services</h3>
        </Col>
        <BoxBottom/>
        <BoxBottom/>
        <BoxBottom/>
        <BoxBottom/>
        <BoxBottom/>
        <BoxBottom/>
      </Row>
      <FormBottom />
    </Container>
    <Footer />
  </>
)
export default IndexPage
