const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

// Middleware 

app.use(cors());
app.use(express.json());

