<h1>URL Shortener with Node.js & Redis</h1>

<h2>📌 Overview</h2>

<p>This is a simple URL Shortener like Bit.ly, built using <strong>Node.js</strong> and <strong>Redis</strong>. It generates short URLs for long URLs and stores the mappings in Redis for fast lookups.</p>

<hr>

<h2>🛠️ Tech Stack</h2>

<ul>
  <li><strong>Node.js</strong> (Express) – Backend API</li>
  <li><strong>Redis</strong> – In-memory key-value store for fast URL lookups</li>
  <li><strong>Docker</strong> – For running Redis and the Node.js app in containers</li>
</ul>

<hr>

<h2>🚀 Features</h2>

<ul>
  <li>✅ <strong>Shorten long URLs instantly</strong></li>
  <li>✅ <strong>Retrieve the original URL using the shortcode</strong></li>
  <li>✅ <strong>Store mappings in Redis for quick access</strong></li>
  <li>✅ <strong>Auto-expiry for shortened URLs</strong> (configurable)</li>
</ul>

<hr>

<h2>🛠 Setup & Installation</h2>

<ol>
  <li><strong>Clone the Repository</strong></li>
  <pre>git clone https://github.com/09himanshu/urlShortnerWithRedis.git
cd url-shortener</pre>

  <li><strong>Run the Application Using Docker</strong></li>
  <p>This project uses Docker to handle both the Redis service and the Node.js application. Ensure you have Docker and Docker Compose installed on your machine.</p>
  
  <p>To run the app using Docker, use the following command:</p>
  <pre>sudo docker-compose up</pre>

  <p>This will start up both Redis and the Node.js server. Once the containers are up and running, the API will be accessible at <a href="http://localhost:8080/api/v1/ping">http://localhost:8080/api/v1/ping</a> 🎉</p>
  
  <li><strong>Alternative: Run Redis Locally</strong></li>
  <p>If you don't want to use Docker for Redis, you can run Redis locally by using the following command:</p>
  <pre>redis-server --requirepass mypassword</pre>
  <p>Make sure your Redis configuration in the <code>.env</code> file matches your local setup.</p>
</ol>

<hr>

<h2>🔗 API Endpoints</h2>

<h3>1️⃣ Shorten a URL</h3>
<p><strong>POST /shorten</strong></p>

<p><strong>Request Body:</strong></p>
<pre>
  "url": "http://localhost:8080/api/v1/shortUrl"
  "body": {
    "url": "https://google.com"
  }
</pre>

<p><strong>Response:</strong></p>
<pre>
{
  status: true, 
  message: "http://localhost:8080/api/v1/ping/shortUrl/qwe4344fdv"
}
</pre>

<h3>2️⃣ Redirect to Original URL</h3>
<p><strong>GET /:shortCode</strong></p>

<p>Example:</p>
<pre>GET http://localhost:8080/api/v1/ping/shortUrl/qwe4344fdv</pre>

<p>➡️ Redirects to <a href="http://localhost:8080/api/v1/ping/shortUrl/qwe4344fdv">https://example.com</a></p>

<hr>

<h2>🛠 How Redis is Used</h2>

<ul>
  <li><strong>Short Code Storage:</strong> Stores short URL → original URL mappings (<code>SET shortCode originalURL</code>)</li>
  <li><strong>Fast Lookups:</strong> Retrieves the original URL in constant time (<code>GET shortCode</code>)</li>
  <li><strong>Auto-expiry (Optional):</strong> Set TTL on short URLs (<code>SETEX shortCode expiry originalURL</code>)</li>
</ul>

<hr>

<h2>🔧 Additional Notes</h2>

<ul>
  <li>This project is built with <strong>Node.js</strong> and uses <strong>Redis</strong> to efficiently handle URL mappings with low latency.</li>
  <li>The app uses <strong>Docker</strong> to containerize both Redis and the Node.js server. This makes it easier to set up and ensures a consistent environment across all systems.</li>
  <li>You can easily extend this project to add features such as analytics, custom short codes, or more advanced expiry options.</li>
  <li>Feel free to contribute and make improvements!</li>
</ul>

<hr>
