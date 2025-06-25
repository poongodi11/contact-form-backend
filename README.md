# Contact Form - Full Stack Project

This is a simple full stack contact form web application built using:

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js with Express  
- **Database**: MongoDB (using Mongoose)

When a user fills out the form on the frontend and clicks "Submit", the data is sent to the backend API, which then stores it in a MongoDB database.

---

## 🗂 Project Structure

contact-form-backend/
├── frontend/
│ ├── index.html # Contact form UI
│ ├── style.css # Styling for the form
│ └── script.js # Handles form submission to backend
├── index.js # Express server with POST endpoint
├── package.json # Project dependencies
├── package-lock.json # Dependency tree lock
└── README.md # Project documentation

---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Pongodi11/contact-form-backend.git
cd contact-form-backend
2. Install dependencies
npm install
3. Add your MongoDB connection string
In index.js, update this line with your own MongoDB connection string:


mongoose.connect("your-mongodb-connection-url")
4. Run the server

node index.js
You should see:
✅ Server running at http://localhost:3000
🧪 Test the Form
Open frontend/index.html in your browser

Fill in the form and submit

Check your MongoDB collection — data should appear 🎉

📦 Dependencies
express

mongoose

nodemon (optional for dev)

📌 Notes
Do not upload node_modules to GitHub

Make sure your MongoDB cluster allows your current IP

Use .env file in production for database URL (for security)
📃 License
This project is for learning purposes and free to use.
### ✅ How to Use This

1. In your GitHub repo, click **“Add file”** → **“Create new file”**
2. Name it: `README.md`
3. Paste the code above
4. Click **“Commit new file”**

---

Let me know if you want the README customized with your name, screenshot, or demo link!










