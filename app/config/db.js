const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  connection.connect((err)=>{

    if(err)
    {
        throw err;

    }
    else {
        console.log("Database Connected successfully")
    }


  });

  module.exports = connection;
