
CREATE DATABASE ecommerce;  

USE ecommerce;  

CREATE TABLE products (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,  
    description TEXT,  
    price DECIMAL(10, 2) NOT NULL,  
    image_url VARCHAR(255)  

-- Optionally, you can add sample data  
INSERT INTO products (name, description, price, image_url) VALUES  
('Product 1', 'Description for product 1', 10.99, 'http://example.com/image1.jpg'),  
('Product 2', 'Description for product 2', 15.99, 'http://example.com/image2.jpg'),  
('Product 3', 'Description for product 3', 25.50, 'http://example.com/image3.jpg');