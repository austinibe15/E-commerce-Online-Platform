import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import ProductList from './ProductList';  
import './App.css'; // Link to your CSS styles  

const App = () => {  
    const [products, setProducts] = useState([]);  

    useEffect(() => {  
        const fetchProducts = async () => {  
            const response = await axios.get('/api/products');  
            setProducts(response.data);  
        };  
        fetchProducts();  
    }, []);  

    return (  
        <div className="app">  
            <h1 className="header">E-commerce Platform</h1>  
            <ProductList products={products} />  
        </div>  
    );  
};  

export default App;