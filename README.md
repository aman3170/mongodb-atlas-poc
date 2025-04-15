# MongoDB Atlas PoC

## Overview
A sample Node.js application demonstrating MongoDB Atlas integration with basic CRUD functionality.

## MongoDB Atlas Cluster Setup
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free shared cluster
3. Add a user (username/password)
4. Add your IP
5. Get connection string (e.g., mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority)

## 🛠 Setup

1. Clone the repo
2. Create `.env` with your MongoDB URI
3. Run `npm install && npm start`
4. Access at `http://localhost:3000`

<img width="337" alt="image" src="https://github.com/user-attachments/assets/b3aea619-7313-4933-83b0-abe976b7fb22" />


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
Save the _id from the output to use in the next commands.

2. Read User (GET /user/:id)

```
curl http://localhost:3000/user/<id>
```

3. Update User (PUT /user/:id)
```
curl -X PUT http://localhost:3000/user/<id> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson"
  }'
```
4. Delete User (DELETE /user/:id)
```
curl -X DELETE http://localhost:3000/user/<id>
```
