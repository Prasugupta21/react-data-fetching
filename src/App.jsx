
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import  Card from './components/Card';

function  App()  {

  
  return (
    <>
   


        <Header/>
      <Routes>
        <Route path='/' element={<Card />} />
      </Routes>
   
    
     
      
    </>
  )
}

export default App
