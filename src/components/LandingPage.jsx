import React from 'react';

const LandingPage = () => {
  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-20 border-b bg-[#f9f8f4]/80 backdrop-blur-sm border-[#e6d3b3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-serif text-2xl sm:text-3xl tracking-tight font-medium text-[#4a403a]">Dashboard</h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4">
              <div className="w-full sm:w-80">
                <label className="sr-only" htmlFor="search">Search</label>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Upcoming Appointment Card */}
          <section className="md:col-span-2 lg:col-span-2 rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent transition-all duration-300 hover:scale-[1.02] flex flex-col">
            <div className="border-b border-[#e6d3b3]/60 pt-4 pr-5 pb-4 pl-5">
              <h2 className="font-serif text-lg font-medium tracking-tight">Upcoming Appointment</h2>
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-black/10 shrink-0">
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128&h=128&fit=crop" alt="Dr. Emily Lawson" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium">Dr. Emily Lawson</div>
                      <div className="text-xs text-gray-500">General Physician</div>
                    </div>
                    <span className="text-xs font-medium bg-[#a3b98b]/20 text-[#4a403a] px-2.5 py-1 rounded-full">Starts in 4 days</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#a3b98b] shrink-0"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                      <span>Follow-up Consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#a3b98b] shrink-0"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M12 18h.01"></path></svg>
                      <span>Tuesday, 23 September 2025 at 3:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#a3b98b] shrink-0"><path d="m16 13 5.223 3.482a.5.5 0 0 1 0 .836L16 20.818V13Z"></path><rect width="12" height="14" x="2" y="5" rx="2"></rect></svg>
                      <span>Video Call</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-[#e6d3b3]/60 flex items-center justify-between">
                <button className="inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm bg-[#a3b98b] text-white hover:bg-[#8fa47a] transition-all duration-200 hover:scale-105">Join Call</button>
                <button className="text-sm text-gray-600 hover:text-[#4a403a] transition-colors">View Details</button>
              </div>
            </div>
          </section>

          {/* Today's Tasks */}
          <section className="rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent transition-all duration-300 hover:scale-[1.02]">
            <div className="border-b border-[#e6d3b3]/60 pt-4 pr-5 pb-4 pl-5">
              <h2 className="font-serif text-lg font-medium tracking-tight">Today's Tasks</h2>
            </div>
            <div className="p-5">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300 text-[#a3b98b] focus:ring-[#a3b98b]" />
                  <span className="text-sm">Review meal plan for Ana Rodriguez</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" checked className="rounded border-gray-300 text-[#a3b98b] focus:ring-[#a3b98b]" />
                  <span className="text-sm line-through text-gray-500">Prepare notes for client meeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300 text-[#a3b98b] focus:ring-[#a3b98b]" />
                  <span className="text-sm">Update exercise recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300 text-[#a3b98b] focus:ring-[#a3b98b]" />
                  <span className="text-sm">Send weekly progress report</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Stats Cards */}
          <div className="rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent p-5 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Active Clients</div>
            <div className="text-2xl font-bold text-[#4a403a]">24</div>
            <div className="text-xs text-green-600 mt-1">↗ +2 this week</div>
          </div>

          <div className="rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent p-5 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Appointments Today</div>
            <div className="text-2xl font-bold text-[#4a403a]">6</div>
            <div className="text-xs text-gray-500 mt-1">2 completed</div>
          </div>

          <div className="rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent p-5 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Success Rate</div>
            <div className="text-2xl font-bold text-[#4a403a]">94%</div>
            <div className="text-xs text-green-600 mt-1">↗ +1.2% vs last month</div>
          </div>

          {/* Recent Clients */}
          <section className="md:col-span-2 lg:col-span-3 rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent">
            <div className="border-b border-[#e6d3b3]/60 pt-4 pr-5 pb-4 pl-5">
              <h2 className="font-serif text-lg font-medium tracking-tight">Recent Clients</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Ana Rodriguez", status: "Active", lastSeen: "2 days ago", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=128&h=128&fit=crop" },
                  { name: "Michael Chen", status: "Active", lastSeen: "5 days ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&fit=crop" },
                  { name: "Sarah Johnson", status: "Completed", lastSeen: "1 week ago", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128&h=128&fit=crop" }
                ].map((client, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0f2e9]/50 transition-colors">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-black/10">
                      <img src={client.avatar} alt={client.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[#4a403a]">{client.name}</div>
                      <div className="text-xs text-gray-500">{client.lastSeen}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${client.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {client.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LandingPage;