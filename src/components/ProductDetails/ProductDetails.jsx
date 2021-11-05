import { React, useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth/useWindowWidth";
import { Link } from "react-router-dom";
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
import sharePhoto from "../../assets/img/icon-sharing.svg";
import favorite from "../../assets/img/icon-favorite.svg";
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
		id: "uno",
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
		thumbnail: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
		id: "dos",
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
		thumbnail: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
		id: "tres",
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
		thumbnail: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
		id: "cuatro",
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
		thumbnail: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
		id: "cinco",
        original: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
		thumbnail: "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    }
]

export const ProductDetails = () => {

    const { width } = useWindowWidth();
	const [galleryOpen, setGalleryOpen] = useState(false);

	const handleToggle = () => {
		setGalleryOpen(!galleryOpen);
	}

    return (
        <section>
            <div className="heading-section">
                <div className="heading-section_texts">
                    <h3 className="heading-section_category">Categoría</h3>
                    <h2 className="heading-section_title">Título del producto</h2> 
                </div>
                <Link to="/"><img className="heading-section__icon" src={iconHomePath} alt="Regresar al Home"/></Link>
            </div>
            <div className="location-section">
                <div className="location-section__left">
                    <img className="location-section__left-icon" src={iconLocation} alt="Ícono de localización del producto"/>
                    <p className="location-section__left-text">Lorem ipsum, dolor sitamet conse.</p>  
                </div>
                <small className="location-section__right">8</small> 
            </div>
            <div className="gallery-block">
                { (width < 1199) && (<img className="icons-photo-gallery gallery-icon1" src={sharePhoto} alt="Compartir foto"/>) }
                { (width < 1199) && (<img className="icons-photo-gallery gallery-icon2" src={favorite} alt="Agregar foto a favoritos"/>) }
				{ (width > 1199) && 
				(<div className="icons-photo-gallery-desktop">
					<img className="gallery-icon1-desktop" src={sharePhoto} alt="Compartir foto"/>
					<img className="gallery-icon2-desktop" src={favorite} alt="Agregar foto a favoritos"/>
					{ (galleryOpen) && (
							<ImageGallery 
								items={images} 
								showIndex={true}
								showNav={true}
								showFullscreenButton={true}
								showPlayButton={false}
								autoPlay={true}
								additionalClass={"gallery-desktop"}
						/>
						)}
				</div>)}
                {(width < 1199) && (                    
                    <ImageGallery 
                        items={images} 
                        showIndex={true}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        autoPlay={true}
						showThumbnails={false}
                    />
                )}
                { (width > 1199) && (
                    <div className="gallery-block-desktop">
                        {images.map((image) => (
							<img src={image.original}  alt="images" className={`card-img ${image.id}`}/>
						))}
						<small onClick={handleToggle}>Ver más</small>
                    </div>
                )}
            </div>
            <div className="description-product">
                <h2 className="description-product__title">Título descripción</h2>
                <p className="description-product__details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores blanditiis, nobis mollitia, dolor quae pariatur sapiente est ullam accusantium nostrum porro, libero voluptatum debitis harum voluptatibus cupiditate cumque ipsum!</p>
            </div>
            <div className="product-services__block">
                <h2 className="product-services__title">¿Qué ofrece?</h2>
                <div className="product-services__container">
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