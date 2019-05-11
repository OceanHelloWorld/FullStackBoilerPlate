const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost', 
  user : 'root',
  password : '',
  database : 'grocery_list',

});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to mysql in db!');
});


// connection.query('SELECT * FROM grocery_items', (err, data) => {
//   console.log(err ? err : data)
// })


module.exports = connection;


// connection.query