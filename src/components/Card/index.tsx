import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../dtos/card/cardsDTO";

import "./styles.css";

const Card = ({ title, info, image, link }: CardProps) => {
  return (
    <div className="display-image">
      <div className="card-info">
        <h3>{title}</h3>
        <p>{info}</p>
        <Link to={link}>
          <button className="button-outline">See them</button>
        </Link>
      </div>
      <div className="content-image">
        <img src={image} alt="Podium celebration" />
      </div>
    </div>
  );
};

export default Card;
