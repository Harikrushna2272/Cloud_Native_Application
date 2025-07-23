const express = require('express');
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 75000, category: "Electronics" },
  { id: 2, name: "Chair", price: 1500, category: "Furniture" }
];


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});


app.post('/api/products', (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});


app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");

  const { name, price, category } = req.body;
  product.name = name || product.name;
  product.price = price || product.price;
  product.category = category || product.category;

  res.json(product);
});


app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Product not found");

  const deletedProduct = products.splice(index, 1);
  res.json(deletedProduct[0]);
});


const PORT = 4000; // different port to avoid clash with /users service
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});