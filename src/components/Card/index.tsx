import React from "react";
import { CardProps } from "../../dtos/card/cardsDTO";

import "./styles.css";

const Card = ({title, info, image}: CardProps) => {
  return (
    <div className="display-image">
      <div className="card-info">
        <h3>{title}</h3>
        <p>{info}</p>
        <button className="button-outline">See them</button>
      </div>
      <div className="content-image">
        <img src={image} alt="Podium celebration" />
      </div>
    </div>
  );
};

export default Card;
