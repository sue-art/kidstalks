import React, { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth, sendContactForm } from "lib/firebase";

// reactstrap components
import {
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Row,
  Col,
  Alert,
} from "reactstrap";

const ContactForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [changebackgroundColor, setChangeBackgroundColor] = useState(false);
  const [variant, setVariant] = useState("");
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [formerrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (validate(values)) {
      const sendMessage = sendContactForm(
        values.fullname,
        values.email,
        values.message
      );
      if (sendMessage) {
        setChangeBackgroundColor(true);
        setShowMessage(true);
        changeAlertColor("#ffffff");
        setErrorMessage(
          "Thank you for contacting us, we will get back to you as soon as possible."
        );
      } else {
        setShowMessage(true);
        setErrorMessage("ERROR");
        changeAlertColor("#ffffff");
      }
    }
  };

  //this method will check each field in your form.
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
    if (!values.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    //convert the `contactForm` object into an array
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const hideAlert = (event) => {
    setShowMessage(false);
    setErrorMessage("");
  };

  const alertStyle = {};

  const changeAlertColor = (newColor) => {
    const backgroundColor = newColor; // replace with your desired color
    const alertStyle = {
      background: backgroundColor,
      color: "#fff", // set font color for better contrast
    };
  };

  useEffect(() => {}, []);

  return (
    <div className="contact">
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
            placeholder="Name"
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
          <Label>Message</Label>
          <Input
            type="textarea"
            placeholder="Message"
            className="form-control"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows="10"
          />
          {formerrors.message && (
            <p className="text-warning">{formerrors.message}</p>
          )}
        </FormGroup>
        <Button
          className="btn-round"
          color="primary"
          size="lg"
          onClick={handleSubmit}
        >
          Send
        </Button>
        <p></p>
      </Form>
    </div>
  );
};

export default ContactForm;
