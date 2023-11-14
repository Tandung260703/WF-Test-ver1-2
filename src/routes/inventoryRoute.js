const express = require("express");

const router = express.Router();

const inventoryController = require("../controllers/inventoryController.js");
const { authenticateToken } = require("../middlewares/authMiddleware.js");

// @route GET /api/v1/inventories
// @query (bool)instock
// @desc Get all inventories
// @access Private
router.get("/", authenticateToken, inventoryController.index);

module.exports = router;
