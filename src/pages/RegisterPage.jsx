import React from "react";
import Header from "../components/Header/Header";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import Footer from "../components/Footer/Footer";

export const RegisterPage = () => {
  return (
    <>
      <Header/>
      <main>
        <RegisterForm/>
      </main>
      <Footer/>
    </>
  )
}