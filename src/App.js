import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Search from "./routes/Search";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Search}></Route>
    </HashRouter>
  );
}

export default App;
