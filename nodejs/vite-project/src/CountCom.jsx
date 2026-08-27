import { useState } from 'react'
import Name from './Name';
function CountCom(){

const [count,setCount] = useState(0)
const hi=()=>{
    setCount(count+1);
}
const welcom=()=>{
    setCount(count-1);
}
    return(
        <>
         <h1><strong>COUNTER</strong> {count}</h1>
         <button onClick={hi}>click increase</button>
         <button onClick={welcom}>click degrees </button>
         <Name/>
         </>
    )
}
export default CountCom;





















