// import './App.css';
import React from "react";

import Search from "./components/Search";
import Category from "./components/Category";
import Pages from './pages/Pages';

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
