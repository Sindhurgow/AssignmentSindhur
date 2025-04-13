-- Users
INSERT INTO Users (name, email, password, address, role) VALUES
('Alice Admin', 'admin@example.com', '$2a$10$KMZOn6R0JZQpY8Vwul2DiOoY9mAgPR1vOzhEVKcmG7Ru.Kc5boMgi', 'Admin Street', 'admin'),
('Oscar Owner', 'owner@example.com', '$2a$10$KMZOn6R0JZQpY8Vwul2DiOoY9mAgPR1vOzhEVKcmG7Ru.Kc5boMgi', 'Owner Street', 'owner'),
('Usha User', 'user@example.com', '$2a$10$KMZOn6R0JZQpY8Vwul2DiOoY9mAgPR1vOzhEVKcmG7Ru.Kc5boMgi', 'User Lane', 'user');

-- Stores
INSERT INTO Stores (name, email, address) VALUES
('Tech Galaxy', 'tech@store.com', 'Main Tech Hub'),
('Book Nook', 'read@store.com', 'Library Lane');

-- Ratings
INSERT INTO Ratings (storeId, userId, rating) VALUES
(1, 3, 5),
(2, 3, 4);
