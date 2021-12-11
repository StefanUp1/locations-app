import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
/** Lazy loading routes */
const AllLocations = React.lazy(() => import("pages/AllLocations"));
const NotFound = React.lazy(() => import("pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AllLocations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
