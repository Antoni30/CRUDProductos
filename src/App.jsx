import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import ProtectedRout from "./ProtectedRout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRout/>}>
            <Route path="/products" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
