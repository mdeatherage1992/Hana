PSQL Glossary - SEMICOLONS MATTER!

Create DB

CREATE DATABASE api;

Create Table

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

Create Instance of Table
INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');


Show DBs and owners
forward slash and "l"

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
CREATE TABLE areas (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  sales INTEGER,
  manager_name VARCHAR(30),
  assistant_name VARCHAR(30)
);

DELETE FROM products;

INSERT INTO areas (name, sales, manager_name, assistant_name, area)
  VALUES ('Area X', 800304, 'Rick Martinez', 'Evelyn', ST_GeometryFromText('POLYGON((50.6373 3.0750,50.6374 3.0750,50.6374 3.0749,50.63 3.07491,50.6373 3.0750))')),
  ('Area Y', 800304, 'Rick Martinez', 'Evelyn', ST_GeometryFromText('POLYGON((45.6373 8.0750,45.6374 8.0750,45.6374 8.0749,45.63 8.07491,45.6373 8.0750))')),
  ('Area Z', 800304, 'Rick Martinez', 'Evelyn', ST_GeometryFromText('POLYGON((60.6373 12.0750,60.6374 12.0750,60.6374 12.0749,60.63 12.07491,60.6373 12.0750))')),
  ('Area Q', 800304, 'Rick Martinez', 'Evelyn', ST_GeometryFromText('POLYGON((10.6373 14.0750,10.6374 14.0750,10.6374 14.0749,10.63 14.07491,10.6373 14.0750))')),
    ('Area B', 800304, 'Rick Martinez', 'Evelyn', ST_GeometryFromText('POLYGON((90.6373 40.0750,90.6374 40.0750,90.6374 40.0749,90.63 40.07491,90.6373 40.0750))'));

    INSERT INTO humans (name, email, slug, point )
      VALUES ('Matt','matt1@gmail.com','ABSHFUEE454',
      ST_GeometryFromText('POINT(50 3)')),
      ('Jerry','jerry1@gmail.com','ABSHFUEE454',
      ST_GeometryFromText('POINT(90 40)')),
      ('Martin','martin1@gmail.com','ABSHFUEE454',
      ST_GeometryFromText('POINT(60 12)')),
      ('Suzie','suzie1@gmail.com','ABSHFUEE454',
      ST_GeometryFromText('POINT(10 14)')),
      ('Johnny Apple','johnnyapple1@gmail.com','ABSHFUEE454',
      ST_GeometryFromText('POINT(45 8)')),
      ('Mikey Two Fingers','mikeytwofingers1@gmail.com','ABSHFUEE454',
      ST_GeometryFromText('POINT(40 10)')),
      ('Smarty','smarty1@gmail.com','ABSHFUEE454',
      ST_GeometryFromText('POINT(110 95)'));

CREATE TABLE stores (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

CREATE TABLE humans (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  slug varchar(30),
  point GEOMETRY
);
