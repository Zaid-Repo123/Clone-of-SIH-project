import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// --- SVG Icon Components (for a single-file setup) ---

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const MessagesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M3 12h18M3 6h18M3 18h18"></path>
  </svg>
);

const MealPlanIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const FoodDiaryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const ProgressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const ExercisesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zM5.5 4.5a1 1 0 0 1 1.414 0L8.3 5.914a1 1 0 0 1-1.414 1.414L5.5 5.914A1 1 0 0 1 5.5 4.5zM18.5 4.5a1 1 0 0 0-1.414 0L15.7 5.914a1 1 0 1 0 1.414 1.414L18.5 5.914a1 1 0 0 0 0-1.414zM2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm18 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-6 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
  </svg>
);

const HealthInsightsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
  </svg>
);

const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.4l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1 0-2.4l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

// --- Data Structures ---

const allMenuItems = [
  {
    name: "Avocado Toast with Poached Egg",
    category: "Breakfast",
    easy: true,
    healthScore: 9,
    calories: 320,
    carbs: 31,
    protein: 14,
    fats: 19,
    image: "https://placehold.co/100x80/d1f1e3/4a5568?text=Meal",
  },

  {
    name: "Grilled Shrimp Tacos with Mango Salsa",
    category: "Lunch",
    medium: true,
    healthScore: 8,
    calories: 450,
    carbs: 41,
    protein: 28,
    fats: 12,
    image: "https://placehold.co/100x80/f8e4d0/4a5568?text=Meal",
  },

  {
    name: "Baked Chicken Breast with Quinoa and Kale",
    category: "Dinner",
    medium: true,
    healthScore: 9,
    calories: 480,
    carbs: 50,
    protein: 40,
    fats: 15,
    image: "https://placehold.co/100x80/f5d7d7/4a5568?text=Meal",
  },
];

const popularMenuItems = [
  {
    name: "Greek Salad with Feta and Olives",
    rating: 4.9,
    category: "Lunch",
    image: "https://placehold.co/50x50/e0e7ff/4a5568?text=Meal",
  },

  {
    name: "Blueberry Protein Smoothie",
    rating: 4.8,
    category: "Breakfast",
    image: "https://placehold.co/50x50/d1fae5/4a5568?text=Meal",
  },

  {
    name: "Grilled Salmon with Lemon and Asparagus",
    rating: 4.9,
    category: "Dinner",
    image: "https://placehold.co/50x50/fef3c7/4a5568?text=Meal",
  },
];

const recommendedMenuItems = [
  {
    name: "Oatmeal with Almond Butter and Berries",
    category: "Breakfast",
    calories: 350,
    carbs: 45,
    protein: 12,
    fats: 14,
    image: "https://placehold.co/50x50/fce7f3/4a5568?text=Meal",
  },

  {
    name: "Grilled Chicken Wrap with Avocado and Spinach",
    category: "Lunch",
    calories: 450,
    carbs: 30,
    protein: 40,
    fats: 18,
    image: "https://placehold.co/50x50/dbeafe/4a5568?text=Meal",
  },

  {
    name: "Quinoa Salad with Roasted Vegetables and Feta",
    category: "Dinner",
    calories: 400,
    carbs: 50,
    protein: 15,
    fats: 12,
    image: "https://placehold.co/50x50/fef9c3/4a5568?text=Meal",
  },
];

// --- Reusable Components ---

const NavItem = ({ icon, label, path, isSubItem = false }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      [
        "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300",
        isActive
          ? "bg-lime-100 text-lime-800 font-semibold border-l-4 border-lime-500"
          : "text-gray-600 hover:bg-gray-100",
        isSubItem ? "ml-8" : "",
      ].join(" ")
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const PromoCard = () => (
  <div className="bg-lime-50 rounded-xl p-6 text-center mt-auto relative overflow-hidden">
           {" "}
    <img
      src="https://placehold.co/150x100/a3e635/ffffff?text=Veggies"
      alt="Vegetables"
      className="mx-auto mb-4 -mt-16"
    />
           {" "}
    <h3 className="font-bold text-gray-800 text-sm">
      Start your health journey with a{" "}
      <span className="text-lime-600">FREE 1-month</span> access to Nutrigo!
    </h3>
           {" "}
    <button className="bg-lime-500 text-white font-bold w-full py-2.5 mt-4 rounded-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg">
                  Claim Now!        {" "}
    </button>
       {" "}
  </div>
);

const MealTag = ({ category }) => {
  const styles = {
    Breakfast: "bg-green-100 text-green-700",

    Lunch: "bg-orange-100 text-orange-700",

    Dinner: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${styles[category]}`}
    >
      {category}
    </span>
  );
};

// --- Main App Component ---

// Renamed to HomePage so it can be easily imported and used in other files.

// Example Usage in another file (e.g., App.jsx):

// import HomePage from './HomePage';

//

// function App() {

//   return (

//     <div>

//       {/* You can add headers, footers, or other components around it */}

//       <HomePage />

//     </div>

//   );

// }

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { icon: <DashboardIcon />, label: "Dashboard", path: "/dashboard" },

    { icon: <CalendarIcon />, label: "Calendar" },

    { icon: <MessagesIcon />, label: "Messages" },

    { icon: <MenuIcon />, label: "Healthy Menu", active: true },

    { icon: <MealPlanIcon />, label: "Meal Plan", isSubItem: true },

    { icon: <FoodDiaryIcon />, label: "Food Diary", isSubItem: true },

    { icon: <ProgressIcon />, label: "Progress" },

    { icon: <ExercisesIcon />, label: "Exercises" },

    { icon: <HealthInsightsIcon />, label: "Health Insights" },
  ];

  const filterCategories = ["All", "Breakfast", "Lunch", "Snack", "Dinner"];

  return (
    // Removed h-screen to allow the component to be flexible within a parent container

    <div
      className={`flex bg-slate-50 font-sans transition-opacity duration-700 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
                  {/* Left Sidebar */}           {" "}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
                       {" "}
        <div className="flex items-center gap-3 mb-10">
                             {" "}
          <div className="bg-lime-500 p-2 rounded-lg">
                                   {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v1.586M12 17.747v-1.586M6.253 12h1.586m8.322 0h-1.586m4.24-4.24l-1.122 1.122m-9.878 9.878l-1.122-1.122m0-8.756l1.122 1.122m9.878 9.878l1.122-1.122M12 21a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
                               {" "}
          </div>
                             {" "}
          <h1 className="text-2xl font-bold text-gray-800">Nutrigo</h1>         
               {" "}
        </div>
                       {" "}
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isSubItem={item.isSubItem}
            />
          ))}
        </nav>
                        <PromoCard />               {" "}
        <div className="mt-8">
                               <NavItem icon={<LogoutIcon />} label="Logout" /> 
                       {" "}
        </div>
                   {" "}
      </aside>
                  {/* Main Content */}           {" "}
      <main className="flex-1 p-8 overflow-y-auto">
                       {" "}
        <header className="flex justify-between items-center mb-8">
                             {" "}
          <h2 className="text-3xl font-bold text-gray-800">Healthy Menu</h2>   
                         {" "}
          <div className="flex items-center gap-4">
                                   {" "}
            <div className="relative">
                                         {" "}
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                         {" "}
              <input
                type="text"
                placeholder="Search menu"
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg w-64 focus:ring-2 focus:ring-lime-300 outline-none"
              />
                                     {" "}
            </div>
                                   {" "}
            <button className="p-2.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                                          <SettingsIcon />                     
               {" "}
            </button>
                                   {" "}
            <button className="bg-lime-500 text-white font-bold py-2.5 px-5 rounded-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg">
                                          Add Menu                        {" "}
            </button>
                               {" "}
          </div>
                         {" "}
        </header>
                        {/* Featured Menu */}               {" "}
        <section
          className={`bg-white p-6 rounded-2xl flex gap-8 mb-8 transition-all duration-500 ease-in-out transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
                             {" "}
          <img
            src="https://placehold.co/250x200/a3e635/ffffff?text=Featured+Meal"
            alt="Grilled Turkey Breast"
            className="rounded-xl w-1/3 object-cover"
          />
                             {" "}
          <div className="flex-1">
                                   {" "}
            <div className="flex justify-between items-start">
                                         {" "}
              <div>
                                               {" "}
                <span className="text-xs font-semibold text-gray-400">
                  Lunch
                </span>
                                               {" "}
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  Grilled Turkey Breast with Steamed Asparagus and Brown Rice
                </h3>
                                               {" "}
                <div className="flex items-center gap-2 mt-2">
                                                     {" "}
                  <span className="text-yellow-500">★</span>                   
                                 {" "}
                  <span className="font-semibold text-gray-700">4.8/5</span>   
                                                 {" "}
                  <span className="text-gray-400">(125 reviews)</span>         
                                       {" "}
                </div>
                                           {" "}
              </div>
                                     {" "}
            </div>
                                   {" "}
            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                                         {" "}
              <div className="flex items-center gap-3">
                                               {" "}
                <span className="bg-gray-100 p-2 rounded-full">🧭</span>       
                                       {" "}
                <div>
                  <div className="text-gray-400">Difficulty</div>
                  <div className="font-semibold text-gray-700">Medium</div>
                </div>
                                           {" "}
              </div>
                                         {" "}
              <div className="flex items-center gap-3">
                                               {" "}
                <span className="bg-gray-100 p-2 rounded-full">⭐</span>       
                                       {" "}
                <div>
                  <div className="text-gray-400">Health Score</div>
                  <div className="font-semibold text-gray-700">85/100</div>
                </div>
                                           {" "}
              </div>
                                         {" "}
              <div className="flex items-center gap-3">
                                               {" "}
                <span className="bg-gray-100 p-2 rounded-full">⏱️</span>       
                                       {" "}
                <div>
                  <div className="text-gray-400">Cook Duration</div>
                  <div className="font-semibold text-gray-700">10 minutes</div>
                </div>
                                           {" "}
              </div>
                                         {" "}
              <div className="flex items-center gap-3">
                                               {" "}
                <span className="bg-gray-100 p-2 rounded-full">👣</span>       
                                       {" "}
                <div>
                  <div className="text-gray-400">Total Steps</div>
                  <div className="font-semibold text-gray-700">4 steps</div>
                </div>
                                           {" "}
              </div>
                                     {" "}
            </div>
                                   {" "}
            <button className="bg-lime-500 text-white font-bold w-full py-3 mt-6 rounded-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg">
                                          Add to Meal Plan                      
               {" "}
            </button>
                               {" "}
          </div>
                               
          <div className="flex flex-col gap-3">
                                   {" "}
            <div className="bg-lime-100 p-3 rounded-lg text-center">
                                         {" "}
              <div className="text-xs text-lime-700">Calories</div>             
                           {" "}
              <div className="text-lime-800 font-bold text-lg">
                450 <span className="text-sm font-normal">kcal</span>
              </div>
                                     {" "}
            </div>
                                     
            <div className="bg-orange-100 p-3 rounded-lg text-center">
                                         {" "}
              <div className="text-xs text-orange-700">Carbs</div>             
                           {" "}
              <div className="text-orange-800 font-bold text-lg">
                40 <span className="text-sm font-normal">gr</span>
              </div>
                                     {" "}
            </div>
                                     
            <div className="bg-blue-100 p-3 rounded-lg text-center">
                                         {" "}
              <div className="text-xs text-blue-700">Protein</div>             
                           {" "}
              <div className="text-blue-800 font-bold text-lg">
                35 <span className="text-sm font-normal">gr</span>
              </div>
                                     {" "}
            </div>
                                     
            <div className="bg-gray-100 p-3 rounded-lg text-center">
                                         {" "}
              <div className="text-xs text-gray-700">Fats</div>                 
                       {" "}
              <div className="text-gray-800 font-bold text-lg">
                12 <span className="text-sm font-normal">gr</span>
              </div>
                                     {" "}
            </div>
                               {" "}
          </div>
                         {" "}
        </section>
                        {/* All Menu */}               {" "}
        <section
          className={`transition-all duration-500 ease-in-out delay-200 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
                             {" "}
          <div className="flex justify-between items-center mb-4">
                                   {" "}
            <h3 className="text-xl font-bold text-gray-800">All Menu</h3>       
                           {" "}
            <div className="flex items-center gap-4">
                                         {" "}
              <div className="flex items-center bg-white p-1 rounded-lg border">
                                               {" "}
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                      activeFilter === cat
                        ? "bg-lime-500 text-white shadow-sm"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                                                             {cat}             
                                           
                  </button>
                ))}
                                           {" "}
              </div>
                                         {" "}
              <div className="text-sm flex items-center gap-2">
                                               {" "}
                <span className="text-gray-500">Sort by:</span>                 
                             {" "}
                <span className="font-semibold text-gray-700">Calories</span>   
                                           {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                                           {" "}
              </div>
                                     {" "}
            </div>
                               {" "}
          </div>
                             {" "}
          <div className="space-y-4">
                                   {" "}
            {allMenuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow duration-300"
              >
                                               {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-20 object-cover rounded-lg"
                />
                                               {" "}
                <div className="flex-1">
                                                     {" "}
                  <div className="flex items-center gap-4">
                                                           {" "}
                    <MealTag category={item.category} />                       
                                   {" "}
                    {item.easy && (
                      <span className="text-xs font-semibold text-gray-500">
                        Easy
                      </span>
                    )}
                                                       {" "}
                  </div>
                                                     {" "}
                  <h4 className="font-bold text-gray-800 mt-1">{item.name}</h4> 
                                                   {" "}
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                                                           {" "}
                    <span>{item.calories} kcal</span>                           
                                <span>{item.carbs}g carbs</span>               
                                            <span>{item.protein}g protein</span>
                                                           {" "}
                    <span>{item.fats}g fats</span>                             
                         {" "}
                  </div>
                                                 {" "}
                </div>
                                               {" "}
                <div className="text-right">
                                                     {" "}
                  <div className="font-bold text-gray-800">
                    Health Score: {item.healthScore}/10
                  </div>
                                                     {" "}
                  <button className="bg-lime-100 text-lime-800 font-bold px-4 py-2 mt-2 rounded-lg text-sm hover:bg-lime-200 transition-colors">
                    Add to Meal Plan
                  </button>
                                                 {" "}
                </div>
                                           {" "}
              </div>
            ))}
                               {" "}
          </div>
                         {" "}
        </section>
                   {" "}
      </main>
                  {/* Right Sidebar */}           {" "}
      <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
                       {" "}
        <div className="flex justify-between items-center mb-8">
                             {" "}
          <div className="flex items-center gap-4">
                                   {" "}
            <img
              src="https://placehold.co/40x40/f0abfc/ffffff?text=AV"
              alt="Adam Vasylenko"
              className="w-10 h-10 rounded-full"
            />
                                   {" "}
            <div>
                                         {" "}
              <div className="font-bold text-gray-800">Adam Vasylenko</div>     
                                   {" "}
              <div className="text-sm text-gray-500">Member</div>               
                     {" "}
            </div>
                               {" "}
          </div>
                             {" "}
          <button className="text-gray-400 hover:text-gray-600">
                                   {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
                               {" "}
          </button>
                         {" "}
        </div>
                       {" "}
        <div className="mb-8">
                             {" "}
          <h3 className="font-bold text-gray-800 mb-4">Popular Menu</h3>       
                     {" "}
          <div className="space-y-3">
                                   {" "}
            {popularMenuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                                               {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                                               {" "}
                <div className="flex-1">
                                                     {" "}
                  <h4 className="font-semibold text-sm text-gray-800">
                    {item.name}
                  </h4>
                                                     {" "}
                  <div className="flex items-center gap-2">
                                                           {" "}
                    <MealTag category={item.category} />                       
                                   {" "}
                    <span className="text-xs text-gray-500">
                      ★ {item.rating}
                    </span>
                                                       {" "}
                  </div>
                                                 {" "}
                </div>
                                               {" "}
                <button className="bg-lime-100 text-lime-800 w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-lime-200 transition-colors">
                  +
                </button>
                                           {" "}
              </div>
            ))}
                               {" "}
          </div>
                         {" "}
        </div>
                       {" "}
        <div>
                             {" "}
          <h3 className="font-bold text-gray-800 mb-4">Recommended Menu</h3>   
                           
          <div className="space-y-3">
                                   {" "}
            {recommendedMenuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                                               {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                                               {" "}
                <div className="flex-1">
                                                     {" "}
                  <h4 className="font-semibold text-sm text-gray-800">
                    {item.name}
                  </h4>
                                                       
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                                           {" "}
                    <span>{item.calories} C</span>                             
                              <span>{item.carbs} C</span>                       
                                    <span>{item.protein} P</span>               
                                            <span>{item.fats} F</span>         
                                             {" "}
                  </div>
                                                 {" "}
                </div>
                                               {" "}
                <button className="bg-lime-100 text-lime-800 w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-lime-200 transition-colors">
                  +
                </button>
                                           {" "}
              </div>
            ))}
                               {" "}
          </div>
                         {" "}
        </div>
                   {" "}
      </aside>
             {" "}
    </div>
  );
}
