import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import theme from './theme';
import Accordion from './Accordion';
import StatCard from './StatCard';
import DoshaRadarChart from './DoshaRadarChart';
import MacroDonutChart from './MacroDonutChart';
import NutrientBar from './NutrientBar';
import Header from './Header';
import Sidebar from './Sidebar';
import { Sparkles, Utensils, Beef, Wheat, Droplets, BrainCircuit, Calendar, Edit, Download, Printer, Leaf, User, Phone, Mail, MapPin, Calendar as CalendarIcon, HeartPulse, Stethoscope, Dumbbell } from 'lucide-react';
import UserProfile from './UserProfile';

// --- MOCK DATA (should be replaced with real data/fetch) ---
const initialProfile = {
    avatar: 'https://i.imgur.com/Jk3a2zC.png',
    name: 'Amelia Sharma',
    dob: '1980-09-15',
    age: 45,
    gender: 'Female',
    phone: '',
    email: '',
    address: '',
    maritalStatus: '',
    occupation: '',
    bloodType: '',
    allergies: '',
    chronicDiseases: '',
    medications: '',
    surgeries: '',
    smoking: '',
    alcohol: '',
    physicalActivity: '',
    sleep: '',
    stress: '',
    foodPreferences: '',
    intolerances: '',
    ayurvedaType: '',
    dosha: { vata: 60, pitta: 85, kapha: 40 },
    macros: { protein: 35, carbs: 45, fat: 20 },
    nutrients: [
        { name: 'Iron', value: 75, target: 100 }, { name: 'Vitamin D', value: 50, target: 100 }, { name: 'Calcium', value: 80, target: 100 },
    ],
    goal: 'Improve energy levels and digestive health by balancing Pitta dosha.',
    macroTargets: { protein: '100g', carbs: '150g', fat: '50g' },
    ayurvedicFocus: 'Focus on cooling, hydrating foods. Incorporate sweet, bitter, and astringent tastes. Avoid spicy, oily, and overly sour foods.',
    mealPlan: [
        { id: 1, day: 'Monday', meals: [
            { id: 1, type: 'Breakfast', name: 'Coconut Milk Oatmeal', calories: 350, icon: Wheat, ingredients: [] },
            { id: 2, type: 'Lunch', name: 'Quinoa Salad with Cucumber', calories: 450, icon: Utensils, ingredients: [] },
            { id: 3, type: 'Dinner', name: 'Mung Dal with Basmati Rice', calories: 500, icon: Droplets, ingredients: [] },
        ]},
        { id: 2, day: 'Tuesday', meals: [
            { id: 1, type: 'Breakfast', name: 'Avocado Toast with Sprouts', calories: 400, icon: Wheat, ingredients: [] },
            { id: 2, type: 'Lunch', name: 'Chickpea and Spinach Curry', calories: 550, icon: Utensils, ingredients: [] },
            { id: 3, type: 'Dinner', name: 'Baked Salmon with Asparagus', calories: 600, icon: Beef, ingredients: [] },
        ]},
        { id: 3, day: 'Wednesday', meals: [] },
        { id: 4, day: 'Thursday', meals: [] },
        { id: 5, day: 'Friday', meals: [] },
        { id: 6, day: 'Saturday', meals: [] },
        { id: 7, day: 'Sunday', meals: [] },
    ]
};


const ayurvedaBg = 'bg-gradient-to-br from-[#f7efe5] via-[#e6e1c5] to-[#e0e7c5]';
const ayurvedaCard = 'bg-white/90 border border-[#e6d3b3] rounded-3xl shadow-xl';
const ayurvedaAccent = 'text-[#8d6e63]';
const ayurvedaGold = 'text-[#b8860b]';
const ayurvedaGreen = 'text-[#6b8e23]';
const ayurvedaMandala = 'absolute opacity-10 pointer-events-none select-none';

const ClientProfileView = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(initialProfile);
    const [activeTab, setActiveTab] = useState('Information');
    const tabs = ['Information', 'Measurements', 'Planning', 'Meal Plan', 'Follow-up'];
    useEffect(() => {
        console.log(`Rendering ClientProfileView for client ID: ${id}`);
    }, [id]);

    // --- Editable fields handler ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    // --- Information Tab (all editable fields) ---
    const InformationTab = () => (
        <div className="relative">
            {/* Decorative Mandala/Leaf */}
            <Leaf className={`${ayurvedaMandala} left-[-40px] top-[-40px] w-40 h-40 ${ayurvedaGold}`} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12`}> 
                <div className={`${ayurvedaCard} p-10 flex flex-col gap-8`}> 
                    <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} flex items-center gap-2`}><User className="w-6 h-6"/> Personal Information</h3>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold">Full Name
                            <input name="name" value={profile.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2 focus:ring-2 focus:ring-[#b8860b]"/>
                        </label>
                        <label className="font-semibold">Date of Birth
                            <input name="dob" type="date" value={profile.dob} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2 focus:ring-2 focus:ring-[#b8860b]"/>
                        </label>
                        <label className="font-semibold">Gender
                            <select name="gender" value={profile.gender} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2">
                                <option>Female</option><option>Male</option><option>Other</option>
                            </select>
                        </label>
                        <label className="font-semibold">Marital Status
                            <input name="maritalStatus" value={profile.maritalStatus} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Occupation
                            <input name="occupation" value={profile.occupation} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                    </div>
                </div>
                <div className={`${ayurvedaCard} p-10 flex flex-col gap-8`}>
                    <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} flex items-center gap-2`}><Phone className="w-6 h-6"/> Contact Information</h3>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold">Phone
                            <input name="phone" value={profile.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Email
                            <input name="email" value={profile.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Address
                            <input name="address" value={profile.address} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                    </div>
                </div>
                <div className={`${ayurvedaCard} p-10 flex flex-col gap-8`}>
                    <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} flex items-center gap-2`}><Stethoscope className="w-6 h-6"/> Medical Information</h3>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold">Blood Type
                            <input name="bloodType" value={profile.bloodType} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Allergies
                            <input name="allergies" value={profile.allergies} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Chronic Diseases
                            <input name="chronicDiseases" value={profile.chronicDiseases} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Medications
                            <input name="medications" value={profile.medications} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Surgeries
                            <input name="surgeries" value={profile.surgeries} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                    </div>
                </div>
                <div className={`${ayurvedaCard} p-10 flex flex-col gap-8`}>
                    <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} flex items-center gap-2`}><HeartPulse className="w-6 h-6"/> Lifestyle</h3>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold">Smoking
                            <input name="smoking" value={profile.smoking} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Alcohol
                            <input name="alcohol" value={profile.alcohol} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Physical Activity
                            <input name="physicalActivity" value={profile.physicalActivity} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Sleep
                            <input name="sleep" value={profile.sleep} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Stress
                            <input name="stress" value={profile.stress} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                    </div>
                </div>
                <div className={`${ayurvedaCard} p-10 flex flex-col gap-8`}>
                    <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} flex items-center gap-2`}><Utensils className="w-6 h-6"/> Nutrition & Ayurveda</h3>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold">Food Preferences
                            <input name="foodPreferences" value={profile.foodPreferences} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Intolerances
                            <input name="intolerances" value={profile.intolerances} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                        <label className="font-semibold">Ayurveda Type
                            <input name="ayurvedaType" value={profile.ayurvedaType} onChange={handleChange} className="mt-1 w-full rounded-lg border border-[#e6d3b3] p-2"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- Planning Tab ---
    const PlanningTab = () => (
        <div className="space-y-6">
            <Accordion icon={Sparkles} title="Primary Goal" theme={theme}>
                <p className="text-lg text-gray-700">{profile.goal}</p>
            </Accordion>
             <Accordion icon={Utensils} title="Macronutrient Targets" theme={theme}>
                <div className="flex gap-4">
                   <StatCard label="Protein" value={profile.macroTargets.protein} icon={Beef} theme={theme} />
                   <StatCard label="Carbohydrates" value={profile.macroTargets.carbs} icon={Wheat} theme={theme} />
                   <StatCard label="Fat" value={profile.macroTargets.fat} icon={Droplets} theme={theme} />
                </div>
            </Accordion>
            <Accordion icon={BrainCircuit} title="Ayurvedic Focus (Pitta Balancing)" theme={theme}>
                <p className="text-gray-700">{profile.ayurvedicFocus}</p>
            </Accordion>
        </div>
    );

    // --- Meal Plan Tab ---
    const [selectedDays, setSelectedDays] = useState([0]); // 0 = Monday, ...
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Helper: toggle day selection
    const toggleDay = (idx) => {
        setSelectedDays((prev) => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
    };

    // Helper: update meal plan for a day
    const updateDayMeals = (dayIdx, newMeals) => {
        setProfile((prev) => ({
            ...prev,
            mealPlan: prev.mealPlan.map((d, i) => i === dayIdx ? { ...d, meals: newMeals } : d)
        }));
    };

    // Helper: add new meal to a day
    const addMealToDay = (dayIdx) => {
        const newMeal = {
            id: Date.now(),
            type: '',
            name: '',
            calories: 0,
            icon: Utensils,
            time: '',
            ingredients: [],
            notes: '',
        };
        updateDayMeals(dayIdx, [...profile.mealPlan[dayIdx].meals, newMeal]);
    };

    // Helper: remove meal from a day
    const removeMealFromDay = (dayIdx, mealId) => {
        updateDayMeals(dayIdx, profile.mealPlan[dayIdx].meals.filter(m => m.id !== mealId));
    };

    // Helper: update a meal in a day
    const updateMealInDay = (dayIdx, mealId, updatedMeal) => {
        updateDayMeals(dayIdx, profile.mealPlan[dayIdx].meals.map(m => m.id === mealId ? { ...m, ...updatedMeal } : m));
    };

    // --- Editable Meal Plan UI ---
    const MealPlanTab = () => (
        <div className="space-y-8">
            {/* Day Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
                {dayNames.map((day, idx) => (
                    <button
                        key={day}
                        className={`px-4 py-2 rounded-full font-semibold border transition-all ${selectedDays.includes(idx) ? 'bg-[#b8860b] text-white border-[#b8860b]' : 'bg-[#f7efe5] text-[#b8860b] border-[#e6d3b3] hover:bg-[#e6e1c5]'}`}
                        onClick={() => toggleDay(idx)}
                    >
                        {day.slice(0,3)}
                    </button>
                ))}
            </div>
            {/* Meal Blocks for selected days */}
            {selectedDays.map(dayIdx => {
                const dayPlan = profile.mealPlan[dayIdx];
                return (
                    <div key={dayPlan.day} className="mb-8">
                        <div className="flex items-center gap-4 mb-2">
                            <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold}`}>{dayPlan.day}</h3>
                            <button className="ml-2 px-3 py-1 rounded bg-[#b8860b] text-white hover:bg-[#a67c00]" onClick={() => addMealToDay(dayIdx)}>+ Add Meal</button>
                        </div>
                        <div className="space-y-6">
                            {dayPlan.meals.length === 0 && <div className="text-gray-400 italic">No meals added yet.</div>}
                            {dayPlan.meals.map((meal, mealIdx) => (
                                <div key={meal.id} className={`${ayurvedaCard} p-6 flex flex-col gap-4 relative`}>
                                    <div className="flex items-center gap-4">
                                        <span className="font-bold text-lg text-[#b8860b]">{meal.time || '--:--'}</span>
                                        <input
                                            className="w-32 px-2 py-1 rounded border border-[#e6d3b3]"
                                            placeholder="Time (e.g. 7:00 AM)"
                                            value={meal.time || ''}
                                            onChange={e => updateMealInDay(dayIdx, meal.id, { time: e.target.value })}
                                        />
                                        <select
                                            className="px-2 py-1 rounded border border-[#e6d3b3]"
                                            value={meal.type}
                                            onChange={e => updateMealInDay(dayIdx, meal.id, { type: e.target.value })}
                                        >
                                            <option value="">Type</option>
                                            <option>Breakfast</option>
                                            <option>Morning Snack</option>
                                            <option>Lunch</option>
                                            <option>Evening Snack</option>
                                            <option>Dinner</option>
                                            <option>Other</option>
                                        </select>
                                        <input
                                            className="flex-1 px-2 py-1 rounded border border-[#e6d3b3]"
                                            placeholder="Meal Name"
                                            value={meal.name}
                                            onChange={e => updateMealInDay(dayIdx, meal.id, { name: e.target.value })}
                                        />
                                        <button className="ml-2 px-2 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200" onClick={() => removeMealFromDay(dayIdx, meal.id)}>Delete</button>
                                    </div>
                                    {/* Food Items List */}
                                    <div className="space-y-2">
                                        {meal.ingredients.length === 0 && <div className="text-gray-400 italic">No food items yet.</div>}
                                        {meal.ingredients.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <input
                                                    className="w-24 px-2 py-1 rounded border border-[#e6d3b3]"
                                                    placeholder="Qty/Desc"
                                                    value={item.desc || ''}
                                                    onChange={e => {
                                                        const newIngredients = meal.ingredients.map((ing, i) => i === idx ? { ...ing, desc: e.target.value } : ing);
                                                        updateMealInDay(dayIdx, meal.id, { ingredients: newIngredients });
                                                    }}
                                                />
                                                <input
                                                    className="w-20 px-2 py-1 rounded border border-[#e6d3b3]"
                                                    placeholder="Weight (g)"
                                                    value={item.weight || ''}
                                                    onChange={e => {
                                                        const newIngredients = meal.ingredients.map((ing, i) => i === idx ? { ...ing, weight: e.target.value } : ing);
                                                        updateMealInDay(dayIdx, meal.id, { ingredients: newIngredients });
                                                    }}
                                                />
                                                <button className="px-2 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200" onClick={() => {
                                                    const newIngredients = meal.ingredients.filter((_, i) => i !== idx);
                                                    updateMealInDay(dayIdx, meal.id, { ingredients: newIngredients });
                                                }}>Delete</button>
                                            </div>
                                        ))}
                                        <button className="mt-2 px-3 py-1 rounded bg-[#6b8e23] text-white hover:bg-[#5a7c1a]" onClick={() => {
                                            const newIngredients = [...meal.ingredients, { desc: '', weight: '' }];
                                            updateMealInDay(dayIdx, meal.id, { ingredients: newIngredients });
                                        }}>+ Add Food Item</button>
                                    </div>
                                    {/* Meal Notes */}
                                    <textarea
                                        className="w-full mt-2 px-2 py-1 rounded border border-[#e6d3b3]"
                                        placeholder="Meal notes (Ayurveda tips, digestion, etc.)"
                                        value={meal.notes || ''}
                                        onChange={e => updateMealInDay(dayIdx, meal.id, { notes: e.target.value })}
                                    />
                                    {/* Meal Nutrient Summary (placeholder) */}
                                    <div className="mt-2 flex gap-4 text-sm text-[#8d6e63]">
                                        <span>Energy: {meal.calories || 0} kcal</span>
                                        <span>Fat: -- g</span>
                                        <span>Carbs: -- g</span>
                                        <span>Protein: -- g</span>
                                        <span>Fiber: -- g</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
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

    // --- Main Layout ---
    return (
        <div className={`min-h-screen ${ayurvedaBg} flex`}>
            <Sidebar isCollapsed={false} setIsCollapsed={() => {}} theme={theme} />
            <main className="flex-1 ml-64 p-0">
                <Header title="Client Profile" theme={theme} UserProfile={UserProfile} Search={() => null} />
                <div className="relative px-2 py-6 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                    {/* Decorative Mandala/Leaf */}
                    <Leaf className={`${ayurvedaMandala} right-[-60px] top-[-60px] w-56 h-56 text-[#b8860b]`} />
                    <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 xl:grid-cols-[5fr_2fr] gap-8 xl:gap-8 2xl:gap-12 items-start">
                        <div className="flex flex-col gap-8 xl:gap-10 2xl:gap-14">
                            <div className={`${ayurvedaCard} p-10 md:p-12 xl:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-14 relative overflow-hidden w-full`}>
                                <img src={profile.avatar} alt={profile.name} className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-[#b8860b] shadow-2xl bg-white" />
                                <div className="flex-grow text-center md:text-left">
                                    <h2 className={`text-3xl md:text-5xl font-bold font-serif ${ayurvedaGold}`}>{profile.name}</h2>
                                    <p className={`mt-2 text-lg ${ayurvedaAccent}`}>Ayurveda Client</p>
                                    <p className={`text-sm ${ayurvedaGreen}`}>DOB: {profile.dob} ({profile.age} years)</p>
                                </div>
                                <div className="flex items-center gap-2 absolute top-4 right-4">
                                    <button className="p-3 bg-[#f7efe5] rounded-lg hover:bg-[#e6e1c5] transition-colors"><Edit className={`w-5 h-5 ${ayurvedaGold}`} /></button>
                                    <button className="p-3 bg-[#f7efe5] rounded-lg hover:bg-[#e6e1c5] transition-colors"><Download className={`w-5 h-5 ${ayurvedaGold}`} /></button>
                                    <button className="p-3 bg-[#f7efe5] rounded-lg hover:bg-[#e6e1c5] transition-colors"><Printer className={`w-5 h-5 ${ayurvedaGold}`} /></button>
                                </div>
                            </div>
                            <div className={`${ayurvedaCard} p-10 md:p-12 xl:p-16 w-full`}> 
                                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                                    <Leaf className="w-8 h-8 md:w-10 md:h-10 text-[#b8860b]" />
                                    <div className="flex gap-2 md:gap-4 flex-wrap">
                                        {tabs.map(tab => (
                                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all whitespace-nowrap ${activeTab === tab ? `text-white shadow-md bg-[#b8860b]` : `text-[#b8860b] bg-[#f7efe5] hover:bg-[#e6e1c5]`}`}>{tab}</button>
                                        ))}
                                    </div>
                                </div>
                                <div>{renderActiveTab()}</div>
                            </div>
                        </div>
                        <aside className="flex flex-col gap-8 xl:gap-10 2xl:gap-12 sticky top-8 pr-0 xl:pr-4 2xl:pr-10">
                            <div className={`${ayurvedaCard} p-8 md:p-10 text-center`}>
                                 <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} mb-4`}>Ayurvedic Profile</h3>
                                 <DoshaRadarChart data={profile.dosha} theme={theme} />
                                 <p className={`mt-4 text-md ${ayurvedaAccent}`}>Dominant Dosha: <span className="font-bold text-red-500">Pitta</span></p>
                            </div>
                            <div className={`${ayurvedaCard} p-8 md:p-10`}>
                                 <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} mb-4 text-center`}>Macronutrient Profile</h3>
                                 <div className="flex justify-center">
                                    <MacroDonutChart data={profile.macros} theme={theme} />
                                 </div>
                                 <div className="text-md space-y-2 mt-4">
                                    <p className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#8D6E63]"></span>Protein</span> <span>{profile.macros.protein}%</span></p>
                                    <p className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#D4A57F]"></span>Carbs</span> <span>{profile.macros.carbs}%</span></p>
                                    <p className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#BDBDBD]"></span>Fat</span> <span>{profile.macros.fat}%</span></p>
                                 </div>
                            </div>
                            <div className={`${ayurvedaCard} p-8 md:p-10`}>
                                 <h3 className={`text-2xl font-bold font-serif ${ayurvedaGold} mb-4`}>Key Nutrients</h3>
                                 <div className="space-y-4">
                                    {profile.nutrients.map(n => <NutrientBar key={n.name} {...n} theme={theme} />)}
                                 </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClientProfileView;
