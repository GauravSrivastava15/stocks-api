const express = require("express")
const router = express.Router();

const {getAllProfile} = require("../controller/stock")
router.route("/profile").get(getAllProfile)

const {getAllStats} = require("../controller/stock")
router.route("/stat").get(getAllStats)

const {getAllCharts} = require("../controller/stock")
router.route("/chart").get(getAllCharts)

module.exports = router;