import ProductList from "../components/ProductList";
import ProductAdd from "../components/ProductAdd";

const ProductPage = () => {
    return (
        <div className="grid grid-cols-1 sm:max-xl:grid-cols-2 gap-4 auto-rows-auto">
          <div className="flex flex-col items-center justify-center mt-8 md:max-xl:ml-7">
            <ProductList />   
          </div>
          <div>
            <ProductAdd />
          </div>
        </div>
      );
};

export default ProductPage;