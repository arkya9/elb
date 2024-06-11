import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { store } from "./store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="529332192617-dqnh2q7oqntounddtpu25mi190q0gk00.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
      <ToastContainer position="top-right" />
    </Provider>
  </GoogleOAuthProvider>
);
