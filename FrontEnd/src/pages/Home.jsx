import { React } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import SearchingBlock from "../components/SearchingBlock/SearchingBlock";
import RentCategories from "../components/RentCategories/RentCategories";
import { ListBlock } from "../components/ListBlock/ListBlock";

let autoRentType = [
  {
    descripcion: "Autos De Lujo",
    imgUrl:
      "https://i1.wp.com/thehappening.com/wp-content/uploads/2020/02/bmw-i8.jpg?fit=1480%2C901&ssl=1",
    cantidad: "2500 autos"
  },

  {
    descripcion: "Autos Deportivos",
    imgUrl:
      "https://static.iris.net.co/soho/upload/images/2017/5/10/48000_1.jpg",
    cantidad: "4700 autos"
  },

  {
    descripcion: "Autos Económicos",
    imgUrl:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2019/04/20190430-LOS-CARROS-NUEVOS-MAS-BARATOS-DE-COLOMBIA-EN-2019-04.jpg",
    cantidad: "8100 autos"
  }
];

export const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <SearchingBlock/>
        <RentCategories typesOfRent={autoRentType}/>
        <ListBlock/>
      </main>
      <Footer/>
    </>
  )
}