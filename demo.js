const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

app.use(express.urlencoded({ extended: true }));

db.serialize(() => {
  db.run("CREATE TABLE notes (note TEXT)");
});

app.get('/', (req, res) => {
  let notes = '';
  db.each("SELECT rowid AS id, note FROM notes", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    notes += `${row.id}: ${row.note}\n`;
  }, () => {
    res.send(`
      <h1>Notepad</h1>
      <form action="/add" method="POST">
        <textarea name="note"></textarea><br>
        <button type="submit">Add Note</button>
      </form>
      <pre>${notes}</pre>
    `);
  });
});

app.post('/add', (req, res) => {
  db.run(`INSERT INTO notes(note) VALUES(?)`, [req.body.note], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
  res.redirect('/');
});

app.listen(3000, () => console.log('Server started'));
