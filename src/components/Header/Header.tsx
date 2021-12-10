import React from "react";

interface HeaderProps {
  title: string;
  pageName: string;
}

const Header = ({ title, pageName }: HeaderProps) => {
  return (
    <div>
      <p>{pageName}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
