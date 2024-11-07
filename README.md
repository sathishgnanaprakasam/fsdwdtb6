# NodeJS Fundamentals

## Table of Contents

[x] What is Node JS?  
[x] Package.json , package-lock.json  
[x] Dependencies Vs dev dependencies  
[x] Understanding Nodemodules  
[ ] Built In , third party & custom packages  
[ ] Filesystem in nodejs

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

## Understanding Nodemodules

- Node modules are the libraries that are used in the Node.js application.

## Built In , third party & custom packages

- Built-in packages: The packages that are provided by Node.js.
  - http: The http module provides a way of working with http.
- Third-party packages: The packages that are provided by the third-party developers.
  - nodemon: nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- Custom packages: The packages that are created by the developers.

## Terminal Commands

- `npm -v`: To check the npm version.
- `npm init`: To create a package.json file.
- `npm install <package-name>`: To install a package.
- `npm install <package-name> --save-dev`: To install a package as a dev dependency.
- `npm install`: To install all the dependencies.
- `npm uninstall <package-name>`: To uninstall a package.
- `npm uninstall <package-name> --save-dev`: To uninstall a package as a dev dependency.
- `npm list`: To list all the packages.

