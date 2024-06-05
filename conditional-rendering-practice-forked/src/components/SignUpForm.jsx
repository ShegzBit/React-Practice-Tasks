import React from "react";
import Input from "./Input";

function SignUpForm() {
  return (
    <form className="form">
      <Input details="text__Username" />
      <Input details="password__Password" />
      <Input details="password__Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignUpForm;
