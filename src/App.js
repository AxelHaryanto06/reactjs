import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './Component/Fungsional/AboutComp';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
//import './App.css';

//import Beranda from './Component/Class/Beranda';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mahasiswa" component={ListComp} />
        
        {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
      </Switch>
    </BrowserRouter>


  );
}

export default App;
