const Inventory = require("../models/Inventory.js");
const { HTTP_STATUS, SERVER } = require("../constants/index.js");

const inventoryController = {
  async index(req, res) {
    const instock = req.query.instock;
    try {
      const query = instock ? { quantity: { $lt: 100 } } : {};
      const Inventories = await Inventory.find(query);

      return res.json({
        success: true,
        message: "Get All Inventories Successfully",
        data: Inventories,
      });
    } catch (error) {
      if (!SERVER.__PROD__) {
        console.log(`[ERROR] ${error}`);
      }

      return res.status(HTTP_STATUS.SERVER).json({
        success: false,
        message: "SERVER",
      });
    }
  },
};

module.exports = inventoryController;
