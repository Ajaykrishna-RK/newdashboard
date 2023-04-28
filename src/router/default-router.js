import { memo, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Loading1 from "../components/custom/loading1";

//Dashboard
const Index = lazy(() => import("../views/dashboard/index"));

const DefaultRouter = memo(() => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadein" timeout={200}>
        <Suspense fallback={<Loading1 />}>
          <Switch>
            <Route path="/dashboard" exact component={Index} />
          </Switch>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
});

DefaultRouter.displayName = "DefaultRouter";
export default DefaultRouter;
