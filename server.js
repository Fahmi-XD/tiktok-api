const express = require('express');
const cors = require('cors');
const server = require('http');
const bodyParser = require('body-parser');

const tiktokRouter = require('./Router/tiktok-router');

const app = express();
const http = server.createServer(app);
const port = 6060;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ data: 'Hello from backend!' });
});

app.use('/tiktok', tiktokRouter);

http.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
