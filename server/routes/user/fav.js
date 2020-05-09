const express = require('express');
const router = express.Router();
const Fav = require("../../database/models/favorites");


router.post("/user/favorites/", (req, res) => {
    res.json({
        
    })
})

router.get("/user/favorites/", (req, res) => {
    res.json()
})