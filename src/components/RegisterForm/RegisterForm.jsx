import { React, useRef } from "react";
import { Link } from "react-router-dom";
import "./RegisterForm.css";

export const RegisterForm = () => {

  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const rePasswordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredRePassword = rePasswordInputRef.current.value;

    const userData = {
      name: enteredName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword
    }

    if (enteredPassword === enteredRePassword) {
      console.log(userData);
    }else {
      window.alert("Las contraseñas no coinciden")
    }
  }

  return (
    <section className="register">
      <h1>Crear Cuenta</h1>
      <form className="register-form" onSubmit={submitHandler}>
        <div className="name-lastname">
          <div>
            <label className="register-name-label" htmlFor="register-name">Nombre</label>
            <input className="register-name" id="register-name" type="text" required ref={nameInputRef}/>
          </div>
          <div>
            <label className="register-lastname-label" htmlFor="register-lastname">Apellido</label>
            <input className="register-lastname" id="register-lastname" type="text" required ref={lastNameInputRef}/>
          </div>
        </div>
        <label className="register-email-label" htmlFor="register-email">Correo electrónico</label>
        <input id="register-email" type="email" required ref={emailInputRef}/>
        <label className="register-password-label" htmlFor="register-password">Contraseña</label>
        <input id="register-password" type="password" required ref={passwordInputRef}/>
        <label className="register-repassword-label" htmlFor="register-repassword">Confirmar contraseña</label>
        <input id="register-repassword" type="password" required ref={rePasswordInputRef}/>
        <button className="register-button" type="submit">Crear cuenta</button>
      </form>
      <p className="login-anchor">¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
    </section>
  )
}