import { React } from "react";
import { ImageGallery } from 'react-image-gallery';
import numberPassenger from "../../assets/img/icon-number-passenger.svg";
import numberBags from "../../assets/img/icon-number-bags.svg";
import numberDoors from "../../assets/img/icon-number-doors.svg";
import electricCar from "../../assets/img/icon-electric-car.svg";
import fuelCar from "../../assets/img/icon-fuel-car.svg";
import manualCar from "../../assets/img/icon-manual-transmission.svg";
import automaticCar from "../../assets/img/icon-gearbox.svg";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetails.css";

const carServices = [
    {
        id: 1,
        imageUrl: numberPassenger,
        description: "Número de pasajeros"
    },
    {
        id: 2,
        imageUrl: numberBags,
        description: "Número de maletas"
    },
    {
        id: 3,
        imageUrl: numberDoors,
        description: "Número de puertas"
    },
    {
        id: 4,
        imageUrl: electricCar,
        description: "Carro eléctrico"
    },
    {
        id: 5,
        imageUrl: fuelCar,
        description: "Carro de gasolina"
    },
    {
        id: 6,
        imageUrl: manualCar,
        description: "Carro mecánico"
    },
    {
        id: 7,
        imageUrl: automaticCar,
        description: "Carro automático"
    }
]

const images = [
    {
        id: 1,
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 2,
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 3,
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 4,
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    }
]

export const ProductDetails = () => {
    return (
        <section>
            <div>
                <div>
                    <h3>Categoría</h3>
                    <h2>Título del producto</h2> 
                </div>
                <img />
            </div>
            <div>
               <p>Localización</p> 
               <small>Calificación</small> 
            </div>
            <div>
                <ImageGallery items={images} />;
            </div>
            <div>
                <h2>Título descripción</h2>
                <p>Descripción producto</p>
            </div>
            <div>
                <h2>¿Qué ofrece?</h2>
                <div>
                    {carServices.map((carServices) => (
                        <div key={carServices.id}>
                            <img src={carServices.imageUrl} alt={carServices.description}/>
                            <p>{carServices.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}