import { React } from "react";
import { Header } from "../components/Header/Header";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <Header
        login = {false}
        register = {true}
      />
      <main>
        <RegisterForm/>
      </main>
    </>
  )
}