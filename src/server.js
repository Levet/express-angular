const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const tasks = require('./routes/tasks');
const port = 3000;
const fs = require('fs');

const index = fs.readFileSync('./dist/express-angular/index.html', 'utf8');
app.use(express.json())
// app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cors());
tasks(app);

app.use(express.static(path.join(__dirname, "../dist/express-angular")));

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.send(index);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
