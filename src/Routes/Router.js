import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import Local from "./local";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/local">
          <Local />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;
