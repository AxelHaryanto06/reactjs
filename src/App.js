import React, { useState, createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Component/Fungsional/AboutComp';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HookReducer from './Component/Hooks/Functional/HookReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';
//import './App.css';

//import Beranda from './Component/Class/Beranda';

export const keranjangContext = createContext()

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'tambah': return {
      ...state,
      jumlah: state.jumlah + 1,
      hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
    }
    case 'kurang': return {
      ...state,
      jumlah: state.jumlah - 1,
      hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
    }
    default:
      return state
  }
}

const App = () => {

  const [value, setValue] = useState(0)

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/mahasiswa" component={ListComp} />
            <Route exact path="/mahasiswa/tambah" component={TambahComp} />
            <Route exact path="/mahasiswa/edit" component={EditComp} />
            <Route exact path="/kelas" component={KelasComp} />
            <Route exact path="/hooks" component={HooksComp} />
            <Route exact path="/useeffects" component={HooksUseEffects} />
            <Route exact path="/produk" component={ProductComp} />
            <Route exact path="/reducer" component={HookReducer} />
            <Route exact path="/tagihan" component={Tagihan} />

            {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
          </Switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>


  );
}

export default App;
