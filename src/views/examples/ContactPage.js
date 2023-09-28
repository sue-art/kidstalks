import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ContactForm from "components/Form/ContactForm";
import Footer from "components/Footer/Footer";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

const ContactPage = () => {
  return (
    <>
      <IndexNavbar />
      <div className="section top100">
        <Container>
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                <span className="text-white">Send us a message</span>
              </h3>
              <p className="text-white mb-3">
                We would be happy to answer your questions and please feel free
                to post your suggestion as your suggestion can help us to
                improve and serve you better.
              </p>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                  <ContactForm />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
