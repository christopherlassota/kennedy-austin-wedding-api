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
      "group_name",
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
    const { guest_firstname, guest_lastname, rsvp, contact_email, dietary_restrictions = null } = req.body;
    if (!guest_firstname || !guest_firstname || !rsvp || !contact_email) {
      res.status(400).send("Must include all attributes in request body");
    };
    const guest = await knex('guestlist').where({ guest_firstname, guest_lastname}).first();
    if (!guest) {
      return res.status(404).send("Guest not found")
    };
    const updateData = {
      rsvp,
      contact_email,
    }
    if (dietary_restrictions !== null) {
      updateData.dietary_restrictions = dietary_restrictions;
    };
    const updatedRows = await knex("guestlist")
      .where({ guest_firstname, guest_lastname })
      .update(updateData);
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

const addGuest = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { 
      guest_firstname, 
      guest_lastname, 
      contact_email = "", 
      group_name = "", 
      dietary_restrictions = "", 
      address = "", 
      city = "", 
      province = "", 
      postal_code = "",
      rsvp = 'pending'
    } = req.body;

    if (!guest_firstname || !guest_lastname) {
      console.log('Missing guest information');
      return res.status(400).json({
        message: "Guest first name and last name are required"
      });
    }

    // Create guest object with validated data
    const guestData = {
      guest_firstname,
      guest_lastname,
      rsvp,
      contact_email,
      group_name,
      dietary_restrictions,
      address,
      city,
      province,
      postal_code
    };

    console.log('Attempting to insert guest with data:', guestData);
    
    const [newGuestId] = await knex("guestlist")
      .insert(guestData)
      .returning('id');

    console.log('New guest ID:', newGuestId);

    // Fetch the newly created guest
    const addedGuest = await knex("guestlist")
      .where({ id: newGuestId })
      .first();

    return res.status(201).json({
      message: "Guest added successfully",
      data: addedGuest
    });

  } catch (error) {
    console.error('Insert operation failed:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({
      message: "Error adding guest",
      error: error.message,
      stack: error.stack
    });
  }
};

const updateGuest = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { guest_firstname, guest_lastname, updatedData } = req.body;

    if (!guest_firstname || !guest_lastname) {
      console.log('Missing guest name information');
      return res.status(400).json({
        message: "Guest first name and last name are required"
      });
    }

    if (!updatedData || Object.keys(updatedData).length === 0) {
      console.log('No fields to update');
      return res.status(400).json({
        message: "No fields provided to update"
      });
    }

    // Clean up the updatedData by removing any undefined or null values
    const cleanedUpdateData = Object.fromEntries(
      Object.entries(updatedData).filter(([_, value]) => value !== null && value !== undefined)
    );

    console.log('Executing update query for guest:', guest_firstname, guest_lastname);
    console.log('Update data:', cleanedUpdateData);
    
    const updatedRows = await knex("guestlist")
      .where({ 
        guest_firstname,
        guest_lastname 
      })
      .update(cleanedUpdateData);

    console.log('Rows affected by update:', updatedRows);

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
    console.error('Update operation failed:', error);
    res.status(500).json({
      message: "Error updating guest",
      error: error.message,
    });
  }
};

const deleteGuest = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { guest_firstname, guest_lastname } = req.body;

    if (!guest_firstname || !guest_lastname) {
      console.log('Missing guest name information');
      return res.status(400).json({
        message: "Guest first name and last name are required"
      });
    }

    console.log('Executing delete query for guest:', guest_firstname, guest_lastname);
    
    const deletedRows = await knex("guestlist")
      .where({ 
        guest_firstname,
        guest_lastname 
      })
      .del();

    console.log('Rows affected by delete:', deletedRows);

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
    console.error('Delete operation failed:', error);
    res.status(500).json({
      message: "Error deleting guest",
      error: error.message,
    });
  }
};

export { findAll, findRSVPstatus, RSVPResponse, updateGuest, deleteGuest, addGuest };
