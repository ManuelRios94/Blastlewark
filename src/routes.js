import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Page404 from './components/shared/PageNotFound/PageNotFound';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route component={Page404} />
        </Switch>
    </App>;
    
export default AppRoutes;