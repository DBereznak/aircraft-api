// Package Imports
const express = require('express');
require('./db/connect');

// Internal Imports
const aircraftRouter = require('./router/aircraft')

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Models
const aircraft = require('./models/aircraft');

// Routes
app.use(aircraftRouter);

// Server 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

