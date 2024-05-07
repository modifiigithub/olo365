import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/authSlice";
import logo from "../assets/svg/Logo.svg";

// It's a good practice to separate the form into its own component if it gets too complex.
const LoginForm = ({ onSubmit, emailRef, passwordRef, isLoggedIn, errorMessage }) => (
  <>
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <h4>{isLoggedIn ? "Sign In" : "Create an Account"}</h4>
    <form onSubmit={onSubmit} className="form mt-3">
      {errorMessage && <p className="form_error">{errorMessage}</p>}
      <div className="form_control">
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          name="email" 
          required
          placeholder="Enter your E-mail here"
          ref={emailRef}
        />
      </div>
      <div className="form_control mt-3">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          minLength="6"
          required
          placeholder="Enter your Password here.."
          ref={passwordRef}
        />
      </div>
      <button className="btn" type="submit">
        {isLoggedIn ? "Sign In" : "Sign Up"}
      </button>
    </form>
  </>
);

const ToggleAuthMode = ({ isLoggedIn, onClick }) => (
  <div className="toggle_login">
    <p className="log_info">
      {isLoggedIn ? "Don't have an Account? Click here: " : "Already have an account? Please click: "}
    </p>
    <p type="button" className="toggle_link" onClick={onClick}>
      {isLoggedIn ? "Sign Up" : "Sign In"}
    </p>
  </div>
);

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { loading, error, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleLoginMode = () => setIsLoggedIn((prevState) => !prevState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        isLoggedIn,
      })
    );
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="logIn_form">
      <LoginForm
        onSubmit={handleSubmit}
        emailRef={emailRef}
        passwordRef={passwordRef}
        isLoggedIn={isLoggedIn}
        errorMessage={error}
      />
      <ToggleAuthMode isLoggedIn={isLoggedIn} onClick={toggleLoginMode} />
    </div>
  );
};

export default Auth;
