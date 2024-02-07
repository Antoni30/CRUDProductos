import ProductList from "../components/ProductList";
import ProductAdd from "../components/ProductAdd";
import  useAuth  from "../hooks/useAuth.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { logout, login } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate("/");
  }, [login]);
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center h-full gap-10">
        <ProductList />
        <ProductAdd />
      </div>
      <button
        onClick={logout}
        className="bg-zinc-700 w-32 absolute h-11 top-0 right-0 m-3 text-white rounded-lg"
      >
        Log out
      </button>
    </div>
  );
};

export default ProductPage;
