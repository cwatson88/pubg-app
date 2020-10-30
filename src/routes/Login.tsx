import React from "react";
import { useAuth } from "reactfire";
import firebase from "firebase";

export default function Login() {
  const auth = useAuth();
  const logIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    auth.signInWithPopup(provider); // promise is not needed
  };

  return (
    <button
      onClick={logIn}
      className="google-sign-in__btn"
      aria-label="sign in button"
    >
      <span>
        <img
          className="firebaseui-idp-icon"
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          width="30px"
          height="21px"
          alt="Google Login"
        />
      </span>
      <span>Sign in with Google</span>
    </button>
  );
}
