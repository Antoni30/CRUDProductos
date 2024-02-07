import { useContext } from "react";
import { authContex } from "../context/AuthContex";

const userAuth = () => {
  const contex = useContext(authContex);
  if (!useContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return contex;
};

export default userAuth;