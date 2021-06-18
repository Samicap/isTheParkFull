import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import Quebec from './components/quebec/quebec';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },});



function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <header className="App-header">
            <p>Is the National Park Parking Lot Full?</p>
            </header>
            <Route path="/quebec">
              <Quebec/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
