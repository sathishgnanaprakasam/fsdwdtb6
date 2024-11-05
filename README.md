# Databases

- [x] Introduction to database
- [x] intro to mysql engines
- [x] What is mysql?
- [x] basic queries - create db, table
- [x] insert, update, alter
- [x] select - where clause, distinct
- [x] groupby, order, offset, limit
- [x] Normalization, select queries
- [x] Joins, subqueries
- [x] Pros and Cons of relational databases
- [x] DB model design
- [x] Relational Database Vs Non Relational Database

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

### View all rows and all columns from a table

```sql
SELECT * FROM products;
```

### To select specific columns from a table

```sql
SELECT id, name FROM products;
```

### To select specific rows from a table

```sql
SELECT * FROM products WHERE id = 1;
```

More Examples:

```sql
SELECT * FROM products WHERE price > 10000;
SELECT * FROM products WHERE price BETWEEN 1000 AND 5000;
SELECT * FROM products WHERE name LIKE 'L%';
SELECT * FROM products WHERE name LIKE '%e';
SELECT * FROM products WHERE name LIKE '%e%';
select * from products where name like 'L%' and price > 10000;
select * from products where name like 'L%' or price > 10000;
```

### Char Vs Varchar:

- CHAR is fixed length and VARCHAR is variable length.
- CHAR is faster than VARCHAR.
- CHAR is used when the length of the column is fixed.
- VARCHAR is used when the length of the column is variable.

### Update Data in a Table

```sql
UPDATE products SET price = 60000 WHERE id = 1;
```

### Add a Column to a Table

```sql
ALTER TABLE products ADD description TEXT;
```

### Update Data in a Table

```sql
UPDATE products SET description = 'This is a laptop' WHERE id = 1;
```

### Delete a Column from a Table

```sql
ALTER TABLE products DROP description;
```

### Delete Data from a Table

```sql
DELETE FROM products WHERE id = 1;
```

### products table with multiple product name entries and their prices

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
| 11  | Laptop   | 60000 | 10       |
| 12  | Mobile   | 25000 | 20       |
| 13  | Tablet   | 12000 | 30       |
| 14  | Desktop  | 45000 | 15       |
| 15  | Printer  | 6000  | 25       |
| 16  | Desktop  | 50000 | 15       |
| 17  | Printer  | 7000  | 25       |

### insert query for the above table

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
(10, 'Headset', 1500, 70),
(11, 'Laptop', 60000, 10),
(12, 'Mobile', 25000, 20),
(13, 'Tablet', 12000, 30),
(14, 'Desktop', 45000, 15),
(15, 'Printer', 6000, 25),
(16, 'Desktop', 50000, 15),
(17, 'Printer', 7000, 25);
```

Questions:

1. Find the total price of all products.

```sql
SELECT SUM(price) FROM products;
```

or

```sql
SELECT SUM(price * quantity) FROM products;
```

2. Find the average price of each product.

```sql
SELECT name, AVG(price) FROM products GROUP BY name;
```

### Normalization

- Normalization is the process of organizing data in a database.
- It is used to reduce redundancy and improve data integrity.
- It will be done by dividing the tables into multiple tables and creating relationships between them.

Example:

Before Normalization:

Products Table:

| id  | name    | price | quantity | category    |
| --- | ------- | ----- | -------- | ----------- |
| 1   | Laptop  | 50000 | 10       | Computers   |
| 2   | Mobile  | 20000 | 20       | Electronics |
| 3   | Tablet  | 10000 | 30       | Electronics |
| 4   | Desktop | 40000 | 15       | Computers   |
| 5   | Printer | 5000  | 25       | Accessories |
| 6   | Scanner | 3000  | 35       | Accessories |

```sql
select category from products where name = 'Laptop';
```

Products Table:

| id  | name    | price | quantity | category_id |
| --- | ------- | ----- | -------- | ----------- |
| 1   | Laptop  | 50000 | 10       | 2           |
| 2   | Mobile  | 20000 | 20       | 1           |
| 3   | Tablet  | 10000 | 30       | 1           |
| 4   | Desktop | 40000 | 15       | 2           |
| 5   | Printer | 5000  | 25       | 3           |
| 6   | Scanner | 3000  | 35       | 3           |

```sql
CREATE TABLE categories (
    id INT,
    name CHAR(50)
);
```

```sql
INSERT INTO categories (id, name) VALUES
(1, 'Electronics'),
(2, 'Computers'),
(3, 'Accessories');
```

```sql
ALTER TABLE products ADD category_id INT;
```

```sql
UPDATE products SET category_id = 2 WHERE id = 1;
UPDATE products SET category_id = 1 WHERE id = 2;
UPDATE products SET category_id = 1 WHERE id = 3;
UPDATE products SET category_id = 2 WHERE id = 4;
UPDATE products SET category_id = 3 WHERE id = 5;
UPDATE products SET category_id = 3 WHERE id = 6;
```

Categories Table:

| id  | name        |
| --- | ----------- |
| 1   | Electronics |
| 2   | Computers   |
| 3   | Accessories |

Question:

- Find the category of Laptop.

using subqueries:

```sql
select name from categories where id = (select category_id from products where name = 'Laptop');
```

### Joins

- Joins are used to combine rows from two or more tables based on a related column between them.

Types of Joins:

1. Inner Join: Returns rows when there is a match in both tables.
2. Outer Join
   - Left Outer Join: Returns all rows from the left table and the matched rows from the right table.
   - Right Outer Join: Returns all rows from the right table and the matched rows from the left table.
   - Full Outer Join: Returns all rows when there is a match in either left or right table.

### Pros and Cons of Relational Databases

Pros:

- Data Integrity: Ensures that the data is accurate and consistent.
- Data Security: Provides access control and data encryption.
- Data Consistency: Ensures that the data is consistent across the database.
- Data Flexibility: Supports complex queries and transactions.
- Data Scalability: Supports large amounts of data and users.

Cons:

- Performance: Slower performance compared to NoSQL databases.
- Scalability: Limited scalability compared to NoSQL databases.
- Cost: Higher cost compared to NoSQL databases.
- Complexity: More complex to set up and maintain compared to NoSQL databases.

### DB Model Design

- Database model design is the process of designing the structure of the database.
- It involves creating tables, columns, and relationships between them.

Example:

Books Online Store Application

Features:

- Users can browse books by category.
- Users can search for books by title or author.
- Users can add books to their cart and checkout.

Tables:

1. Users Table
2. Books Table
3. Categories Table
4. Cart Table
5. Orders Table

Relationships:

- Users Table: One-to-Many with Cart Table, One-to-Many with Orders Table
- Books Table: Many-to-One with Categories Table
- Cart Table: Many-to-One with Users Table, Many-to-One with Books Table
- Orders Table: Many-to-One with Users Table, Many-to-Many with Books Table

Columns:

- Users Table: id, name, email, password
- Books Table: id, title, author, price, category_id
- Categories Table: id, name
- Cart Table: id, user_id, book_id, quantity
- Orders Table: id, user_id, book_id, quantity, total_price

### Relational Database Vs Non Relational Database

Relational Database:

- Structured Data: Data is stored in tables with rows and columns.
- Relationships: Supports relationships between tables.
- SQL: Uses SQL to query and manipulate data.

Non-Relational Database:

- Unstructured Data: Data is stored in documents, key-value pairs, or graphs.
- No Relationships: Does not support relationships between data.
- No SQL: Uses NoSQL to query and manipulate data.

Examples:

Relational Database: MySQL, PostgreSQL, Oracle, Microsoft SQL Server

Non-Relational Database: MongoDB, CouchDB, Cassandra, Redis
