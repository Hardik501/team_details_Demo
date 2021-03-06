import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage.js";
import NavBar from "./views/NavBar/NavBar";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '50px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
