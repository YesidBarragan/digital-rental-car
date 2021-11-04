import { React } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { ReservationBlock } from "../components/ReservationBlock/ReservationBlock";
import { ProductPolicyBlock } from "../components/ProductPolicyBlock/ProductPolicyBlock";

export const ProductPage = () => {
    return (
      <>
        <Header/>
          <main>
            < ProductDetails />
            < ReservationBlock />

            < ProductPolicyBlock />  {/* ESTE ES EL PLOQUE CON INFORMACION DEBAJO DEL MAPA DE GOOGLE MAPS */}

          </main>
        <Footer/>
      </>
    )
  }