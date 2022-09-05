import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import './App.css'
import ProtectedRoute from './components/Protected';
import isLoggedIn from './components/Services';
import { Navigate } from 'react-router-dom';
 
function PrivateRoute({ children }) {
  const auth = isLoggedIn();
  return auth ? children : <Navigate to="/" />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/Home' element={
              <PrivateRoute>
                    <Home />
              </PrivateRoute>} />
        <Route path='/signin' element={<Signin />} />
        
      </Routes>
    </>
  )
}

export default App;