import React, { useState, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import Page from 'components/Page';
import LocationCard from 'components/LocationCard';
import LocationContent from 'components/LocationContent';
import Loader from 'components/Loader';
import { Location } from 'types/locations';
import useGetLocations from 'hooks/useGetLocations';
import useLocationsData from 'hooks/useLocationsData';

import './all-locations.scss';

const LocationModal = React.lazy(() => import('components/LocationModal'));

interface AllLocationsPageContentProps {
  locations: Location[];
}

const AllLocationsPageContent = ({ locations }: AllLocationsPageContentProps) => {
  const {
    locationsWithViewCount,
    activeLocation,
    updateLocationViewCount,
    setActiveLocation,
  } = useLocationsData(locations);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnCardClick = (id: string) => {
    updateLocationViewCount(id);
    setActiveLocation(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="all-locations__content">
        {locationsWithViewCount.map((location) => (
          <LocationCard
            key={location.id}
            onClick={() => handleOnCardClick(location.id)}
            title={location.name}
          >
            <LocationContent
              userCount={location.userCount}
              viewCount={location.viewCount}
              createdAt={location.createdAt}
            />
          </LocationCard>
        ))}
      </div>
      <Suspense fallback={<Loader />}>
        {isModalOpen && activeLocation && (
          <LocationModal
            title={activeLocation.name}
            onClose={() => setIsModalOpen(false)}
            userCount={activeLocation.userCount}
            viewCount={activeLocation.viewCount}
            createdAt={activeLocation.createdAt}
            description={activeLocation.description}
          />
        )}
      </Suspense>
    </>
  );
};

const AllLocations = (): JSX.Element => {
  const { t } = useTranslation();
  const { data: locations, isLoading, isError } = useGetLocations();

  useEffect(() => {
    /**
     * We could handle errors here
     * To simulate error just enter some random string
     * instead of valid url inside "services/locations" "getLocations" method.
     */
    // eslint-disable-next-line no-alert
    if (isError) alert(t('somethingWentWrong'));
  }, [isError, t]);

  if (!locations || isLoading) return <Loader />;

  return (
    <Page
      header={
        <Header title={`Acme ${t('locations')}`} pageName={t('allLocations')} />
      }
    >
      <AllLocationsPageContent locations={locations} />
    </Page>
  );
};

export default AllLocations;
