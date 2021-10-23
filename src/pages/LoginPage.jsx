import React from "react";
import Header from "../components/Header/Header";
import { LoginForm } from "../components/LoginForm/LoginForm";
import Footer from "../components/Footer/Footer";

export const LoginPage = () => {
  return (
    <>
      <Header/>
      <main>
        <LoginForm/>
      </main>
      <Footer/>
    </>
  )
}