const express = require('express');  
const mysql = require('mysql2');   
const cors = require('cors');  

const app = express();  
app.use(cors());  
app.use(express.json());  

const db = mysql.createConnection({  
    host: 'localhost',  // Keeping as 'localhost'  
    user: 'root',  
    password: '',  
    database: 'ecommerce'  
});  

// Connect to the database and handle errors  
db.connect((err) => {  
    if (err) {  
        console.error('Error connecting to the database:', err.message);  
        return;  
    }  
    console.log('Connected to the database');  
});  

// Endpoint to get products  
app.get('/api/products', (req, res) => {  
    db.query('SELECT * FROM products', (err, results) => {  
        if (err) {  
            return res.status(500).json({ error: err.message });  
        }  
        res.json(results);  
    });  
});  

app.listen(5000, () => {  
    console.log('Server is running on port 5000');  
});