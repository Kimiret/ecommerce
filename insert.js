//Script de prueba para ingresar cositas a la base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/ecommerce';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose.connect(uri, clientOptions)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

 const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  description: String
});

const products = [
  { name: 'Producto 1', price: 100, description: 'Descripción del producto 1' },
  { name: 'Producto 2', price: 150, description: 'Descripción del producto 2' },
  { name: 'Producto 3', price: 200, description: 'Descripción del producto 3' }
];

Product.insertMany(products).then(() => {
  console.log('Productos agregados');
  mongoose.connection.close();
});
