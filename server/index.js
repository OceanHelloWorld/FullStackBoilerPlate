const Grocery = require('../db/Grocery');

const path = require('path');
var express = require('express');
var app = express();


// add logging middleware;

app.use(function(req, res, next) {
  console.log(req.method, req.path)
  next();
});

app.use(express.static(path.join(__dirname, '../client/dist')));


// parse the body on post req

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// console.log(bodyParser);


/*???
app.get('/', function(req, res) {
  res.sendFile('directory...')
})
*/

app.get('/groceries', (req, res) => {
  Grocery.getAll((err, groceries) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(groceries);
    }
  });
});


/*{name, quantity} = req.body; how does this work??? */

app.post('/groceries', (req, res) => {
  const {name, quantity} = req.body;
  if (!quantity || typeof quantity !== 'number'){
    res.status(400).send({message: 'you didn\'t say how many'});
  }
  Grocery.add(name, quantity, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.sendStatus(201);
  });
});



// app.get('/', function(req, res) {
//   connection.getAll((err, data) => {
//     if (err) {
//       console.log('error in server getAll');
//       res.send(err);
//     } else {
//       res.send(data.JSON());
//     }
//   })
// });


// app.post('/', function(req, res) {
//   connection.add(name, quantity, (err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(data.);
//     }
//   })
// });

// app.post('/')

// server static assets

// parse the body on post req

// define routes for resource /groceries

// GET /groceries, no body, so has to use URL 

// POST /groceries

app.listen(4000, () => console.log('Server listening on localhost: 3000'));
