const express = require('express');
const router = express.Router();
const { page } = require("../models/page");
const Data = require("../models/db")

//=================================
//             pages and members
//=================================

router.get("/getData", async (req, res) => {
    const data = await page.find({}).populate('members');
    res.status(200).json(data);
});
router.get("/getStaticData",  (req, res) => {
    res.status(200).json(Data);
});


module.exports = router;
