import React from "react";
import Navbar from "./components/Common/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewPage from "./pages/New/containers/NewContainer"; 

import configureStore from "./configureStore";
import history from "./utils/history";
import HomePage from "./pages/Home/containers/HomeContainer";
import ShowPage from "./pages/Show/containers/ShowContainer";
import EditPage from "./pages/Edit/containers/EditContainer";

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pets/new" exact component={NewPage} />          
          <Route path="/pets/show" exact component={ShowPage} />          
          <Route path="/pets/edit" exact component={EditPage} />          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
