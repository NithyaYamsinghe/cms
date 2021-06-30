import React, { useState, useEffect } from "react";
import {
  FormWrap,
  FormContent,
  Form3,
  FormButton,
  FormInput3,
  FormLabel,
  FormSelect3,
} from "./../../common/FormElements/FormElements";
import { useAuth } from "./../../context/authContext";

const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { getUserProfile, updateUser, deleteUser, currentUserID } = useAuth();

  useEffect(async () => {
    const data = await getUserProfile(currentUserID);
    console.log(data.data[0].type);
    if (data != null) {
      setEmail(data.data[0].email);
      setUserType(data.data[0].type);
      setFirstName(data.data[0].firstName);
      setLastName(data.data[0].lastName);
      setPhone(data.data[0].contactNo);
      setUserName(data.data[0].username);
      setPassword(".........");
      setConfirmPassword("..........");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = currentUserID;
    if (password !== confirmPassword) {
      const data = {
        username: userName,
        email: email,
        firstName: firstName,
        lastName: lastName,
        contactNo: phone,
        type: userType,
        password: password,
        id: id,
      };
      updateUser(data);
    }
  };

  const handleDeleteUser = (e) => {
    deleteUser(currentUserID);
  };

  return (
    <>
      <FormWrap style={{ marginLeft: "200px" }}>
        <FormContent className="mt-3">
          <Form3 onSubmit={handleSubmit}>
            <div class="two-col">
              <div class="col1">
                <FormLabel htmlFor="for">First Name</FormLabel>
                <FormInput3
                  htmlFor="first name"
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="col1">
                <FormLabel htmlFor="for">Last Name</FormLabel>
                <FormInput3
                  htmlFor="last name"
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel htmlFor="for">User Name</FormLabel>
                <FormInput3
                  htmlFor="user name"
                  required
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="col1">
                <FormLabel htmlFor="for">Phone</FormLabel>
                <FormInput3
                  htmlFor="phone"
                  required
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div class="two-col">
              <div class="col1">
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput3
                  htmlFor="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="col1">
                <FormLabel htmlFor="for">User Type</FormLabel>
                <FormSelect3
                  name="User Type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value=""></option>
                  <option value="ATTENDEE">Attendee</option>
                  <option value="RESEARCHER">Researcher</option>
                  <option value="WORKSHOPCONDUCTOR">Workshop Conductor</option>
                </FormSelect3>
              </div>
            </div>
            {/* <div class="two-col">
              <div class="col1">
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput3
                  htmlFor="password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="col1">
                <FormLabel htmlFor="for">Confirm Password</FormLabel>
                <FormInput3
                  htmlFor="confirm password"
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div> */}
            <FormButton type="submit">Update Profile</FormButton>
          </Form3>
          <br />
          <button
            type="button"
            class="btn btn-danger"
            style={{ width: "200px", marginLeft: "60px" }}
            onClick={(e) => handleDeleteUser(e)}
          >
            Delete Account
          </button>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default UserProfile;
