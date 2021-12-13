import React from 'react';
import './header.scss';

interface HeaderProps {
  title: string;
  pageName: string;
}

const Header = ({ title, pageName }: HeaderProps): JSX.Element => (
  <div className="c-header">
    <p className="c-header__page-name">{pageName}</p>
    <h1 className="c-header__title">{title}</h1>
  </div>
);

export default Header;
