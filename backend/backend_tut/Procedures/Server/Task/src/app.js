// USE npx nodemon server.js to keep ther server running

// Creation of server
const express = require('express');

const app = express();

module.exports = app;

// Middleware
app.use(express.json());

const notes = [];

// POST /notes
app.post('/notes', (req, res) => {
    // console.log(req.body);
    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully"
    });
});

// GET /notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "note fetched successfully",
        notes: notes
    })
})

// DELETE /notes/:index, index being dynamic (params), colon represents a dynamic value
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;
    delete notes[ index ];
    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const description = req.body.description;
    notes[ index ].description = description;

    res.status(200).json({
        message: "note updated successfully"
    })
})

/*
note = {
    title: "My first note",
    description: "This is a note"
}

const notes = [
    {
        title: "My first note",
        description: "This is a note"
    },
    {
        title: "My second note",
        description: "This is a note"
    }
]
*/