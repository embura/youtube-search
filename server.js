const express = require('express');
require("dotenv").config();
const routesV1 = require("./src/routes")
const app = express();
const router = express.Router()
const PORT = 3000;
app.use(express.json());

app.use("/v1", routesV1(router));


// routes(app);


app.listen(PORT, () => console.info(`app running on port ${PORT}`));