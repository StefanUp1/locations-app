import React from "react";
import "./header.scss";

interface HeaderProps {
  title: string;
  pageName: string;
}

const Header = ({ title, pageName }: HeaderProps): JSX.Element => {
  return (
    <div className="c-header">
      <p className="c-header__page-name">{pageName}</p>
      <h2 className="c-header__title">{title}</h2>
    </div>
  );
};

export default Header;
