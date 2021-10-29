import React from "react";
import carsData from "../../assets/data/cars.json"
import "./ListBlock.css"

export const ListBlock = () => {
  return (
    <section className="card-car-container">
      <h2>Recomendaciones</h2>
      <div className="card-car-list">
        { carsData.map(carData => (
        <div className="card-car">
          <div className="card-image-container">
            <img className="image-list" src={carData.img} alt={carData.description} />
          </div>
          <div className="info-container">
            <p>{carData.category}</p>
            <h4>{carData.title}</h4>
            <p>{carData.location}</p>
            <p>{carData.description}</p>
          </div>
        </div>
        )) }
      </div>
    </section>
  )
}