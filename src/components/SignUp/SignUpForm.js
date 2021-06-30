import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormWrap,
  FormContent,
  Form2,
  FormH1,
  FormButton2,
  Text,
  FormInput2,
  FormLabel2,
  FormSelect2,
} from "./../../common/FormElements/FormElements";
import { useAuth } from "./../../context/AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: userName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      contactNo: phone,
      type: userType,
      password: password,
    };
    signUp(data);
    window.location = "/sign-in";
  };

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form2 onSubmit={handleSubmit}>
            <FormH1>Sign Up</FormH1>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    First Name
                  </span>
                  <FormInput2
                    htmlFor="first name"
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Last Name
                  </span>
                  <FormInput2
                    htmlFor="last name"
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    User Name
                  </span>
                  <FormInput2
                    htmlFor="user name"
                    required
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Phone{" "}
                  </span>
                  <FormInput2
                    htmlFor="phone"
                    required
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Email
                  </span>
                  <FormInput2
                    htmlFor="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">User Type</FormLabel2>
                <FormSelect2
                  name="User Type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value=""></option>
                  <option value="ATTENDEE">Attendee</option>
                  <option value="RESEARCHER">Researcher</option>
                  <option value="WORKSHOPCONDUCTOR">Workshop Conductor</option>
                </FormSelect2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Password
                  </span>
                  <FormInput2
                    htmlFor="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Confirm Password
                  </span>
                  <FormInput2
                    htmlFor="confirm password"
                    required
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <FormButton2 type="submit">Sign Up</FormButton2>
            <Text>
              <Link
                to="/sign-in"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Already Have an Account? Sign In
              </Link>
            </Text>
          </Form2>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default SignUpForm;
