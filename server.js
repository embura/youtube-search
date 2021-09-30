const express = require('express');
const routes = require("./src/routes")
const app = express();
const PORT = 3000;
app.use(express.json());

routes(app);

app.listen(PORT, () => console.info(`app running on port ${PORT}`));