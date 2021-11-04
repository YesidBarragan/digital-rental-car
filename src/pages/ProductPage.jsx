import { React } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { ReservationBlock } from "../components/ReservationBlock/ReservationBlock" 

export const ProductPage = () => {
    return (
      <>
        <Header/>
          <main>
            < ProductDetails />
            < ReservationBlock />
          </main>
        <Footer/>
      </>
    )
  }