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
} from "./../../common/FormElements/FormElements";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form onSubmit={handleSubmit}>
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
            <FormButton type="submit">Sign In</FormButton>
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
                to="/sign-up"
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
