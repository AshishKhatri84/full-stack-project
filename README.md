# Full Stack REST API – VIT Submission

## Project Overview
This project is a REST API built with Node.js and deployed as a Vercel serverless function.  
It accepts an array via a `POST` request and returns processed information including odd/even numbers, alphabets, special characters, sum, and a concatenated string in alternating caps.

## API Endpoint
**Method:** `POST`  
**Route:** `/bfhl`  
**Deployed URL:**  
https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl

**Request Body Format:**
```json
{
  "data": [1, 2, "hello", "@", 5, "world"]
}
Response Format
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
Notes:

user_id format: {full_name_ddmmyyyy} (full name in lowercase)

Numbers in arrays are returned as strings

concat_string concatenates all alphabetical characters in reverse order with alternating caps

Technology Stack
Node.js (JavaScript)

Vercel (Serverless hosting for REST API)

Setup Instructions (For Local Testing)
Clone the repository:

bash
Copy code
git clone <your-repo-url>
cd project-root
Install dependencies:

bash
Copy code
npm install
Run the API locally (optional):

bash
Copy code
vercel dev
Test the API locally:

bash
Copy code
curl -X POST "http://localhost:3000/api/bfhl" \
-H "Content-Type: application/json" \
-d '{"data": [1, 2, "hello", "@", 5, "world"]}'
Example Request & Response
Request:

json
Copy code
{ "data": ["a", "1", "334", "4", "R", "$"] }
Response:

json
Copy code
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
Submission
Use this Vercel API endpoint for submission:
https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl
