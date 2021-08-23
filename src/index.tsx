import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './app/views/Home.view';
import NotFound from './app/views/NotFound.view';

import GlobalStyle from './core/globalStyles'
import EditorsListView from './app/views/EditorsList.view';
import CreatePostView from './app/views/CreatePost.view';
import EditorProfileView from './app/views/EditorProfile.view';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/editores" component={ EditorsListView } exact />
        <Route path="/editores/:id" component={ EditorProfileView } />
        <Route path="/posts/criar" component={ CreatePostView } />
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
