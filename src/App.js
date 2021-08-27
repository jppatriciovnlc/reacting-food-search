import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import logo from './logo.svg';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
