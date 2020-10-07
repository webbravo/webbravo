import React, { Suspense } from "react";
import "./App.css";
import Preloader from "./components/common/Preloader";
import Homepage from "./pages/Homepage.js";
import FourOFour from "./pages/FourOFour";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route exact path="/admin">
          <Redirect to="dashboard.heroku.com" />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </Suspense>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
