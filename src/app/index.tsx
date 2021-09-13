
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home.view';
import NotFound from './views/NotFound.view';

import EditorsListView from './views/EditorsList.view';
import CreatePostView from './views/CreatePost.view';
import EditorProfileView from './views/EditorProfile.view';
import { useEffect } from 'react';
import info from '../core/utils/info';

export default function App () {

    useEffect(() => {
        window.onunhandledrejection = function (error: PromiseRejectionEvent) {    
            info({
                title: error.reason.response?.data.title || 'Erro', 
                content: error.reason.response?.data.detail || error.reason.message 
            })
        }
    }, [])

    return  <BrowserRouter>
        <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/editores" component={ EditorsListView } exact />
        <Route path="/editores/:id" component={ EditorProfileView } />
        <Route path="/posts/criar" component={ CreatePostView } />
        <Route component={ NotFound } />                
        </Switch>
    </BrowserRouter>
}