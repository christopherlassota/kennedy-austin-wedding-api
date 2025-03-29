import express from "express";
import * as guestlistController from "../controllers/guestlist-controller.js";

const guestlistRouter = express.Router();
guestlistRouter.route("/")
  .get(guestlistController.findAll)
  .post(guestlistController.addGuest)
  .delete(guestlistController.deleteGuest);

guestlistRouter.route("/update")
  .put(guestlistController.updateGuest);

guestlistRouter.route("/rsvp")
  .put(guestlistController.RSVPResponse);

guestlistRouter.route("/rsvp-status")
  .get(guestlistController.findRSVPstatus);

export default guestlistRouter;