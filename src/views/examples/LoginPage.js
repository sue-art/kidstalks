import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";

import Login from "../../components/Form/LoginForm";
import Logout from "../../components/Form/LogoutForm";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "lib/firebase";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer.js";

export default function LoginPage() {
  //const user = useSelector(selectUser);

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);

  return (
    <>
      <IndexNavbar />
      <div className="section top100">
        <Container>
          <Row>
            <Col className="offset-lg-3 offset-md-3" lg="5" md="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">Log in</CardTitle>
                </CardHeader>
                <CardBody>{user ? <Logout /> : <Login />}</CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
