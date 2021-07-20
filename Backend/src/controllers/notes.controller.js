const notesCrtl = {};

const Note = require('../models/Note');



notesCrtl.getNotes = async (req, res)=> {
    const notes = await Note.find();
    res.json(notes);
}

notesCrtl.createNote = async (req, res)=> {
    
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    
    await newNote.save();
    res.json({message: 'Note saved'});
}

notesCrtl.getNote = async (req, res)=> {
    const note = await Note.findById(req.params.id);
    res.json(note);

}

notesCrtl.updateNote = async (req, res)=> {
    const{ title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    })   
    res.json({message: 'Note Update'})
}

notesCrtl.deleteNote = async (req, res)=> {
    
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'});
}

module.exports = notesCrtl;