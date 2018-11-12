function testNoteListWithOneNote(note) {
  var noteList = new NoteList();
  noteList.addNote(note);
  assert.isTrue(noteList.getNotes()[0].text === note.text);
}
var note = new Note("hello");

testNoteListWithOneNote(note);

function testNoteListWithTwoNotes(noteOne, noteTwo) {
  var noteList = new NoteList();
  noteList.addNote(noteOne);
  noteList.addNote(noteTwo);
  assert.isTrue(noteList.getNotes()[0].text === noteOne.text);
  assert.isTrue(noteList.getNotes()[1].text === noteTwo.text);
}

var noteOne = new Note("Hello Anouska");
var noteTwo = new Note("Hello Henry");

testNoteListWithTwoNotes(noteOne, noteTwo);
