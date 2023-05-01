const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE
// Modifying due to stretch goal

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;

    // Add 1 to likes for the item with this galleryId
    const sqlText = `
        UPDATE gallery
            SET likes = (likes + 1)
            WHERE id = $1;
    `;

    pool.query (sqlText, [galleryId])
        .then((result) => {
            poolOkayStatus(res);
        })
        .catch((error) => {
            poolError('PUT /like/:id', error)
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // Get everything from the gallery
    //  Sort it with the highest likes at the top
    //  Then if multiple items have the same like count
    //  sort it by title alphabetically
    const sqlText = `
        SELECT * FROM gallery
            ORDER BY
                likes DESC,
                title;
    `;

    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            poolError(res, 'GET /', error)
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const item = req.body.newGalleryItem;

    // Add item to the database
    const sqlText = `
        INSERT INTO gallery
            (path, description, title)
            VALUES
            ($1, $2, $3);
    `;

    const sqlValues = [
        item.path,
        item.description,
        item.title
    ];

    pool.query(sqlText, sqlValues)
        .then((result) => {
            poolCreateSuccess(res);
        })
        .catch((error) => {
            poolError(res, 'POST /', error)
        })
}); // End POST Route

// DELETE Route
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Delete the item with id from the gallery
    const sqlText = `
        DELETE FROM gallery
            WHERE id=$1;
    `;

    pool.query(sqlText, [id])
        .then((result) => {
            poolOkayStatus(res);
        })
        .catch((error) => {
            poolError(res, 'DELETE /:id', error)
        })
}) // End DELETE Route

const poolError = (res, routeTypeAndRoute, err) => {
    // On Error, log the error
    console.log(`Error with ${routeTypeAndRoute} request:`, err);
    // Send "Internal Server Error" status to client
    res.sendStatus(500)
} // End poolError

const poolCreateSuccess = (res) => {
    // On successful creation within the database,
    //   send "Created status"
    res.sendStatus(201)
} // End poolCreateSuccess

const poolOkayStatus = (res) => {
    // On successful creation within the database,
    //   send "Okay status"
    res.sendStatus(200)
} // End poolOkayStatus

module.exports = router;