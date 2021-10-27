import { React } from "react";
import "./RentCategories.css";

function RentCategories(props) {
    return (
      <div className="rentCategories"> 
        <h2>BUSCAR POR TIPO DE ALQUILER </h2>
        <div className="line">
          {props.typesOfRent.map((typeOfRent) => (
            <div className="card-header">
              <img  src={typeOfRent.imgUrl}  alt={typeOfRent.descripcion} className="category-rent-img"/>
              <div className="textos">
                <h3 className="category-name">{typeOfRent.descripcion}</h3>
                <p>{typeOfRent.cantidad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
  }
  
  export default RentCategories;