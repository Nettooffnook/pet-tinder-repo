import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';

import Matchup from './pages/Matchup';
import Pet from './pages/Pet';
import NotFound from './pages/NotFound';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/matchup" 
              element={<Matchup />}
            />
            <Route 
              path="/matchup/:id" 
              element={<Pet />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

// src/App.js
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Advanced} />
        <Route exact path="/users" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;