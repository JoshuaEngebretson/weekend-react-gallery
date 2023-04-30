const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE
// Modifying due to stretch goal

// PUT Route
router.put('/like/:id', (req, res) => {
    // console.log(req.params);
    const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    const sqlText = `
        UPDATE gallery
            SET likes = (likes + 1)
            WHERE id = $1;
    `;

    pool.query (sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            poolError('PUT /like/:id', error)
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
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

router.post('/', (req, res) => {
    const item = req.body.newGalleryItem;

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
})

const poolError = (res, routeTypeAndRoute, err) => {
    console.log(`Error with ${routeTypeAndRoute} request:`, err);
    res.sendStatus(500)
}

const poolCreateSuccess = (res) => {
    // On successful creation within the database,
    // send "Created status"
    res.sendStatus(201)
}

module.exports = router;