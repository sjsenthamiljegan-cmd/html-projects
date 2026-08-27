import Homepage from './webpage/Homepage'
import Aboutus from './webpage/Aboutus'
import Contant from './webpage/Contant'
import Gallery from './webpage/Gallery'
import {BrowserRouter,Routes,Route}from "react-router-dom"


const App =()=> {
  return(
    <>
  <BrowserRouter> 
  
  <Homepage/>
  <Routes>
      <Route path="/Contant"element={<Homepage/>}/>
         <Route path="/Aboutus"element={<Aboutus/>}/>
         <Route path="/Gallery"element={<  Contant/>}/>
         <Route path="/"element={<Gallery/>}/>
      </Routes>
       </BrowserRouter>
</>
  
  )
}
export default App

