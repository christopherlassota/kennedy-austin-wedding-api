/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('guestlist').del();
  await knex.raw(`
    INSERT INTO guestlist (
        guest_firstname, guest_lastname, rsvp, contact_email, group_name, 
        dietary_restrictions, address, city, province, postal_code
    ) VALUES
    ('Kennedy', 'Laing', 'Pending', NULL, 'family', NULL, '207-380 Marina Drive', 'Chestermere', 'AB', 'T1X 0B8'),
    ('Austin', 'Bercier', 'Pending', NULL, 'family', NULL, '207-380 Marina Drive', 'Chestermere', 'AB', 'T1X 0B8'),
    ('Claudine', 'Laing', 'Pending', NULL, 'family', NULL, '366 Patterson Boulevard Southwest', 'Calgary', 'AB', 'T3H 3N6'),
    ('Kevin', 'Neish', 'Pending', NULL, 'family', NULL, '366 Patterson Boulevard Southwest', 'Calgary', 'AB', 'T3H 3N6'),
    ('Ted', 'Laing', 'Pending', NULL, 'family', NULL, '206-15392 16A Street', 'White Rock', 'BC', 'V4A 1S9'),
    ('Minoo', 'Naeini', 'Pending', NULL, 'family', NULL, '206-15392 16A Street', 'White Rock', 'BC', 'V4A 1S9'),
    ('Keeley', 'Laing', 'Pending', NULL, 'family', NULL, '14 Country Village Gate Northeast', 'Calgary', 'AB', 'T3K 0L5'),
    ('Austin', 'Greenall', 'Pending', NULL, 'family', NULL, '14 Country Village Gate Northeast', 'Calgary', 'AB', 'T3K 0L5'),
    ('Madison', 'Laing', 'Pending', NULL, 'family', NULL, '128 Willowmere Way', 'Chestermere', 'AB', 'T1X 0E1'),
    ('Christopher', 'Lassota', 'Pending', NULL, 'family', NULL, '128 Willowmere Way', 'Chestermere', 'AB', 'T1X 0E1'),
    ('Cooper', 'Laing', 'Pending', NULL, 'family', NULL, NULL, NULL, NULL, NULL),
    ('Rachel', 'Bekker', 'Pending', NULL, 'family', NULL, NULL, NULL, NULL, NULL),
    ('Raymond', 'Lemire', 'Pending', NULL, 'family', NULL, '520-255 The Donway West', 'North York', 'ON', 'M3B 3M3'),
    ('Marie', 'Lemire', 'Pending', NULL, 'family', NULL, '520-255 The Donway West', 'North York', 'ON', 'M3B 3M3'),
    ('Bernice', 'Goulding', 'Pending', NULL, 'family', NULL, '1509 Eagleview Drive', 'Pickering', 'ON', 'L1V 5H2'),
    ('Edward', 'Laing', 'Pending', NULL, 'family', NULL, '1509 Eagleview Drive', 'Pickering', 'ON', 'L1V 5H2'),
    ('Joyce', 'Laing', 'Pending', NULL, 'family', NULL, '550-24 Southport Street', 'Toronto', 'ON', 'M6S 4Z1'),
    ('Gared', 'Daniel', 'Pending', NULL, 'family', NULL, '550-24 Southport Street', 'Toronto', 'ON', 'M6S 4Z1'),
    ('Linda', 'Laing', 'Pending', NULL, 'family', NULL, '515-80 Front Street East', 'Toronto', 'ON', 'M5E 1T4'),
    ('Scott', 'Newnham', 'Pending', NULL, 'family', NULL, '515-80 Front Street East', 'Toronto', 'ON', 'M5E 1T4'),
    ('Lemire', 'Family', 'Pending', NULL, 'family', NULL, '111 Plateau Crescent', 'North York', 'ON', 'M3C 1M9'),
    ('Melissa', 'Fox', 'Pending', NULL, 'friends', NULL, '12637 Lakeshore Road', 'Wainfleet', 'ON', 'L0S 1V0'),
    ('Jim', 'Graph', 'Pending', NULL, 'friends', NULL, '12637 Lakeshore Road', 'Wainfleet', 'ON', 'L0S 1V0'),
    ('Natalie', 'Campbell', 'Pending', NULL, 'friends', NULL, '1332 75 Avenue Southwest', 'Calgary', 'AB', 'T2V 0S6'),
    ('Jason', 'Bercier', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Evonna', 'Bercier', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Ellesia', 'Bercier', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Matthew', 'Premuzak', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Ava', 'Bercier', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Manoual', 'Yacop', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Nicholas', 'Bercier', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Courtney', 'Syntak', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Guiseppe', 'Sartore', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Susan', 'Sartore', 'Pending', NULL, 'family', NULL, '254257 Range Road 284', 'Rocky View County', 'AB', 'T1Z 0L2'),
    ('Rita', 'Bercier', 'Pending', NULL, 'family', NULL, '111 Whitehaven Road Northeast', 'Calgary', 'AB', 'T1Y 6A6'),
    ('Daniel', 'McKee', 'Pending', NULL, 'friends', NULL, '216 Hawkmere Close', 'Chestermere', 'AB', 'T1X 0C1'),
    ('Matthew', 'Solda', 'Pending', NULL, 'friends', NULL, NULL, NULL, NULL, NULL),
    ('André', 'Rodriques', 'Pending', NULL, 'friends', NULL, '214 Westchester Way', 'Chestermere', 'AB', 'T1X 1E2'),
    ('Chase', 'Lamoureux', 'Pending', NULL, 'friends', NULL, '247 Springmere Close', 'Chestermere', 'AB', 'T1X 1K1'),
    ('Kyle', 'Lutes', 'Pending', NULL, 'friends', NULL, '11246 75A Avenue', 'Grande Prairie', 'AB', 'T8W 0C3'),
    ('Madison', 'James', 'Pending', NULL, 'friends', NULL, '11246 75A Avenue', 'Grande Prairie', 'AB', 'T8W 0C3'),
    ('Natasha', 'Eden', 'Pending', NULL, 'friends', NULL, '601-55 9A Street Northeast', 'Calgary', 'AB', 'T2E 7J6'),
    ('Jay', 'Peris', 'Pending', NULL, 'friends', NULL, '601-55 9A Street Northeast', 'Calgary', 'AB', 'T2E 7J6'),
    ('Ernest', 'McCutcheon', 'Pending', NULL, 'friends', NULL, '419 Brookmere Crescent Southwest', 'Calgary', 'AB', 'T2W 2R2'),
    ('Melissa', 'McCutcheon', 'Pending', NULL, 'friends', NULL, '419 Brookmere Crescent Southwest', 'Calgary', 'AB', 'T2W 2R2'),
    ('James', 'Hagel', 'Pending', NULL, 'friends', NULL, '316 Windermere Drive', 'Chestemere', 'AB', 'T1X 0B9');
  `);
};
