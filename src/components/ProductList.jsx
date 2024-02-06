import { useState, useEffect } from "react";
import { getProducs, deleteProduct, updateProduct } from "../Api/Api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:5000/users');
        const response = await getProducs();
        // console.log(response);
        setProducts(response);
        // const data = await response.json();
        // console.log(data);
        // setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    // const socket = io('http://localhost:5000/users');
    // socket.on('newProduct', (newProduct) => {
    //     setProducts((prevProducts) => [...prevProducts, newProduct]);
    // });

    // return () => {
    //     socket.disconnect();
    // };
  }, []);

  const deleteProductId = (id) => {
    try {
      // fetch(`http://localhost:5000/users/${id}`, {
      //     method: 'DELETE',
      // }).then(() => {
      //     setProducts(products.filter((product) => product.id !== id));
      // });
      deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      //   window.location = "/products";
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateProductId = (id) => {
    try {
      const product = products.find((product) => product.id === id);
      updateProduct(id, product.data);
      // setProducts(products.filter((product) => product.id !== id));
      //   window.location = "/products";
    } catch (err) {
      console.error(err.message);
    }
  };

  const onChangeHandler = (id, key, value) => {
    setProducts((values) => {
      console.log("On Change", values);
      return values.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    });
  };

  return (
    <table className="table-auto border-separate border-spacing-4 border">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>
              <div>
                <span
                  contentEditable
                  onInput={(e) =>
                    onChangeHandler(product.id, "nombre", e.target.value)
                  }
                >
                  {product.data.nombre}
                </span>
              </div>
            </td>
            <td>
              <span
                contentEditable
                onBlur={(e) =>
                  onChangeHandler(product.id, "nombre", e.target.value)
                }
              >
                {product.data.descripcion}
              </span>
            </td>
            <td>
              <span
                contentEditable
                onChange={(e) =>
                  onChangeHandler(product.id, "precio", e.target.value)
                }
              >
                {product.data.precio}
              </span>
            </td>
            <td className="items-center justify-center">
              <tr>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded m-1"
                  onClick={() => updateProductId(product.id)}
                >
                  Update
                </button>
              </tr>
              <tr>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
                  onClick={() => deleteProductId(product.id)}
                >
                  Delete
                </button>
              </tr>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
