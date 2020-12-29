const router = require("express").Router();
const fs = require('fs');
let notes = require('../../db/db.json');


router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
    let notesKept = notes.filter(note => note.id !== req.params.id);
    notes = notesKept; 

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
}
)


router.post("/notes", (req, res) => {
let note = req.body;
let id = (notes.length + 1).toString();
console.log(id);
note.id = id;
notes.push(note);
fs.writeFileSync('./db/db.json', JSON.stringify(notes));
res.json(notes);
});



 module.exports = router;