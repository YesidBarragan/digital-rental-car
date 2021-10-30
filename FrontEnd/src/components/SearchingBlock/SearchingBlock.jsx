import React, { useState, useRef } from "react";
/* import { Link } from "react-router-dom"; */
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import "./SearchingBlock.css";
import carsData from "../../assets/data/cars.json"
setDefaultLocale('es');
registerLocale('es', es)

export const SearchingBlock = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [searchCityOpen, setSearchCityOpen] = useState(false);
    let cityInputRef = useRef();
    let cityOptionRef = useRef();

    const handleToggle = () => {
        setSearchCityOpen(!searchCityOpen);
    }

    const handleSelect = () => {
        setSearchCityOpen(!searchCityOpen);
        cityInputRef.current.value = cityOptionRef.current.value;
    }

    return (

        <div className="main-box">
            <h1>Busca ofertas en todo tipo de carros</h1>
            <form>
                <input className="form-input__map" type="text" placeholder="¿A dónde vamos?" onClick={handleToggle} ref={cityInputRef}/>
                { searchCityOpen && (<div className="search-city">
                    { carsData.map(carData => (
                        // <div key={carData.id} className="card-car">
                            <option key={carData.id} onClick={handleSelect} ref={cityOptionRef}>{carData.location}</option>
                        // </div>
                        )) }
                </div>) }
                {/* <input className="form-input__check" type="text" placeholder="Check in - Check out"/> */}
                <DatePicker 
                    className="form-input__check date-picker"
                    placeholderText="Check in - Check out"
                    dateFormat="dd/MM/yyyy"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                />
                <button className="search-button">Buscar</button>
            </form>
        </div>
    )
}