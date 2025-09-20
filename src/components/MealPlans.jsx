import React from 'react';

// MealPlans Page converted from static HTML (MealPlan/index.html)
// Sidebar, mobile header, and layout chrome are handled by Layout + Navbar.
// This component renders only the inner page content (header title + search + placeholder body)

const MealPlans = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 animate-fadeInUp">
      {/* Page Header Section */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">Meal Plan Templates</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4 w-full lg:w-auto">
          <div className="relative w-full sm:w-80">
            <span className="sr-only">Search meal plan template</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#888888] pointer-events-none">
              <path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input 
              type="text" 
              placeholder="Search meal plan template" 
              className="w-full rounded-md border pl-10 pr-3 py-2.5 text-sm placeholder-[#888888] shadow-sm focus:border-[#c89143]/40 focus:ring-2 focus:ring-[#c89143]/30 outline-none bg-[#F5F4F0] border-[#5a524c]/10" 
            />
          </div>
          <div className="inline-flex items-center gap-3 rounded-md border px-3 py-2 shadow-sm bg-[#F5F4F0] border-[#5a524c]/10">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-black/10">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&h=128&fit=crop" alt="Dr. Adam Vasylenko" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-medium">Dr. Adam Vasylenko</div>
              <div className="text-xs text-[#888888]">Dietician</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="rounded-lg shadow-sm bg-white border border-[rgba(90,82,76,0.10)] p-6">
        <div className="prose max-w-none">
          <h2 className="text-lg font-semibold mb-4">Templates Area</h2>
          <p className="text-sm text-[#555] mb-6">
            This section will list all reusable meal plan templates. You can add filters, categories, preview nutritional breakdowns, and copy a template to assign to a client.
          </p>

          {/* Placeholder Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group border rounded-lg p-4 bg-[#F9F8F4] border-[#5a524c]/10 hover:shadow-sm transition card-interactive flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-medium tracking-tight">Template {i + 1}</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#c89143]/10 text-[#c89143] border border-[#c89143]/30">
                    7-day
                  </span>
                </div>
                <p className="text-[13px] text-[#666] leading-relaxed line-clamp-3">
                  Balanced vegetarian-friendly plan focusing on whole foods, fiber-rich meals, and sustained energy.
                </p>
                <div className="flex items-center gap-3 mt-auto pt-2">
                  <button className="text-xs h-8 px-3 rounded-md font-medium bg-[#c89143] text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c89143]/40">
                    Use Template
                  </button>
                  <button className="text-xs h-8 px-3 rounded-md font-medium bg-white border border-[#5a524c]/10 hover:bg-[#F5F4F0]">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlans;
