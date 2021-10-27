import { React } from "react";
import "./RentCategories.css";

function RentCategories(props) {
    return (
      <div>
        <h1>BUSCAR POR TIPO DE ALQUILER </h1>
        <ul>
          {props.typesOfRent.map((typeOfRent) => (
            <li>
              <img src={typeOfRent.imgUrl} alt=""/>
              <h2>{typeOfRent.descripcion}</h2>
              <p>{typeOfRent.cantidad}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default RentCategories;