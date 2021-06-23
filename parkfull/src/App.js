// import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import Quebec from './components/quebec/quebec';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Switch>
          {/* <>
            <header className="App-header">
            <p>Is the National Park Parking Lot Full?</p>
            </header>
          </> */}
          <>
            <Route path="/quebec">
              <Quebec/>
            </Route>
          </>
          <>
            <Route path="/">
              <Home />
            </Route>
          </>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
