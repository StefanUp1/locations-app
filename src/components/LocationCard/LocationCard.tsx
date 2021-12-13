import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Edit from 'assets/images/Edit.svg';
import onKeyPress from 'helpers/onKeyPress';
import { ENTER_KEY } from 'constants/keys';

import './location-card.scss';

interface LocationCardProps {
  title: string;
  onClick: () => void;
  children: ReactNode;
}

const LocationCard = ({ title, onClick, children }: LocationCardProps) => {
  const { t } = useTranslation();

  return (
    <article
      onClick={onClick}
      className="location-card"
      tabIndex={0}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      onKeyPress={(e) => onKeyPress(e, onClick, ENTER_KEY)}
    >
      <h2 className="location-card__title">{title}</h2>
      <div className="location-card__edit-icon">
        <img src={Edit} width="16" height="16" alt={t('edit')} />
      </div>
      <div className="location-card__content">{children}</div>
    </article>
  );
};

export default LocationCard;
