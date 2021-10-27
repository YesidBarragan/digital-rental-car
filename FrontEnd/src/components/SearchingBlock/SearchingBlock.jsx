import React from "react";
/* import { Link } from "react-router-dom"; */
import "./SearchingBlock.css";

class SearchingBlock extends React.Component {

    render(){

        return(

            <div className="main-box">
                <h1>Busca ofertas en todo tipo de carros</h1>
                <form>
                    <input className="form-input__map" type="text" placeholder="¿A dónde vamos?"/>
                    <input className="form-input__check" type="text" placeholder="Check in - Check out"/>
                    <button>Buscar</button>
                </form>
            </div>

        )

    }

}

export default SearchingBlock;