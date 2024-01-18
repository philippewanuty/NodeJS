const createUsers = `
  CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  avatar VARCHAR NULL,
  created at TIMESTAMP DEFAULT CURRENT TIMESTAMP,
  updated at TIMESTAMP DEFAULT CURRENT TIMESTAMP
)
`;