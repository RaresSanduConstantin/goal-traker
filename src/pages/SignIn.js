import React from "react";
import CustomButton from "../components/CustomButton";
import { signInWithGoogle } from "../firebase/firebase";

const SignIn = () => {
  return (
    <div>
      <CustomButton type="button" onClick={signInWithGoogle}></CustomButton>
    </div>
  );
};

export default SignIn;
