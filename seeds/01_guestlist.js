/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('guestlist').del();
  await knex('guestlist').insert([
    {
      id: 1,
      guest_firstname: 'John',
      guest_lastname: 'Doe',
      rsvp: 'confirmed',
      contact_email: 'john.doe@example.com',
      group: 'family',
      dietary_restrictions: null, // No restrictions
    },
    {
      id: 2,
      guest_firstname: 'Jane',
      guest_lastname: 'Smith',
      rsvp: 'pending',
      contact_email: 'jane.smith@example.com',
      group: 'friends',
      dietary_restrictions: 'Vegetarian', // Example restriction
    },
    {
      id: 3,
      guest_firstname: 'Robert',
      guest_lastname: 'Brown',
      rsvp: 'declined',
      contact_email: 'robert.brown@example.com',
      group: 'family',
      dietary_restrictions: null, // No restrictions
    },
    {
      id: 4,
      guest_firstname: 'Emily',
      guest_lastname: 'Davis',
      rsvp: 'confirmed',
      contact_email: 'emily.davis@example.com',
      group: 'coworkers',
      dietary_restrictions: 'Gluten-Free', // Example restriction
    },
    {
      id: 5,
      guest_firstname: 'Michael',
      guest_lastname: 'Wilson',
      rsvp: 'pending',
      contact_email: 'michael.wilson@example.com',
      group: 'friends',
      dietary_restrictions: null, // No restrictions
    },
    {
      id: 6,
      guest_firstname: 'Sarah',
      guest_lastname: 'Johnson',
      rsvp: 'confirmed',
      contact_email: 'sarah.johnson@example.com',
      group: 'family',
      dietary_restrictions: 'Nut Allergy', // Example restriction
    },
    {
      id: 7,
      guest_firstname: 'David',
      guest_lastname: 'Martinez',
      rsvp: 'confirmed',
      contact_email: 'david.martinez@example.com',
      group: 'friends',
      dietary_restrictions: null, // No restrictions
    },
    {
      id: 8,
      guest_firstname: 'Sophia',
      guest_lastname: 'Anderson',
      rsvp: 'confirmed',
      contact_email: 'sophia.anderson@example.com',
      group: 'coworkers',
      dietary_restrictions: 'Vegan', // Example restriction
    },
  ]);
};
