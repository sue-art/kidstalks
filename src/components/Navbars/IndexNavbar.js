import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { auth } from "lib/firebase";

// reactstrap components
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

//User with Redux
import Logout from "components/Form/LogoutForm";
import { useAuthState } from "react-firebase-hooks/auth";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [user] = useAuthState(auth);
  const [loading] = useAuthState(auth);

  React.useEffect(() => {
    if (loading) {
      return <div>Loading...</div>;
    }

    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Topic Talks </span>
            for kids
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Nav>
          {user ? (
            <NavItem>
              <p>Welcome {user.email}</p>
            </NavItem>
          ) : (
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                tag={Link}
                to="./signup-page"
              >
                <i className="tim-icons icon-spaceship" />
                Sign Up
              </Button>
            </NavItem>
          )}
          {user && (
            <NavItem>
              <NavLink tag={Link} to="./myaccount-page">
                My Account
              </NavLink>
            </NavItem>
          )}
          {user ? (
            <NavItem>
              <Logout />
            </NavItem>
          ) : (
            <NavItem>
              <NavLink tag={Link} to="./login-page">
                Log In
              </NavLink>
            </NavItem>
          )}

          <NavItem>
            <NavLink tag={Link} to="./contact-page">
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
