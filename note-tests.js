function testNoteText(text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
}

testNoteText("Hello");

function testGetNoteText(text) {
  var note = new Note(text);
  assert.isTrue(note.getNoteText() === text);
}

testGetNoteText("Hello");
