import { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import { EditableText } from "@blueprintjs/core";
import { getProducs } from '../Api/Api';

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

    const deleteProduct = (id) => {
        try {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
            }).then(() => {
                setProducts(products.filter((product) => product.id !== id));
            });
            
        } catch (err) {
            console.error(err.message);
        }
    };

    const updateProduct = (id) => {
        try {
            const product = products.find((product) => product.id === id);
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            }).then(() => {
                setProducts(products.filter((product) => product.id !== id));
            });
            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    };


    const onChangeHandler = (id, key, value) => {
        setProducts(values => {
          return values.map(item =>
            item.id === id ? { ...item, [key]: value } : item
          )
        })
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
                            <EditableText
                            value={product.data.nombre}
                            onChange={value => onChangeHandler(product.id, "nombre", value)}
                            />
                        </td>
                        <td>
                            <EditableText
                            value={product.data.descripcion}
                            onChange={value => onChangeHandler(product.id, "descripcion", value)}
                            />
                        </td>
                        <td>
                            <EditableText
                            value={product.data.precio}
                            onChange={value => onChangeHandler(product.id, "precio", value)}
                            />
                        </td>
                        <td className='items-center justify-center'>
                            <tr>
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded m-1"
                                    onClick={() => updateProduct(product.id)}
                                >
                                    Update
                                </button>
                            </tr>
                            <tr>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
                                    onClick={() => deleteProduct(product.id)}
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