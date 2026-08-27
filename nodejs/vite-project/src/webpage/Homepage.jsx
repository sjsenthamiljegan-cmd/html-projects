import { Link } from "react-router-dom"
function Homepage(){

   return (
   <>
      <nav>  
      
      <Link to="/">home</Link> 
      <Link  to="/Contant">contant</Link>
      <Link to= "/Aboutus">aboutus</Link>
      <Link to= "/Gallery">gallery</Link>
      
      </nav>
     
   </>
   
   
   )
}
 export default Homepage