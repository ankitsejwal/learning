-- creating a table

CREATE TABLE passengers(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    flight_id INTEGER REFERENCES flights
);

-- insert into table
INSERT INTO passengers (name, flight_id) VALUES ('john', 1);
INSERT INTO passengers (name, flight_id) VALUES ('matthew', 2);
INSERT INTO passengers (name, flight_id) VALUES ('alice', 3);
INSERT INTO passengers (name, flight_id) VALUES ('ayeron', 4);
INSERT INTO passengers (name, flight_id) VALUES ('melba', 5);
INSERT INTO passengers (name, flight_id) VALUES ('Devon', 3);

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
