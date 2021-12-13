import React from 'react';
import { useTranslation } from 'react-i18next';
import './loader.scss';

/** Here we could create "Loader" component to display while waiting for api call to finish,
 * component to lazy load, etc...
 */
const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className="loader">
      {t('loading')}
      ....
    </div>
  );
};

export default Loader;
