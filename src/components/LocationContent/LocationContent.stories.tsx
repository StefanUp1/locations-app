import React from 'react';
import LocationContent from './LocationContent';

export default {
  title: 'components/Location Content',
  component: LocationContent,
};

export const Default = () => (
  <LocationContent
    userCount={100}
    createdAt="2021-03-05T09:10:35.462Z"
    viewCount={0}
  />
);
