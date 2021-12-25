import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import Local from "./local";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/local">
          <Local />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
