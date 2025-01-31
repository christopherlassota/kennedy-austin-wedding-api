import express from "express";
import * as guestlistController from "../controllers/guestlist-controller.js";

const guestlistRouter = express.Router();
guestlistRouter.route("/").get(guestlistController.findAll).put(guestlistController.RSVPResponse)
guestlistRouter.route("/rsvp-status").get(guestlistController.findRSVPstatus)

export default guestlistRouter