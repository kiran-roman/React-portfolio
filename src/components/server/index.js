
const express = require('express');
const mysql = require('mysql');
const cors =require('cors');
const app = express();
const port = 3001;

app.use(express.json());


app.use(cors());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Kiran007',
  database: 'loginsystem',
});

app.post('/log', (req, res) => {
    
  const uemail=req.body.uemail;
  const upassword=req.body.upassword;
   // Query the MySQL database to check if the username and password are valid
   const queryString = `SELECT * FROM users WHERE email = '${uemail}' AND password = '${upassword}'`;
   db.query(queryString, (error, results) => {
     if (error) {
       console.log(error);
       res.status(500).send('Server error');
     } else {
       if (results.length > 0) {
         res.status(200).send('Login successful');
       } else {
         res.status(401).send('Invalid username or password');
       }
     }
   });

});
// create a new user
app.post('/sign', (req, res) => {
    
  const uemail=req.body.uemail;
  const upassword=req.body.upassword;

  db.query(
    'INSERT INTO users (email,password)VALUES( ?, ?)',
    [uemail, upassword],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error creating user');
      } else {
        res.status(201).send('User created');
      }
    }
  );
  db.query('commit');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });