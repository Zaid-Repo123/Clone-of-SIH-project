# Ayu Aahar - Nutrition Management System

A comprehensive nutrition and diet management application built with React and Vite, designed for dieticians and nutritionists to manage clients, meal plans, and track progress.

## 🚀 Quick Start

### Prerequisites

Before running this application, make sure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check your Node.js version by running:
```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [https://nodejs.org/](https://nodejs.org/)

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Zaid-Repo123/Clone-of-SIH-project.git
   cd Clone-of-SIH-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all required packages including React, Vite, Tailwind CSS, and other dependencies.

### Running the Application

#### Development Mode
To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at **http://localhost:5173/**

#### Production Build
To create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

#### Preview Production Build
To preview the production build locally:

```bash
npm run preview
```

#### Linting
To check code quality and formatting:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Layout.jsx       # Main layout wrapper
│   ├── LandingPage.jsx  # Home/landing page
│   ├── Dashboard.jsx    # Main dashboard
│   ├── ClientPage.jsx   # Client management
│   ├── ClientProfilePage.jsx  # Individual client profiles
│   ├── Messages.jsx     # Messaging system
│   ├── MealPlans.jsx    # Meal planning interface
│   └── Calender.jsx     # Calendar component
├── assets/              # Static assets
├── Lottie/             # Lottie animation files
├── App.jsx             # Main App component with routing
├── main.jsx            # Application entry point
├── index.css           # Global styles
└── App.css             # Component-specific styles

public/                  # Public assets
├── vite.svg            # Vite logo
└── ...                 # Other static files
```

## 🌟 Features

- **Client Management**: Manage client profiles, track progress, and store client information
- **Meal Planning**: Create and manage meal plans with nutritional information
- **Dashboard**: Overview of clients, plans, and key metrics
- **Calendar Integration**: Schedule appointments and track important dates
- **Messaging System**: Communicate with clients through integrated messaging
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Export Functionality**: Export client data and meal plans

## 🛠 Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.1
- **Icons**: Lucide React 0.544.0
- **Animations**: 
  - Framer Motion 12.23.13
  - GSAP 3.13.0
  - Lottie React 2.4.1
- **Code Quality**: ESLint with React plugins

## 🎯 Available Routes

Once the application is running, you can navigate to:

- `/` - Landing/Home page
- `/dashboard` - Main dashboard
- `/clients` - Client management page
- `/clients/:id` - Individual client profile
- `/calendar` - Calendar view
- `/messages` - Messaging interface
- `/meal-plans` - Meal planning tools

## 🔧 Development

### Hot Module Replacement (HMR)
The development server includes HMR, so changes to your code will be reflected immediately without losing application state.

### Code Formatting
The project uses ESLint for code quality. The configuration is in `eslint.config.js`.

### Build Configuration
Vite configuration is in `vite.config.js` and includes:
- React plugin for JSX support
- Tailwind CSS integration
- Development server settings

## 📱 Browser Support

This application works in all modern browsers that support ES2020 features:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

The application uses Tailwind CSS for styling. You can customize the design by:
1. Modifying the Tailwind configuration
2. Updating component styles in individual JSX files
3. Customizing the color scheme and themes

## 📝 License

This project is part of the SIH (Smart India Hackathon) initiative.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**: If port 5173 is busy, Vite will automatically use the next available port
2. **Dependencies issues**: Delete `node_modules` and `package-lock.json`, then run `npm install` again
3. **Build errors**: Make sure all dependencies are installed and you're using a compatible Node.js version

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed correctly
3. Verify you're using a supported Node.js version
4. Check the network tab in browser dev tools for failed requests

---

**Ready to start?** Run `npm install` followed by `npm run dev` and visit http://localhost:5173/ to see your nutrition management system in action! 🎉
