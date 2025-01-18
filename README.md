# Uber Clone Application  

This repository contains a fully functional Uber clone application, showcasing both backend and frontend implementations. The project is structured for clarity and scalability, allowing easy extension and integration of new features.  

---

## 📂 Project Structure  

### Backend  
The backend handles authentication, database operations, and API endpoints to manage users, captains, and rides.  

#### Key Files and Folders:  
- `.env` - Configuration file for environment variables.  
- `.prettierrc` - Code formatting configuration.  
- `package.json` - Node.js dependencies and scripts.  
- `src/`  
  - `app.js` - Entry point of the backend application.  
  - `controllers/` - Contains business logic for captains and users.  
    - `captain.js`  
    - `user.js`  
  - `db/` - Database configuration.  
    - `config.js`  
  - `middleware/` - Authentication and other middleware.  
    - `authMiddleware.js`  
  - `model/` - Database models for various entities.  
    - `blackListToken.js`  
    - `captain.js`  
    - `user.js`  
  - `routes/` - API routes definitions.  
    - `routes.js`  
  - `services/` - Additional services to support application logic.  

### Frontend  
The frontend is built with React, styled using Tailwind CSS, and powered by Vite for lightning-fast development.  

#### Key Files and Folders:  
- `.gitignore` - Specifies files and folders to ignore.  
- `eslint.config.js` - Configuration for ESLint code quality checks.  
- `index.html` - HTML entry point.  
- `package.json` - Dependencies and scripts for the frontend.  
- `tailwind.config.js` - Tailwind CSS configuration.  
- `vite.config.js` - Vite build tool configuration.  
- `src/`  
  - `App.jsx` - Main application component.  
  - `assets/` - Static assets like images.  
  - `components/` - Reusable UI components.  
  - `context/` - Context for managing global state.  
  - `index.css` - Global styles.  
  - `main.jsx` - Application entry point.  
  - `pages/` - Page-level components.  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js and npm installed on your system.  
- MongoDB for the backend database.  

### Installation  

#### Clone the Repository  
```bash
git clone https://github.com/your-username/uber-clone.git
cd uber-clone
