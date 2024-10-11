
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import  Card from './components/Card';
import { useState } from 'react';

function  App()  {
  const [searchQuery, setSearchQuery] = useState('');

  
  return (
    <>
   
<div className='bg-gradient-to-r from-pink-400 to-blue-700'>

        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Routes>
        <Route path='/' element={<Card searchQuery={searchQuery} />} />
      </Routes>
   
    
     
      </div>
    </>
   
  )
}

export default App
