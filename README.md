# MongoDB Atlas PoC

## Overview
A sample Node.js application demonstrating MongoDB Atlas integration with basic CRUD functionality.

## MongoDB Atlas Cluster Setup
Go to https://www.mongodb.com/cloud/atlas
Create a free shared cluster
Add a user (username/password)
Add your IP
Get connection string (e.g., mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority)

## 🛠 Setup

1. Clone the repo
2. Create `.env` with your MongoDB URI
3. Run `npm install && npm start`
4. Access at `http://localhost:3000`

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Sample Commands (CRUD functionality)

1. Create User (POST /user)

```
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Smith",
    "email": "alice@example.com"
  }'
```
2. Read User (GET /user/:id)

```curl http://localhost:3000/user/64b7f4c3e1a83a1c2df3e456```

3. Update User (PUT /user/:id)
```
curl -X PUT http://localhost:3000/user/64b7f4c3e1a83a1c2df3e456 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson"
  }'
```
4. Delete User (DELETE /user/:id)
```curl -X DELETE http://localhost:3000/user/64b7f4c3e1a83a1c2df3e456```
