const express = require('express');
const cors = require('cors');
const app = express();
const tasks = require('./routes/tasks');
const port = 3000;

tasks(app);

app.use(cors());

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Listening on port ${port}`));
