import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <App />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
