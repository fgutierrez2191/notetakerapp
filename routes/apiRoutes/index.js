const router = require("express").Router();
const { verifyNotes, createNotes } = require('../../lib/routeFunctions');
const { notes } = require('./db/db.json');

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});


router.post("/notes", (req, res) => {

    req.body.id = notes.length.toString();

    if(!verifyNotes(req.body)) {
        res.status(400).send('Your note is not corret formatted. Please fix it :)');
    } else {
        const note = createNotes(req.body, notes);
        res.json(note);
    }
});



// module.exports = router;