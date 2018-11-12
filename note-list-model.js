(function(exports) {
  function NoteList(note) {
    this.note = note;
  }

  NoteList.prototype.getNote = function() {
    return this.note;
  };

  exports.NoteList = NoteList;
})(this);
