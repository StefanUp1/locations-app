import React from "react";
import { action } from "@storybook/addon-actions";
import LocationCard from "./LocationCard";
import LocationContent from "../LocationContent";

export default {
  title: "components/Location Card",
  component: LocationCard,
};

export const Default = () => (
  <LocationCard title="Title" onClick={action("onClick")}>
    <div>Test content</div>
  </LocationCard>
);

export const LocationCardWithLocationContent = () => (
  <LocationCard title="Title" onClick={action("onClick")}>
    <LocationContent
      userCount={123}
      createdAt="2:32pm (GMT+01:00)"
      viewCount={3}
    />
  </LocationCard>
);
