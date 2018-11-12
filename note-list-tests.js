function testNoteList(note) {
  var noteList = new NoteList(note);
  assert.isTrue(noteList.getNote() === note);
}

testNoteList(new Note("hello"));
