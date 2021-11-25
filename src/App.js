import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import { Nav, PrivateRoute } from "_components";
import { history } from "_helpers";

//page component
import { Home } from "pages/home";
import { Login } from "pages/auth/login";

export { App };

function App() {
  return (
    <div className="app-container bg-light">
      <Router history={history}>
        <Nav />
        <div className="container pt-4 pb-4">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
