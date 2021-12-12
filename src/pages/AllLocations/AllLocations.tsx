import React, { useState, Suspense } from "react";
import Header from "components/Header";
import Page from "components/Page";
import LocationCard from "components/LocationCard";
import LocationContent from "components/LocationContent";

import "./all-locations.scss";

const LocationModal = React.lazy(() => import("components/LocationModal"));

interface Location {
  id: string;
  createdAt: string;
  name: string;
  userCount: number;
  description: string;
}

const locationsMockData: Location[] = [
  {
    id: "1",
    createdAt: "2021-03-05T09:10:35.462Z",
    name:
      "Test Location 112312312312312312312312312312312312312312312312312312312312321123",
    userCount: 12,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat nam sed deserunt tempore iure, eos voluptas officiis, accusamus labore ipsum molestias. Consectetur nulla aut provident suscipit! Fuga suscipit reiciendis temporibus eius vel quisquam veritatis quae iusto qui eligendi, possimus nisi nulla nostrum illo impedit soluta, provident ducimus dolor optio itaque harum, aut adipisci in. Rem dicta minus ab sint, similique nostrum saepe incidunt accusamus, mollitia nemo ipsum! Ad tempora dolores magnam molestiae, hic quam harum ea soluta, illum sed rerum minima quas iusto aliquam sequi accusamus consequatur quia sapiente assumenda adipisci! Suscipit eos eveniet doloremque magnam velit itaque autem!",
  },
  {
    id: "2",
    createdAt: "2021-03-05T09:10:35.462Z",
    name: "Test Location 2",
    userCount: 12,
    description: " Lorem ipsum dolor sit amet.",
  },
  {
    id: "3",
    createdAt: "2021-03-05T09:10:35.462Z",
    name: "Test Location 3",
    userCount: 12,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint dolores pariatur ullam unde aperiam.",
  },
  {
    id: "4",
    createdAt: "2021-03-05T09:10:35.462Z",
    name: "Test Location 4",
    userCount: 12,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint dolores pariatur ullam unde aperiam.",
  },
  {
    id: "5",
    createdAt: "2021-03-05T09:10:35.462Z",
    name: "Test Location 5",
    userCount: 12,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint dolores pariatur ullam unde aperiam.",
  },
  {
    id: "6",
    createdAt: "2021-03-05T09:10:35.462Z",
    name: "Test Location 6",
    userCount: 12,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint dolores pariatur ullam unde aperiam.",
  },
];

const AllLocations = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState<Location>();

  const handleOnCardClick = (id: string) => {
    if (id === activeLocation?.id) return setIsModalOpen(true);

    const selectedLocation = locationsMockData.find(
      (location) => location.id === id
    );

    setActiveLocation(selectedLocation);
    setIsModalOpen(true);
  };

  return (
    <Page header={<Header title="Acme locations" pageName="All locations" />}>
      <div className="all-locations__content">
        {locationsMockData.map((location) => (
          <LocationCard
            key={location.id}
            onClick={() => handleOnCardClick(location.id)}
            title={location.name}
          >
            <LocationContent
              userCount={location.userCount}
              viewCount={0}
              createdAt={location.createdAt}
            />
          </LocationCard>
        ))}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen && activeLocation && (
          <LocationModal
            title={activeLocation.name}
            onClose={() => setIsModalOpen(false)}
            userCount={activeLocation.userCount}
            viewCount={0}
            createdAt={activeLocation.createdAt}
            description={activeLocation.description}
          />
        )}
      </Suspense>
    </Page>
  );
};

export default AllLocations;
