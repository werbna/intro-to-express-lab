const express = require('express')

const app = express()

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
// Define routes here (we'll add them soon)
app.get('/greeting/:userName', (req,res) =>{
  res.send(`What a pleasure, Glad to see you again ${req.params.userName} !`)
})

app.get('/roll/:number', (req, res) => {
  let num = req.params.number;

  if (isNaN(num)) {
    res.send('You must specify a number.');
    return;
  }
  let randomNum = Math.floor(Math.random() * (Number(num) + 1));
  res.send(`You rolled a ${randomNum}.`);
});


app.get('/collectibles/:index', (req,res) =>{
  let idx= req.params.index;

  if (isNaN(idx)) {
    res.send('Invalid index parameter.');
    return;
  }
  let i = parseInt(i,10);
  if (i < 0 || i >= collectibles.length) {
    res.send('This item is not yet in stock. Check back soon!');
    return;
  }
  let item = collectibles[index];
  res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`)
})

app.get('/shoes', (req,res) => {
  let filteredShoes = shoes;
  // let minPrice = parseFloat(req.query[min-Price]);
  // let maxPrice = parseFloat(req.query[max-Price]);
  //!Both would work.
  let minPrice = parseFloat(req.query.minPrice);
  let maxPrice = parseFloat(req.query.maxPrice);
  let type = req.query.type;

  if (!isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  }
  if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
  }
  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
  }
  res.send(filteredShoes);
});
// Listen for requests on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
