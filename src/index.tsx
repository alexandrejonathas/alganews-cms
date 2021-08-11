import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './app/views/Home.view';
import Contact from './app/views/Contact.view';
import NotFound from './app/views/NotFound.view';
import UserView from './app/views/User.view';
import SomaView from './app/views/Soma.view';
import CalculadoraView from './app/views/Calculadora.view';

import GlobalStyle from './core/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={ Home } />
        <Route path={'/contact'} component={ Contact } />
        <Route path={'/user'} component={ UserView } />
        <Route path={'/soma/:a/:b'} component={ SomaView } />
        <Route path={'/calculadora'} component={ CalculadoraView } />
        <Route component={ NotFound } />                
      </Switch>
    </BrowserRouter>
    
    <GlobalStyle />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
