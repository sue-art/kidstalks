import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "lib/firebase";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer.js";
import RegisterForm from "components/Form/RegisterForm";

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

export default function Signup() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, [user, loading]);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  return (
    <>
      <IndexNavbar />
      <div className="section top100">
        <Container>
          <div
            className="square square-7"
            id="square7"
            style={{ transform: squares7and8 }}
          />
          <div
            className="square square-8"
            id="square8"
            style={{ transform: squares7and8 }}
          />
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                <span className="text-white">
                  Having a conversation with your children
                </span>
              </h3>
              <p className="text-white mb-3">
                Science has shown that the best way to help our kids become
                independent, confident, kind, empathetic, and happy is by
                talking with them.
              </p>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">Register</CardTitle>
                </CardHeader>
                <CardBody>
                  <RegisterForm />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div className="register-bg" />
          <div
            className="square square-1"
            id="square1"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-2"
            id="square2"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-3"
            id="square3"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-4"
            id="square4"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-5"
            id="square5"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-6"
            id="square6"
            style={{ transform: squares1to6 }}
          />
        </Container>
      </div>
      <Footer />
    </>
  );
}
