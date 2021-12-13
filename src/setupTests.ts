// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// test I18next without stubbing anything, by providing the configuration 
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  resources: { en: { translations: {} } },
});

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// Enables using portal during tests
let portalRoot = document.getElementById("portal");
if (!portalRoot) {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(portalRoot);
}
