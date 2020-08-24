import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import {Provider} from 'react-redux'
import Routes from './routes';
import Header from './components/Header';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
