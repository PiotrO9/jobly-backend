# Jobly API

A simple Express.js API for job listings management.

## Features

- Get all job listings
- Get job by ID
- Create new job
- Update existing job
- Delete job

## Setup

1. Clone the repository
2. Install dependencies:
```
npm install
```
3. Create a `.env` file with the following variables:
```
PORT=3000
NODE_ENV=development
```

## Running the application

### Development mode
```
npm run dev
```

### Production mode
```
npm start
```

## API Endpoints

### GET /api/jobs
Returns a list of all jobs

### GET /api/jobs/:id
Returns a specific job by ID

### POST /api/jobs
Creates a new job
```json
{
  "title": "Job Title",
  "company": "Company Name",
  "location": "Location",
  "salary": "Salary Range",
  "description": "Job Description"
}
```

### PUT /api/jobs/:id
Updates an existing job

### DELETE /api/jobs/:id
Deletes a job

## Technologies Used

- Express.js
- Node.js
- dotenv
- cors 