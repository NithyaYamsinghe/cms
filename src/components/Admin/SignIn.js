import { useAuth } from "../../context/authContext";
import SignInForm from "./forms/SignInForm";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const userSignIn = async (data) => {
    await signIn(data, "admin");
    history.push("/admin");
  };

  return <SignInForm onSubmit={userSignIn} />;
};

export default SignIn;
