import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import { GraphData } from './components/GraphData';
import { withAuth } from './msal/MsalAuthProvider';

import './custom.css'

class RootApp extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/graph-data' component={GraphData} />
            </Layout>
        );
    }
}
export const App = withAuth(RootApp);