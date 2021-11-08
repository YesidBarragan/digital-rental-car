import { React } from "react";
import "./RentCategories.css";

function RentCategories(props) {
    return (
      <div className="rentCategories"> 
        <h2 className="main-heading_rentCategories">BUSCAR POR TIPO DE ALQUILER </h2>
        <div className="main-container_rentCategories">
          {props.typesOfRent.map((typeOfRent) => (
            <div key={typeOfRent.id} className="card">
                <img  src={typeOfRent.imgUrl}  alt={typeOfRent.descripcion} className="card-img__categories"/>
                <div className="text-container">
                  <h3 className="category-name">{typeOfRent.descripcion}</h3>
                  <p className="category-text">{typeOfRent.cantidad}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

    );
  }
  
  export default RentCategories;