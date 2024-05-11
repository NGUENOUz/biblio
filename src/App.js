import logo from './logo.svg';
import { BrowserRouter, Route, Routes, useLocation  } from 'react-router-dom';

import './App.css';
import Splach from './components/splach/splach';
import Inscription from './pages/(Auth)/inscription';
import Home from './pages/Home/home';
import Details from './pages/Details/details';
import Connexion from './pages/(Auth)/connexion';
import ResetPassword from './pages/(Auth)/resetPassword';
import { useState } from 'react';
import AddUser from './pages/panelAdmin/addUser';
import Admin from './pages/panelAdmin/Admin/Home/admin';
import ListArticles from './pages/panelAdmin/Admin/PageArticles/listArticles';
import { AnimatePresence } from 'framer-motion';


function App() {
  
  const location =useLocation();
  return (
    
      <AnimatePresence>

       <Routes location={location} key={location}>
        
        <Route index element={<Home/>} />
        <Route path="splach" element={<Splach/>} />
        <Route path="details" element={<Details/>} />
        <Route path="Inscription" element={<Inscription/>} />
        <Route path="Connexion" element={<Connexion/>} />
        <Route path="resetPassword" element={<ResetPassword/>} />
        <Route path="panel" element={<AddUser/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path='listArticle' element={<ListArticles/>}/>

        </Routes>
      </AnimatePresence>
   
  );
}

export default App;
