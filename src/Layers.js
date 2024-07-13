import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom';
import SearchBar from './Components/Footer/SearchBar';
const Layers = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <SearchBar/>
    <Footer/>
    </>
  )
}

export default Layers
