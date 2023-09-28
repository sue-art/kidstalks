import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "lib/firebase";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Form,
  Input,
  Alert,
  Row,
  Col,
} from "reactstrap";

const RegisterForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [variant, setVariant] = useState("");

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    term: "",
  });

  const [formerrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false); // checkbox state

  //this method handles the each form field changing and updates the relevant
  //state value for that input
  const handleChange = (event) => {
    /*
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    );
    */
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));

    if (event.target.name == "term") {
      setIsChecked(event.target.checked); // update checkbox state when it changes
    }
  };

  //this method will check each field in your form. You define
  //the rules for each field
  const validate = () => {
    let errors = {};

    //name field
    if (!values.fullname) {
      errors.fullname = "Full name is required";
    }

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

    //terms and condition field
    if (!isChecked) {
      errors.term = " Please check this box to submit the form";
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

    if (validate(values)) {
      const registerser = await registerWithEmailAndPassword(
        values.fullname,
        values.email,
        values.password
      );
      if (registerser) {
        setShowMessage(true);
        const errorMessage = registerser.split(": ")[1].trim();
        setVariant("danger");
        if (
          errorMessage ==
          "Password should be at least 6 characters (auth/weak-password)."
        ) {
          setErrorMessage("Password should be at least 6 characters");
        } else if (errorMessage == "Error (auth/email-already-in-use).") {
          setErrorMessage("Email Already in Use ");
        } else {
          setErrorMessage(errorMessage);
        }
      }
    } else {
      setShowMessage(false);
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

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);

  return (
    <div>
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
          <Label>Name</Label>
          <Input
            placeholder="Full Name"
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {formerrors.fullname && (
            <p className="text-warning">{formerrors.fullname}</p>
          )}
        </FormGroup>
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
            placeholder="password"
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {formerrors.password && (
            <p className="text-warning">{formerrors.password}</p>
          )}
        </FormGroup>
        <FormGroup check className="text-left">
          <Label check>
            <Input
              type="checkbox"
              placeholder="term"
              name="term"
              checked={isChecked}
              onChange={handleChange}
            />
            <span className="form-check-sign" />I agree to the{" "}
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              terms and conditions
            </a>
            .
          </Label>
          {formerrors.term && <p className="text-warning">{formerrors.term}</p>}
        </FormGroup>
        <FormGroup check className="text-left">
          <Button className="btn-round" color="primary" size="lg" type="submit">
            Get Started
          </Button>
        </FormGroup>
      </Form>
      <FormGroup check className="text-left">
        <p>
          Already have an account? <Link to="/">Login</Link> now.
        </p>
      </FormGroup>
    </div>
  );
};

export default RegisterForm;
