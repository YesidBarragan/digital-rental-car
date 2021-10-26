import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchingBlock from "../components/SearchingBlock/SearchingBlock";

export const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <SearchingBlock/>
      </main>
      <Footer/>
    </>
  )
}