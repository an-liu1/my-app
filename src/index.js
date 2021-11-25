import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./views/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// Ant Design UI framework
import "antd/dist/antd.css";
// Boostrap
import "bootstrap/dist/css/bootstrap.min.css";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

// create component shorcut:   rfreduxp

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
