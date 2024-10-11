
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import  Card from './components/Card';
import { useState } from 'react';

function  App()  {
  const [searchQuery, setSearchQuery] = useState('');

  
  return (
    <>
   


        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Routes>
        <Route path='/' element={<Card searchQuery={searchQuery} />} />
      </Routes>
   
    
     
      
    </>
  )
}

export default App
