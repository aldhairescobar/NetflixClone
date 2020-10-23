import React, { useState } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";

export default function Signin() {
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  function handleSignin(event) {
    event.preventDefault();
    // call in here to firebase to authenticate the user
    // if there's an error, populate the error state
  }

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin}>
          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Base>

        <Form.Submit disabled={false} type="submit">
          Sign In
        </Form.Submit>

        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA.
        </Form.TextSmall>
      </Form>
    </HeaderContainer>
  );
}
