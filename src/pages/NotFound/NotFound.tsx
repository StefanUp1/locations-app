import React from "react";
import { useTranslation } from "react-i18next";
import "./not-found.scss";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <p>404</p>
      <Link to="/">{t("backToHomepage")}</Link>
    </div>
  );
};

export default NotFound;
