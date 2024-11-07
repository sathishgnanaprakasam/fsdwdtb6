# MongoDB

- [ ] Why mongodb?
- [ ] What is collection?
- [ ] creation of database, collections, documents
- [ ] use of operators in find() query
- [ ] What is document?
- [ ] Mongodb vs MySQL
- [ ] find - query & projection

## Why mongodb?

- MongoDB is a NoSQL database, which means it is a non-relational database.
- It is a document-oriented database, which means it stores data in JSON-like documents.
- It is a schema-less database, which means it does not require a predefined schema.
- It is a distributed database, which means it can be scaled horizontally by adding more servers.
- It is a high-performance database, which means it can handle large amounts of data and high traffic.

## What is collection?

- A collection in MongoDB is a group of documents that are stored together in the database.
- Each document in a collection is a JSON-like object that contains key-value pairs.
- Collections are similar to tables in a relational database, but they do not have a fixed schema.
- Collections can be created, updated, and deleted using MongoDB commands.

## creation of database, collections, documents

```javascript
// Create a new database
use mydb;
```

```javascript
// Create a new collection
db.createCollection("users");
```

```javascript
// check the current database
db;
```

```javascript
// show all the databases
show dbs;
```

or

```javascript
// show all the databases
show databases;
```

```javascript
// drop a collection
db.users.drop();
```

```javascript
// drop a database
db.dropDatabase();
```

```javascript
// Insert a document into a collection
// insert a single document
db.users.insertOne({ name: "John Doe", age: 30 });

// insert multiple documents
db.users.insertMany([
  { name: "Jane Doe", age: 25 },
  { name: "Alice Smith", age: 35 },
]);

// delete a single document
db.users.deleteOne({ name: "John Doe" });

// this will delete the first document that matches the query\

// delete multiple documents
db.users.deleteMany({ name: "John Doe" });

// update a single document
db.users.updateOne({ name: "John Doe" }, { $set: { age: 40 } });

// update multiple documents
db.users.updateMany({ name: "John Doe" }, { $set: { age: 40 } });
```
