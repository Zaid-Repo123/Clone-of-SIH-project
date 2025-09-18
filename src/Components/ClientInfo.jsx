import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import {
    LayoutDashboard, Calendar, MessageSquare, ClipboardList,
    BarChart3, BrainCircuit, LogOut, ChevronLeft, Menu, ArrowRight,
    Search, Sparkles, User, Info, Shield, Apple, Users, Edit, Download, Printer, Filter,
    Flame, Wind, Droplets, Utensils, Wheat, Beef, Carrot, ChevronDown
} from 'lucide-react';
import theme from './theme';
import UserProfile from './UserProfile';
import NavItem from './NavItem';
import Accordion from './Accordion';
import StatCard from './StatCard';
import DoshaRadarChart from './DoshaRadarChart';
import MacroDonutChart from './MacroDonutChart';
import NutrientBar from './NutrientBar';
import Sidebar from './Sidebar';
import Header from './Header';
import CurrentRouteLogger from './CurrentRouteLogger';
import PlaceholderView from './PlaceholderView';

// Attach icons to theme for Sidebar
theme.icons = { LayoutDashboard, Calendar, MessageSquare, ClipboardList, BarChart3, BrainCircuit, Users };

// --- MOCK DATA ---
const clientsData = [
    { id: 1, name: 'Amelia Sharma', age: 45, sex: 'Female', recentComplaint: 'Low energy, bloating', avatar: 'https://i.imgur.com/Jk3a2zC.png' },
    { id: 2, name: 'Rohan Verma', age: 32, sex: 'Male', recentComplaint: 'Weight management', avatar: 'https://i.imgur.com/5A10t19.png' },
    { id: 3, name: 'Priya Patel', age: 28, sex: 'Female', recentComplaint: 'Skin issues (acne)', avatar: 'https://i.imgur.com/pYf0s7E.png' },
    { id: 4, name: 'Arjun Singh', age: 52, sex: 'Male', recentComplaint: 'Joint stiffness', avatar: 'https://i.imgur.com/dZ5p5yG.png' },
];

const clientProfileData = {
    id: 1, name: 'Amelia Sharma', avatar: 'https://i.imgur.com/Jk3a2zC.png', dob: '1980-09-15', age: 45,
    history: [
        { title: 'Appointment Information', icon: Info, content: 'Initial consultation on 2025-08-01. Follow-up scheduled. Client is motivated and engaged.' },
        { title: 'Personal and Social History', icon: Users, content: 'Works a desk job. Moderate stress levels. Socially active on weekends. Non-smoker.' },
        { title: 'Medical History', icon: Shield, content: 'No major surgeries. Allergic to penicillin. History of seasonal allergies.' },
        { title: 'Dietary History', icon: Apple, content: 'Generally follows a balanced diet but tends to skip breakfast. Enjoys home-cooked meals.' },
    ],
    analysis: {
        dosha: { vata: 60, pitta: 85, kapha: 40 },
        macros: { protein: 35, carbs: 45, fat: 20 },
        nutrients: [
            { name: 'Iron', value: 75, target: 100 }, { name: 'Vitamin D', value: 50, target: 100 }, { name: 'Calcium', value: 80, target: 100 },
        ]
    },
    planning: {
        goal: 'Improve energy levels and digestive health by balancing Pitta dosha.',
        macroTargets: { protein: '100g', carbs: '150g', fat: '50g' },
        ayurvedicFocus: 'Focus on cooling, hydrating foods. Incorporate sweet, bitter, and astringent tastes. Avoid spicy, oily, and overly sour foods.'
    },
    mealPlan: [
        { day: 'Monday', meals: [
            { type: 'Breakfast', name: 'Coconut Milk Oatmeal', calories: 350, icon: Wheat },
            { type: 'Lunch', name: 'Quinoa Salad with Cucumber', calories: 450, icon: Utensils },
            { type: 'Dinner', name: 'Mung Dal with Basmati Rice', calories: 500, icon: Carrot },
        ]},
        { day: 'Tuesday', meals: [
            { type: 'Breakfast', name: 'Avocado Toast with Sprouts', calories: 400, icon: Wheat },
            { type: 'Lunch', name: 'Chickpea and Spinach Curry', calories: 550, icon: Utensils },
            { type: 'Dinner', name: 'Baked Salmon with Asparagus', calories: 600, icon: Beef },
        ]},
    ]
};
const upcomingAppointment = { name: 'Amelia Sharma', role: 'Client', avatar: 'https://i.imgur.com/Jk3a2zC.png', date: 'Tuesday, 23 September 2025', time: '3:00 PM', };
const futureAppointments = [
    { date: '25 Sep', time: '10:00 AM', title: 'Nutritionist Follow-up', with: 'Rohan Verma' },
    { date: '28 Sep', time: '05:00 PM', title: 'Personal Training Session', with: 'Priya Patel' },
];

// ...existing code...

const DashboardView = () => {
    useEffect(() => {
        console.log("Rendering DashboardView");
    }, []);

    return (
        <>
            <Header title="Dashboard" theme={theme} UserProfile={UserProfile} Search={Search} />
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                             <Link to="/clients/1" style={{backgroundColor: theme.highlightStrong}} className={`ml-6 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl`}>
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
                <div className={`${theme.card} p-8 flex flex-col bg-gradient-to-br from-purple-50 via-white to-purple-50`}>
                    <h2 className={`text-2xl font-bold ${theme.primary} mb-6 font-serif`}>AI Assistant</h2>
                    <div className="flex-grow flex flex-col gap-6">
                        <div className={`p-5 rounded-xl bg-white/80 border border-purple-100 shadow-sm`}>
                             <div className="flex items-center gap-3 mb-2"> <Sparkles className="w-5 h-5 text-purple-600" /> <h3 className="font-bold text-purple-800 text-lg">Summarize Client Data</h3> </div>
                            <p className="text-sm text-purple-700/80">Instantly get a client's progress summary, diet logs, and more.</p>
                        </div>
                        <div className={`p-5 rounded-xl bg-white/80 border border-purple-100 shadow-sm`}>
                             <div className="flex items-center gap-3 mb-2"> <BrainCircuit className="w-5 h-5 text-purple-600" /> <h3 className="font-bold text-purple-800 text-lg">Appointment Insights</h3> </div>
                            <p className="text-sm text-purple-700/80">Analyze appointment history to find patterns and suggest improvements.</p>
                        </div>
                         <div className="mt-auto pt-6"> <button style={{backgroundColor: theme.aiPurple}} className="w-full text-white font-bold py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"> Explore AI Tools <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /> </button> </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ClientsListView = () => {
    const [filter, setFilter] = useState('');
    const filteredClients = clientsData.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    useEffect(() => {
        console.log("Rendering ClientsListView");
    }, []);
    return (
    <>
        <Header title="Clients" theme={theme} UserProfile={UserProfile} Search={Search} />
        <div className="p-6">
            <div className={`${theme.card} p-8`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className={`text-2xl font-bold ${theme.primary} font-serif`}>All Clients ({clientsData.length})</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.secondary}`} />
                            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search by name..." className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full w-64 h-11 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#D4A57F] transition-all" />
                        </div>
                        <button className={`p-3 rounded-lg flex items-center gap-2 font-semibold text-sm ${theme.accent} bg-gray-100 hover:bg-gray-200`}> <Filter className="w-4 h-4" /> Filter</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200/80">
                                <th className="p-4 text-sm font-semibold text-gray-500">Name</th>
                                <th className="p-4 text-sm font-semibold text-gray-500">Age</th>
                                <th className="p-4 text-sm font-semibold text-gray-500">Sex</th>
                                <th className="p-4 text-sm font-semibold text-gray-500">Recent Complaint</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map(client => (
                                <tr key={client.id} className="border-b border-gray-200/50 hover:bg-gray-50/50">
                                    <td className="p-4 flex items-center gap-4">
                                        <img src={client.avatar} alt={client.name} className="w-10 h-10 rounded-full"/>
                                        <span className={`font-bold ${theme.primary}`}>{client.name}</span>
                                    </td>
                                    <td className={`p-4 ${theme.accent}`}>{client.age}</td>
                                    <td className={`p-4 ${theme.accent}`}>{client.sex}</td>
                                    <td className={`p-4 ${theme.accent}`}>{client.recentComplaint}</td>
                                    <td className="p-4">
                                        <Link to={`/clients/${client.id}`} style={{backgroundColor: theme.highlightStrong}} className={`text-white font-bold py-2 px-5 rounded-full hover:opacity-90 transition-opacity text-sm`}>
                                            View Profile
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
)};


const ClientProfileView = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('Information');
    const tabs = ['Information', 'Measurements', 'Planning', 'Meal Plan', 'Follow-up'];
    useEffect(() => {
        console.log(`Rendering ClientProfileView for client ID: ${id}`);
    }, [id]);
    const InformationTab = () => (
        <div className="space-y-4">
            {clientProfileData.history.map(item => <Accordion key={item.title} icon={item.icon} title={item.title} theme={theme}><p>{item.content}</p></Accordion>)}
        </div>
    );
    const PlanningTab = () => (
        <div className="space-y-6">
            <Accordion icon={Sparkles} title="Primary Goal" theme={theme}>
                <p className="text-lg text-gray-700">{clientProfileData.planning.goal}</p>
            </Accordion>
             <Accordion icon={Utensils} title="Macronutrient Targets" theme={theme}>
                <div className="flex gap-4">
                   <StatCard label="Protein" value={clientProfileData.planning.macroTargets.protein} icon={Beef} theme={theme} />
                   <StatCard label="Carbohydrates" value={clientProfileData.planning.macroTargets.carbs} icon={Wheat} theme={theme} />
                   <StatCard label="Fat" value={clientProfileData.planning.macroTargets.fat} icon={Droplets} theme={theme} />
                </div>
            </Accordion>
            <Accordion icon={BrainCircuit} title="Ayurvedic Focus (Pitta Balancing)" theme={theme}>
                <p className="text-gray-700">{clientProfileData.planning.ayurvedicFocus}</p>
            </Accordion>
        </div>
    );
    const MealPlanTab = () => (
        <div className="space-y-6">
            {clientProfileData.mealPlan.map(dayPlan => (
                <Accordion icon={Calendar} title={dayPlan.day} key={dayPlan.day} theme={theme}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {dayPlan.meals.map(meal => (
                             <div key={meal.name} className="p-4 rounded-lg bg-gray-50/80 border border-gray-200/50">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-full ${theme.highlightBg}`}><meal.icon className={`w-5 h-5 ${theme.highlight}`} /></div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-500">{meal.type}</p>
                                        <p className={`font-semibold ${theme.primary}`}>{meal.name}</p>
                                    </div>
                                </div>
                                <p className={`text-right text-sm mt-2 ${theme.secondary}`}>{meal.calories} kcal</p>
                             </div>
                        ))}
                    </div>
                </Accordion>
            ))}
        </div>
    );
    const renderActiveTab = () => {
        switch (activeTab) {
            case 'Information': return <InformationTab />;
            case 'Planning': return <PlanningTab />;
            case 'Meal Plan': return <MealPlanTab />;
            default: return <div className={`p-4 ${theme.accent}`}>Content for {activeTab} is coming soon.</div>;
        }
    };
    return (
        <>
            <Header title="Client Profile" theme={theme} UserProfile={UserProfile} Search={Search} />
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <div className={`${theme.card} p-6`}>
                        <div className="flex items-center gap-6">
                            <img src={clientProfileData.avatar} alt={clientProfileData.name} className="w-24 h-24 rounded-full shadow-lg" />
                            <div className="flex-grow">
                                <h2 className={`text-3xl font-bold ${theme.primary} font-serif`}>{clientProfileData.name}</h2>
                                <p className={`${theme.secondary}`}>DOB: {clientProfileData.dob} ({clientProfileData.age} years)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><Edit className={`w-5 h-5 ${theme.accent}`} /></button>
                                <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><Download className={`w-5 h-5 ${theme.accent}`} /></button>
                                <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><Printer className={`w-5 h-5 ${theme.accent}`} /></button>
                            </div>
                        </div>
                        <div className="border-t border-gray-200/80 mt-6 pt-4 flex items-center gap-4 overflow-x-auto">
                            {tabs.map(tab => (
                                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab ? `text-white shadow-md` : `${theme.accent} hover:bg-gray-100`}`} style={{backgroundColor: activeTab === tab ? theme.highlightStrong : 'transparent'}}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={`${theme.card} p-8`}>
                        {renderActiveTab()}
                    </div>
                </div>

                <div className="flex flex-col gap-8 sticky top-6">
                    <div className={`${theme.card} p-6 text-center`}>
                         <h3 className={`text-xl font-bold ${theme.primary} mb-4 font-serif`}>Ayurvedic Profile</h3>
                         <DoshaRadarChart data={clientProfileData.analysis.dosha} theme={theme} />
                         <p className={`mt-4 text-sm ${theme.accent}`}>Dominant Dosha: <span className="font-bold text-red-500">Pitta</span></p>
                    </div>
                    <div className={`${theme.card} p-6`}>
                         <h3 className={`text-xl font-bold ${theme.primary} mb-4 font-serif text-center`}>Macronutrient Profile</h3>
                         <div className="flex justify-center">
                             <MacroDonutChart data={clientProfileData.analysis.macros} theme={theme} />
                         </div>
                         <div className="text-sm space-y-2 mt-4">
                            <p className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#8D6E63]"></span>Protein</span> <span>{clientProfileData.analysis.macros.protein}%</span></p>
                            <p className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#D4A57F]"></span>Carbs</span> <span>{clientProfileData.analysis.macros.carbs}%</span></p>
                            <p className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#BDBDBD]"></span>Fat</span> <span>{clientProfileData.analysis.macros.fat}%</span></p>
                         </div>
                    </div>
                    <div className={`${theme.card} p-6`}>
                         <h3 className={`text-xl font-bold ${theme.primary} mb-4 font-serif`}>Key Nutrients</h3>
                         <div className="space-y-4">
                            {clientProfileData.analysis.nutrients.map(n => <NutrientBar key={n.name} {...n} theme={theme} />)}
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// --- Main App Component ---
export default function ClientInfo() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    return (
        <>
            <div className={`${theme.bg} font-sans flex min-h-screen`}>
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap'); .font-serif { font-family: 'Lora', serif; } .font-sans { font-family: 'Poppins', sans-serif; }`}</style>
                <Sidebar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} theme={theme} />
                <main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'ml-24' : 'ml-64'}`}>
                    <CurrentRouteLogger />
                    <Routes>
                        <Route path="/" element={<DashboardView />} />
                        <Route path="/clients/:id" element={<ClientProfileView />} />
                        <Route path="/clients" element={<ClientsListView />} />
                        <Route path="/calendar" element={<PlaceholderView title="Calendar" theme={theme} />} />
                        <Route path="/messages" element={<PlaceholderView title="Messages" theme={theme} />} />
                        <Route path="/meal-plans" element={<PlaceholderView title="Meal Plans" theme={theme} />} />
                        <Route path="/analytics" element={<PlaceholderView title="Analytics" theme={theme} />} />
                        <Route path="/ai-tools" element={<PlaceholderView title="AI Tools" theme={theme} />} />
                        <Route path="/logout" element={<PlaceholderView title="Logged Out" theme={theme} />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

