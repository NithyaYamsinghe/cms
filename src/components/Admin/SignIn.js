import SignInForm from "./forms/SignInForm";
import { userSignInApi } from "../../services/userAuthService";

const SignIn = () => {
  const userSignIn = async (data) => {
    const response = await userSignInApi(data);
    //TODO: Save the user
  };

  return <SignInForm onSubmit={userSignIn} />;
};

export default SignIn;
