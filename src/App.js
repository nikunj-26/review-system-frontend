import React from "react";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import Secret from "./Components/Secret";
import PrivateRoute from "./Components/PrivateRoute";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/register" component={RegistrationForm} />
            <Route path="/login" component={LoginForm} />
            <PrivateRoute path="/secret" component={Secret} />
            <Route path="/" exact component={LoginForm} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
