import React, { ReactNode } from "react";
import Edit from "assets/images/Edit.svg";
import onEnterPress from "helpers/onEnterPress";

import "./location-card.scss";
interface LocationCardProps {
  title: string;
  onClick: () => void;
  children: ReactNode;
}

const LocationCard = ({ title, onClick, children }: LocationCardProps) => {
  return (
    <article
      onClick={onClick}
      className="location-card"
      tabIndex={0}
      onKeyPress={(e) => onEnterPress(e, onClick)}
    >
      <h2 className="location-card__title">{title}</h2>
      <div className="location-card__edit-icon">
        <img src={Edit} width="16" height="16" alt="Edit" />
      </div>
      <div className="location-card__content">{children}</div>
    </article>
  );
};

export default LocationCard;
