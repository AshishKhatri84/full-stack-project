# Full Stack REST API – VIT Submission

A serverless REST API built with Node.js and deployed on Vercel. This API processes an array sent via a POST request and returns categorized data including odd/even numbers, alphabets, special characters, sum of numbers, and a concatenated string with alternating caps.

## 🚀 Live Demo / API Endpoint

POST Route: /bfhl  
Deployed URL: https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl

> Note: This is a serverless API hosted on Vercel. You can test it using a POST request with JSON data.

## 📁 Project Structure

full-stack-api/
├── api/               # Serverless API functions
│   └── bfhl.js        # Main API endpoint logic
├── package.json       # Node.js dependencies
└── README.md          # Project documentation

## 🛠️ Technologies Used

- Backend / API:
  - Node.js
  - JavaScript
  - Vercel (Serverless deployment)

## ⚙️ Setup Instructions (Local Testing)

1. Clone the Repository:
   git clone <your-repo-url>
   cd project-root

2. Install Dependencies:
   npm install

3. Run the API Locally (Optional):
   vercel dev

4. Test the API:
   curl -X POST "http://localhost:3000/api/bfhl" \
   -H "Content-Type: application/json" \
   -d '{"data": [1, 2, "hello", "@", 5, "world"]}'

## 🧩 Features

- Accepts an array via POST request
- Categorizes array elements into:
  - Odd numbers
  - Even numbers
  - Alphabets
  - Special characters
- Calculates sum of numeric elements
- Returns concatenated alphabetical string in reverse order with alternating caps
- Returns user details (user_id, email, roll_number) in response

## 📦 Example Request & Response

Request:
{ "data": ["a", "1", "334", "4", "R", "$"] }

Response:
{
  "is_success": true,
  "user_id": "ashish_khatri_01012000",
  "email": "44234ashish@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

> Notes:
> - user_id format: {full_name_ddmmyyyy} (all lowercase)
> - Numbers in arrays are returned as strings
> - concat_string combines all alphabetical characters in reverse order with alternating caps

## 🐞 Known Issues

- None reported. Fully functional as a serverless API.
