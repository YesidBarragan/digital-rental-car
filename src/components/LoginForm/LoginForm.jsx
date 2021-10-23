import React from "react";
import "./LoginForm.css"
import { Link } from "react-router-dom";

export const LoginForm = () => {
  
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <section className="login">
      <h1>Iniciar Sesión</h1>
      <form className="login-form" onSubmit={submitHandler}>
        <label className="login-email-label" htmlFor="login-email">Correo electrónico</label>
        <input id="login-email" type="email" required />
        <label className="login-password-label" htmlFor="login-password">Contraseña</label>
        <input id="login-password" type="password" required />
        <button className="login-button" type="submit">Ingresar</button>
      </form>
      <p className="register-anchor">¿Aún no tenes cuenta? <Link to="/register">Registrate</Link></p>
    </section>
  )
}