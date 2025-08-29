# Full-Stack BFHL API Project

This is a full-stack project deployed on **Vercel**.  
It provides an API endpoint `/api/bfhl` that processes data and returns structured output such as odd numbers, even numbers, alphabets, special characters, sum, and concatenated strings.

---

## 🚀 Features
- Accepts JSON input with mixed data (numbers, strings, special characters).
- Separates odd numbers, even numbers, alphabets, and special characters.
- Computes sum of numbers.
- Creates a concatenated string with reversed capitalization.
- Returns metadata including user ID, email, and roll number.

---

## 📂 Project Structure
project-root/
│── api/
│ └── bfhl.js # API logic
│── package.json
│── vercel.json # (optional) Vercel configuration
│── README.md # Documentation (this file)

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-link>
cd project-root
2. Install Dependencies
If your project requires dependencies, install them:

bash
Copy code
npm install
(If it's a pure API function, you may not need dependencies.)

3. Run Locally
To test locally before deployment:

bash
Copy code
vercel dev
This will start a local development server at:

bash
Copy code
http://localhost:3000/api/bfhl
4. Deploy to Vercel
Deploy using the following command:

bash
Copy code
vercel --prod --archive=tgz
This ensures deployment even with large numbers of files.

After deployment, you will get a live URL like:

arduino
Copy code
https://<your-project-name>.vercel.app/api/bfhl
📬 Example Request
Using cURL
bash
Copy code
curl -X POST "https://<your-project-name>.vercel.app/api/bfhl" \
-H "Content-Type: application/json" \
-d "{\"data\": [1, 2, \"hello\", \"@\", 5, \"world\"]}"
Using JavaScript fetch
javascript
Copy code
fetch("https://<your-project-name>.vercel.app/api/bfhl", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    data: [1, 2, "hello", "@", 5, "world"]
  })
})
.then(res => res.json())
.then(console.log);
✅ Example Response
json
Copy code
{
  "is_success": true,
  "user_id": "ashish_khatri_01012000",
  "email": "44234ashish@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1","5"],
  "even_numbers": ["2"],
  "alphabets": ["HELLO","WORLD"],
  "special_characters": ["@"],
  "sum": "8",
  "concat_string": "DlRoWoLlEh"
}
📌 Notes
Ensure your project name in Vercel follows naming rules:

Only lowercase letters, numbers, ., _, -

Cannot contain ---

Disable Vercel Authentication if you want anyone to access your endpoint.

Use --archive=tgz in deployment if file count exceeds 15,000.