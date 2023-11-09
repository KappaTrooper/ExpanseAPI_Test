const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: '56555655', // replace with your MySQL password
  database: 'SpaceShips'
});

connection.connect();

// Endpoint to get all ships
app.get('/ships', (req, res) => {
  connection.query('SELECT * FROM Ships', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
