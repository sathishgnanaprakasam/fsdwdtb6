# Databases

- [x] Introduction to database
- [x] intro to mysql engines
- [x] What is mysql?
- [x] basic queries - create db, table
- [x] insert, update, alter
- [ ] select - where clause, distinct
- [ ] groupby, order, offset, limit

## Introduction to database

- Database is a collection of data stored in a computer system.
- Data can be stored in the form of tables or objects.
- Data stored in the form of tables is called structured or relational data.
- Data stored in the form of objects is called unstructured data.

## Intro to DB Engines

- Database engines are database management systems that are used to manage the data stored in the database.
- There are different types of database engines available in the market.
  - SQL Engines: MySQL, PostgreSQL, Oracle, Microsoft SQL Server
  - NoSQL Engines: MongoDB, CouchDB, Cassandra, Redis
  - Embedded Engines: SQLite, H2

## Intro to Mysql Engines

- MySQL is an open-source relational database management system.
- It is one of the most popular database engines in the world.
- MySQL is used to store and manage data in the form of tables.

## What is SQL?

- SQL stands for Structured Query Language.
- It is a standard language used to interact with the database.
- SQL is used to create, read, update, and delete data in the database.
- SQL is categorized into:
  - DDL (Data Definition Language): CREATE, ALTER, DROP
  - DML (Data Manipulation Language): INSERT, UPDATE, DELETE
  - DQL (Data Query Language): SELECT
  - DCL (Data Control Language): GRANT, REVOKE
  - DTL (Data Transaction Language): COMMIT, ROLLBACK

## Basic Queries

### Show Existing Databases

```sql
SHOW DATABASES;
```

### Show Version of MySQL

```sql
SELECT VERSION();
```

### Show Current Date and Time

```sql
SELECT NOW();
```

### To view the currently selected database

```sql
SELECT DATABASE();
```

### Create a Database

```sql
CREATE DATABASE mydb;
```

### Use a Database

```sql
USE mydb;
```

### Drop a Database

```sql
DROP DATABASE mydb;
```

### Show Tables in a Database

```sql
SHOW TABLES;
```

Sample Tables:

Products Table:

| id  | name     | price | quantity |
| --- | -------- | ----- | -------- |
| 1   | Laptop   | 50000 | 10       |
| 2   | Mobile   | 20000 | 20       |
| 3   | Tablet   | 10000 | 30       |
| 4   | Desktop  | 40000 | 15       |
| 5   | Printer  | 5000  | 25       |
| 6   | Scanner  | 3000  | 35       |
| 7   | Keyboard | 1000  | 40       |
| 8   | Mouse    | 500   | 50       |
| 9   | Speaker  | 2000  | 60       |
| 10  | Headset  | 1500  | 70       |

### Create a Table

```sql
CREATE TABLE products (
    id INT,
    name CHAR(50),
    price DECIMAL(10, 2),
    quantity INT
);
```

### Describe a Table

```sql
DESCRIBE products;
```

or

```sql
desc products;
```

### Add Primary Key separately after creating a table

```sql
ALTER TABLE products ADD PRIMARY KEY (id);
```

### Insert Data into a Table

```sql
INSERT INTO products (id, name, price, quantity) VALUES
(1, 'Laptop', 50000, 10),
(2, 'Mobile', 20000, 20),
(3, 'Tablet', 10000, 30),
(4, 'Desktop', 40000, 15),
(5, 'Printer', 5000, 25),
(6, 'Scanner', 3000, 35),
(7, 'Keyboard', 1000, 40),
(8, 'Mouse', 500, 50),
(9, 'Speaker', 2000, 60),
(10, 'Headset', 1500, 70);
```

### Delete all rows from a table

```sql
DELETE FROM products;
```

or

```sql
TRUNCATE TABLE products;
```

### View all rows from a table

```sql
SELECT * FROM products;
```
