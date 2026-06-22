const express = require('express');
const cors = require('cors');

const uploadRoutes = require('./src/routes/upload');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/upload', uploadRoutes);

module.exports = app;