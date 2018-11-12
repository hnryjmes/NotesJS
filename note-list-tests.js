function testNoteListWithOneNote(text) {
  var noteList = new NoteList();
  noteList.createNote(text);
  assert.isTrue(noteList.getNotes()[0].text === text);
}

testNoteListWithOneNote("hello");

function testNoteListWithTwoNotes(textOne, textTwo) {
  var noteList = new NoteList();
  noteList.createNote(textOne);
  noteList.createNote(textTwo);
  assert.isTrue(noteList.getNotes()[0].text === textOne);
  assert.isTrue(noteList.getNotes()[1].text === textTwo);
}

testNoteListWithTwoNotes("Hello Anouska", "Hello Henry");
