import React from 'react';
import  { BrowserRouter } from 'react-router-dom';
import Route from './routes'
import GlobalStyle from './styles/global'
import Header from './components/Header'

import {Provider} from 'react-redux'

import './config/ReactotronConfig'

import store from './store'

function App() {
  return (
    <Provider store={store}>
   <BrowserRouter>
     <Header/>
     <Route/>
     <GlobalStyle />
   </BrowserRouter>
   </Provider>
  );
}

export default App;
