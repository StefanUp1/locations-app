import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
/** Lazy loading routes */
const AllLocations = React.lazy(() => import("pages/AllLocations"));
const NotFound = React.lazy(() => import("pages/NotFound"));

function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AllLocations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
