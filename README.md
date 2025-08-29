# Full Stack REST API – VIT Submission

## Project Overview

This project is a REST API built with Node.js and deployed as a Vercel serverless function. It accepts an array via a POST request and returns processed information including odd/even numbers, alphabets, special characters, sum, and a concatenated string in alternating caps.

## 🚀 Live Deployment

**Deployed URL:** https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl

## 📋 API Documentation

### Endpoint Details
- **Method:** `POST`
- **Route:** `/bfhl`
- **Content-Type:** `application/json`

### Request Format
```json
{
  "data": [1, 2, "hello", "@", 5, "world"]
}
```

### Response Format
```json
{
  "is_success": true,
  "user_id": "ashish_khatri_01012000",
  "email": "44234ashish@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "5"],
  "even_numbers": ["2"],
  "alphabets": ["HELLO", "WORLD"],
  "special_characters": ["@"],
  "sum": "8",
  "concat_string": "DlRoWoLlEh"
}
```

### Response Field Descriptions

| Field | Description |
|-------|-------------|
| `is_success` | Boolean indicating successful processing |
| `user_id` | Format: `{full_name_ddmmyyyy}` (lowercase) |
| `email` | Student email address |
| `roll_number` | Student roll number |
| `odd_numbers` | Array of odd numbers as strings |
| `even_numbers` | Array of even numbers as strings |
| `alphabets` | Array of alphabetical characters (uppercase) |
| `special_characters` | Array of special characters |
| `sum` | Sum of all numeric values as string |
| `concat_string` | Alphabetical characters in reverse order with alternating caps |

## 🛠️ Technology Stack

- **Backend:** Node.js (JavaScript)
- **Hosting:** Vercel (Serverless Functions)
- **API Type:** REST API

## 🔧 Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Vercel CLI (optional)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd project-root
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally (optional):**
   ```bash
   vercel dev
   ```

4. **Test the API:**
   ```bash
   curl -X POST "https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl" -H "Content-Type: application/json" -d "{\"data\": [1, 2, \"hello\", \"@\", 5, \"world\"]}"
   ```
   **Note**: Go to Vercel Dashboard → Project Settings → Deployment Protection & Turn off "**Vercel Authentication**" (or add your machine’s IP to the allowlist).
   Then redeploy once (or just refresh, Vercel applies immediately).

## 📝 Example Usage

### Sample Request
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Sample Response
```json
{
  "is_success": true,
  "user_id": "ashish_khatri_01012000",
  "email": "44234ashish@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## 🧪 Testing the API

### Using cURL (Linux/macOS)
```bash
curl -X POST "https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl" \
  -H "Content-Type: application/json" \
  -d '{"data": [1, 2, "hello", "@", 5, "world"]}'
```
### For Windows Command Prompt
```bash
curl -X POST "https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl" -H "Content-Type: application/json" -d "{\"data\": [1, 2, \"hello\", \"@\", 5, \"world\"]}"
```

### Using Postman
1. Set method to `POST`
2. URL: `https://full-stack-ndi2meuzg-ashishkhatri84s-projects.vercel.app/api/bfhl`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON): `{"data": [1, 2, "hello", "@", 5, "world"]}`

## 🏗️ Project Structure

```
project-root/
├── api/
│   └── bfhl.js          # Main API endpoint
├── package.json         # Dependencies and scripts
├── vercel.json         # Vercel configuration
└── README.md           # Project documentation
```

## 📊 Algorithm Logic

1. **Input Processing:** Accept array of mixed data types
2. **Classification:** Separate numbers, alphabets, and special characters
3. **Number Processing:** Identify odd/even numbers and calculate sum
4. **String Processing:** Create alternating caps concatenated string in reverse order
5. **Response Formation:** Return structured JSON response

## 🚀 Deployment

This project is deployed on Vercel using serverless functions. The deployment automatically handles:
- Serverless scaling
- Global CDN distribution
- Automatic HTTPS
- Zero-config deployment

## 📄 License

This project is created for VIT submission purposes.
