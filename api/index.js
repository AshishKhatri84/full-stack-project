export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
<title>BFHL API Dashboard</title>
<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: center;
  padding: 40px;
}
.container {
  width: 800px;
}
.card {
  background: #1e293b;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
}
h1 {
  margin-top: 0;
}
button {
  margin-top: 10px;
  padding: 8px 14px;
  background: #22c55e;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
textarea {
  width: 100%;
  height: 120px;
  background: #0f172a;
  color: white;
  border: 1px solid #334155;
  padding: 10px;
  border-radius: 6px;
}
pre {
  background: #0f172a;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
}
.code {
  background: #0f172a;
  padding: 10px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 13px;
}
</style>
</head>
<body>
<div class="container">

<div class="card">
<h1>🚀 BFHL API Deployment</h1>
<p>This API can be tested in <b>3 ways</b>:</p>

<ul>
<li><b>1. Built-in API Tester (below)</b></li>
<li><b>2. Using Postman</b></li>
<li><b>3. Using curl (Terminal)</b></li>
</ul>

<p><b>Endpoint:</b></p>
<div class="code" id="endpoint"></div>
<button onclick="copyEndpoint()">Copy Endpoint</button>

<p><b>Sample JSON Body:</b></p>
<div class="code" id="sampleJson"></div>
<button onclick="copySample()">Copy Sample JSON</button>

<p><b>curl Command:</b></p>
<div class="code" id="curlCmd"></div>
<button onclick="copyCurl()">Copy curl Command</button>

</div>

<div class="card">
<h2>🧪 Built-in API Tester</h2>

<textarea id="input">
{
  "data": ["a","1","334","4","R","$"]
}
</textarea>

<button onclick="sendRequest()">Send POST Request</button>

<h3>Response:</h3>
<pre id="output">Response will appear here...</pre>
</div>

</div>

<script>
const endpoint = window.location.origin + "/api/bfhl";
const sample = JSON.stringify({ data: ["a","1","334","4","R","$"] }, null, 2);
const curl = \`curl -X POST \${endpoint} \\
-H "Content-Type: application/json" \\
-d '\${sample.replace(/\\n/g, "")}'\`;

document.getElementById("endpoint").textContent = endpoint;
document.getElementById("sampleJson").textContent = sample;
document.getElementById("curlCmd").textContent = curl;

function copyEndpoint() {
  navigator.clipboard.writeText(endpoint);
  alert("Endpoint copied!");
}

function copySample() {
  navigator.clipboard.writeText(sample);
  alert("Sample JSON copied!");
}

function copyCurl() {
  navigator.clipboard.writeText(curl);
  alert("curl command copied!");
}

async function sendRequest() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  try {
    const response = await fetch("/api/bfhl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: input
    });

    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}
</script>

</body>
</html>
  `);
}
