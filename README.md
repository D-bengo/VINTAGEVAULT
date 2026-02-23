## VINTAGE VAULT
VintageVault is a web application built with React and Vite, dedicated to showcasing classic vintage cars. It combines a marketplace feel with storytelling, allowing users to explore, add, edit, and comment on vintage cars. The platform highlights the cultural and historical significance of these cars while providing CRUD functionality for car management.

## Table Of Contents
1. Demo
2. Features
3. Tech Stack
4. Project Structure
5. Installation
6. Usage
7. Screenshots
8. Future Enhancements
9. Credits

## Demo
Live Demo URL: 

## Features
- Home Page: Cinematic welcome screen with a vintage car background.
- Cars Page: Grid listing of all vintage cars with images, price, status, and a "View" button.
- Car Details: Detailed view of a car including description, story, likes, and comments.
- Add Car: Users can add a new vintage car with full details.
- Edit Car: Edit existing cars’ information.
- Delete Car: Remove a car from the collection.
- Like System: Users can "like" cars.
- Comment Section: Users can post comments on each car.
- Responsive Design: Fully responsive layout for desktops, tablets, and mobile devices.
- Cinematic Backgrounds: Each page has a relevant themed background image with dark overlay for readability.
- Persistent Data: Uses db.json with JSON Server for data persistence.

## Tech Stack
- Frontend:
React
React Router DOM
Vite (fast development environment)

- Backend / Data Storage:
JSON Server (db.json) as a mock API

- Styling:
CSS3, with overlays and responsive design

## Project Structure
vintagevault/
│
├─ public/                  # Public assets (images, favicon)
├─ src/
│  ├─ components/           # Reusable components (Navbar, CarCard, CommentSection)
│  ├─ pages/                # Pages (Home, Cars, CarDetails, AddCar, EditCar, About)
│  ├─ services/             # API services (getCars, getCar, createCar, etc.)
│  ├─ App.jsx               # Main router setup
│  ├─ index.css             # Global CSS + page-specific styles
│  └─ main.jsx              # Entry point for React app
├─ db.json                  # JSON Server database
├─ package.json
└─ README.md

## Installation
Steps:
1. Clone the repository:
 - git clone https://github.com/your-username/vintagevault.git
 - cd vintagevault 

2. Install dependencies:
 - npm install

3. Start JSON Server (backend mock API):
 - npm run server

 - This will run JSON Server at http://localhost:6001. The db.json file contains cars and comments.

4. Start Vite React app:
  - npm run dev

  - This will launch the app at http://localhost:5173 (or another port if 5173 is taken).

## Usage
- Explore Cars: Click Explore Cars on the home page to see all cars.
- View Details: Click View on a car card to see full details.
- Add New Car: Navigate to Add Car from the navbar and fill out the form.
- Edit Car: From a car detail page, click Edit to modify its information.
- Delete Car: Click Delete on a car detail page to remove it.
- Like a Car: Click the Like ❤️ button in the car detail page.
- Comment: Add comments about a car at the bottom of the detail page.

## Screenshots
- Home Page
    ![Home page](<Screenshot 2026-02-23 223714.png>)

- Car page
    ![Car Page](<Screenshot 2026-02-23 223941.png>)

## Future Enhancements
- User authentication for adding/editing cars and posting comments
- Like counts persisted per user
- Search and filter functionality for cars
- Image upload instead of URL input
- Animations and transitions for cards and buttons

## Credits
Group 7 Project:
Author: Denis Walubengo, Yassir Issak, William Mugambi, Stephen Wakahu
