import React from 'react';

const Calendar = () => {

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-[#f9f8f4]/80 backdrop-blur-sm border-[#e6d3b3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-5">
            <h1 className="font-serif text-2xl sm:text-3xl tracking-tight font-medium text-[#4a403a]">Calendar</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-4 sm:px-5 h-10 rounded-md text-white shadow-sm transition active:translate-y-px bg-[#c89143]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="text-[14px] font-medium tracking-tight">Create Event</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Print">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
                <rect x="6" y="14" width="12" height="8" rx="1"></rect>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div className="flex items-center gap-4">
                <span className="text-[22px] tracking-tight font-medium text-slate-600">September 2025</span>
                <div className="flex items-center">
                  <button className="inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-black/5 transition" aria-label="Previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-black/5 transition" aria-label="Next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
                <button className="inline-flex items-center justify-center h-9 px-4 rounded-md text-[13px] font-medium border border-slate-300 hover:bg-slate-50 transition">Today</button>
              </div>
              <div className="flex items-center border border-slate-300 rounded-md p-1">
                <button className="inline-flex items-center h-8 px-3 rounded-md text-[13px] hover:bg-slate-100 transition">Day</button>
                <button className="inline-flex items-center h-8 px-3 rounded-md text-[13px] font-medium transition bg-[#a3b98b]/20 text-[#333]">Week</button>
                <button className="inline-flex items-center h-8 px-3 rounded-md text-[13px] hover:bg-slate-100 transition">Month</button>
              </div>
            </div>
            
            <div className="border-t border-l border-slate-200 bg-white shadow-sm rounded-lg">
              <div className="grid" style={{ gridTemplateColumns: '60px repeat(7, minmax(0, 1fr))' }}>
                <div className="border-r border-slate-200"></div>
                <div className="text-center py-2 border-b border-r border-slate-200">
                  <span className="text-[11px] font-medium text-slate-500">SUN</span>
                  <p className="text-2xl mt-1 text-slate-500">14</p>
                </div>
                <div className="text-center py-2 border-b border-r border-slate-200">
                  <span className="text-[11px] font-medium text-slate-500">MON</span>
                  <p className="text-2xl mt-1 text-slate-500">15</p>
                </div>
                <div className="text-center py-2 border-b border-r border-slate-200">
                  <span className="text-[11px] font-medium text-slate-500">TUE</span>
                  <p className="text-2xl mt-1 text-slate-500">16</p>
                </div>
                <div className="text-center py-2 border-b border-r border-slate-200">
                  <span className="text-[11px] font-medium text-slate-500">WED</span>
                  <p className="text-2xl mt-1 text-slate-500">17</p>
                </div>
                <div className="text-center py-2 border-b border-r border-slate-200">
                  <span className="text-[11px] font-medium text-slate-500">THU</span>
                  <p className="text-2xl mt-1 text-slate-500">18</p>
                </div>
                <div className="text-center py-2 border-b border-r border-slate-200">
                  <span className="text-[11px] font-medium text-slate-500">FRI</span>
                  <p className="text-2xl mt-1 text-slate-500">19</p>
                </div>
                <div className="text-center py-2 border-b border-r border-slate-200 bg-[#a3b98b]/10">
                  <span className="text-[11px] font-medium text-[#5f6e4c]">SAT</span>
                  <p className="text-2xl mt-1 h-9 w-9 flex items-center justify-center mx-auto rounded-full bg-[#a3b98b] text-white">20</p>
                </div>
              </div>

              <div className="flex h-[600px] overflow-y-auto">
                <div className="w-[60px] flex-shrink-0 text-right text-[11px] text-slate-400">
                  <div className="h-12 -mt-4 pr-2 pt-1">All day</div>
                  <div className="h-14 -mt-2 pr-2">6 AM</div>
                  <div className="h-14 -mt-2 pr-2">7 AM</div>
                  <div className="h-14 -mt-2 pr-2">8 AM</div>
                  <div className="h-14 -mt-2 pr-2">9 AM</div>
                  <div className="h-14 -mt-2 pr-2">10 AM</div>
                  <div className="h-14 -mt-2 pr-2">11 AM</div>
                  <div className="h-14 -mt-2 pr-2">12 PM</div>
                  <div className="h-14 -mt-2 pr-2">1 PM</div>
                  <div className="h-14 -mt-2 pr-2">2 PM</div>
                  <div className="h-14 -mt-2 pr-2">3 PM</div>
                  <div className="h-14 -mt-2 pr-2">4 PM</div>
                  <div className="h-14 -mt-2 pr-2">5 PM</div>
                  <div className="h-14 -mt-2 pr-2">6 PM</div>
                  <div className="h-14 -mt-2 pr-2">7 PM</div>
                  <div className="h-14 -mt-2 pr-2">8 PM</div>
                </div>

                <div className="grid grid-cols-7 flex-1 relative">
                  {/* Sunday Column */}
                  <div className="border-r border-slate-200">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="h-14 border-b border-slate-100"></div>
                    ))}
                  </div>
                  
                  {/* Monday Column */}
                  <div className="border-r border-slate-200 relative">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="h-14 border-b border-slate-100"></div>
                    ))}
                    <div className="absolute w-full left-0 p-1" style={{ top: '236px', height: '84px' }}>
                      <div className="bg-[#a3b98b]/20 text-[#333] rounded-lg h-full p-2">
                        <p className="text-xs font-semibold">Follow-up: Ana Gomez</p>
                        <p className="text-[11px]">10:30 - 11:15 AM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tuesday Column */}
                  <div className="border-r border-slate-200">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="h-14 border-b border-slate-100"></div>
                    ))}
                  </div>
                  
                  {/* Wednesday Column */}
                  <div className="border-r border-slate-200 relative">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="h-14 border-b border-slate-100"></div>
                    ))}
                    <div className="absolute w-full left-0 p-1" style={{ top: '180px', height: '56px' }}>
                      <div className="bg-blue-100 text-blue-800 rounded-lg h-full p-2">
                        <p className="text-xs font-semibold">Team Meeting</p>
                        <p className="text-[11px]">9:00 - 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Thursday Column */}
                  <div className="border-r border-slate-200">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="h-14 border-b border-slate-100"></div>
                    ))}
                  </div>
                  
                  {/* Friday Column */}
                  <div className="border-r border-slate-200 relative">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="h-14 border-b border-slate-100"></div>
                    ))}
                    <div className="absolute w-full left-0 p-1" style={{ top: '320px', height: '112px' }}>
                      <div className="bg-purple-100 text-purple-800 rounded-lg h-full p-2">
                        <p className="text-xs font-semibold">Client Consultation</p>
                        <p className="text-[11px]">2:00 - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Saturday Column */}
                  <div className="">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="h-14 border-b border-slate-100"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {[
                  { date: 'Sep 21', time: '10:00 AM', title: 'Client Consultation', client: 'Sarah Johnson' },
                  { date: 'Sep 23', time: '2:00 PM', title: 'Follow-up Call', client: 'Mike Chen' },
                  { date: 'Sep 25', time: '11:30 AM', title: 'Diet Plan Review', client: 'Emma Watson' }
                ].map((event, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 w-12 text-center">
                      <div className="text-sm font-medium text-gray-900">{event.date}</div>
                      <div className="text-xs text-gray-500">{event.time}</div>
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.client}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Appointments Today</span>
                  <span className="text-lg font-semibold text-[#a3b98b]">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="text-lg font-semibold text-[#a3b98b]">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Next Week</span>
                  <span className="text-lg font-semibold text-[#a3b98b]">8</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Calendar;