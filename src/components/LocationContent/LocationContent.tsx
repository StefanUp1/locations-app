import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
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
  const { t } = useTranslation();

  const locationContentItems: LocationContentItemType[] = useMemo(
    () => [
      {
        id: "userCount",
        value: userCount,
        valueSuffix: t("users"),
        icon: Users,
        imageAlt: t("users"),
      },
      {
        id: "createdAt",
        value: createdAt,
        icon: Timezone,
        imageAlt: t("timezone"),
      },
      {
        id: "viewCount",
        value: viewCount,
        valueSuffix: t("views"),
        icon: Views,
        imageAlt: t("views"),
      },
    ],
    [createdAt, t, userCount, viewCount]
  );

  return (
    <ul className={classNames("location-content__list", className)}>
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
