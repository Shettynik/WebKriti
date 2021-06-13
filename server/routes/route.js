const express = require("express");
const { addMember, getMember } = require("../controllers/member");
const { Login } = require("../controllers/auth");
const router = express.Router();
const {councilInfo, council, councilAdmins, councilWithEventNames} = require("../controllers/council");
const { eventInfo, createEvent, eventImages, deleteEvent } = require("../controllers/event");

// Council
router.route("/councils").get(council);
router.route("/councils/:councilName").get(councilInfo);
router.route("/councilAdmins/:councilName").get(councilAdmins);
router.route("/councilEvents/:councilName").get(councilWithEventNames);

// Events
router.route("/events/:councilName/:eventName").get(eventInfo);
router.route("/eventImages/:councilName/:eventName").get(eventImages);
router.route("/createEvent").post(createEvent);
router.route("/deleteEvent/:councilName/:eventName").delete(deleteEvent);

//Login
router.route("/login").post(Login);

//Member
router.route("/addMember/:councilName").post(addMember);
// router.route("/getMember/:councilName").get(getMember);

//EventImages


module.exports = router;