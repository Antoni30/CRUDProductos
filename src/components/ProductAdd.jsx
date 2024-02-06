import { useState } from 'react';
import { postProducts } from '../Api/Api';

const ProductAdd = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const product = {
                nombre: name,
                descripcion: description,
                precio: price
            };
            postProducts(product);
            setName('');
            setDescription('');
            setPrice('');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div >
            <h1 className="text-3xl font-bold text-center m-3 mt-20">Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center">
                    <input
                        className="border-2 border-black m-2 rounded-lg p-2"
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        className="border-2 border-black m-2 rounded-lg p-2"
                        rows="4" cols="23"
                        placeholder="Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        className="border-2 border-black m-2 rounded-lg p-2"
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;