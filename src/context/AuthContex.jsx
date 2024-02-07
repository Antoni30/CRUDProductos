import { createContext, useState } from "react";
import { register, loginS } from "../Api/Api";

export const authContex = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const authLogin = async (user) => {
    const Aut = await loginS(user);
    if (Aut) {
      console.log("User Login");
      setLogin(true);
    }
    else{
      console.log("Error User dont found")
    }
  };
  const registerR = async(user) => {
    try {
      console.log(user)
      const aut=await register(user);
      if(aut){
        console.log("User Register");
      setLogin(true);
      }
      else{
        console.log("error")
      }
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    setLogin(false);
  };
  console.log(login);
  return (
    <authContex.Provider value={{ login, authLogin, registerR, logout }}>
      {children}
    </authContex.Provider>
  );
};
