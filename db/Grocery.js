const connection = require('./index');

// get all the groceries
const getAll = function(cb) {
  var queryString = 'SELECT * FROM grocery_items';
  connection.query(queryString, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

// add to the groceries
// const add = function(params, cb) {
//   var queryString = "INSERT INTO grocery_items (name, quantity) VALUES (?)";
//   connection.query(queryString, params, (err, data) => {
//     cb(err, data);
//   });
// };

const add = function(name, quantity, cb) {
  var queryString = "INSERT INTO grocery_items (name, quantity) VALUES (?, ?)";
  connection.query(queryString, [name, quantity], (err, data) => {
    cb(err, data);
  });
};

// add('carrot cake', 12, (err, data) => {
//   if (err) {console.log(err)};
//   getAll((err, data) => console.log(err ? err : data));
// });

module.exports = {
  getAll,
  add,
};
