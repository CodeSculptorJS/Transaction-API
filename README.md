<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
</head>
<body>

<h1>Backend Project on NestJS</h1>

<p>This backend project is built using <strong>NestJS</strong> and is containerized using Docker.</p>

<h2>Requirements</h2>
<ul>
    <li>Docker</li>
</ul>

<h2>Environment Setup</h2>
<p>Before running the project, you need to create an <code>.env</code> file in the root directory of the project with the following environment variables:</p>
<pre>
POSTGRES_PASSWORD=1111
POSTGRES_USER=admin
POSTGRES_DB=postgres
</pre>

<h2>Getting Started</h2>
<p>To start the project, simply run the following command:</p>
<pre><code>make dev</code></pre>

<h2>API Endpoints</h2>

<h3>1. Get All Transactions (Paginated)</h3>
<p>Retrieve all transactions with pagination (6 pages, 10 files per page):</p>
<pre><code>GET http://localhost:8080/transactions?page=1&limit=10</code></pre>

<h3>2. Get a Transaction by ID</h3>
<p>Retrieve a single transaction by its ID:</p>
<pre><code>GET http://localhost:8080/transactions/:id</code></pre>

<h3>3. Update a Transaction by ID</h3>
<p>Update a transaction by its ID. You need to pass the fields to be updated in the request body:</p>
<pre><code>PUT http://localhost:8080/transactions/:id</code></pre>

<h3>4. Delete a Transaction by ID</h3>
<p>Delete a transaction by its ID:</p>
<pre><code>DELETE http://localhost:8080/transactions/:id</code></pre>

<h2>Docker Setup</h2>
<p>The project is designed to run inside Docker. The backend service connects to a PostgreSQL database. The database is also containerized and configured using the environment variables specified above.</p>

<p>Once you have created the <code>.env</code> file and ensured Docker is running, simply execute <code>make dev</code> to build and run the containers. The backend service will be available on <code>http://localhost:8080</code>.</p>

</body>
</html>
