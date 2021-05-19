import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyItem = React.lazy(() => import("./pages/Item"));

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" component={LazyHome} exact />
            <Route path="/cuisines/:id" component={LazyItem} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
