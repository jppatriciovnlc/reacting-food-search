import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux'

import store from './redux/store'
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>s
    </Provider>
    
  );
}

export default App;
