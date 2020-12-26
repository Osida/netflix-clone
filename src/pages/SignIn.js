import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebase } from "../hooks";
import { Form } from "../components";
import { HeaderContainer, FooterContainer } from "../containers";
import * as ROUTES from "../constants/routes";
import { FaFacebookSquare } from "react-icons/fa";

export default function Signin() {
  const firebase = useFirebase();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // check form email input elements are valid

  const handleSignin = (event) => {
    event.preventDefault();

    // firebase work here
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // push to the Browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        console.log("firebase error = ", error);
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  const isInvalid = () => {
    if (password === "" || email === "") return true;
    else return false;
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email or phone number"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.SubmitButton disabled={isInvalid} type="submit">
              Sign In
            </Form.SubmitButton>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Form.BlueLink>Learn more.</Form.BlueLink>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
