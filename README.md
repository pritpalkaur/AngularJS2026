README.md
🧾 Orders App — AngularJS + Angular Material + .NET API
A simple, modern single‑page application (SPA) built using AngularJS 1.8, Angular Material 1.x, and a .NET Web API backend.
The app supports:
- JWT‑based login
- Protected routes
- Orders listing
- Expandable order items
- Angular Material UI components

🚀 Features
- 🔐 Login with JWT authentication
- 🔒 Route protection using AngularJS $routeChangeStart
- 📦 Orders list with expandable items
- 🎨 Angular Material UI (local installation)
- 🔔 Material toast notifications
- 🚪 Logout with token clearing
- 📱 Fully responsive layout

🛠️ Tech Stack
Frontend
- AngularJS 1.8.2
- Angular Material 1.2.2
- HTML5 / CSS3
- JavaScript
- ngRoute
Backend
- ASP.NET Web API
- Swagger UI
- JWT Authentication
 Local Library Installation (No CDN)
Download these files and place them inside /lib:
AngularJS Core
- angular.min.js
- angular-animate.min.js
- angular-aria.min.js
- angular-messages.min.js
Angular Material
- angular-material.min.js
- angular-material.min.css
Option 1 — Using Live Server (Recommended)
If you have VS Code:
- Install Live Server extension
- Right‑click index.html
- Select Open with Live Server
- App runs at:
 How to Run the Backend (.NET API)
- Open the API project in Visual Studio
- Press F5 or run the project
- Swagger will open at:
Authentication Flow
- User logs in
- API returns JWT token
- Token is stored in localStorage
- AngularJS interceptor attaches token to every request
- Protected routes require requiresAuth: true
- If token missing → redirect to /login


🎨 Angular Material Components Used
- md-toolbar
- md-button
- md-card
- md-table
- md-progress-linear
- md-toast


🧪 Testing the App
Login Test
- Enter valid credentials
- Should redirect to /orders
- Should show Material toast: Login successful
Orders Test
- Orders should load
- Clicking View Items expands Material card
- Clicking Hide Items collapses it
Logout Test
- Click Logout
- Token removed
- Redirect to /login


