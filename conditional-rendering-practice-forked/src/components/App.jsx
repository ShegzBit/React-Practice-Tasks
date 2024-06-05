import React from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}

export default App;
