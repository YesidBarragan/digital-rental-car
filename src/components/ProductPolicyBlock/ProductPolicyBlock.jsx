import React from "react";
import "./ProductPolicyBlock.css";

export const ProductPolicyBlock = () => {

    return (
        <section className="policy-container">
            <h2>¿Qué tienes que saber?</h2>
            <div className="rules-container">
                <h3>Normas Generales</h3>
                <p>Debes recibir el vehículo en la fecha, hora y lugar indicado. Se puede esperar máximo 15 minutos.</p>
                <p>Debes dejar el depósito acordado previamente.</p>
                <p>Debes enseñar la documentación requerida previamente de manera física o electrónica/digital</p>
                <p>Cuando estés conduciendo debes tener la documentación indicada a la mano. Alguna autoridad puede solicitártela.</p>
                <p>Debes entregar el vehículo en la fecha, hora y lugar indicado. Se puede esperar máximo 15 minutos. El vehículo debe estar con mínimo un cuarto del tanque cargado con el combustible indicado. EL vehículo debe estar en el mismo estado físico con el que se te haya entregado. De lo contrario, se te pueden generar costos adicionales.</p>
            </div>
            <div className="security-container">
                <h3>Seguridad</h3>
                <p>Tú y tus acompañantes deben usar siempre el cinturón de seguridad</p>
                <p>No debes conducir el vehículo si has consumido alcohol. En caso de requerirlo puedes solicitarnos servicio de conductor elegido. Pueden aplicar costos adicionales.</p>
                <p>Cuando estés tanqueando el vehículo con combustible debes tener el vehículo apagado.</p>
            </div>
            <div className="cancellation-container">
                <h3>Política de Cancelación</h3>
                <p>En caso de que así lo decidas, por tardar debes realizar la cancelación del servicio 48 horas antes de la fecha y hora indicada.</p>
            </div>
        </section>
    )
}