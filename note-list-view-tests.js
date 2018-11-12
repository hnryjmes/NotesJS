function testNoteListViewWithTwoNotes(noteList) {
  var noteListView = new NoteListView(noteList);
  var text1 = noteList.getNotes()[0].text;
  var text2 = noteList.getNotes()[1].text;
  assert.isTrue(noteListView.getView() === "<ul><li><div>" + text1 + "</div></li><li><div>" + text2 + "</div></li></ul>");
}

var noteList = new NoteList();
noteList.createNote("hello");
noteList.createNote("goodbye");
testNoteListViewWithTwoNotes(noteList);

function testNoteListViewWithNoNotes(noteList) {
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getView() === "<ul></ul>");
}

var noteList = new NoteList();
testNoteListViewWithNoNotes(noteList);

function testNoteListViewWithOneNote(noteList) {
  var noteListView = new NoteListView(noteList);
  var text1 = noteList.getNotes()[0].text;
  assert.isTrue(noteListView.getView() === "<ul><li><div>" + text1 + "</div></li></ul>");
}

var noteList = new NoteList();
noteList.createNote("hello");
testNoteListViewWithOneNote(noteList);
