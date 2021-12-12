import React from "react";
import Header from "components/Header";
import Page from "components/Page";
import LocationCard from "components/LocationCard";
import LocationContent from "components/LocationContent";

import './all-locations.scss'
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
    name: "Test Location 1123123123123123",
    userCount: 12,
    description: " Lorem ipsum dolor sit amet.",
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
  return (
    <Page header={<Header title="Acme locations" pageName="All locations" />}>
      <div className="all-locations__content">
        {locationsMockData.map((location) => (
          <LocationCard
            key={location.id}
            onClick={() => console.log("Card clicked")}
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
    </Page>
  );
};

export default AllLocations;
