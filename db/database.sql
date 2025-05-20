CREATE DATABASE IF NOT EXISTS agencia_viatges;

USE agencia_viatges;

CREATE TABLE IF NOT EXISTS clients (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(255) NOT NULL,
    Cognoms VARCHAR(255) NOT NULL,
    Telefon VARCHAR(15) NOT NULL,
    Correu_electronic VARCHAR(255) NOT NULL,
    Desti_de_viatge VARCHAR(255) NOT NULL,
    Data_de_creacio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO clients (Nom, Cognoms, Telefon, Correu_electronic, Desti_de_viatge) VALUES
('Alex', 'Garcia', '123456789', 'alex@example.com', 'Paris'),
('Maria', 'Lopez', '987654321', 'maria@example.com', 'New York'),
('Joan', 'Martínez', '555123456', 'joan@example.com', 'Tokyo'),
('Laura', 'Fernández', '666987654', 'laura@example.com', 'London'),
('Pau', 'Sánchez', '777555123', 'pau@example.com', 'Berlin'),
('Anna', 'Pérez', '888666999', 'anna@example.com', 'Rome'),
('Marc', 'Gómez', '999888777', 'marc@example.com', 'Barcelona'),
('Sara', 'Ruiz', '111222333', 'sara@example.com', 'Madrid'),
('Jordi', 'Hernández', '444555666', 'jordi@example.com', 'Lisbon'),
('Elena', 'Díaz', '777888999', 'elena@example.com', 'Amsterdam');
