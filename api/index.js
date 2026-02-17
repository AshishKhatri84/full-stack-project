export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BFHL API</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        h1 {
          margin-bottom: 10px;
          font-size: 28px;
        }

        p {
          opacity: 0.9;
        }

        .endpoint {
          background: rgba(0,0,0,0.4);
          padding: 12px;
          border-radius: 8px;
          margin-top: 20px;
          font-family: monospace;
          font-size: 14px;
          word-break: break-all;
        }

        .badge {
          display: inline-block;
          margin-top: 15px;
          padding: 6px 12px;
          border-radius: 20px;
          background: #00c853;
          font-size: 12px;
          font-weight: bold;
        }

        footer {
          margin-top: 20px;
          font-size: 12px;
          opacity: 0.7;
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          background: #00c853;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #00e676;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 BFHL API is Live</h1>
        <p>Your serverless function is successfully deployed on Vercel.</p>

        <div class="endpoint">
          POST /api/bfhl
        </div>

        <div class="badge">Status: Online</div>

        <button onclick="copyEndpoint()">Copy Endpoint</button>

        <footer>
          Built by Ashish Khatri
        </footer>
      </div>

      <script>
        function copyEndpoint() {
          const text = window.location.origin + "/api/bfhl";
          navigator.clipboard.writeText(text);
          alert("Endpoint copied to clipboard!");
        }
      </script>
    </body>
    </html>
  `);
}
