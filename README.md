📁 Project Name: delivery-order-system

delivery-order-system/
├── backend/         ← Node + Express + SQLite
└── frontend/        ← React

--------

# Backend – Delivery Order System

## 📦 Tech Stack
- Node.js
- Express
- SQLite
- JWT for authentication
- Multer for file upload

How to create backebd structure-
- mkdir backend
- cd backend
- npm init -y
- npm install express cors body-parser sqlite3 jsonwebtoken bcryptjs multer

backend/
├── controllers/         ← Logic for API endpoints
├── middleware/          ← JWT Auth
├── models/              ← DB schema
├── routes/              ← Express routers
├── services/            ← Business logic
├── uploads/             ← Store uploaded files
├── db/parcel.db         ← SQLite DB file
├── server.js            ← Entry point
├── postman_collection.json
└── README.md

------
# FRONTEND – Delivery Order System

## 📦 Tech Stack
⚛ React (functional components)

# Features-
🎨 Bootstrap 5 for styling
🧼 Separate CSS for clean design
🔒 JWT token-based login
📤 File upload for Delivery Orders
📋 Order list view with filters

Frontend - 
- npx create-react-app frontend
- cd frontend
- npm install axios react-router-dom bootstrap


How to run
Start backend-  	node server.js (or use nodemon) (inside backend/)
Start frontend-	    npm start (inside frontend/)

----------


Login credentials
username: vendor
password: pass123

folder structure-

delivery-order-system/
├── backend/ ← Node.js + Express + SQLite
│ ├── server.js ← Entry point
│ ├── package.json ← Node dependencies
│ ├── controllers/ ← DeliveryOrder, Vendor
│ ├── services/ ← Business logic
│ ├── models/ ← DB models: Parcel, Vendor, DeliveryOrder
│ ├── middleware/ ← JWT auth
│ ├── db/parcel.db ← SQLite database
│ ├── routes/ ← Express routers
│ ├── uploads/ ← Store uploaded files (optional)
│ ├── postman_collection.json
│ └── README.md
│
├── frontend/ ← React App
│ ├── public/
│ ├── src/
│ │ ├── components/ ← Upload form, Order list, Login form
│ │ ├── pages/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── api.js ← Axios API config
|
|── README.md