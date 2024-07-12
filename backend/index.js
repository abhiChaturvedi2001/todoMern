const express = require('express');
const cors = require('cors')
const bodyparser = require('body-parser');
const app = express();
require('dotenv').config();
const db = require('./db')
app.use(cors())
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyparser.json());
const taskManagerRoutes = require('./Routes/taskManagerRoutes');

app.use("/", taskManagerRoutes);
app.use("/addTask", taskManagerRoutes);
app.use("/:id", taskManagerRoutes);
app.listen(PORT, () => {
    console.log(`server is listning ${PORT}`)
})