import React from "react";
import LocationContent from "./LocationContent";

export default {
  title: "components/Location Content",
  component: LocationContent,
};

export const Default = () => (
  <LocationContent
    userCount={100}
    createdAt="2:32pm (GMT+01:00)"
    viewCount={0}
  />
);
