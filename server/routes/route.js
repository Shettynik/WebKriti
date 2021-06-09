const express = require("express");
const router = express.Router();
const {councilInfo, council, councilAdmins, councilWithEventNames} = require("../controllers/council");
const { eventInfo, createEvent } = require("../controllers/event");

// Council
router.route("/home").get(council);
router.route("/home/:councilName").get(councilInfo);
router.route("/councilAdmins/:councilName").post(councilAdmins);
router.route("/councilEvents/:councilName").post(councilWithEventNames);

// Events
router.route("/events/:councilName/:eventName").get(eventInfo);
router.route("/createEvent").post(createEvent);

module.exports = router;