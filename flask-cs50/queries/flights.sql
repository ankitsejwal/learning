-- creating a table
CREATE TABLE flights(
    id SERIAL PRIMARY KEY,
    origin VARCHAR NOT NULL,
    destination VARCHAR NOT NULL,
    duration INTEGER NOT NULL
);

-- insert into table
INSERT INTO flights (origin, destination, duration) VALUES ('sydney', 'melbourne', 120);
INSERT INTO flights (origin, destination, duration) VALUES ('melbourne', 'adelaide', 80);
INSERT INTO flights (origin, destination, duration) VALUES ('perth', 'alice spring', 240);
INSERT INTO flights (origin, destination, duration) VALUES ('darwin', 'ayers rock', 150);
INSERT INTO flights (origin, destination, duration) VALUES ('gold coast', 'melbourne', 180);
INSERT INTO flights (origin, destination, duration) VALUES ('Hobart', 'Devornport', 60);

-- SELECT query
SELECT * FROM flights;
SELECT origin, destination FROM flights;
-- WHERE clause
SELECT * FROM flights WHERE id = 3;
SELECT * FROM flights WHERE origin = 'melbourne';
SELECT * FROM flights WHERE duration > 100;
-- adding more power by adding functions
SELECT avg(duration) FROM flights;
SELECT avg(duration) FROM flights WHERE origin = 'melbourne';
SELECT count(*) FROM flights;
SELECT count(*) FROM flights WHERE origin = 'melbourne';
SELECT * FROM flights WHERE origin LIKE '%bou%';
-- UPDATE clause
UPDATE flights
    SET duration = '120'
    WHERE origin = 'melbourne'
    AND destination = 'adelaide';
-- DELETE
DELETE FROM flights WHERE destination = 'melbourne';

SELECT * FROM flights LIMIT 2;
SELECT * FROM flights order by duration;
SELECT * FROM flights order by duration DESC;
SELECT * FROM flights order by duration DESC LIMIT 3;

-- GROUP BY
SELECT origin, count(*) FROM flights GROUP BY origin;
SELECT origin, count(*) FROM flights WHERE origin GROUP BY origin;
-- GROUP BY HAVING
SELECT origin, count(*) FROM flights GROUP BY origin HAVING count(*) > 1;
