import React, { useEffect } from 'react';

const ClientsPage = () => {

  // This useEffect hook replaces the original <script> tag.
  // It runs after the component mounts to initialize the Lucide icons.
  // In a real-world React app, you would typically use a library like 'lucide-react'
  // instead of a CDN script for better integration.
  useEffect(() => {
    // The lucide library is loaded from a CDN and will be on the window object.
    if (window.lucide) {
      window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
  }, []);

  return (
    <div 
      className="antialiased font-sans text-[15px] leading-6" 
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'", backgroundColor: '#FAFAF7', color: '#333333' }}
    >
      {/* Top Navigation */}
      <header className="sticky top-0 z-50" style={{ background: 'linear-gradient(90deg,#f5f4f0,#ffffff)', borderBottom: '1px solid rgba(90,82,76,0.10)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Back">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-left" className="lucide lucide-arrow-left w-5 h-5"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
            </button>
            <span className="text-[18px] tracking-tight font-medium">Your clients</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="bell" className="lucide lucide-bell w-5 h-5"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
            </button>
            <button className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Messages">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="message-square" className="lucide lucide-message-square w-5 h-5"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <div className="hidden md:flex items-center gap-3 pl-3 ml-1" style={{ borderLeft: '1px solid rgba(90,82,76,0.10)' }}>
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-black/5" />
              <div className="flex flex-col leading-5">
                <span className="text-[13px] font-medium tracking-tight">DEEP MEHTA</span>
                <span className="text-[12px]" style={{ color: '#888888' }}>Unlimited</span>
              </div>
              <button className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Profile menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down w-5 h-5"><path d="m6 9 6 6 6-6"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="inline-flex gap-2 sm:px-5 transition active:translate-y-px hover:brightness-95 hover:outline hover:outline-1 hover:outline-black/10 text-white h-10 rounded-md pr-4 pl-4 shadow-md blur-none items-center" style={{ backgroundColor: '#c89143' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus w-4 h-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              <span className="text-[14px] font-medium tracking-tight">Register client</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            {/* Dropdown (All clients) */}
            <button className="inline-flex items-center gap-2 h-10 px-3 rounded-md transition hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10" style={{ backgroundColor: '#FAFAF7', border: '1px solid rgba(90,82,76,0.12)' }}>
              <span className="text-[13px] font-medium">All clients</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            {/* Export/Download */}
            <button className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Export">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="download" className="lucide lucide-download w-5 h-5"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="search" className="lucide lucide-search w-4.5 h-4.5 text-black/60"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            </div>
            <input type="text" className="w-full h-11 rounded-md pl-10 pr-3 outline-none focus:ring-2 focus:ring-black/5 transition shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.12)' }} placeholder="Search clients by name, occupation, identification number or contact..." />
          </div>
        </div>

        {/* Table */}
        <section className="mt-6">
          <div className="rounded-lg shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.10)' }}>
            <div className="overflow-x-auto">
              <table className="min-w-[960px] w-full">
                <thead className="text-left" style={{ backgroundColor: '#F5F4F0', borderBottom: '1px solid rgba(90,82,76,0.10)' }}>
                  <tr>
                    <th className="text-[12px] font-medium uppercase tracking-wider text-black/70 px-4 sm:px-5 py-3">Client</th>
                    <th className="text-[12px] font-medium uppercase tracking-wider text-black/70 px-4 sm:px-5 py-3">Workplace</th>
                    <th className="text-[12px] font-medium uppercase tracking-wider text-black/70 px-4 sm:px-5 py-3">Contact</th>
                    <th className="text-[12px] font-medium uppercase tracking-wider text-black/70 px-4 sm:px-5 py-3">Last appointment</th>
                    <th className="text-[12px] font-medium uppercase tracking-wider text-black/70 px-4 sm:px-5 py-3">Next appointment</th>
                    <th className="text-[12px] font-medium uppercase tracking-wider text-black/70 px-4 sm:px-5 py-3">This month</th>
                    <th className="px-4 sm:px-5 py-3 w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Client Row */}
                  <tr className="hover:bg-black/[0.02] transition">
                    {/* Client */}
                    <td className="px-4 sm:px-5 py-4" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=88&auto=format&fit=crop" alt="Client avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-black/5" />
                        <div className="flex flex-col">
                          <span className="text-[14px] font-medium tracking-tight">Example client</span>
                        </div>
                      </div>
                    </td>
                    {/* Workplace */}
                    <td className="px-4 sm:px-5 py-4 align-top" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <div className="flex flex-col">
                        <span className="text-[14px]">Bhartiya Vidya Bhavans</span>
                        <span className="text-[12px]" style={{ color: '#888888' }}>Sardar Patel Institute Of...</span>
                      </div>
                    </td>
                    {/* Contact */}
                    <td className="px-4 sm:px-5 py-4 align-top" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="text-[14px]" style={{ color: '#888888' }}>-</span>
                    </td>
                    {/* Last appointment */}
                    <td className="px-4 sm:px-5 py-4 align-top whitespace-nowrap" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="text-[14px]">6 days ago</span>
                    </td>
                    {/* Next appointment */}
                    <td className="px-4 sm:px-5 py-4 align-top whitespace-nowrap" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-medium" style={{ color: '#ca8a04', background: 'rgba(202,138,4,0.10)', border: '1px solid rgba(202,138,4,0.25)' }}>
                        Not scheduled
                      </span>
                    </td>
                    {/* This month */}
                    <td className="px-4 sm:px-5 py-4 align-top whitespace-nowrap" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-medium" style={{ color: '#16a34a', background: 'rgba(22,163,74,0.10)', border: '1px solid rgba(22,163,74,0.20)' }}>
                        Active
                      </span>
                    </td>
                    {/* Action */}
                    <td className="px-4 sm:px-5 py-4 align-top text-right" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <button className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Email client">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="mail" className="lucide lucide-mail w-5 h-5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                      </button>
                    </td>
                  </tr>
                  {/* Optional: another row placeholder for visual rhythm */}
                  <tr className="hover:bg-black/[0.02] transition">
                    <td className="px-4 sm:px-5 py-4" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=88&auto=format&fit=crop" alt="Client avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-black/5" />
                        <div className="flex flex-col">
                          <span className="text-[14px] font-medium tracking-tight">Another client</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-5 py-4 align-top" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <div className="flex flex-col">
                        <span className="text-[14px]">Independent</span>
                        <span className="text-[12px]" style={{ color: '#888888' }}>Freelancer</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-5 py-4 align-top" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="text-[14px]" style={{ color: '#888888' }}>-</span>
                    </td>
                    <td className="px-4 sm:px-5 py-4 align-top whitespace-nowrap" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="text-[14px]" style={{ color: '#888888' }}>—</span>
                    </td>
                    <td className="px-4 sm:px-5 py-4 align-top whitespace-nowrap" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-medium" style={{ color: '#ca8a04', background: 'rgba(202,138,4,0.10)', border: '1px solid rgba(202,138,4,0.25)' }}>
                        Not scheduled
                      </span>
                    </td>
                    <td className="px-4 sm:px-5 py-4 align-top whitespace-nowrap" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-medium" style={{ color: '#16a34a', background: 'rgba(22,163,74,0.10)', border: '1px solid rgba(22,163,74,0.20)' }}>
                        Active
                      </span>
                    </td>
                    <td className="px-4 sm:px-5 py-4 align-top text-right" style={{ borderTop: '1px solid rgba(90,82,76,0.08)' }}>
                      <button className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-black/5 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Email client">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="mail" className="lucide lucide-mail w-5 h-5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer hint */}
            <div className="px-4 sm:px-5 py-3 text-[12px]" style={{ color: '#888888', borderTop: '1px solid rgba(90,82,76,0.10)', background: '#FAFAF7' }}>
              Showing 2 of 2 clients
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col items-end gap-3">
        {/* Large circular chat button */}
        <button className="h-14 w-14 rounded-full shadow-sm flex items-center justify-center hover:brightness-95 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Chat support" style={{ backgroundColor: '#16a34a' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="message-circle" className="lucide lucide-message-circle w-6 h-6 text-white"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
        </button>
        {/* Smaller pill button below */}
        <button className="px-3 h-9 rounded-full shadow-sm text-white text-[13px] hover:brightness-110 hover:outline hover:outline-1 hover:outline-black/10 transition" aria-label="Nutrium Academy" style={{ backgroundColor: '#333333' }}>
          Nutrium Academy
        </button>
      </div>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="pt-4 text-[12px]" style={{ color: '#888888', borderTop: '1px solid rgba(90,82,76,0.10)' }}>
          <span>AyuAahar • Clients</span>
        </div>
      </footer>
    </div>
  );
}

export default ClientsPage;