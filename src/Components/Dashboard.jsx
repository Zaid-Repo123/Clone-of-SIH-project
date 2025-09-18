import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, Calendar, MessageSquare, HeartPulse, ClipboardList, 
    BarChart3, Zap, Dumbbell, BrainCircuit, LogOut, ChevronLeft, ChevronRight, 
    Search, X, Utensils, Stethoscope, MapPin, Clock, Sparkles, Loader, 
    User, Filter, Phone, Video, MoreHorizontal, Paperclip, Send, 
    Image as ImageIcon, FileText, Link2, Leaf, Award, AlertTriangle, Menu, ArrowRight
} from 'lucide-react';

// --- Enhanced Color Palette & Theme ---
const theme = {
  bg: 'bg-gradient-to-br from-[#FDFBFB] to-[#EBEDEE]', // Subtle gradient background
  sidebar: 'bg-white/80 backdrop-blur-xl', // Frosted glass effect for sidebar
  primary: 'text-[#424242]', // Darker, softer gray for text
  accent: 'text-[#616161]',
  highlight: 'text-[#C5A582]', // Softer, more elegant terracotta
  highlightStrong: '#B8860B', // A stronger gold/brown for main CTAs
  highlightBg: 'bg-[#F9F3EE]', // Warmer beige for active items
  secondary: 'text-[#9E9E9E]',
  aiPurple: '#7E57C2', // Softer purple for AI
  shadow: 'shadow-lg',
  card: 'bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
};

// --- Mock Data (Unchanged) ---
const upcomingAppointment = {
    name: 'Dr. Emily Lawson',
    role: 'General Physician',
    avatar: 'https://i.imgur.com/Jk3a2zC.png',
    date: 'Tuesday, 23 September 2025',
    time: '3:00 PM',
};
const futureAppointments = [
    { date: '25 Sep', time: '10:00 AM', title: 'Nutritionist Follow-up', with: 'Sara Mitchell' },
    { date: '28 Sep', time: '05:00 PM', title: 'Personal Training Session', with: 'Alex Foster' },
    { date: '02 Oct', time: '11:30 AM', title: 'Yoga Class', with: 'Mia Johnson' },
    { date: '05 Oct', time: '09:00 AM', title: 'Dental Check-up', with: 'Dr. Kevin Moore' },
];
const conversationsData = [ /* ... */ ];

// --- API Helper (Unchanged) ---
const callGeminiAPI = async (prompt) => { /* ... existing API call logic ... */ };


// --- Reusable Components ---
const UserProfile = () => (
    <div className="flex items-center gap-3 cursor-pointer group">
        <img src="https://i.imgur.com/5A10t19.png" alt="Adam Vasylenko" className="w-11 h-11 rounded-full border-2 border-[#D4A57F] group-hover:scale-105 transition-transform" />
        <div>
            <p className={`font-bold ${theme.primary} transition-colors group-hover:${theme.highlight}`}>Dr. Adam Vasylenko</p>
            <p className={`text-sm ${theme.secondary}`}>Dietician</p>
        </div>
    </div>
);

const NavItem = ({ icon: Icon, text, path, isCollapsed }) => {
    const location = useLocation();
    const isActive = location.pathname === path;
    
    return (
        <Link to={path} title={text} className={`w-full flex items-center h-12 px-4 rounded-lg transition-all duration-300 ease-in-out group ${isActive ? `bg-gradient-to-r from-[#F9F3EE] to-white/50 ${theme.highlight} shadow-inner` : `${theme.secondary} hover:bg-gray-100 hover:text-[#B8860B]`}`}>
            <Icon className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'mx-auto' : 'mr-4'} group-hover:scale-110`} />
            <span className={`font-semibold transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>{text}</span>
        </Link>
    );
};


// --- Main Layout Components ---
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const navItems = [
        { icon: LayoutDashboard, text: "Dashboard", path: "/" },
        { icon: Calendar, text: "Calendar", path: "/calendar" },
        { icon: MessageSquare, text: "Messages", path: "/messages" },
        { icon: HeartPulse, text: "Clients", path: "/clients" },
        { icon: ClipboardList, text: "Meal Plans", path: "/meal-plans" },
        { icon: BarChart3, text: "Analytics", path: "/analytics" },
        { icon: Dumbbell, text: "Exercises Lib", path: "/exercises" },
        { icon: BrainCircuit, text: "AI Tools", path: "/ai-tools" },
    ];

    return (
        <aside className={`fixed top-0 left-0 h-full ${theme.sidebar} border-r border-white/20 flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? 'w-24' : 'w-64'} shadow-2xl`}>
            <div className="flex items-center justify-between p-4 h-20">
                {!isCollapsed && <h1 className={`text-2xl font-bold ${theme.highlight} tracking-wider`}>Ayu-Aahar</h1>}
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                    {isCollapsed ? <Menu className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                </button>
            </div>
            <nav className="flex-1 px-4 space-y-3 mt-6">
                {navItems.map(item => <NavItem key={item.path} {...item} isCollapsed={isCollapsed} />)}
            </nav>
            <div className="p-4 border-t border-gray-200/50">
                <Link to="/logout" title="Logout" className={`w-full flex items-center h-12 px-4 rounded-lg transition-all duration-300 ${theme.secondary} hover:bg-gray-100`}>
                     <LogOut className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'mx-auto' : 'mr-4'}`} />
                    {!isCollapsed && <span className="font-semibold">Logout</span>}
                </Link>
            </div>
        </aside>
    );
};

const Header = () => {
    const location = useLocation();
    const getTitle = () => {
        const path = location.pathname;
        if (path === '/') return 'Dashboard';
        // A simple way to format titles from paths
        const title = path.replace('/', '').replace('-', ' ');
        return title.charAt(0).toUpperCase() + title.slice(1);
    };

    return (
        <header className="flex items-center justify-between p-6 bg-transparent">
             <h1 className={`text-4xl font-bold ${theme.primary} font-serif`}>{getTitle()}</h1>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.secondary}`} />
                    <input type="text" placeholder="Search clients, plans..." className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full w-64 h-11 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#D4A57F] transition-all" />
                </div>
                <UserProfile />
            </div>
        </header>
    );
};


// --- Page/View Components ---
const DashboardView = () => (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
            <div className={`${theme.card} p-8`}>
                <h2 className={`text-2xl font-bold ${theme.primary} mb-4 font-serif`}>Upcoming Appointment</h2>
                <div className="flex items-center gap-6">
                    <img src={upcomingAppointment.avatar} alt={upcomingAppointment.name} className="w-20 h-20 rounded-full shadow-lg" />
                    <div className="flex-grow">
                        <p className={`font-bold text-xl ${theme.primary}`}>{upcomingAppointment.name}</p>
                        <p className={`${theme.accent} text-md`}>{upcomingAppointment.role}</p>
                    </div>
                    <div className="text-right">
                        <p className={`font-semibold text-lg ${theme.accent}`}>{upcomingAppointment.date}</p>
                        <p className={`${theme.secondary}`}>{upcomingAppointment.time}</p>
                    </div>
                     <Link to="/appointments/1" style={{backgroundColor: theme.highlightStrong}} className={`ml-6 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl`}>
                        Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
            <div className={`${theme.card} p-8`}>
                <h2 className={`text-2xl font-bold ${theme.primary} mb-6 font-serif`}>Future Appointments</h2>
                <ul className="space-y-4">
                    {futureAppointments.map((appt, index) => (
                        <li key={index} className="flex items-center p-4 rounded-xl hover:bg-gray-50/50 transition-colors">
                            <div className={`text-center mr-6 w-16 p-2 rounded-lg ${theme.highlightBg}`}>
                                <p className={`font-extrabold text-2xl ${theme.highlight}`}>{appt.date.split(' ')[0]}</p>
                                <p className={`text-sm font-semibold ${theme.accent}`}>{appt.date.split(' ')[1]}</p>
                            </div>
                            <div className="flex-grow">
                                <p className={`font-bold text-lg ${theme.primary}`}>{appt.title}</p>
                                <p className={`${theme.secondary}`}>with {appt.with}</p>
                            </div>
                            <p className={`${theme.accent} font-semibold text-md`}>{appt.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
        {/* Right Column (AI Features) */}
        <div className={`${theme.card} p-8 flex flex-col bg-gradient-to-br from-purple-50 via-white to-purple-50`}>
            <h2 className={`text-2xl font-bold ${theme.primary} mb-6 font-serif`}>AI Assistant</h2>
            <div className="flex-grow flex flex-col gap-6">
                <div className={`p-5 rounded-xl bg-white/80 border border-purple-100 shadow-sm`}>
                    <div className="flex items-center gap-3 mb-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-purple-800 text-lg">Summarize Client Data</h3>
                    </div>
                    <p className="text-sm text-purple-700/80">Instantly get a client's progress summary, diet logs, and more.</p>
                </div>
                <div className={`p-5 rounded-xl bg-white/80 border border-purple-100 shadow-sm`}>
                    <div className="flex items-center gap-3 mb-2">
                         <BrainCircuit className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-purple-800 text-lg">Appointment Insights</h3>
                    </div>
                    <p className="text-sm text-purple-700/80">Analyze appointment history to find patterns and suggest improvements.</p>
                </div>
                 <div className="mt-auto pt-6">
                    <button style={{backgroundColor: theme.aiPurple}} className="w-full text-white font-bold py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                        Explore AI Tools <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const PlaceholderView = ({ title }) => (
    <div className="p-8 h-[calc(100vh-88px)] flex items-center justify-center">
        <div className="text-center">
            <h1 className={`text-5xl font-bold ${theme.primary} font-serif`}>{title}</h1>
            <p className={`mt-4 text-xl ${theme.secondary}`}>This page is under construction.</p>
            <p className={`${theme.accent} mt-2`}>More amazing features coming soon!</p>
        </div>
    </div>
);


// --- Main App Component ---
export default function Dashboard1() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <>
            <div className={`${theme.bg} font-sans flex min-h-screen`}>
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');
                        .font-serif { font-family: 'Lora', serif; }
                        .font-sans { font-family: 'Poppins', sans-serif; }
                    `}
                </style>
                <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
                <main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'ml-24' : 'ml-64'}`}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<DashboardView />} />
                        <Route path="/calendar" element={<PlaceholderView title="Calendar" />} />
                        <Route path="/messages" element={<PlaceholderView title="Messages" />} />
                        <Route path="/clients" element={<PlaceholderView title="Clients" />} />
                        <Route path="/meal-plans" element={<PlaceholderView title="Meal Plans" />} />
                        <Route path="/analytics" element={<PlaceholderView title="Analytics" />} />
                        <Route path="/exercises" element={<PlaceholderView title="Exercises Library" />} />
                        <Route path="/ai-tools" element={<PlaceholderView title="AI Tools" />} />
                        <Route path="/logout" element={<PlaceholderView title="Logged Out" />} />
                        <Route path="/appointments/:id" element={<PlaceholderView title="Appointment Details" />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

