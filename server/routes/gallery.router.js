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
            res.sendStatus(201)
        })
        .catch((error) => {
            poolError('PUT', error)
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    const sqlText = `
        SELECT * FROM gallery
            ORDER BY
                likes DESC,
                description;
    `;

    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            poolError('GET', error)
        })
}); // END GET Route

const poolError = (routeType, err) => {
    console.log(`Error with ${routeType} request:`, err);
    res.sendStatus(500)
}

module.exports = router;