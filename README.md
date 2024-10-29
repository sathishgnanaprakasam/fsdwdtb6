# Job Portal Application

## Description

This is a job portal application that allows users to search for jobs and apply for them.

## Features

- Job Search Page: Users can search for jobs based on the job title, location, and company name.

## Technologies

**Frontend:** React  
**Backend:** Node.js  
**Database:** MongoDB  
**Framework**: Express  
**Authentication:** JWT

## Installation

1. Clone the repository
2. Install dependencies
3. Run the client

## License

This project is licensed under the MIT License.

## Author

Sathish Gnanaprakasam

### API Versioning

The API versioning is done using the URL path. For example, to access version 1 of the API, the URL would be `http://localhost:5000/api/v1/`.

- The advantage of this approach is that it allows for multiple versions of the API to be maintained simultaneously.

### FrontEnd Routes

- Home Page (Search Jobs), route: `/`
  Users would be able to type a keyword matching the job titles to search for jobs.

- Search Results Page, route: '/jobs/page/:page'
  Users would be able to see the search results based on the search query and paginated.

- Job Details Page, route: '/jobs/:id'
  Users would be able to see the details of a job and apply for it.
