import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appcontext';
import Navbar from './component/navbar';
import Home from './views/home';
import ChangePassword from './views/change-password';
import Register from './views/register';
import Login from './views/login';
import Contact from './views/contact';
import Scorecard from './views/scorecard';

const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/scorecard" component={Scorecard} />
                <Route exact path="/contact" component={Contact} />                
                <Route exact path="/change-password" component={ChangePassword} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home} />
                <Route render={() => <h1 className="notfound">Not found!</h1>} />
            </Switch>

        </BrowserRouter>
    )
}

export default injectContext(Layout);