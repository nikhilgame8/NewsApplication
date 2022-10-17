import React from 'react'
import News from './News';
import NavBar from './NavBar';
import {
  BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<News key="general" pageSize="9" country="in" category="general"/>}/>
      <Route exact path="/business" element={<News key="business" pageSize="9" country="in" category="business"/>}/>
      <Route exact path="/entertainment" element={<News key="entertainment" pageSize="9" country="in" category="entertainment"/>}/>
      <Route exact path="/health" element={<News key="health" pageSize="9" country="in" category="health"/>}/>
      <Route exact path="/science" element={<News key="science" pageSize="9" country="in" category="science"/>}/>
      <Route exact path="/sports" element={<News key="sports" pageSize="9" country="in" category="sports"/>}/>
      <Route exact path="/technology" element={<News key="technology" pageSize="9" country="in" category="technology"/>}/>
      </Routes>
      </Router>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          NikhilGupta.com
        </a>
      </div>
    </div>
  );
}

export default App;
