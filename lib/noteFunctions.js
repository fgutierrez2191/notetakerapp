const fs = require('fs');
const path = require('path');




const verifyNotes = (note) => {
    const title = note.title
    const text = note.text

    if(!title|| typeof title !== 'string') {
        return false
    }
    if(!text || typeof text !== 'string') {
        return false
    }
    return true
}

  const createNotes = (body, noteArray) => {
    const note = body;

    if(body){
        noteArray.push(note);
    } 
    
    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify({ notes: noteArray }, null, 2)
      );
      return note
}

module.exports = {verifyNotes, createNotes};