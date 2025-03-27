import initknex from "knex";
import configuration from "../knexfile.js";
const knex = initknex(configuration);

const findAll = async (req, res) => {
  try {
    const result = await knex("guestlist").select(
      "id",
      "guest_firstname",
      "guest_lastname",
      "rsvp",
      "contact_email",
      "group",
      "dietary_restrictions",
      "address",
      "city",
      "province",
      "postal_code"
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: `Unable to retrieve guestlist`,
      error: error.message,
    });
  }
};

const findRSVPstatus = async (req, res) => {
  try {
    const count = await knex("guestlist")
      .select("rsvp")
      .count("* as total")
      .groupBy("rsvp");
    const response = count.reduce((acc, item) => {
      acc[item.rsvp] = item.total;
      return acc;
    }, {});
    const totalGuests = count.reduce((sum, item) => sum + item.total, 0);
    const finalResponse = {
      confirmed: response.confirmed || 0,
      pending: response.pending || 0,
      declined: response.declined || 0,
      totalGuests,
    };
    res.status(200).json(finalResponse);
  } catch (error) {
    res.status(400).json({
      message: "Unable to retrieve RSVP status",
      error: error.message,
    });
  }
};

const RSVPResponse = async (req, res) => {
  try {
    const { guest_firstname, guest_lastname, rsvp } = req.body;
    if (!guest_firstname || !guest_firstname || !rsvp) {
      res.status(400).send("Must include all attributes in request body");
    };
    const guest = await knex('guestlist').where({ guest_firstname, guest_lastname}).first();
    if (!guest) {
      return res.status(404).send("Guest not found")
    };
    const updatedRows = await knex("guestlist")
      .where({ guest_firstname, guest_lastname })
      .update({ rsvp });
    if (updatedRows) {
      return res.status(200).send("RSVP updated successfully");
    } else {
      return res.status(404).send("Guest not found");
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating warehouse",
      error: error.message,
    });
  }
};

const updateGuest = async (req, res) => {
  try {
    const { contact_email } = req.params;
    const updatedData = req.body;

    const updatedRows = await knex("guestlist")
      .where({ contact_email })
      .update(updatedData);

    if (updatedRows) {
      return res.status(200).json({
        message: "Guest updated successfully",
      });
    } else {
      return res.status(404).json({
        message: "Guest not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating guest",
      error: error.message,
    });
  }
};

const deleteGuest = async (req, res) => {
  try {
    const { contact_email } = req.params;

    const deletedRows = await knex("guestlist")
      .where({ contact_email })
      .del();

    if (deletedRows) {
      return res.status(200).json({
        message: "Guest deleted successfully",
      });
    } else {
      return res.status(404).json({
        message: "Guest not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting guest",
      error: error.message,
    });
  }
};

export { findAll, findRSVPstatus, RSVPResponse, updateGuest, deleteGuest };
