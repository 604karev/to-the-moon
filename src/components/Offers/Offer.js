import React from "react";
import "./Offer.scss";

const Offer = ({ title, description, imageUrl, link, id }) => {
  return (
    <div className={`offer offer-${id}`}>
      <div className="offer__content">
        <h2 className={`offer__title offer__title-${id}`}>{title}</h2>
        <p className="offer__description">{description}</p>
        <a href={link} className="offer__cta">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Offer;
