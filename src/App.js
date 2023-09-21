import './App.css';

import React, { useState, useEffect } from 'react';

import NavBar from './Components/NavBar';
import News from './Components/News';
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = useState(0);


  const setProgres = (progress) => {
    setProgress(progress)    
  }

  // setCurrCountry=(country)=>{
  //   this.setState({
  //     currCountry:country
  //   })
  // }


  return (
    <Router>
      <div>
        <NavBar />
        <LoadingBar height='0.2rem' color='#f11946' progress={progress} />
        <Routes>
          <Route path='/' element={<News setProgres={setProgres} key="general" country="in" category="general" />} ></Route>
          <Route path='/home' element={<News setProgres={setProgres} key="general" country="in" category="general" />} ></Route>
          <Route path='/business' element={<News setProgres={setProgres} key="business" country="in" category="business" />} ></Route>
          <Route path='/entertainment' element={<News setProgres={setProgres} key="entertainment" country="in" category="entertainment" />} ></Route>
          <Route path='/health' element={<News setProgres={setProgres} key="health" country="in" category="health" />} ></Route>
          <Route path='/science' element={<News setProgres={setProgres} key="science" country="in" category="science" />} ></Route>
          <Route path='/sports' element={<News setProgres={setProgres} key="sports" country="in" category="sports" />} ></Route>
          <Route path='/technology' element={<News setProgres={setProgres} key="technology" country="in" category="technology" />} ></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App;
