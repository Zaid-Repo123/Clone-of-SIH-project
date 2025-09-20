import React, { useState } from 'react';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-[#4a403a]">
      {/* Top Header (without sidebar trigger because global Navbar already handles nav) */}
      <header className="sticky top-0 z-10 border-b bg-[#f9f8f4]/80 backdrop-blur-sm border-[#e6d3b3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#4a403a]"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <h1 className="font-heading text-2xl sm:text-3xl tracking-tight font-semibold text-[#4a403a]">Dashboard</h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4">
              <div className="w-full sm:w-80">
                <label className="sr-only" htmlFor="search">Search</label>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                  <input id="search" type="text" placeholder="Search clients, plans..." className="w-full rounded-md border pl-10 pr-3 h-11 text-sm placeholder-gray-400 shadow-sm focus:border-[#a3b98b] focus:ring-2 focus:ring-[#a3b98b]/50 outline-none bg-[#f0f2e9] border-[#e6d3b3] transition-colors duration-200" />
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-md border px-3 h-11 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 bg-white border-[#e6d3b3]/60 cursor-pointer">
                <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-black/10">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&h=128&fit=crop" alt="Dr. Adam Vasylenko" className="w-full h-full object-cover" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">Dr. Adam Vasylenko</div>
                  <div className="text-xs text-gray-500">Dietician</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Upcoming Appointment (primary card with modal trigger) */}
            <section className="card-interactive md:col-span-2 lg:col-span-2 rounded-xl border shadow-md bg-[#fdfbf6]/80 backdrop-blur-sm border-[#e6d3b3]/60 animate-fadeInUp transition-all duration-300 hover:scale-[1.02] flex flex-col" style={{ animationDelay: '100ms' }}>
              <div className="border-b border-[#e6d3b3]/60 px-6 py-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#4a403a]"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>
                <h2 className="font-heading text-lg font-semibold tracking-tight">Upcoming Appointment</h2>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex items-start gap-5">
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128&h=128&fit=crop" alt="Dr. Emily Lawson" className="w-12 h-12 rounded-full ring-1 ring-black/10 shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="text-sm font-semibold">Dr. Emily Lawson</div>
                        <div className="text-xs text-gray-500">General Physician</div>
                      </div>
                    </div>
                    <p className="text-sm text-[#a3b98b] font-medium mt-2">Happening in 4 days</p>
                    <div className="mt-4 space-y-4 text-sm text-gray-600">
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#a3b98b] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                        <span>Follow-up Consultation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#a3b98b] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M12 18h.01" /></svg>
                        <span>Tuesday, 23 Sep 2025 at 3:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2.5 justify-center w-full focus:outline-none text-sm font-medium text-white rounded-md px-4 py-2.5 shadow-md hover:shadow-lg bg-[#4a403a] hover:opacity-90 transition-all duration-200 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                    <span>Join Call</span>
                  </button>
                  <button className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-transparent border border-[#e6d3b3] text-gray-500 hover:bg-[#4a403a]/5 hover:text-[#4a403a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Today's Tasks */}
            <section className="card-interactive h-full rounded-xl border shadow-md bg-[#fdfbf6]/80 backdrop-blur-sm border-[#e6d3b3]/60 animate-fadeInUp transition-all duration-300 hover:scale-[1.02] flex flex-col" style={{ animationDelay: '200ms' }}>
              <div className="px-6 py-4 border-b border-[#e6d3b3]/60 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#4a403a]"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                <h2 className="font-heading text-lg font-semibold tracking-tight">Today's Tasks</h2>
              </div>
              <div className="p-6 space-y-5 flex-grow">
                {[
                  { label: 'Update meal plan for Sarah J.', sub: 'Add more high-fiber breakfast options' },
                  { label: 'Send supplement guide PDF to Omar', sub: 'Include Vitamin D dosage recommendations' },
                  { label: 'Review weekly check-ins', sub: 'Clients: Ana, Ravi, Mei' }
                ].map((task, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 size-4 rounded border-[#e6d3b3] text-[#a3b98b] focus:ring-[#a3b98b]/50" />
                    <div className="flex-1">
                      <div className="text-sm font-medium group-has-[:checked]:line-through">{task.label}</div>
                      <div className="text-xs text-gray-500">{task.sub}</div>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* Stats Row */}
            <section className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              {[
                { title: 'Active Clients', value: '128', icon: (<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />), extra: (<circle cx="9" cy="7" r="4" />) },
                { title: 'Plans Due', value: '9', icon: (<path d="M12 6v6l4 2" />), extra: (<circle cx="12" cy="12" r="10" />) },
                { title: 'New Messages', value: '14', icon: (<path d="M21 15v4a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />) }
              ].map((card, i) => (
                <div key={i} className="card-interactive rounded-xl border shadow-md bg-[#fdfbf6]/80 backdrop-blur-sm border-[#e6d3b3]/60 p-6 group transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-gray-500">{card.title}</div>
                      <div className="mt-2 text-3xl font-semibold font-heading text-[#4a403a]">{card.value}</div>
                    </div>
                    <div className="h-10 w-10 rounded-md flex items-center justify-center bg-[#a3b98b]/20 ring-1 ring-[#a3b98b]/30 transition-transform duration-200 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4a403a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">{card.icon}{card.extra}</svg>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Weekly Check-ins Chart */}
            <section className="card-interactive md:col-span-2 lg:col-span-2 rounded-xl border shadow-md bg-[#fdfbf6]/80 backdrop-blur-sm border-[#e6d3b3]/60 animate-fadeInUp transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '400ms' }}>
              <div className="px-6 py-4 border-b border-[#e6d3b3]/60 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#4a403a]"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                <h2 className="font-heading text-lg font-semibold tracking-tight">Weekly Check-ins</h2>
              </div>
              <div className="p-6">
                <div className="h-40 w-full">
                  <svg viewBox="0 0 320 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#a3b98b" stopOpacity="0.25"></stop>
                        <stop offset="100%" stopColor="#a3b98b" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <g stroke="currentColor" strokeOpacity="0.08" className="text-[#4a403a]">
                      <path d="M0 100 H320"></path><path d="M0 75 H320"></path><path d="M0 50 H320"></path><path d="M0 25 H320"></path>
                    </g>
                    <path d="M0 90 C40 80, 80 65, 120 72 S200 60, 240 50 S280 40, 320 55 L320 120 L0 120 Z" fill="url(#area)"></path>
                    <path id="chart-line" d="M0 90 C40 80, 80 65, 120 72 S200 60, 240 50 S280 40, 320 55" fill="none" stroke="#a3b98b" strokeWidth="2"></path>
                    <g fill="#a3b98b">
                      <circle cx="0" cy="90" r="3"></circle><circle cx="80" cy="65" r="3"></circle><circle cx="160" cy="66" r="3"></circle><circle cx="240" cy="50" r="3"></circle><circle cx="320" cy="55" r="3"></circle>
                    </g>
                  </svg>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </section>

            {/* Future Appointments */}
            <section className="card-interactive h-full rounded-xl border shadow-md bg-[#fdfbf6]/80 backdrop-blur-sm border-[#e6d3b3]/60 animate-fadeInUp transition-all duration-300 hover:scale-[1.02] flex flex-col" style={{ animationDelay: '500ms' }}>
              <div className="px-6 py-4 border-b border-[#e6d3b3]/60 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#4a403a]"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /><path d="M3 10h18" /><path d="M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M18 16.5V18l1 1" /></svg>
                <h2 className="font-heading text-lg font-semibold tracking-tight">Future Appointments</h2>
              </div>
              <div className="divide-y divide-[#e6d3b3]/60 flex-grow flex flex-col">
                {[
                  { day: '25', month: 'Sep', title: 'Nutritionist Follow-up', with: 'with Sara Mitchell', time: '10:00 AM' },
                  { day: '28', month: 'Sep', title: 'Diet Plan Revision', with: 'with Mark Evans', time: '1:30 PM' },
                  { day: '02', month: 'Oct', title: 'Lab Reports Review', with: 'with Dr. Priya Nair', time: '9:15 AM' }
                ].map((appt, i) => (
                  <div key={i} className="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200 flex-grow">
                    <div className="w-16 shrink-0 text-center">
                      <p className="font-semibold text-lg leading-none">{appt.day}</p>
                      <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">{appt.month}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{appt.title}</div>
                      <div className="text-xs text-gray-500 truncate">{appt.with}</div>
                    </div>
                    <div className="text-sm text-gray-700 shrink-0">{appt.time}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Clients */}
            <section className="card-interactive md:col-span-2 lg:col-span-3 rounded-xl border shadow-md bg-[#fdfbf6]/80 backdrop-blur-sm border-[#e6d3b3]/60 animate-fadeInUp transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '600ms' }}>
              <div className="px-6 py-4 border-b border-[#e6d3b3]/60 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#4a403a]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <h2 className="font-heading text-lg font-semibold tracking-tight">Recent Clients</h2>
              </div>
              <ul className="divide-y divide-[#e6d3b3]/60">
                {[
                  { name: 'Ana Gomez', desc: 'Weight management · Week 4', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128&h=128&fit=crop', status: 'On Track', statusColor: 'green', variant: 'ok' },
                  { name: 'Ravi Kumar', desc: 'Diabetes care · New plan', img: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80', status: 'Needs Review', statusColor: 'amber', variant: 'warn' },
                  { name: 'Mei Lin', desc: 'Sports nutrition · Check-in', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=128&h=128&fit=crop', status: 'On Track', statusColor: 'green', variant: 'ok' }
                ].map((c, i) => (
                  <li key={i} className="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200">
                    <img className="w-11 h-11 rounded-full ring-1 ring-black/10 object-cover" src={c.img} alt={c.name} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium truncate">{c.name}</div>
                      <div className="text-xs text-gray-500 truncate">{c.desc}</div>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-1 rounded border ${c.statusColor === 'green' ? 'bg-green-100 text-green-800 border-green-200/50' : 'bg-amber-100 text-amber-800 border-amber-200/50' }`}>
                      {c.statusColor === 'green' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5"><path d="M20 6 9 17l-5-5" /></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                      )}
                      {c.status}
                    </span>
                    <button className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md bg-transparent text-gray-400 hover:bg-[#4a403a]/5 hover:text-[#4a403a] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsModalOpen(false)} />
          <div role="dialog" aria-modal="true" aria-labelledby="modalTitle" className="w-full max-w-lg rounded-xl border shadow-xl bg-[#fdfbf6] border-[#e6d3b3]/60 overflow-hidden transition-all duration-300">
            <div className="px-5 py-4 border-b border-[#e6d3b3]/60 flex items-center justify-between">
              <h3 id="modalTitle" className="font-heading text-lg font-semibold tracking-tight">Appointment Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="inline-flex items-center justify-center rounded-md p-2 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200" aria-label="Close details">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4a403a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-start gap-3">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=96&h=96&fit=crop" className="w-12 h-12 rounded-full ring-1 ring-black/10 object-cover" alt="Dr. Emily Lawson" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Dr. Emily Lawson</div>
                  <div className="text-xs text-gray-500">General Physician</div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 text-[#a3b98b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                      Tuesday, 23 September 2025
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 text-[#a3b98b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
                      3:00 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium mb-1">Agenda</div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Review recent blood work and vitals</li>
                  <li>Discuss updated macronutrient targets</li>
                  <li>Confirm follow-up in two weeks</li>
                </ul>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-[#e6d3b3]/60 flex items-center justify-end gap-2">
              <button onClick={() => setIsModalOpen(false)} className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm border bg-white hover:bg-gray-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#a3b98b] border-[#e6d3b3]/60 transition-all duration-200">Cancel</button>
              <button className="inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm text-white shadow-md bg-[#4a403a] hover:opacity-90 transition-all duration-200">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;