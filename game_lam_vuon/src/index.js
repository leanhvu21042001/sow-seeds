import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/_base.css';
import App from './views/App';
import Login from './views/Login';
import reportWebVitals from './reportWebVitals';
import UserProvider from './store/providers/UserProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <UserProvider >
            <App />
          </UserProvider>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
