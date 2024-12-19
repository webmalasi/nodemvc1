const express = require("express");
const app= express();
app.use(express.json());

const PORT =3009;

const usersroutes = require("./app/routes/api");
app.use("/api",usersroutes);
app.listen(PORT,()=>{

   console.log(`Server is running at http://localhost:${PORT}`);

});