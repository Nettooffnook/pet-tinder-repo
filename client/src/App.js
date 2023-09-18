import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';

import Matchup from './pages/Matchup';
import Pet from './pages/Pet';
import NotFound from './pages/NotFound';
import Register from './components/Register'
import Login from './components/login'
import Footer from './components/Footer';

import './App.css'
import Header from './components/Header';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path='/register' element= {Register}/>
            <Route path='/login' element= {Login}/>
            <Route path="/"  element={<Home />}  />
            <Route path="/matchup" element={<Matchup />} />
            <Route path="/matchup/:id"  element={<Pet />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;