import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from "lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
  Button,
  Form,
  Input,
  Alert,
  Row,
  Col,
  FormGroup,
  Label,
} from "reactstrap";

function Login() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    term: "",
  });

  const [user, loading, error] = useAuthState(auth);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [formerrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false); // checkbox state

  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);

  //this method handles the each form field changing and updates the relevant
  //state value for that input
  const handleChange = (event) => {
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    );

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));

    if (event.target.name == "term") {
      setIsChecked(event.target.checked); // update checkbox state when it changes
    }
  };

  //the rules for each field
  const validate = () => {
    let errors = {};

    //email field
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    //password field
    if (!values.password) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      setErrorMessage("sucess");
    } catch (err) {
      const errorMessage = err.message.split(": ")[1].trim();
      setVariant("danger");
      if (errorMessage == "Error (auth/wrong-password).") {
        setErrorMessage(
          "Your username and password does not match, please try again."
        );
      } else {
        setErrorMessage(errorMessage);
      }
    }
  };

  const hideAlert = (event) => {
    setShowMessage(false);
    setErrorMessage("");
  };

  const backgroundColor = "#e14eca"; // replace with your desired color

  const alertStyle = {
    background: backgroundColor,
    color: "#fff", // set font color for better contrast
  };

  return (
    <div className="login">
      <Row>
        <Col>
          <p></p>
          {errorMessage && (
            <Alert
              key={variant}
              style={alertStyle}
              variant="alert-danger"
              className="alert-danger"
            >
              {errorMessage && <p className="">{errorMessage}</p>}
              <div className="d-flex justify-content-end">
                <Button onClick={hideAlert}>Close this alert</Button>
              </div>
            </Alert>
          )}
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formGridName">
          <Label>Email</Label>
          <Input
            placeholder="Email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {formerrors.email && (
            <p className="text-warning">{formerrors.email}</p>
          )}
        </FormGroup>
        <FormGroup controlId="formGridName">
          <Label>Password</Label>
          <Input
            placeholder="Password"
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {formerrors.password && (
            <p className="text-warning">{formerrors.password}</p>
          )}
        </FormGroup>
        <Button
          className="btn-round"
          color="primary"
          size="lg"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </Form>
    </div>
  );
}

export default Login;
