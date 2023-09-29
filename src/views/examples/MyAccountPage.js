import React from "react";

//import components
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer";

//import reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const MyAccountPage = () => {
  return (
    <>
      <IndexNavbar />
      <div className="section top100">
        <Container>
          <Row className="row-grid justify-content-between align-items-center"></Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default MyAccountPage;
