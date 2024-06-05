import React from "react";
import Input from "./Input";

export default function SignInForm() {
  return (
    <div>
      <form className="form">
        <Input details="text__Username" />
        <Input details="password__Password" />
        <button type="submit">Log In </button>
      </form>
    </div>
  );
}
