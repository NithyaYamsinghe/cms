import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "../../common/FormElements";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

const SignInForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { success, setSuccess } = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form onSubmit={handleSubmit}>
            {success && <Alert variant="success">Logged In Successfully</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <FormH1>Sign In</FormH1>
            <FormLabel htmlFor="for">Username</FormLabel>
            <FormInput
              htmlFor="username"
              required
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput
              htmlFor="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton type="submit" disabled={loading}>
              Sign In
            </FormButton>
            <Text>
              <Link
                to="/resetPassword"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Forgot Password?
              </Link>
            </Text>
            <Text>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Create an Account
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default SignInForm;
