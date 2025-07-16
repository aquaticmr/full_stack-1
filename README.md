# 📬 Enquiry Form Full-Stack Application

This is a full-stack web application that allows users to submit enquiries. It uses a **React + Vite** frontend, an **Express.js** backend, and **MongoDB** (running locally) for data storage. The form captures user details and displays a table of submitted enquiries, with options to update existing records.

---

## 🔧 Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Local)
- **API Communication:** Axios

---

## ✨ Features

- 📋 Submit name, email, phone number, and message
- 💾 Stores data in local MongoDB
- 📑 View all submitted enquiries in a table
- ✏️ Edit/Update an enquiry
- 🧼 Field validation with user-friendly UI

---

## 📂 Project Structure

```
project-root/
├── server/         # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── Userform/       # React frontend
│   ├── components/
│   ├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aquaticmr/full_stack-1.git
cd your-repo-name
```

---

### 2. Start MongoDB Locally

Make sure MongoDB is running on your system:

```bash
mongod
```

> You must have MongoDB installed. [Install MongoDB](https://www.mongodb.com/docs/manual/installation/) if not already done.

---

### 3. Start the Backend

```bash
cd server
npm install
node index.js
```

The backend runs on **http://localhost:5000** (or your configured port).

---

### 4. Start the Frontend

```bash
cd Userform
npm install
npm run dev
```

The frontend runs on **http://localhost:5173** (default Vite port).

---

## 📸 Screenshots

> *<img width="1919" height="946" alt="image" src="https://github.com/user-attachments/assets/a12b3ff5-d147-4ca7-9526-7298f1ef7916" />
*

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Developed by Mohit Rudrakar
