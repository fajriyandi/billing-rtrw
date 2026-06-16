const { DatabaseSync: Database } = require('node:sqlite');
const db = new Database('database.sqlite');
const admins = db.prepare('SELECT * FROM admins').all();
console.log(JSON.stringify(admins, null, 2));
db.close();
