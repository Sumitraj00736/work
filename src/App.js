import React from 'react'
import Product from './Components/Product/Product';
import Info from './Components/Product/Info';
import CardLayout from './Components/Product/Card';
import Video from './Components/Product/Video';
import SolutionsComponent from './Components/Product/Solution';


const App = () => {
  return (
    <>
    <Product/>
    <Info/>
    <SolutionsComponent/>
    <Video/>
    <CardLayout/>
    </>
  )
}

export default App

