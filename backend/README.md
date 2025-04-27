# EventSponsors Backend API

A RESTful API for the EventSponsors platform built with Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
```
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/eventsponsors
JWT_SECRET=your_jwt_secret_key
```

3. Start the server:
```
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication

#### Register a new user
- **URL**: `/api/auth/signup`
- **Method**: `POST`
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "organizer" // or "sponsor"
}
```
- **Success Response**: Status 201
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "organizer"
  }
}
```

#### Login a user
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Success Response**: Status 200
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "organizer"
  }
}
```

## Testing with Postman

1. **Start the Backend Server**:
   - Run `npm run dev` to start the development server

2. **Testing Signup**:
   - Open Postman
   - Create a new POST request to `http://localhost:5000/api/auth/signup`
   - Go to the "Body" tab, select "raw" and "JSON"
   - Enter the registration details:
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "password": "password123",
     "role": "organizer"
   }
   ```
   - Send the request
   - You should receive a token and user information in the response

3. **Testing Login**:
   - Create a new POST request to `http://localhost:5000/api/auth/login`
   - Go to the "Body" tab, select "raw" and "JSON"
   - Enter login credentials:
   ```json
   {
     "email": "test@example.com",
     "password": "password123"
   }
   ```
   - Send the request
   - You should receive the same token and user format in the response

4. **Using the JWT Token**:
   - For protected routes (to be implemented), copy the token from the response
   - In your request header, add a key `Authorization` with value `Bearer your_token_here`

## Frontend Integration

To connect your frontend with this backend:

1. Ensure CORS is properly configured (already done in `server.js`)
2. Make API requests to `http://localhost:5000/api/auth/signup` and `http://localhost:5000/api/auth/login`
3. Store the JWT token in localStorage or a secure cookie
4. Include the token in the Authorization header for protected routes 