import { createUserApi } from "../../services/userAuthService";
import SignUpForm from "./forms/SignUpForm";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  const createUser = async (data) => {
    await createUserApi({
      ...data,
      type: "ADMIN",
    });

    history.push("/admin/sign-in");
  };
  return <SignUpForm onSubmit={createUser} />;
};

export default SignUp;
