import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Container from './components/Container';
import LotteryTicket from './components/LotteryTicket';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>Lotto Tracker</h1>
        <LotteryTicket />
      </Container>
    </ThemeProvider>
  );
}

export default App;
