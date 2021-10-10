import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Auth from './utils/auth';

// import components
import Navigation from './components/NavbarUser';

// Import pages
import Landing from './pages/Landing';
import UserSettings from './pages/UserSettings';
import Home from './pages/Home';
import NotAPage from './pages/NotAPage';

// Nav pages
import All from './pages/Places/All';
import Coffee from './pages/Places/Coffee';
import Eatery from './pages/Places/Eatery';

// Admin Page
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import AdminHome from './pages/AdminHome';


// making the connection to the graphql backend server
// "uri" = Uniform Resource Identifier
// this function also sets up looking at the user when logged in
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/settings" component={UserSettings} />
            <Route exact path="/home" component={Home}/>

            <Route exact path="/admin-login" component={AdminLogin} />
            <Route exact path="/admin265317993996signup" component={AdminSignup} />
            <Route exact path="/admin" component={AdminHome} />

            <Route exact path="/all" component={All} />
            <Route exact path="/coffee-shops" component={Coffee} />
            <Route exact path="/eatery" component={Eatery} />

            <Route component={NotAPage}/>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
