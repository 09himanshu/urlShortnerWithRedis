URL Shortener with Node.js & Redis

📌 Overview

This is a simple URL Shortener like Bit.ly, built using Node.js and Redis. It generates short URLs for long URLs and stores the mappings in Redis for fast lookups.

🛠️ Tech Stack

Node.js (Express/Fastify) – Backend API

Redis – In-memory key-value store for fast URL lookups

Docker (Optional) – For running Redis in a container

🚀 Features

✅ Shorten long URLs instantly
✅ Retrieve the original URL using the short code
✅ Store mappings in Redis for quick access
✅ Auto-expiry for shortened URLs (configurable)

📂 Project Structure

📦 url-shortener
 ┣ 📂 src
 ┃ ┣ 📜 server.js          # Main server file
 ┃ ┣ 📜 redisClient.js     # Redis connection
 ┃ ┣ 📜 routes.js          # API routes
 ┣ 📜 package.json         # Dependencies
 ┣ 📜 .env                 # Environment variables
 ┣ 📜 README.md            # Project documentation

🛠 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Install Dependencies

npm install

3️⃣ Run Redis (Locally or with Docker)

Option 1: Run Redis Locally

Make sure Redis is installed and running:

redis-server --requirepass mypassword

Option 2: Run Redis with Docker

docker run -d --name redis -p 6379:6379 redis --requirepass mypassword

4️⃣ Set Up Environment Variables

Create a .env file:

PORT=3000
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=mypassword

5️⃣ Start the Server

npm start

The API will be running on http://localhost:3000 🎉

🔗 API Endpoints

1️⃣ Shorten a URL

POST /shorten

Request Body:

{
  "url": "https://example.com"
}

Response:

{
  "shortUrl": "http://localhost:3000/abc123"
}

2️⃣ Redirect to Original URL

GET /:shortCode

Example:

GET http://localhost:3000/abc123

➡️ Redirects to https://example.com

🛠 How Redis is Used

Short Code Storage: Stores short URL → original URL mappings (SET shortCode originalURL)

Fast Lookups: Retrieves the original URL in constant time (GET shortCode)

Auto-expiry (Optional): Set TTL on short URLs (SETEX shortCode expiry originalURL)