/* React Dependencies */
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Local Components */
import Loader from "./Loader";

/* Constants */
import { routes } from '../constants/routes'

const routesToRender = routes.map(route => {
  const component = lazy(() => import(`../pages/${route.componentName}`));

  return (
    <Route key={route.componentName} exact={route.exact} path={route.path} component={component} />
  );
});

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routesToRender}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
