import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./i18n/i18-config";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouting } from "./routes/routes";
import { store } from "./store";
import { LayoutContainer } from "./pages/layout/LayoutContainer.component";

//<App />
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LayoutContainer>
          <AppRouting />
        </LayoutContainer>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
