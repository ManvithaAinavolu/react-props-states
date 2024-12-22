import {useState} from 'react';
const User1=()=>{
    const [name,setName]=useState('');
   
    return(
        <>
        <input type='text' placeholder='enter your name' onChange={(e)=>{setName(e.target.value)}}/>
        <h1>Hii,{name}</h1>
        </>
    )
}
export default User1;