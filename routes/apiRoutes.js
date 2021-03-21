// Set variables and dependencies
let theNotes = require('../db/db.json');
const fs = require('fs');
//unique uuid generator
const { v4: uuidv4 } = require('uuid');

// ROUTING
module.exports = (app) => {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get('/api/notes', function (req, res) {
    //console.log(theNotes);
    //response is theNotes json file
    res.json(theNotes);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    //add id to new note
    newNote.id = uuidv4();
    //push new note to array
    theNotes.push(newNote);
    //rewrite db.json with newNote
    fs.writeFileSync('./db/db.json', JSON.stringify(theNotes));
    res.json(theNotes);
  });

  // API Delete Requests - By ID
  // ---------------------------------------------------------------------------
  app.delete('/api/notes/:id', (req, res) => {
    const noteToDelete = req.params.id;
    theNotes = theNotes.filter(theNote => theNote.id !== noteToDelete);
    fs.writeFileSync("./db/db.json", JSON.stringify(theNotes));
    res.json(theNotes);
  });
};
