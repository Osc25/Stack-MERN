const { Router } = require('express');
const router = Router();
const { getNote, getNotes, createNote, deleteNote, updateNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;