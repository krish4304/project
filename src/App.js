/*import React,{useState,useEffect}  from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import './Footer.css';
const App = () => {
  return (
    < >
     
     <body>
     <header  align="center"><Header/></header> 
      <section>
        <Body/>
      </section>
     <footer align="center"><Footer/></footer> 
     </body>
     
     
     
      </>
      const App = () => {
      //let name='react'
      const[ininame,setname]=useState('react')
      function changeclick(){
        //name="krishna"
        //console.log(name)
        setname('krishna')

      } 
      function decrementClick(){ 
        setname('decrement')
      return(
        <div style={{textAlign:'center'}}>
           <p>{ininame}</p>
           <button onClick={changeclick}>Clickme</button>
        </div>
      )
      const  Timer= () => {
        const [count, setcount] = useState(0);
        useEffect(() =>
        {
          setTimeout(() =>
          {
            setcount((count)=> count+1)
          },[500])
        })
        return(
          <div align="center">Timer{count}</div>
        )
      }
      import React from 'react'
      import State from './Components/State'
      import NavBar from './Components/NavBar'
      
      const App = () => {
        return (
          <div>
            <NavBar/>
            <State/>
          </div>
        )
      }*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Contact';
import Todolist from './Components/Todolist'
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/todolist" element={<Todolist/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
