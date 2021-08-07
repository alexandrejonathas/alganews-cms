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
import CalcView from './views/Calc.view';

ReactDOM.render(
  <React.StrictMode>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contato</a></li>
        <li><a href="/user">Usuário</a></li>
      </ul>
    </nav>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={ Home } />
        <Route path={'/contact'} component={ Contact } />
        <Route path={'/user/:userId'} component={ UserView } />
        <Route path={'/calculadora/:a/:b'} component={ CalcView } />
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
