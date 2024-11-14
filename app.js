// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
const uri = 'mongodb://localhost:27017/ecommerce';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose.connect(uri, clientOptions)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));


// Modelo de Producto
const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  description: String
});

// Ruta para mostrar productos
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.render('products', { products });
});

// Ruta para simular agregar al carrito
app.post('/add-to-cart', (req, res) => {
  const { productId } = req.body;
  // Aquí podrías agregar lógica para un carrito, en este caso solo confirmamos el producto
  res.send(`Producto con ID ${productId} agregado al carrito!`);
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
