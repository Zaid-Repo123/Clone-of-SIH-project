import React, { useState } from 'react';
import { 
    LayoutDashboard, Calendar, MessageSquare, HeartPulse, ClipboardList, 
    BarChart3, Zap, BrainCircuit, LogOut, ChevronLeft, ChevronRight, 
    Search, X, Utensils, Dumbbell, Stethoscope, MapPin, Clock, 
    Calendar as CalendarIcon, Sparkles, Loader, User, Filter, Phone, 
    Video, MoreHorizontal, Paperclip, Send, Image as ImageIcon, FileText, Link2,
    Leaf, Award, AlertTriangle
} from 'lucide-react';

// --- Mock Data ---
const initialCalendarEvents = {
    '2028-09-04': [{ time: '9:00 AM', title: 'Grocery Shopping P.S.', type: 'meal' }],
    '2028-09-05': [{ time: '7:00 AM', title: 'Morning Yoga Session', type: 'activity', note: "Focus on flexibility and breathing exercises, 1-hour session" }],
    '2028-09-06': [{ time: '3:00 PM', title: 'General Health Check-up with Doctor', type: 'appointment', note: "Annual check-up, bring previous health records, and fasting required for blood tests." }],
    '2028-09-08': [{ time: '7:00 PM', title: 'Meal Preparation for Two Days', type: 'meal' }],
    '2028-09-09': [{ time: '9:00 AM', title: 'Running 5 km', type: 'activity' }],
    '2028-09-11': [{ time: '10:00 AM', title: 'Online Nutrition Workshop', type: 'appointment' }],
    '2028-09-13': [{ time: '1:00 PM', title: 'Quinoa Salad [Dinner]', type: 'meal' }],
    '2028-09-14': [{ time: '6:00 PM', title: 'Strength Training - Agility (15kg)', type: 'activity' }],
    '2028-09-16': [{ time: '4:00 PM', title: 'Meal Prep Oatmeal with Berries [Breakfast]', type: 'meal' }, { time: '6:00 PM', title: 'Dermatologist Consultation with a Sponsored', type: 'appointment' }],
    '2028-09-18': [{ time: '9:00 AM', title: 'Swimming Session', type: 'activity' }],
    '2028-09-19': [{ time: '4:00 PM', title: 'Grocery Shopping Program', type: 'meal' }],
    '2028-09-21': [{ time: '6:00 PM', title: 'Cardio Group Fitness Class', type: 'activity' }],
    '2028-09-26': [{ time: '7:00 AM', title: 'Flexibility Training - Stretching', type: 'activity' }],
    '2028-09-27': [{ time: '2:00 PM', title: 'Nutritional Consultation', type: 'appointment' }],
};

const initialSelectedEventDetails = {
    activity: { title: "Morning Yoga Session", date: "Tuesday, 5 September 2028", time: "7:00 AM", location: "Sunrise Yoga Studio, Main Street", note: "Focus on flexibility and breathing exercises, 1-hour session" },
    appointment: { title: "General Health Check-up with Doctor", date: "Tuesday, 5 September 2028", time: "3:00 PM", location: "Central Health Clinic, 5th Avenue", note: "Annual check-up, bring previous health records, and fasting required for blood tests." }
};

const conversationsData = [
    { id: 1, name: 'Mia Johnson', role: 'Yoga Instr.', lastMessage: 'It was great to see you at the yo...', time: '11:40 AM', avatar: 'https://i.imgur.com/023pTf8.png', active: false },
    { id: 2, name: 'Dr. Emily Lawson', role: 'Doctor', lastMessage: 'Hi Ladya, your blood test results...', time: '8:15 AM', avatar: 'https://i.imgur.com/Jk3a2zC.png', active: false },
    { id: 3, name: 'Alex Foster', role: 'Personal Tr.', lastMessage: 'You\'ve got this! See you at our next s...', time: '10:30 AM', avatar: 'https://i.imgur.com/5A10t19.png', active: true },
    { id: 4, name: 'Sara Mitchell', role: 'Nutritionist', lastMessage: 'I\'ve updated your meal plan for...', time: '9:45 AM', avatar: 'https://i.imgur.com/pYf0s7E.png', active: false },
    { id: 5, name: 'Laura Davis', role: 'Health Coa...', lastMessage: 'Just checking in to see how you\'...', time: '9:10 AM', avatar: 'https://i.imgur.com/N7aD0sI.png', active: false },
    { id: 6, name: 'Dr. Kevin Moore', role: 'Physiot..', lastMessage: 'Remember to do the stretching...', time: '8:25 AM', avatar: 'https://i.imgur.com/dZ5p5yG.png', active: false },
    { id: 7, name: 'Chris Novak', role: 'Fitness Coa...', lastMessage: 'Hey Ladya, I\'ve updated your cardio...', time: '7:30 AM', avatar: 'https://i.imgur.com/Q9bO3aI.png', active: false },
    { id: 8, name: 'Dr. Mehdi Petit', role: 'Doctor', lastMessage: 'Don\'t forget your follow-up appoint...', time: '7:05 AM', avatar: 'https://i.imgur.com/R2DN3N7.png', active: false },
];

const chatHistory = [
    { sender: 'Alex', text: 'Hey Adam, great job on completing your 5th strength training session today! You\'re making awesome progress with the 50kg squats 💪', time: '9:40 AM' },
    { sender: 'You', text: 'Thanks, Alex! It\'s definitely challenging, but I\'m feeling stronger each time.', time: '9:47 AM' },
    { sender: 'Alex', text: 'That\'s the spirit! Let\'s aim for more reps in our next session-- think you can handle 3 more per set?', time: '9:50 AM' },
    { sender: 'You', text: 'That sounds tough, but I\'ll give it my best shot!', time: '10:05 AM' },
    { sender: 'Alex', text: 'I have no doubt you\'ll crush it! Also, remember to focus on your form to avoid injury. I\'ll be there to guide you through it.', time: '10:10 AM' },
    { sender: 'You', text: 'Will do! Thanks for the encouragement!', time: '10:25 AM' },
    { sender: 'Alex', text: 'You\'ve got this! See you at our next session. Let\'s keep pushing forward!', time: '10:30 AM' },
];

const alexFosterProfile = {
    name: "Alex Foster", role: "Personal Trainer", avatar: "https://i.imgur.com/5A10t19.png", about: "A certified personal trainer with 8 years of experience, specializing in strength training and personalized fitness plans for clients.", media: [{id: 1, url: "https://i.imgur.com/L1MImyB.jpg"}, {id: 2, url: "https://i.imgur.com/3YxQu7u.jpg"}], documents: [ { name: "Customized workout plan.pdf", size: "2.5 mb", type: 'pdf' }, { name: "Nutritional guide for muscle rec...", size: "1.45 mb", type: 'pdf' }, { name: "Weekly progress report.xls", size: "1.18 mb", type: 'xls' }, ], links: [ { text: "http://www.alexfosterfitness.com/" }, { text: "@alex_fitnesspro", platform: "instagram" }, { text: "Alex Foster Fitness Tips", platform: "youtube" }, ]
}


// --- Gemini API Helper ---
const callGeminiAPI = async (prompt, jsonSchema = null, retries = 3, delay = 1000) => {
    const apiKey = ""; // Canvas will provide key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        ...(jsonSchema && {
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: jsonSchema,
            }
        })
    };

    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
            const result = await response.json();
            const candidate = result.candidates?.[0];
            const text = candidate?.content?.parts?.[0]?.text;
            if (text) return jsonSchema ? JSON.parse(text) : text;
            throw new Error("Invalid response structure from API");
        } catch (error) {
            console.error(`Attempt ${i + 1} failed:`, error);
            if (i < retries - 1) await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
            else return jsonSchema ? null : "Sorry, I couldn't generate a response right now. Please try again later.";
        }
    }
};

// --- Sub-components ---
const NavItem = ({ icon: Icon, text, active, alerts, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${active ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}>
        <Icon className="w-5 h-5 mr-3" />
        <span className="font-medium">{text}</span>
        {alerts && <span className="ml-auto bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{alerts}</span>}
    </button>
);

const Sidebar = ({ activeView, setActiveView }) => (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-6"> <h1 className="text-2xl font-bold text-green-600">Nutrigo</h1> </div>
        <nav className="flex-1 px-4 space-y-2">
            <NavItem icon={LayoutDashboard} text="Dashboard" active={activeView === 'dashboard'} onClick={() => setActiveView('dashboard')} />
            <NavItem icon={Calendar} text="Calendar" active={activeView === 'calendar'} onClick={() => setActiveView('calendar')} />
            <NavItem icon={MessageSquare} text="Messages" alerts="1" active={activeView === 'messages'} onClick={() => setActiveView('messages')} />
            <NavItem icon={HeartPulse} text="Healthy Menu" active={activeView === 'healthy-menu'} onClick={() => setActiveView('healthy-menu')} />
            <NavItem icon={ClipboardList} text="Meal Plan" />
            <NavItem icon={BarChart3} text="Food Diary" />
            <NavItem icon={Zap} text="Progress" />
            <NavItem icon={Dumbbell} text="Exercises" />
            <NavItem icon={BrainCircuit} text="Health Insights" active={activeView === 'health-insights'} onClick={() => setActiveView('health-insights')} />
        </nav>
        <div className="p-4">
            <div className="bg-orange-100 rounded-lg p-6 text-center">
                <img src="https://i.imgur.com/gQJ97zm.png" alt="Vegetables" className="mx-auto -mt-16 w-32"/>
                <p className="font-semibold mt-4">Start your health journey with a <span className="font-bold">FREE 1-month</span> access to Nutrigo!</p>
                <button className="mt-4 w-full bg-orange-400 text-white font-bold py-2 rounded-lg hover:bg-orange-500 transition-colors">Claim Now!</button>
            </div>
        </div>
        <div className="p-4 border-t border-gray-200"> <NavItem icon={LogOut} text="Logout" /> </div>
    </aside>
);

// --- Calendar View Components ---
const StatCard = ({ icon: Icon, count, title, color }) => { const colorClasses = { green: 'bg-green-100 text-green-600', orange: 'bg-orange-100 text-orange-600', blue: 'bg-blue-100 text-blue-600' }; return ( <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center flex-1"> <div className={`p-3 rounded-lg ${colorClasses[color]}`}><Icon className="w-6 h-6" /></div> <div className="ml-4"> <p className="text-2xl font-bold text-gray-800">{count}</p> <p className="text-sm text-gray-500">{title}</p> </div> </div> ); };
const CalendarEvent = ({ time, title, type }) => { const typeClasses = { meal: 'bg-green-100 text-green-800 border-l-4 border-green-500', activity: 'bg-blue-100 text-blue-800 border-l-4 border-blue-500', appointment: 'bg-orange-100 text-orange-800 border-l-4 border-orange-500' }; return ( <div className={`text-xs p-2 rounded-md mb-1 ${typeClasses[type]}`}> <p className="font-semibold">{time}</p> <p className="truncate">{title}</p> </div> ); };

// --- Messages View Components ---
const ConversationItem = ({ data }) => ( <div className={`flex items-center p-3 rounded-lg cursor-pointer ${data.active ? 'bg-green-50' : 'hover:bg-gray-50'}`}> {data.active && <div className="w-1 h-10 bg-green-500 rounded-full mr-2"></div>} <img src={data.avatar} alt={data.name} className="w-12 h-12 rounded-full"/> <div className="flex-1 ml-3"> <div className="flex justify-between items-center"> <p className="font-bold text-sm text-gray-800">{data.name}</p> <p className="text-xs text-gray-400">{data.time}</p> </div> <p className="text-xs text-gray-500 truncate">{data.lastMessage}</p> </div> </div> );
const MessageBubble = ({ message }) => ( <div className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}> <div className={`max-w-xs lg:max-w-md p-3 rounded-2xl ${message.sender === 'You' ? 'bg-orange-100 rounded-br-none' : 'bg-gray-100 rounded-bl-none'}`}> <p className="text-sm text-gray-700">{message.text}</p> <p className={`text-xs mt-1 ${message.sender === 'You' ? 'text-right text-orange-900/50' : 'text-left text-gray-400'}`}>{message.time}</p> </div> </div> );
const ProfileSection = ({ title, children, showAll }) => ( <div> <div className="flex justify-between items-center mb-2"> <h4 className="font-bold text-gray-800">{title}</h4> {showAll && <button className="text-sm text-green-600 font-semibold">Show All</button>} </div> {children} </div> );

// --- Main Views ---
const CalendarView = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2028, 8, 1)); const [isDetailsPaneOpen, setIsDetailsPaneOpen] = useState(true); const [calendarEvents, setCalendarEvents] = useState(initialCalendarEvents); const [selectedEventDetails, setSelectedEventDetails] = useState(initialSelectedEventDetails); const [isSummaryLoading, setIsSummaryLoading] = useState(false); const [weeklySummary, setWeeklySummary] = useState(''); const [isNoteLoading, setIsNoteLoading] = useState({ type: null, loading: false });
    const monthName = currentDate.toLocaleString('default', { month: 'long' }); const year = currentDate.getFullYear();
    const generateWeeklySummary = async () => { setIsSummaryLoading(true); setWeeklySummary(''); const eventsText = Object.entries(calendarEvents).map(([date, events]) => `On ${date}:\n${events.map(e => `- ${e.title} (${e.type})`).join('\n')}`).join('\n\n'); const prompt = `Act as a friendly and encouraging health coach. Here is my schedule for the month:\n\n${eventsText}\n\nBased on this, provide a brief, motivational summary of my activities for the first week of September 2028 (Sept 1 to Sept 7). Highlight my achievements and offer one simple, positive suggestion for the upcoming week. Use markdown for formatting.`; const summary = await callGeminiAPI(prompt); setWeeklySummary(summary); setIsSummaryLoading(false); };
    const enhanceNote = async (eventType) => { setIsNoteLoading({ type: eventType, loading: true }); const eventData = selectedEventDetails[eventType]; let prompt = ''; if (eventType === 'activity') prompt = `I have a "${eventData.title}" activity scheduled. My current note is: "${eventData.note}". Please enhance this by providing a more detailed plan. Suggest a brief warm-up, key exercises or poses, and a cool-down. Keep it concise and easy to follow for a beginner.`; else if (eventType === 'appointment') prompt = `I have an appointment for a "${eventData.title}". My current note is: "${eventData.note}". Please enhance this by suggesting 3-4 relevant questions I should ask the doctor during this specific type of check-up to make the most of my visit.`; if (prompt) { const enhancedNote = await callGeminiAPI(prompt); setSelectedEventDetails(prev => ({ ...prev, [eventType]: { ...prev[eventType], note: enhancedNote } })); } setIsNoteLoading({ type: null, loading: false }); };
    const renderCalendar = () => { const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay(); const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate(); let days = []; for (let i = 0; i < firstDayOfMonth; i++) days.push(<div key={`blank-${i}`} className="border-r border-b border-gray-200"></div>); for (let day = 1; day <= daysInMonth; day++) { const dateStr = `${year}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`; const events = calendarEvents[dateStr] || []; const isToday = day === 5 ? 'bg-yellow-100/50' : ''; days.push(<div key={day} className={`p-2 border-r border-b border-gray-200 flex flex-col min-h-[120px] ${isToday}`}> <span className={`font-semibold ${day === 5 ? 'text-green-600' : 'text-gray-600'}`}>{day}</span> <div className="mt-1 flex-grow">{events.map((event, index) => (<CalendarEvent key={index} {...event} />))}</div> </div>); } return days; };
    return ( <div className={`flex transition-all duration-300 ${isDetailsPaneOpen ? 'mr-[400px]' : 'mr-0'}`}> <div className="flex-1 p-8"> <header className="flex justify-between items-center mb-8"> <div className="flex items-center gap-4"> <h2 className="text-3xl font-bold text-gray-800">Calendar</h2> <button onClick={generateWeeklySummary} disabled={isSummaryLoading} className="flex items-center gap-2 bg-purple-100 text-purple-700 font-semibold py-2 px-4 rounded-lg hover:bg-purple-200 transition-colors disabled:opacity-50"> {isSummaryLoading ? <><Loader className="w-5 h-5 animate-spin"/> Generating...</> : <>✨ Get Weekly Summary</>} </button> </div> <div className="flex items-center gap-6"> <Search className="w-6 h-6 text-gray-500 cursor-pointer" /> <div className="flex items-center gap-3"> <img src="https://i.imgur.com/5A10t19.png" alt="Adam Vasylenko" className="w-12 h-12 rounded-full border-2 border-green-500" /> <div> <p className="font-bold text-gray-800">Adam Vasylenko</p> <p className="text-sm text-gray-500">Member</p> </div> </div> </div> </header> {weeklySummary && (<div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-6 relative"> <button onClick={() => setWeeklySummary('')} className="absolute top-3 right-3 p-1 rounded-full hover:bg-purple-100"><X className="w-4 h-4 text-purple-600"/></button> <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5"/> Your Weekly Insight</h3> <div className="prose prose-sm text-purple-700" dangerouslySetInnerHTML={{ __html: weeklySummary.replace(/\n/g, '<br />') }} /> </div>)} <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"> <StatCard icon={Utensils} count="15" title="Total Meal Planning Schedule" color="green" /> <StatCard icon={Dumbbell} count="10" title="Total Physical Activities Schedule" color="orange" /> <StatCard icon={Stethoscope} count="5" title="Total Appointments/Events Schedule" color="blue" /> </div> <div className="bg-white p-6 rounded-2xl border border-gray-200"> <div className="flex justify-between items-center mb-6"> <div className="flex items-center gap-4"> <button className="p-2 rounded-lg hover:bg-gray-100"><ChevronLeft className="w-5 h-5 text-gray-600" /></button> <h3 className="text-xl font-semibold text-gray-800">{monthName} {year}</h3> <button className="p-2 rounded-lg hover:bg-gray-100"><ChevronRight className="w-5 h-5 text-gray-600" /></button> </div> <div className="flex items-center gap-2"> <div className="flex border border-gray-300 rounded-lg"> <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-l-lg">Day</button> <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 border-l border-r border-gray-300">Week</button> <button className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-r-lg">Month</button> </div> <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">New Schedule</button> </div> </div> <div className="grid grid-cols-7 border-t border-l border-gray-200"> {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (<div key={day} className="p-3 text-center text-sm font-medium text-gray-500 border-r border-b border-gray-200 bg-gray-50">{day}</div>))} {renderCalendar()} </div> </div> </div> <aside className={`w-[400px] bg-white border-l border-gray-200 p-8 fixed right-0 top-0 h-full transform transition-transform duration-300 ${isDetailsPaneOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}> <div className="flex justify-between items-center mb-8"> <h3 className="text-xl font-bold text-gray-800">Schedule Details</h3> <button onClick={() => setIsDetailsPaneOpen(false)} className="p-2 rounded-full hover:bg-gray-100"> <X className="w-5 h-5 text-gray-600" /> </button> </div> <div className="space-y-6"> <div> <span className="text-sm font-semibold text-gray-500">Physical Activities</span> <div className="bg-white border border-gray-200 rounded-xl p-5 mt-2"> <h4 className="font-bold text-lg text-gray-800">{selectedEventDetails.activity.title}</h4> <div className="text-gray-500 space-y-3 mt-3 text-sm"> <div className="flex items-center"><CalendarIcon className="w-4 h-4 mr-3" /><span>{selectedEventDetails.activity.date}</span></div> <div className="flex items-center"><Clock className="w-4 h-4 mr-3" /><span>{selectedEventDetails.activity.time}</span></div> <div className="flex items-center"><MapPin className="w-4 h-4 mr-3" /><span>{selectedEventDetails.activity.location}</span></div> </div> <div className="mt-4 bg-gray-50 p-3 rounded-lg"> <p className="text-sm font-semibold text-gray-600">Note</p> <div className="text-sm text-gray-500 mt-1 prose prose-sm" dangerouslySetInnerHTML={{ __html: selectedEventDetails.activity.note.replace(/\n/g, '<br />') }} /> </div> <div className="mt-5 flex gap-3"> <button onClick={() => enhanceNote('activity')} disabled={isNoteLoading.loading} className="flex-1 py-2 px-4 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 flex items-center justify-center gap-2 disabled:opacity-50"> {isNoteLoading.type === 'activity' ? <><Loader className="w-5 h-5 animate-spin"/> Working...</> : <>✨ Enhance Note</>} </button> <button className="flex-1 py-2 px-4 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200">Remove</button> </div> </div> </div> <div> <span className="text-sm font-semibold text-gray-500">Appointments</span> <div className="bg-white border border-gray-200 rounded-xl p-5 mt-2"> <h4 className="font-bold text-lg text-gray-800">{selectedEventDetails.appointment.title}</h4> <div className="text-gray-500 space-y-3 mt-3 text-sm"> <div className="flex items-center"><CalendarIcon className="w-4 h-4 mr-3" /><span>{selectedEventDetails.appointment.date}</span></div> <div className="flex items-center"><Clock className="w-4 h-4 mr-3" /><span>{selectedEventDetails.appointment.time}</span></div> <div className="flex items-center"><MapPin className="w-4 h-4 mr-3" /><span>{selectedEventDetails.appointment.location}</span></div> </div> <div className="mt-4 bg-gray-50 p-3 rounded-lg"> <p className="text-sm font-semibold text-gray-600">Note</p> <div className="text-sm text-gray-500 mt-1 prose prose-sm" dangerouslySetInnerHTML={{ __html: selectedEventDetails.appointment.note.replace(/\n/g, '<br />') }} /> </div> <div className="mt-5 flex gap-3"> <button onClick={() => enhanceNote('appointment')} disabled={isNoteLoading.loading} className="flex-1 py-2 px-4 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 flex items-center justify-center gap-2 disabled:opacity-50"> {isNoteLoading.type === 'appointment' ? <><Loader className="w-5 h-5 animate-spin"/> Working...</> : <>✨ Enhance Note</>} </button> <button className="flex-1 py-2 px-4 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200">Remove</button> </div> </div> </div> </div> </aside> </div> ); };

const MessagesView = () => {
    const [message, setMessage] = useState(''); const [isDrafting, setIsDrafting] = useState(false);
    const draftReply = async () => { setIsDrafting(true); const lastMessage = chatHistory[chatHistory.length - 1].text; const prompt = `My personal trainer just sent me this message: "${lastMessage}". As a user of a health app, draft a short, positive, and encouraging reply to them.`; const reply = await callGeminiAPI(prompt); setMessage(reply); setIsDrafting(false); }
    return (
      <div className="flex h-full bg-white">
        <div className="w-[380px] border-r border-gray-200 flex flex-col">
            <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-800">Messages</h2>
                <div className="mt-6 flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                    <Search className="w-5 h-5 text-gray-400"/>
                    <input type="text" placeholder="Search name, chat, etc" className="bg-transparent w-full focus:outline-none text-sm"/>
                    <button className="p-1 hover:bg-gray-200 rounded-md"><Filter className="w-5 h-5 text-gray-500"/></button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 space-y-2">
                {conversationsData.map(convo => <ConversationItem key={convo.id} data={convo} />)}
            </div>
            <div className="p-4"><button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">New Message</button></div>
        </div>
        <div className="flex-1 flex flex-col">
            <header className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                    <img src={alexFosterProfile.avatar} alt={alexFosterProfile.name} className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="font-bold text-gray-800">{alexFosterProfile.name}</p>
                        <p className="text-sm text-gray-500">last seen recently</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <button className="p-2 hover:bg-gray-100 rounded-full"><Phone className="w-5 h-5"/></button>
                    <button className="p-2 hover:bg-gray-100 rounded-full"><Video className="w-5 h-5"/></button>
                    <button className="p-2 hover:bg-gray-100 rounded-full"><MoreHorizontal className="w-5 h-5"/></button>
                </div>
            </header>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <p className="text-center text-sm text-gray-400">Today, Sept 8</p>
                {chatHistory.map((msg, index) => <MessageBubble key={index} message={msg} />)}
            </div>
            <div className="p-6 bg-gray-50">
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-3">
                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Paperclip className="w-5 h-5"/></button>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." className="flex-1 bg-transparent focus:outline-none"/>
                    <button onClick={draftReply} disabled={isDrafting} className="flex items-center gap-2 text-purple-700 font-semibold py-2 px-3 rounded-lg hover:bg-purple-100 transition-colors disabled:opacity-50">
                        {isDrafting ? <Loader className="w-5 h-5 animate-spin"/> : <Sparkles className="w-5 h-5"/>}
                    </button>
                    <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">Send</button>
                </div>
            </div>
        </div>
        <aside className="w-[350px] border-l border-gray-200 p-8 overflow-y-auto">
            <div className="text-center">
                <img src={alexFosterProfile.avatar} alt={alexFosterProfile.name} className="w-24 h-24 rounded-full mx-auto" />
                <h3 className="mt-4 text-xl font-bold">{alexFosterProfile.name}</h3>
                <p className="text-sm text-gray-500">{alexFosterProfile.role}</p>
            </div>
            <div className="mt-8 space-y-6">
                <ProfileSection title={`Media (${alexFosterProfile.media.length})`} showAll>
                    <div className="grid grid-cols-3 gap-2">
                        {alexFosterProfile.media.map(m => <img key={m.id} src={m.url} className="rounded-lg h-20 w-full object-cover"/>)}
                    </div>
                </ProfileSection>
                <ProfileSection title={`Documents (${alexFosterProfile.documents.length})`} showAll>
                    <div className="space-y-2">
                        {alexFosterProfile.documents.map((doc, i) => (
                            <div key={i} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <div className={`p-2 rounded-lg ${doc.type === 'pdf' ? 'bg-red-100' : 'bg-green-100'}`}>
                                    <FileText className={`w-5 h-5 ${doc.type === 'pdf' ? 'text-red-500' : 'text-green-500'}`}/>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-semibold truncate">{doc.name}</p>
                                    <p className="text-xs text-gray-400">{doc.size}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ProfileSection>
                <ProfileSection title="Links" showAll>
                    <div className="space-y-2">
                        {alexFosterProfile.links.map((link, i) => (
                            <div key={i} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <div className="p-2 bg-blue-100 rounded-lg"><Link2 className="w-5 h-5 text-blue-500"/></div>
                                <p className="text-sm font-semibold truncate ml-3 text-blue-600 hover:underline cursor-pointer">{link.text}</p>
                            </div>
                        ))}
                    </div>
                </ProfileSection>
            </div>
        </aside>
      </div>
    )
}

const HealthyMenuView = () => {
    const [mealType, setMealType] = useState('Breakfast'); const [diet, setDiet] = useState('Balanced'); const [isLoading, setIsLoading] = useState(false); const [mealIdeas, setMealIdeas] = useState([]);
    const generateMealIdeas = async () => { setIsLoading(true); setMealIdeas([]); const schema = { type: "ARRAY", items: { type: "OBJECT", properties: { name: { type: "STRING" }, description: { type: "STRING" }, }, required: ["name", "description"] } }; const prompt = `Generate 3 creative and healthy ${mealType.toLowerCase()} ideas for a ${diet.toLowerCase()} diet. For each meal, provide a short, appealing description (around 15-20 words).`; const ideas = await callGeminiAPI(prompt, schema); setMealIdeas(ideas || []); setIsLoading(false); };
    return ( <div className="p-8 h-full"> <header className="flex justify-between items-center mb-8"> <h2 className="text-3xl font-bold text-gray-800">Healthy Menu</h2> <div className="flex items-center gap-6"> <Search className="w-6 h-6 text-gray-500 cursor-pointer" /> <div className="flex items-center gap-3"> <img src="https://i.imgur.com/5A10t19.png" alt="Adam Vasylenko" className="w-12 h-12 rounded-full border-2 border-green-500" /> <div> <p className="font-bold text-gray-800">Adam Vasylenko</p> <p className="text-sm text-gray-500">Member</p> </div> </div> </div> </header> <div className="bg-white p-6 rounded-2xl border border-gray-200"> <h3 className="text-xl font-bold text-gray-800">✨ AI Meal Idea Generator</h3> <p className="text-gray-500 mt-1">Stuck on what to eat? Let our AI assistant whip up some inspiration for you!</p> <div className="flex flex-wrap items-center gap-4 mt-6"> <div> <label className="text-sm font-semibold text-gray-600">Meal Time</label> <div className="flex mt-2 border border-gray-300 rounded-lg"> {['Breakfast', 'Lunch', 'Dinner'].map(type => ( <button key={type} onClick={() => setMealType(type)} className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${mealType === type ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>{type}</button>))} </div> </div> <div> <label className="text-sm font-semibold text-gray-600">Dietary Focus</label> <div className="flex mt-2 border border-gray-300 rounded-lg"> {['Balanced', 'High-Protein', 'Low-Carb', 'Vegetarian'].map(d => ( <button key={d} onClick={() => setDiet(d)} className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${diet === d ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>{d}</button>))} </div> </div> <div className="self-end"> <button onClick={generateMealIdeas} disabled={isLoading} className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed h-[42px]"> {isLoading ? <><Loader className="w-5 h-5 animate-spin"/> Generating...</> : 'Get Ideas'} </button> </div> </div> <div className="mt-8 min-h-[200px]"> {isLoading && ( <div className="flex justify-center items-center h-full"> <div className="text-center text-gray-500"> <Loader className="w-10 h-10 animate-spin mx-auto text-purple-500"/> <p className="mt-2">Our AI chef is cooking up some ideas...</p> </div> </div> )} {!isLoading && mealIdeas.length > 0 && ( <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {mealIdeas.map((idea, index) => ( <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-5"> <div className="flex items-center gap-3"> <div className="p-2 bg-green-100 rounded-lg"><Leaf className="w-5 h-5 text-green-600"/></div> <h4 className="text-lg font-bold text-gray-800">{idea.name}</h4> </div> <p className="text-gray-600 mt-3 text-sm">{idea.description}</p> </div> ))} </div> )} {!isLoading && mealIdeas.length === 0 && ( <div className="flex justify-center items-center h-full"> <div className="text-center text-gray-400"> <p>Your delicious meal ideas will appear here.</p> </div> </div> )} </div> </div> </div> );
};

const HealthInsightsView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [healthInsight, setHealthInsight] = useState(null);

    const generateHealthInsight = async () => {
        setIsLoading(true);
        setHealthInsight(null);

        const weeklyEvents = Object.entries(initialCalendarEvents)
            .filter(([date]) => new Date(date) >= new Date('2028-09-03') && new Date(date) <= new Date('2028-09-09'))
            .map(([date, events]) => `On ${date.slice(5)}: ${events.map(e => `${e.title} (${e.type})`).join(', ')}`)
            .join('; ');

        const schema = {
            type: "OBJECT",
            properties: {
                highlights: { type: "ARRAY", items: { type: "STRING" } },
                imbalances: { type: "ARRAY", items: { type: "STRING" } },
                tips: { type: "ARRAY", items: { type: "STRING" } }
            },
            required: ["highlights", "imbalances", "tips"]
        };

        const prompt = `Act as a health and wellness analyst. Here is my schedule for the first week of September: ${weeklyEvents}. Analyze this schedule and provide a structured health insight. Identify 2-3 positive highlights, 2-3 potential imbalances or areas for improvement, and 2-3 actionable tips based on the data. Be encouraging and constructive.`;
        
        const insight = await callGeminiAPI(prompt, schema);
        setHealthInsight(insight);
        setIsLoading(false);
    };

    const InsightCard = ({ icon: Icon, title, items, color }) => {
        const colorClasses = {
            green: { bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100', iconText: 'text-green-600', border: 'border-green-200' },
            orange: { bg: 'bg-orange-50', text: 'text-orange-700', iconBg: 'bg-orange-100', iconText: 'text-orange-600', border: 'border-orange-200' },
            blue: { bg: 'bg-blue-50', text: 'text-blue-700', iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200' },
        };
        const colors = colorClasses[color];

        return (
            <div className={`${colors.bg} ${colors.border} rounded-xl p-5`}>
                <div className="flex items-center gap-3">
                    <div className={`p-2 ${colors.iconBg} rounded-lg`}>
                        <Icon className={`w-5 h-5 ${colors.iconText}`}/>
                    </div>
                    <h4 className={`text-lg font-bold ${colors.text}`}>{title}</h4>
                </div>
                <ul className={`mt-3 space-y-2 list-disc list-inside text-sm text-${color}-800/80`}>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    };

    return (
        <div className="p-8 h-full">
            <header className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Health Insights</h2>
                 <div className="flex items-center gap-6"> <Search className="w-6 h-6 text-gray-500 cursor-pointer" /> <div className="flex items-center gap-3"> <img src="https://i.imgur.com/5A10t19.png" alt="Adam Vasylenko" className="w-12 h-12 rounded-full border-2 border-green-500" /> <div> <p className="font-bold text-gray-800">Adam Vasylenko</p> <p className="text-sm text-gray-500">Member</p> </div> </div> </div>
            </header>

            <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">Your Weekly Health Analysis</h3>
                        <p className="text-gray-500 mt-1">Get a personalized analysis of your activities and discover new insights.</p>
                    </div>
                    <button onClick={generateHealthInsight} disabled={isLoading} className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed h-[42px]">
                        {isLoading ? <><Loader className="w-5 h-5 animate-spin"/> Analyzing...</> : <>✨ Analyze My Week</>}
                    </button>
                </div>

                 <div className="mt-8 min-h-[300px]">
                    {isLoading && (
                        <div className="flex justify-center items-center h-full">
                            <div className="text-center text-gray-500">
                                <Loader className="w-10 h-10 animate-spin mx-auto text-purple-500"/>
                                <p className="mt-2">Our AI is analyzing your week...</p>
                            </div>
                        </div>
                    )}
                    {!isLoading && healthInsight && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <InsightCard icon={Award} title="Weekly Highlights" items={healthInsight.highlights} color="green" />
                            <InsightCard icon={AlertTriangle} title="Potential Imbalances" items={healthInsight.imbalances} color="orange" />
                            <InsightCard icon={Leaf} title="Actionable Tips" items={healthInsight.tips} color="blue" />
                        </div>
                    )}
                    {!isLoading && !healthInsight && (
                        <div className="flex flex-col justify-center items-center h-[300px] text-center text-gray-400 bg-gray-50 rounded-xl">
                             <BrainCircuit className="w-16 h-16 text-gray-300 mb-4"/>
                             <p className="font-semibold">Ready for your health insights?</p>
                             <p className="text-sm">Click the "Analyze My Week" button to get started.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- App Container ---
export default function App() {
    const [activeView, setActiveView] = useState('health-insights'); // Default to new view

    const renderActiveView = () => {
        switch (activeView) {
            case 'calendar': return <CalendarView />;
            case 'messages': return <MessagesView />;
            case 'healthy-menu': return <HealthyMenuView />;
            case 'health-insights': return <HealthInsightsView />;
            default: return <CalendarView />;
        }
    };

    return (
        <div className="bg-gray-50 font-sans flex min-h-screen">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <main className="flex-1 ml-64 transition-all duration-300">
                {renderActiveView()}
            </main>
    </div>
);
}
