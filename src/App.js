import React from "react";
import Navbar from "./components/Common/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./pages/Home/containers/HomeContainer"; 

import configureStore from "./configureStore";
import history from "./utils/history";

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
