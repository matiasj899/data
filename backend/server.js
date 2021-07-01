const dotenv = require("dotenv");
const express = require("express");
const connectDb = require("./src/config/db");
const cors=require('cors')
dotenv.config({
  path: "./src/config/config.env",
});
connectDb();
const app = express();
app.use(cors())

const user = require("../backend/src/routes/user");
const region = require("../backend/src/routes/region");
const pais = require("../backend/src/routes/pais");
const ciudad = require("../backend/src/routes/Ciudad");
const compania = require("../backend/src/routes/companias");
const contactos = require("../backend/src/routes/contactos");
const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log("EJECUTANDO SERVER EN", process.env.NODE_ENV)
);

process.on("unhandledRejection", (err, promise) => {
  console.log("Errores", err.message);
  server.close(() => process.exit(1));
});
//midlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const path = require("path");

//rutas
app.get('/',(req,res)=>{
  res.send("hello world")
})
app.use("/Data-Warehouse/User", user);
app.use("/Data-Warehouse/Region", region);
app.use("/Data-Warehouse/Pais", pais);
app.use("/Data-Warehouse/Ciudad", ciudad);
app.use("/Data-Warehouse/Company", compania);
app.use("/Data-Warehouse/Contactos", contactos);

//static
