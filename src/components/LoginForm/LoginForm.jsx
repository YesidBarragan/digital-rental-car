import { React, useRef, useState } from "react";
import "./LoginForm.css"
import { Link, useHistory } from "react-router-dom";

export const LoginForm = () => {

  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const loginEmailInputRef = useRef();
  const loginPasswordInputRef = useRef();

  const userLoginData = {
    userEmail: "grupo1@dh.com",
    userPassword: "grupo1elmejor"
  }
  
  function submitHandler(event) {
    event.preventDefault();

    const enteredLoginEmail = loginEmailInputRef.current.value;
    const enteredLoginPassword = loginPasswordInputRef.current.value;

    if (enteredLoginEmail === userLoginData.userEmail && enteredLoginPassword === userLoginData.userPassword) {
      history.push("/");
    }else {
      setErrorMessage("Por favor, vuelva a intentarlo sus credenciales son inválidas");
    }
  }

  return (
    <section className="login">
      <h1>Iniciar Sesión</h1>
      <form className="login-form" onSubmit={submitHandler}>
        <label className="login-email-label" htmlFor="login-email">Correo electrónico</label>
        <input id="login-email" type="email" required ref={loginEmailInputRef}/>
        <label className="login-password-label" htmlFor="login-password">Contraseña</label>
        <input id="login-password" type="password" required minLength="6" ref={loginPasswordInputRef}/>
        {errorMessage && (<small className="error-login"> {errorMessage} </small>)}
        <button className="login-button" type="submit">Ingresar</button>
      </form>
      <p className="register-anchor">¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link></p>
    </section>
  )
}