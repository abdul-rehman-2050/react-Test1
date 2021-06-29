import React  from 'react';
import logo from './logo.svg';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import AppbarTop from './components/AppbarTop';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
    <div className="App">
      <AppbarTop/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color="primary">Hello World</Button>

        
      </header>
    </div>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
