const Inventory = require("../models/Inventory.js");
const { HTTP_STATUS, SERVER } = require("../constants/index.js");

const inventoryController = {
  async index(req, res) {
    const instock = req.query.instock;
    try {
      const query = instock ? { instock: { $lt: 100 } } : {};
      const inventories = await Inventory.find(query);

      return res.json({
        success: true,
        message: "Get All inventories Successfully",
        data: inventories,
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
