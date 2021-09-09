CREATE DATABASE ride_my_way;
CREATE TABLE passenger(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    mobile_number TEXT NOT NULL,
    password VARCHAR NOT NULL,
);
CREATE TABLE driver(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    mobile_number TEXT NOT NULL,
    password VARCHAR NOT NULL,
);