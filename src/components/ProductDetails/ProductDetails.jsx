import { React } from "react";
import ImageGallery from 'react-image-gallery';
import iconHomePath from "../../assets/img/icon-arrowHomePath.svg";
import iconLocation from "../../assets/img/icon-location.svg";
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
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    }
]

export const ProductDetails = () => {
    return (
        <section>
            <div className="heading-section">
                <div className="heading-section_texts">
                    <h3 className="heading-section_category">Categoría</h3>
                    <h2 className="heading-section_title">Título del producto</h2> 
                </div>
                <img className="heading-section__icon" src={iconHomePath} alt="Regresar al Home"/>
            </div>
            <div className="location-section">
                <div className="location-section__left">
                    <img className="location-section__left-icon" src={iconLocation} alt="Ícono de localización del producto"/>
                    <p className="location-section__left-text">Lorem ipsum, dolor sitamet conse.</p>  
                </div>
                <small className="location-section__right">8</small> 
            </div>
            <div>
                <ImageGallery items={images} />
            </div>
            <div>
                <h2 className="description-product__title">Título descripción</h2>
                <p className="description-product__details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores blanditiis, nobis mollitia, dolor quae pariatur sapiente est ullam accusantium nostrum porro, libero voluptatum debitis harum voluptatibus cupiditate cumque ipsum!</p>
            </div>
            <div className="product-services__block">
                <h2 className="product-services__title">¿Qué ofrece?</h2>
                <div>
                    {carServices.map((carServices) => (
                        <div key={carServices.id} className="product-services__section">
                            <img className="product-services__icon" src={carServices.imageUrl} alt={carServices.description}/>
                            <p className="product-services__name">{carServices.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}