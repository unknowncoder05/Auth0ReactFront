import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0Configs } from 'configs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={Auth0Configs.domain}
    clientId={Auth0Configs.clientId}
    redirectUri={Auth0Configs.redirectUri}
    audience={Auth0Configs.defaultAudience}
    scope={Auth0Configs.scope}
  >
  <App />
</Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
