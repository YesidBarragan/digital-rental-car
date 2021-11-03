import { React } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";

export const ProductPage = () => {
    return (
      <>
        <Header/>
          <main>
            < ProductDetails />
          </main>
        <Footer/>
      </>
    )
  }