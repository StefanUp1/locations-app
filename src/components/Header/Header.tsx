import React from "react";
import "./header.scss";

interface HeaderProps {
  title: string;
  pageName: string;
}

const Header = ({ title, pageName }: HeaderProps): JSX.Element => {
  return (
    <div>
      <p>{pageName}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
