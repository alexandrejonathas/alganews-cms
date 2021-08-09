import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home.view';
import Contact from './views/Contact.view';
import NotFound from './views/NotFound.view';
import UserView from './views/User.view';
import SomaView from './views/Soma.view';
import CalculadoraView from './views/Calculadora.view';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={ Home } />
        <Route path={'/contact'} component={ Contact } />
        <Route path={'/user'} component={ UserView } />
        <Route path={'/soma/:a/:b'} component={ SomaView } />
        <Route path={'/calculadora'} component={ CalculadoraView } />
        <Route component={ NotFound } />                
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
