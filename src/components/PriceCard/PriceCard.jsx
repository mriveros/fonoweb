import React from "react";
import Button from "../Button/Button";
import "./pricecard.css";

function PriceCard({ title, price, services, color }) {
  const formatNumber = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1.';
    return number.toString().replace(exp,rep);
  }

  return (
    <div className="price__card">
        <div className="price__card--header" style={{ backgroundColor: color }}></div>
        <div className="price__card--content">
            <h2>{title}</h2>
            <div className="price__card--price">
                <p>${formatNumber(price)}</p>
                <p>/mes</p>
            </div>
            <ul className="price__card--list">
                { services.map(service => <li key={service}><img src="item.png" alt="" />{service}</li>) }
            </ul>
            <Button text={"Más información"} />
        </div>
    </div>
  );
}

export default PriceCard;
