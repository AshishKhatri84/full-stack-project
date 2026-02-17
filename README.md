# 🚀 Full Stack REST API – VIT Submission

---

## 📌 Project Overview

This project is a **REST API** built with **Node.js** and deployed as a **Vercel Serverless Function**.

It accepts an array via a `POST` request and returns processed information including:

- Odd numbers  
- Even numbers  
- Alphabets (uppercase)  
- Special characters  
- Sum of numbers  
- Concatenated string in alternating caps  

A built-in **API Dashboard** is available on the root deployment page for live testing without Postman or curl.

---

## 🚀 Live Deployment

### 🌐 Dashboard (Recommended)

🔗 https://full-stack-project-three-mocha.vercel.app/

This page provides:

- 📘 Instructions to test the API in 3 ways  
- 📋 Copy endpoint button  
- 🧾 Sample JSON  
- 💻 curl command  
- 🧪 Built-in API tester with live response display  

---

### 🔗 Direct API Endpoint

```
https://full-stack-project-three-mocha.vercel.app/api/bfhl
```

---

## 📋 API Documentation

### 🔹 Endpoint Details

- **Method:** `POST`
- **Route:** `/api/bfhl`
- **Content-Type:** `application/json`

---

## 📥 Request Format

```json
{
  "data": [1, 2, "hello", "@", 5, "world"]
}
```

---

## 📤 Response Format

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

---

## 📄 Response Field Descriptions

| Field | Description |
|-------|------------|
| `is_success` | Boolean indicating successful processing |
| `user_id` | Format: `{full_name_ddmmyyyy}` (lowercase) |
| `email` | Student email address |
| `roll_number` | Student roll number |
| `odd_numbers` | Array of odd numbers as strings |
| `even_numbers` | Array of even numbers as strings |
| `alphabets` | Array of alphabetical strings (uppercase) |
| `special_characters` | Array of special characters |
| `sum` | Sum of all numeric values as string |
| `concat_string` | Alphabetical characters in reverse order with alternating caps |

---

## 🧪 Testing the API

The API can be tested in **three different ways**:

### 1️⃣ Using Built-in Dashboard (Recommended)

Open:

🔗 https://full-stack-project-three-mocha.vercel.app/

Steps:

- Enter JSON input  
- Click **"Send POST Request"**  
- View response directly on the page  

---

### 2️⃣ Using cURL

#### 🐧 Linux / macOS

```bash
curl -X POST "https://full-stack-project-three-mocha.vercel.app/api/bfhl"   -H "Content-Type: application/json"   -d '{"data": [1, 2, "hello", "@", 5, "world"]}'
```

#### 🪟 Windows Command Prompt

```bash
curl -X POST "https://full-stack-project-three-mocha.vercel.app/api/bfhl" -H "Content-Type: application/json" -d "{\"data\": [1, 2, \"hello\", \"@\", 5, \"world\"]}"
```

---

### 3️⃣ Using Postman

1. Set method to `POST`
2. URL:

```
https://full-stack-project-three-mocha.vercel.app/api/bfhl
```

3. Header:

```
Content-Type: application/json
```

4. Body (raw JSON):

```json
{
  "data": [1, 2, "hello", "@", 5, "world"]
}
```

---

## 🏗️ Project Structure

```
project-root/
├── api/
│   ├── bfhl.js      # Main API endpoint
│   └── index.js     # Deployment dashboard UI
├── package.json
├── vercel.json
└── README.md
```

---

## 🛠️ Technology Stack

- **Backend:** Node.js (JavaScript)
- **Hosting:** Vercel (Serverless Functions)
- **API Type:** REST API
- **Architecture:** Serverless

---

## 🔧 Local Development Setup

### 📌 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Vercel CLI (optional)

---

### ⚙️ Installation Steps

#### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd project-root
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Run locally

```bash
vercel dev
```

#### 4️⃣ Deploy manually (optional)

```bash
vercel --prod
```

---

## 📊 Algorithm Logic

1. Accept array of mixed data types  
2. Separate numbers, alphabets, and special characters  
3. Classify numbers into odd and even  
4. Calculate total sum  
5. Reverse alphabetical characters  
6. Apply alternating capitalization  
7. Return structured JSON response  

---

## 🚀 Deployment

This project is deployed on **Vercel using serverless functions**.

The deployment automatically handles:

- ⚡ Serverless scaling  
- 🌍 Global CDN distribution  
- 🔐 Automatic HTTPS  
- 🔄 Instant redeploy on GitHub push  
- 🧩 Zero server maintenance  

---

## 📄 License

This project is created for **VIT Full Stack Submission purposes**.
