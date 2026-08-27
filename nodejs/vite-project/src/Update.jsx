import { useState } from "react";
let Update=()=>{
    const [name,setName]=useState({
        name:"",role:""
    })
    let handlechange=(e)=>{
        console.log(e);
        const {name,value}=e.target;
        setName({...name,[name]:value})
    }
    return(
        <>

        <input type="text" name="name" id="" value={name.name} onChange={handlechange} />

    
        <input type="text" name="role" id="" value={name.role} onChange={handlechange} />
         <p>hello,{name.name}</p>
         <p>{name.role}</p>
         
</>
    )
}


 export default Update;