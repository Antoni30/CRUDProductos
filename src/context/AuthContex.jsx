import { createContext, useState } from "react";
import { register, loginS} from "../Api/Api";

export const authContex = createContext();


export const AuthProvider=({children})=> {
    const [login,setLogin]=useState(false)
    const authLogin=((user)=>{
      loginS(user)
      console.log('User Login')
      setLogin(true)
    })
    const registerR=((user)=>{
      register(user)
      console.log('User Register')
      setLogin(true)
    })
    const logout=(()=>{
      setLogin(false)
    })
    console.log(login)
    return ( 
       <authContex.Provider value={{login,authLogin,registerR,logout}}>
        {children}
       </authContex.Provider>
     );
}
