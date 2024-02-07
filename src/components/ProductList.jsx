import { useState, useEffect } from "react";
import { getProducs, deleteProduct, updateProduct } from "../Api/Api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [nombre, setNombre] = useState(products.nombre);
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [isEditing, setIsEditing] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducs();
        setProducts(response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [products]);

  const deleteProductId = (id) => {
    try {
      deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateProductId = (id) => {
    try {
      const product = products.find((product) => product.id === id);
      console.log(product);

      const newNombre = nombre ? nombre : product.data.nombre;
      const newDescripcion = descripcion
        ? descripcion
        : product.data.descripcion;
      const newPrecio = precio ? precio : product.data.precio;

      const newProduct = {
        nombre: newNombre,
        descripcion: newDescripcion,
        precio: newPrecio,
      };

      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, data: newProduct } : product
        )
      );
      console.log(newProduct);
      setIsEditing(null);
      updateProduct(id, newProduct);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEditClick = (id) => {
    setIsEditing(id);
  };

  return (
    <div className="w-[35rem] h-[15rem]  overflow-y-auto">
      <table className="table-auto border-separate border-spacing-4 border w-fyu">
        <thead>
          <tr className="">
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
                  {isEditing === product.id ? (
                    <input
                      placeholder={product.data.nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  ) : (
                    <span>{product.data.nombre}</span>
                  )}
                </div>
              </td>
              <td>
                <div>
                  {isEditing === product.id ? (
                    <input
                      placeholder={product.data.descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  ) : (
                    <span>{product.data.descripcion}</span>
                  )}
                </div>
              </td>
              <td>
                <div>
                  {isEditing === product.id ? (
                    <input
                      placeholder={product.data.precio}
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                  ) : (
                    <span>{product.data.precio}</span>
                  )}
                </div>
              </td>
              <td className="items-center justify-center">
                <tr>
                  {isEditing === product.id ? (
                    <button
                      className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-3 rounded m-1"
                      onClick={() => updateProductId(product.id)}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500 w-full hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded m-1"
                      onClick={() => handleEditClick(product.id)}
                    >
                      Edit
                    </button>
                  )}
                </tr>
                <tr>
                  <button
                    className="bg-red-500 w-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
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
    </div>
  );
};

export default ProductList;
