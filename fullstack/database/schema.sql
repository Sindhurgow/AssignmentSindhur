CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  address TEXT,
  password TEXT NOT NULL,
  role TEXT CHECK(role IN ('admin', 'user', 'owner')) DEFAULT 'user'
);

CREATE TABLE Stores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  address TEXT
);

CREATE TABLE Ratings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  storeId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  rating INTEGER CHECK(rating BETWEEN 1 AND 5),
  FOREIGN KEY (storeId) REFERENCES Stores(id),
  FOREIGN KEY (userId) REFERENCES Users(id)
);