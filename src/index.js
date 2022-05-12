// import React from 'react';
// import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import { createRoot } from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App tab="home" />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
