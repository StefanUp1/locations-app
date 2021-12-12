import React, { useMemo } from "react";
import classNames from 'classnames';
import Users from "assets/images/Users.svg";
import Timezone from "assets/images/Timezone.svg";
import Views from "assets/images/Views.svg";

import "./location-content.scss";

interface LocationContentItemType {
  id: string;
  value: string | number;
  valueSuffix?: string;
  icon: string;
  imageAlt: string;
}

export interface LocationContentProps {
  userCount: number;
  createdAt: string;
  viewCount: number;
  className?: string;
}

const LocationContent = ({
  userCount,
  createdAt,
  viewCount,
  className,
}: LocationContentProps): JSX.Element => {
  const locationContentItems: LocationContentItemType[] = useMemo(
    () => [
      {
        id: "userCount",
        value: userCount,
        valueSuffix: "Users",
        icon: Users,
        imageAlt: "Users",
      },
      {
        id: "createdAt",
        value: createdAt,
        icon: Timezone,
        imageAlt: "Timezone",
      },
      {
        id: "viewCount",
        value: viewCount,
        valueSuffix: "Views",
        icon: Views,
        imageAlt: "Views",
      },
    ],
    [createdAt, userCount, viewCount]
  );

  return (
    <ul className={classNames('location-content__list', className)}>
      {locationContentItems.map((item) => (
        <li key={item.id} className="location-content__list-item">
          <img
            className="location-content__list-item-image"
            width="14"
            height="14"
            src={item.icon}
            alt={item.imageAlt}
          />
          <p className="location-content__list-item-text">
            {item.value} {item.valueSuffix}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LocationContent;
