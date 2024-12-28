const express = require("express");
const app= express();
app.use(express.json());

const PORT =3009;
require("dotenv").config();

const payment_routes = require("./app/routes/api");
app.use("/api",payment_routes);
app.listen(PORT,()=>{

   console.log(`Server is running at http://localhost:${PORT}`);

});