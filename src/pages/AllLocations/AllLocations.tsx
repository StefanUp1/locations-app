import React from "react";
import Header from "components/Header";
import Page from "components/Page";

const AllLocations = (): JSX.Element => {
  return (
    <Page header={<Header title="Acme locations" pageName="All locations" />}>
      <div>content</div>
    </Page>
  );
};

export default AllLocations;
