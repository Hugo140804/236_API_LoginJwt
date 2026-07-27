const express = require('express');
const router = express.Router();
const { Komik } = require('../models');
const komikController = require('../controller/komikcontroller'); // <-- TAMBAHKAN BARIS INI!

