import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme';
import Container from './components/Container';
import LotteryTicket from './components/LotteryTicket';
import Games from './components/Games';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>Lotto Tracker</h1>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Games />
            </Route>
            <Route path="/newgame" exact>
              <LotteryTicket />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
