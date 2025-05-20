USE agencia_viatges;

DELIMITER $$
USE `agencia_viatges`$$

CREATE PROCEDURE `clientAddOrEdit` (
  IN _id INT,
  IN _nom VARCHAR(255),
  IN _cognoms VARCHAR(255),
  IN _telefon VARCHAR(15),
  IN _correu_electronic VARCHAR(255),
  IN _desti_de_viatge VARCHAR(255)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO clients (nom, cognoms, telefon, correu_electronic, desti_de_viatge)
    VALUES (_nom, _cognoms, _telefon, _correu_electronic, _desti_de_viatge);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE clients
    SET
    nom = _nom,
    cognoms = _cognoms,
    telefon = _telefon,
    correu_electronic = _correu_electronic,
    desti_de_viatge = _desti_de_viatge
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
