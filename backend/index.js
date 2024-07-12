const express = require('express');
const cors = require('cors')
const db = require('./db')
const bodyparser = require('body-parser');
const app = express();
app.use(cors())
const port = 3081;
app.use(express.json());
app.use(bodyparser.json());
const taskManagerRoutes = require('./Routes/taskManagerRoutes');

app.use("/", taskManagerRoutes);
app.use("/addTask", taskManagerRoutes);
app.use("/:id", taskManagerRoutes);
app.listen(port, () => {
    console.log(`server is listning ${port}`)
})