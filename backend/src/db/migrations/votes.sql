CREATE TABLE votes(
   id SERIAL PRIMARY KEY,
   userId INTEGER,
   songId INTEGER,
   FOREIGN KEY(userId) REFERENCES users(id),
   FOREIGN KEY(songId) REFERENCES song(id)
);