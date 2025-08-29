# Full Stack REST API – VIT Submission

## Project Overview
This project is a REST API built with Node.js and deployed as a Vercel serverless function.
It accepts an array via a POST request and returns processed information including odd/even numbers, alphabets, special characters, sum, and a concatenated string in alternating caps.

---

## API Endpoint
Method: POST  
Route: /bfhl  
Deployed URL: https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl

Request Body Format:
{
  "data": [1, 2, "hello", "@", 5, "world"]
}

---

## Response Format
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

Notes:
- user_id format: {full_name_ddmmyyyy} (full name in lowercase)
- Numbers in the arrays are returned as strings
- concat_string concatenates all alphabetical characters in reverse order with alternating caps

---

## Technology Stack
- Node.js (JavaScript)
- Vercel (Serverless hosting for REST API)

---

## Setup Instructions (For Local Testing)
1. Clone the repository:
   git clone <your-repo-url>
   cd project-root

2. Install dependencies:
   npm install

3. Run the API locally (optional):
   vercel dev

4. Test the API:
   curl -X POST "http://localhost:3000/api/bfhl" -H "Content-Type: application/json" -d '{"data": [1, 2, "hello", "@", 5, "world"]}'

---

## Example Request & Response
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

---

## Submission
Use this Vercel API endpoint for submission: https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl
