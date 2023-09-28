import React, { useState } from "react";
import { Button, Col } from "reactstrap";

//User wiht Redux
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  logOut,
} from "lib/firebase";

const Logout = () => {
  const [user, loading, error] = useAuthState(auth);

  const HandleLogout = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div>
      <Button
        className="nav-link d-none d-lg-block"
        onClick={(e) => HandleLogout(e)}
        color="primary"
        size="sm"
      >
        Log out
      </Button>
    </div>
  );
};

export default Logout;
