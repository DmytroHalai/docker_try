const express = require("express");
const router = express.Router();

router.get("/your_time", (req, res) => {
    res.json({ time: new Date().toLocaleTimeString() });
});

module.exports = router;
