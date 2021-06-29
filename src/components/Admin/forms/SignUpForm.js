import {
  FormWrap,
  FormContent,
  Form2,
  FormH1,
  FormButton2,
  Text,
  FormInput2,
  FormLabel2,
} from "../../../common/FormElements/FormElements";

import { useForm } from "react-hook-form";

const SignUpForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => onSubmit(data);

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form2 onSubmit={handleSubmit(onSubmitHandler)}>
            <FormH1>Admin - Sign Up</FormH1>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    First Name
                  </span>
                  <FormInput2
                    {...register("firstName")}
                    htmlFor="first name"
                    required
                    type="text"
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Last Name
                  </span>
                  <FormInput2
                    {...register("lastName")}
                    htmlFor="last name"
                    required
                    type="text"
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
                    {...register("username")}
                    htmlFor="user name"
                    required
                    type="text"
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Phone
                  </span>
                  <FormInput2
                    {...register("contactNo")}
                    htmlFor="phone"
                    required
                    type="number"
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
                    {...register("email")}
                    htmlFor="email"
                    required
                    type="email"
                  />
                </FormLabel2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Password
                  </span>
                  <FormInput2 htmlFor="password" required type="password" />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Confirm Password
                  </span>
                  <FormInput2
                    {...register("password")}
                    htmlFor="confirm password"
                    required
                    type="password"
                  />
                </FormLabel2>
              </div>
            </div>
            <FormButton2 type="submit">Sign Up</FormButton2>
            <Text>
              {/* <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "#fff" }}
            >
            Already Have an Account? Sign In
            </Link> */}
            </Text>
          </Form2>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default SignUpForm;
