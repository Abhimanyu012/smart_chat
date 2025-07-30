# Smart Chat Backend

This is the backend for the Smart Chat application. It uses Node.js, Express, and MongoDB (with Mongoose).

## Features
- User authentication
- JWT-based security
- MongoDB database connection
- RESTful API structure

## Getting Started

### Prerequisites
- Node.js
- MongoDB (local or remote)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file (see `.env.example` for template)
4. Start the server:
   ```bash
   npm run dev
   ```

### Environment Variables
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port
- `JWT_SECRET`: Secret for JWT tokens
- `FRONTEND_URL`: Allowed frontend origin for CORS

## Project Structure
```
backend/
├── src/
│   ├── app.js
│   ├── db/
│   │   └── dbconfig.js
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── utils/
├── .env
├── .env.example
├── package.json
└── README.md
```

## License
MIT
