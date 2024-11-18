### Status Codes

- 200: OK
- 201: Created
- 301: Moved Permanently
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Example Data:

```json
{
  "title": "Software Developer",
  "description": "Developing, testing, and deploying web and mobile applications",
  "location": "Coimbatore",
  "salary": "100000",
  "experience": "0-3 years",
  "skills": ["Python", "FastAPI", "PostgreSQL", "Git", "GitHub", "AWS"]
}
```

## API Endpoints

### Authentication Endpoints

Public Endpoints:

- POST /api/v1/auth/register : Register a new user
- POST /api/v1/auth/login : Login a user

Protected Endpoints:

- POST /api/v1/auth/logout : Logout a user
- GET /api/v1/auth/me : Get the current user

### Job Endpoints

Public Endpoints:

- GET /api/v1/jobs : Get all jobs
- GET /api/v1/jobs/{job_id} : Get a job by id

Protected Endpoints:

Roles Allowed: ['admin', 'employer']

- POST /api/v1/jobs : Create a new job
- PUT /api/v1/jobs/{job_id} : Update a job by id
- DELETE /api/v1/jobs/{job_id} : Delete a job by id
