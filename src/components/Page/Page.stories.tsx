import React from 'react';
import Header from 'components/Header';
import Page from './Page';

export default {
  title: 'components/Page',
  component: Page,
};

export const Default = () => (
  <Page>
    <div>Default page component</div>
  </Page>
);

export const WithHeader = () => (
  <Page header={<Header title="Page title" pageName="Page Name" />}>
    <div>Default page component</div>
  </Page>
);
