const express = require("express");

const router = express.Router();

const inventoryController = require("../controllers/inventoryController.js");

// @route GET /api/v1/inventories
// @query page
// @desc Get all inventories
router.get("/", inventoryController.index);

module.exports = router;
