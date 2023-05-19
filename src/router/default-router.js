import { memo, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Loading1 from "../components/custom/loading1";


// Login
const SignIn = lazy(()=> import("../views/auth/sign-in"))
//Dashboard
const Index = lazy(() => import("../views/dashboard/index"));
// shop
const Shop = lazy(()=> import("../views/shops/Shop"))

// users

const User = lazy(()=> import("../views/users/User"))

// subscriptionsandrenewal
const SubscriptionAndRenewal = lazy(()=>import("../views/subscriptionsAndReneval/Subscription"))

// staff and Hr

const StaffAndHr = lazy(()=>import("../views/staffAndHr/StaffAndHr"))

// accounting

const Accounting = lazy(()=>import("../views/accounting/Accounting"))

// Setting

const Setting = lazy(()=>import("../views/setting/Setting"))

// subscription Plan 

const SubscriptionPlan = lazy(()=>import("../views/subscriptionPlan/SubscriptionPlan"))

const DefaultRouter = memo(() => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadein" timeout={200}>
        <Suspense fallback={<Loading1 />}>
          <Switch>
            <Route path="/dashboard" exact component={Index} />
            <Route path="/auth/sign-in" exact component={SignIn} />
            <Route path="/shops" exact component={Shop} />
            <Route path="/users" exact component={User} />
            <Route path="/subscriptionsandrenewal" exact component={SubscriptionAndRenewal} />
            <Route path="/staffandhr" exact component={StaffAndHr} />
            <Route path="/accounting" exact component={Accounting} />
            <Route path="/setting" exact component={Setting} />
            <Route path="/subscriptions-plans" exact component={SubscriptionPlan} />

          </Switch>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
});

DefaultRouter.displayName = "DefaultRouter";
export default DefaultRouter;
