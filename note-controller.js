//TODO: delete and rewrite using TDD approach

(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.render = function() {
    document.getElementById('app').innerHTML = this.noteListView.getView();
  };

  exports.NoteController = NoteController;
})(this);

var noteList = new NoteList();
var noteController = new NoteController(noteList);
noteController.render();
