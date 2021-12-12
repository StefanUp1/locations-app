import React from "react";
import "./not-found.scss";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
  return (
    <div className="not-found">
      <p>404</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
