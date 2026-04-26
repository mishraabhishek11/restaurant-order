# 🍽️ Restaurant Order – React Food Ordering App

A modern **React.js application** that simulates a complete **restaurant ordering flow**, allowing users to browse dishes, add them to a cart, and place an order through a checkout process.

This project demonstrates **frontend + backend integration**, dynamic cart management, and form handling.

---

## 🚀 Features

### 🍜 Browse Dishes

- Fetch list of dishes from backend API
- Display menu with dish details
- Dynamic rendering of available items

### 🛒 Cart Management

- Add items to cart
- Increase or decrease item quantity
- Remove items from cart
- Real-time cart updates

### 💳 Checkout Flow

- Navigate from cart to checkout page
- Collect user details:
  - Name
  - Email
  - Street
  - City
  - Postal Code

### ✅ Order Submission

- Submit order to backend
- Display success message after order placement

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **State Management:** React Hooks (useState, useEffect, Context API if used)
- **Backend Communication:** Fetch API
- **Styling:** CSS
- **Build Tool:** Vite

---

## 📂 Project Structure

```
restaurant-order/
├─ README.md
├─ backend
│  ├─ app.js
│  ├─ data
│  │  ├─ available-meals.json
│  │  └─ orders.json
│  ├─ package-lock.json
│  ├─ package.json
│  └─ public
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ logo.jpg
├─ src
│  ├─ App.tsx
│  ├─ component
│  │  ├─ Header.tsx
│  │  ├─ cart
│  │  │  ├─ Cart.tsx
│  │  │  └─ CartItem.tsx
│  │  ├─ checkout
│  │  │  └─ CheckOut.tsx
│  │  ├─ meal
│  │  │  ├─ MealItem.tsx
│  │  │  └─ Meals.tsx
│  │  └─ ui
│  │     ├─ Button.tsx
│  │     ├─ Error.tsx
│  │     ├─ Input.tsx
│  │     └─ Modal.tsx
│  ├─ context
│  │  ├─ CartContext.tsx
│  │  └─ ModalContext.tsx
│  ├─ hook
│  │  ├─ useCheckOut.ts
│  │  └─ useMeals.ts
│  ├─ index.css
│  ├─ main.jsx
│  ├─ type
│  │  ├─ CartMealItem.ts
│  │  ├─ Customer.ts
│  │  └─ Meal.ts
│  └─ util
│     └─ formatter.ts
└─ vite.config.js
```

---

## ⚙️ Installation & Setup for Backend

### 1️⃣ Clone the repository

git clone https://github.com/mishraabhishek11/share-opinion.git

### 2️⃣ Navigate to the project folder

cd restaurant-order/backend

### 3️⃣ Install dependencies

npm install

### 4️⃣ Start the backend server

npm start

### 5️⃣ Open in browser

http://localhost:3000

---

## ⚙️ Installation & Setup for Frontend

### 1️⃣ Clone the repository

git clone https://github.com/mishraabhishek11/restaurant-order.git

### 2️⃣ Navigate to the project folder

cd restaurant-order

### 3️⃣ Install dependencies

npm install

### 4️⃣ Start the development server

npm run dev

### 5️⃣ Open in browser

http://localhost:5173

---

## 🧑‍💻 Usage

1. Browse available dishes
2. Add items to the cart
3. Update quantity or remove items in the cart
4. Proceed to checkout
5. Enter required details
6. Place order and view success message

---

## 🌐 Backend Integration

- Fetches dishes from backend API
- Sends order data to backend on checkout
- Demonstrates real-world API communication

---

## 🎯 Learning Objectives

- Build a complete end-to-end flow in React
- Manage cart state effectively
- Handle forms and validation
- Integrate frontend with backend APIs
- Create smooth user experience

---

## 🔮 Future Enhancements

- Add authentication (login/signup)
- Add payment gateway integration
- Improve UI/UX with animations
- Order history tracking
- Admin dashboard for managing dishes

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch  
   git checkout -b feature/your-feature

3. Commit your changes  
   git commit -m "Add your message"

4. Push to the branch  
   git push origin feature/your-feature

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Abhishek Mishra  
GitHub: https://github.com/mishraabhishek11

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
