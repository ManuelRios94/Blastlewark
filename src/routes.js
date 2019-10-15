import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import HomeContainer from './components/Home/HomeContainer';
import DetailsContainer from './components/Details/DetailsContainer';
import Page404 from './components/Shared/PageNotFound/PageNotFound';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/hero/details" component={DetailsContainer} />
            <Route component={Page404} />
        </Switch>
    </App>;
    
export default AppRoutes;