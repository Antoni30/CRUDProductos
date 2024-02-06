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

      nombre
        ? (product.data.nombre = nombre)
        : (product.data.nombre = product.data.nombre);
      descripcion
        ? (product.data.descripcion = descripcion)
        : (product.data.descripcion = product.data.descripcion);
      precio
        ? (product.data.precio = precio)
        : (product.data.precio = product.data.precio);

      console.log(product);

      // setProducts(
      //   products.map((product) => (product.id === id ? newProduct : product))
      // );
      // console.log(newProduct);
      setIsEditing(null);
      updateProduct(id, product);
      // setProducts(products.filter((newProduct) => product.id !== id));
      //   window.location = "/products";
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleEditClick = (id) => {
    setIsEditing(id);
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
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded m-1"
                    onClick={() => updateProductId(product.id)}
                    // onClick={() => updateProductId(product.id)}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded m-1"
                    onClick={() => handleEditClick(product.id)}
                    // onClick={() => updateProductId(product.id)}
                  >
                    Edit
                  </button>
                )}
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
