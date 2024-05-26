
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Routes,Route} from "react-router-dom"
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { createContext, useState ,useEffect} from 'react';
import Components from './components/coma/Components';
import ComponentsB from './components/coma/ComponentsB';
import Useredu from './components/useReduce/Usereduc';
import T_1usestate from './components/hookspratices/T_1usestate';
import FixedItems from './components/Fixeditems/FixedItems';
import Friendslist from './Friendslist/Friendslist';


export const store=createContext()

function App() {
  
  useEffect(()=>{console.log("useeffect"),[{name}]})
  const[name,setname]=useState(0)
  const chg=()=>{
    setname(name+1)
  }
  return (
    <center>
      <Navbar/>
      
      <h1>om sairam</h1>
      <T_1usestate/>
      {name}
      <ul>
      <button onClick={()=> chg()}>{name}</button>
      </ul>
      <FixedItems/>
      <Useredu/>
      <store.Provider value={[name,setname]}>
      <Components/>

      <ComponentsB/> 
      </store.Provider>
         
      <Routes>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        
      </Routes>
      <Friendslist/>
      <Footer/>
    </center>
  )
}

export default App
