import {
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
} from "./../../../common/FormElements/FormElements";
import { useForm } from "react-hook-form";

const SignInForm = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm();

  const onHandleSubmit = (data) => onSubmit(data);

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form onSubmit={handleSubmit(onHandleSubmit)}>
            <FormH1>Admin - Sign In</FormH1>
            <FormLabel htmlFor="for">Username</FormLabel>
            <FormInput
              {...register("username")}
              htmlFor="username"
              required
              type="text"
            />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput
              {...register("password")}
              htmlFor="password"
              required
              type="password"
            />
            <FormButton type="submit">Sign In</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default SignInForm;
