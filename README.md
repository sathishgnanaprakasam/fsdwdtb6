# NodeJS Fundamentals

## Table of Contents

[x] What is Node JS?  
[x] Package.json , package-lock.json  
[x] Dependencies Vs dev dependencies  
[x] Understanding Nodemodules  
[x] Built In , third party & custom packages  
[x] Filesystem in nodejs
[x] http module in nodejs - a simple server

## What is Node JS?

- Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

## Client Side Rendering Vs Server Side Rendering

- Client Side Rendering:

  - Initially, the server sends a blank HTML page to the client.
  - The client-side JavaScript code runs and fetches the data from the server.
  - The client-side JavaScript code renders the data on the client-side.
  - The client sees the final HTML page with the data.

- Server Side Rendering:

  - The server fetches the data from the database.
  - The server renders the data into the HTML page.
  - The server sends the final HTML page with the data to the client.

## Version Number

1. Major Version: Major changes in the software.
2. Minor Version: Minor changes in the software.
3. Patch Version: Bug fixes in the software.

## dependencies Vs dev dependencies

- Dependencies: Dependencies are the packages that are required for the application to run.
- Dev Dependencies: Dev dependencies are the packages that are required for the development of the application.

next() function in Express.js

- The next() function is used to pass control to the next middleware function.

## Understanding Nodemodules

- Node modules are the libraries that are used in the Node.js application.

## Built In , third party & custom packages

- Built-in packages: The packages that are provided by Node.js.
  - http: The http module provides a way of working with http.
  - fs: The fs module provides a way of working with the file system.
  - path: The path module provides a way of working with directories and file paths.
  - os: The os module provides a way of working with the operating system.(os.mkdir(), os.rmdir())
- Third-party packages: The packages that are provided by the third-party developers.
  - **nodemon:** nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  - **express:** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - **mongoose:** Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
  - **axios:** Axios is a promise-based HTTP client for the browser and Node.js.
  - **body-parser:** Node.js body parsing middleware or **express.json()**.
  - **cookie-parser:** Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
  - **cors:** CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.(Cross-Origin Resource Sharing)
  - **dotenv:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
  - **jsonwebtoken:** JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
  - **bcryptjs:** Optimized bcrypt in JavaScript with zero dependencies.
  - **multer:** Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
  - **nodemailer:** Nodemailer is a module for Node.js applications to allow easy as cake email sending.
  - **morgan:** HTTP request logger middleware for node.js.
- Custom packages: The packages that are created by the developers.
  - **my-package:** A custom package created by the developer.
  - **logger:** A custom package created by the developer.

## Terminal Commands

- `npm -v`: To check the npm version.
- `npm init`: To create a package.json file.
- `npm install <package-name>`: To install a package.
- `npm install <package-name> --save-dev`: To install a package as a dev dependency.
- `npm install`: To install all the dependencies.
- `npm uninstall <package-name>`: To uninstall a package.
- `npm uninstall <package-name> --save-dev`: To uninstall a package as a dev dependency.
- `npm list`: To list all the packages.

## Package.json Vs package-lock.json

- package.json: The package.json file is the heart of the Node.js application. It contains the metadata of the project.

- package-lock.json: The package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree or package.json.

## git merge

- `git merge <branch-name>`: To merge the branch into the current branch.
- merging a branch into another branch is to bring the changes from one branch to another branch.
- the best practice is to merge the main branch into the feature branch and then merge the feature branch into the main branch.

## Expressjs and Middlewares

### Contents

[x] What is express.js?  
[x] What is middleware?  
[x] Custom middlewares  
[x] Launch app.listen()  
[x] Understanding inbuilt middlewares

## What is express.js?

- Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Launch app.listen()

- The app.listen() method is used to bind and listen for connections on the specified host and port.

## PORT Number

- The port number is a way to identify a specific process to which an Internet or other network message is to be forwarded when it arrives at a server.

Range of port numbers:

- Well Known Ports: 0 to 1023
- Registered Ports: 1024 to 49151
- Dynamic Ports: 49152 to 65535

Commonly used port numbers:

- HTTP: 80
- HTTPS: 443
- FTP: 21
- SSH: 22
- SMTP: 25
- POP3: 110

## JSON-SERVER

json-server --port 3001 --watch db.json

[x] What is MVC?
[x] Split our existing code to MVC pattern
[x] Follow upcoming code in MVC pattern
[ ] Getting Connected with MongoDB
[ ] What is Mongoose?
[ ] Creating & understanding Schemas using Mongoose

## What is MVC?

- MVC stands for Model-View-Controller.
- It is a software architectural pattern for implementing user interfaces.
- It divides the application into three interconnected components: Model, View, and Controller.

For the Node.js application:

- Model: The model represents the data, the rules that govern the data, and the relationships between the data.
- View: Instead of view, we use routes in Node.js.
- Controller: The controller is responsible for processing the data and generating the response.

## Setting up Backend Application using NodeJS + ExpressJS + MongoDB

1. Create a new directory.
2. Open the terminal and navigate to the directory.
3. Run the command `npm init` to create a package.json file or run `npm init -y` to create a package.json file with default values.
4. Create a new file `index.js`.
5. Install the required packages using the command `npm install mongoose`.
6. Initialize the repository as a git repository using the command `git init`.
7. Create a `.gitignore` file and add the `node_modules` folder to it.
8. In the `index.js` file, write a code to connect to the MongoDB database.
9. Run the application using the command `node index.js`.
10. Install express using the command `npm install express`.