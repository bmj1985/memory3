const database = require('./database-connection');

module.exports = {
  returnFirstItem(arr) {
    return arr[0];
  },
  list() {
    return database('game');
  },
  read(id) {
    return database('game')
      .where('id', id)
      .then(this.returnFirstItem);
  },
  create(game) {
    return database('game')
      .insert(game)
      .returning('*')
      .then(this.returnFirstItem);
  },
  update(id, game) {
    return database('game')
      .update(game)
      .where('id', id)
      .returning('*')
      .then(this.returnFirstItem);
  },
  delete(id) {
    return database('game')
      .delete()
      .where('id', id);
  },
};
