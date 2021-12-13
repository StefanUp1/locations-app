import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import "./index.scss";
import App from "./App";

/**
 * Since mocking is a development-oriented technique,
 * we will be importing our src/mocks/browser.js file conditionally,
 * depending on the current environment.
 * */
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start({
    onUnhandledRequest: (req: any) => {
      console.warn(
        "Found an unhanded %s request to %s",
        req.method,
        req.url.href
      );
    },
  });
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
