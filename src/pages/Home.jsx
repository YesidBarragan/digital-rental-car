import { React } from "react";
import { Header } from "../components/Header/Header";
import { SearchingBlock } from "../components/SearchingBlock/SearchingBlock";
import RentCategories from "../components/RentCategories/RentCategories";
import { ListBlock } from "../components/ListBlock/ListBlock";

let autoRentType = [
  {
    id: "1",
    descripcion: "Autos De Lujo",
    imgUrl: "https://files.insidercarnews.com/files/2017/08/New-Continental-GT-1.jpg",
    /* imgUrl:
      "https://i1.wp.com/thehappening.com/wp-content/uploads/2020/02/bmw-i8.jpg?fit=1480%2C901&ssl=1", */
    cantidad: "2500 autos"
  },

  {
    id: "2",
    descripcion: "Autos Deportivos",
    imgUrl: "https://i.pinimg.com/originals/9b/63/08/9b63081e9a6baa6fe37114000b2bce8e.png",
    /* imgUrl:
      "https://resizer.iproimg.com/unsafe/1200x/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg", */
    cantidad: "4700 autos"
  },

  {
    id: "3",
    descripcion: "Autos Económicos",
    imgUrl: "https://api.vehicleapprovalcentre.com/storage/app/uploads/public/5fa/95d/d49/5fa95dd49e835132644360.jpg",
    /* imgUrl:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2019/04/20190430-LOS-CARROS-NUEVOS-MAS-BARATOS-DE-COLOMBIA-EN-2019-04.jpg", */
    cantidad: "8100 autos"
  },

  {
    id: "4",
    descripcion: "Autos Familiares",
    imgUrl: "https://pictures.dealer.com/p/phillongmotorcityfordfd/0930/ab9138ab2e6faa0874ebb74b394b8260x.jpg",
   /*  imgUrl:
      "https://ilp.com.do/wp-content/uploads/2017/03/carro-familiar.jpg", */
    cantidad: "1500 autos"
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
    </>
  )
}