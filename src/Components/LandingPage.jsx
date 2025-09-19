<html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AyuAahar — Dietician Dashboard</title>
    <meta name="description" content="AyuAahar Dietician Dashboard — Professional tools for dieticians.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              serif: ['Playfair Display', 'serif'],
            },
          },
        },
      }
    </script>
    <style>
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.5s ease-out forwards;
        opacity: 0;
      }
      
      @keyframes draw-line {
        to {
          stroke-dashoffset: 0;
        }
      }
      #chart-line {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: draw-line 2s ease-out forwards;
      }

      .card-interactive:hover {
        box-shadow: 0 0 50px -12px rgba(163, 185, 139, 0.25);
        border-color: rgba(163, 185, 139, 0.3);
      }
    </style>
  <link id="all-fonts-link-font-geist" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link id="all-fonts-link-font-roboto" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><link id="all-fonts-link-font-montserrat" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><link id="all-fonts-link-font-poppins" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link id="all-fonts-link-font-instrument-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link id="all-fonts-link-font-merriweather" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap"><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link id="all-fonts-link-font-bricolage" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><link id="all-fonts-link-font-jakarta" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link id="all-fonts-link-font-space-grotesk" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link id="all-fonts-link-font-work-sans" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link id="all-fonts-link-font-pt-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link id="all-fonts-link-font-geist-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link id="all-fonts-link-font-space-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link id="all-fonts-link-font-quicksand" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link id="all-fonts-link-font-nunito" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style></head>
  <body class="bg-[#f9f8f4] text-[#4a403a] antialiased min-h-screen font-sans">
    <div class="md:hidden sticky top-0 z-40 border-b bg-[#f9f8f4]/80 backdrop-blur-sm border-[#e6d3b3]/60">
      <div class="px-4 h-14 flex items-center justify-between">
        <button id="menuButton" class="inline-flex items-center justify-center rounded-md border px-2.5 py-2 hover:bg-white/80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] bg-[#f0f2e9] border-[#e6d3b3]/60 transition-all duration-200 hover:scale-105" aria-label="Open sidebar" style="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
        </button>
        <div class="flex items-center gap-2">
          <span class="font-serif text-lg tracking-tight font-bold">AyuAahar</span>
        </div>
        <div class="w-9 h-9 rounded-full overflow-hidden ring-1 ring-black/10" style="">
          <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=128&amp;h=128&amp;fit=crop" alt="Profile" class="w-full h-full object-cover">
        </div>
      </div>
    </div>

    <div class="relative flex min-h-[calc(100vh-0px)]">
      <div id="overlay" class="fixed inset-0 z-30 bg-black/30 opacity-0 invisible md:hidden transition-opacity duration-300" style=""></div>

      <aside id="sidebar" class="fixed inset-y-0 left-0 z-40 w-72 border-r shadow-sm transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-out bg-[#f0f2e9]/90 backdrop-blur-sm border-[#e6d3b3]/60" style="">
        <div class="h-full flex flex-col">
          <div class="h-16 px-5 flex items-center border-b border-[#e6d3b3]/60">
            <div class="flex items-baseline gap-2">
              <div class="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium tracking-tight border-[#e6d3b3]/60 bg-[#f9f8f4]" style="">
                AA
              </div>
              <div class="flex flex-col leading-tight">
                <span class="font-serif text-xl font-bold tracking-tight">AyuAahar</span>
                <span class="text-xs text-gray-500" style="">Dietician Panel</span>
              </div>
            </div>
          </div>

          <nav class="flex-1 overflow-y-auto pt-4 pr-3 pb-4 pl-3">
            <ul class="space-y-1">
              <li class="">
                <a href="#" class="group flex items-center gap-3 ring-1 ring-[#a3b98b]/50 hover:ring-[#a3b98b]/70 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] text-sm font-medium bg-[#a3b98b]/20 rounded-md pt-2 pr-3 pb-2 pl-3 transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
                  <span class="">Dashboard</span>
                </a>
              </li>
              <li class="">
                <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                  <span class="">Calendar</span>
                </a>
              </li>
              <li class="">
                <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
                  <span class="">Messages</span>
                </a>
              </li>
              <li class="">
                <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  <span class="">Clients</span>
                </a>
              </li>
              <li class="">
                <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
                  <span class="">Meal Plans</span>
                </a>
              </li>
              <li class="">
                <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                  <span class="">Analytics</span>
                </a>
              </li>
              <li class="">
                <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
                  <span class="">Exercises Lib</span>
                </a>
              </li>
              <li class="">
                <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  <span class="">AI Tools</span>
                </a>
              </li>
            </ul>
          </nav>

          <div class="border-t p-3 border-[#e6d3b3]/60">
            <a href="#" class="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-105" style="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4a403a]" style=""><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </aside>

      <div class="flex-1 md:pl-72">
        <header class="sticky top-0 z-20 border-b bg-[#f9f8f4]/80 backdrop-blur-sm border-[#e6d3b3]/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div class="flex items-center gap-3">
                <h1 class="font-serif text-2xl sm:text-3xl tracking-tight font-medium text-[#4a403a]">Dashboard</h1>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4">
                <div class="w-full sm:w-80">
                  <label class="sr-only" for="search">Search</label>
                  <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" style=""><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    <input id="search" type="text" placeholder="Search clients, plans..." class="w-full rounded-md border pl-10 pr-3 h-11 text-sm placeholder-gray-400 shadow-sm focus:border-[#a3b98b] focus:ring-2 focus:ring-[#a3b98b]/50 outline-none bg-[#f0f2e9] border-[#e6d3b3] transition-colors duration-200" style="">
                  </div>
                </div>
                <div class="inline-flex items-center gap-3 rounded-md border px-3 h-11 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 bg-white border-[#e6d3b3]/60 cursor-pointer" style="">
                  <div class="w-9 h-9 rounded-full overflow-hidden ring-1 ring-black/10" style="">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;h=128&amp;fit=crop" alt="Dr. Adam Vasylenko" class="w-full h-full object-cover">
                  </div>
                  <div class="leading-tight">
                    <div class="text-sm font-medium">Dr. Adam Vasylenko</div>
                    <div class="text-xs text-gray-500" style="">Dietician</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main class="">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <section class="card-interactive md:col-span-2 lg:col-span-2 rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent animate-fadeInUp transition-all duration-300 hover:scale-[1.02] flex flex-col" style="animation-delay: 100ms;">
                <div class="border-b border-[#e6d3b3]/60 pt-4 pr-5 pb-4 pl-5">
                  <h2 class="font-serif text-lg font-medium tracking-tight">Upcoming Appointment</h2>
                </div>
                <div class="p-5 flex flex-col justify-between flex-grow">
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 rounded-full overflow-hidden ring-1 ring-black/10 shrink-0" style="">
                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=128&amp;h=128&amp;fit=crop" alt="Dr. Emily Lawson" class="w-full h-full object-cover">
                      </div>
                      <div class="flex-1">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <div class="text-sm font-medium">Dr. Emily Lawson</div>
                            <div class="text-xs text-gray-500" style="">General Physician</div>
                          </div>
                           <span class="text-xs font-medium bg-[#a3b98b]/20 text-[#4a403a] px-2.5 py-1 rounded-full">Starts in 4 days</span>
                        </div>
                        <div class="mt-4 space-y-3 text-sm text-gray-600">
                            <div class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#a3b98b] shrink-0"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                                <span>Follow-up Consultation</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#a3b98b] shrink-0"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M12 18h.01"></path></svg>
                                <span>Tuesday, 23 September 2025 at 3:00 PM</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#a3b98b] shrink-0"><path d="m16 13 5.223 3.482a.5.5 0 0 1 0 .836L16 20.818V13Z"></path><rect width="2" width="12" height="14" x="2" y="5" rx="2"></rect></svg>
                                <span>Virtual (Video Call)</span>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 flex items-center gap-3">
                        <button class="inline-flex items-center justify-center w-full focus:outline-none text-sm font-medium text-white rounded-md px-4 py-2.5 shadow-md hover:shadow-lg bg-[#4a403a] hover:opacity-90 transition-all duration-200 hover:scale-105">Join Call</button>
                        <button class="inline-flex items-center justify-center w-full focus:outline-none text-sm font-medium rounded-md px-4 py-2.5 bg-transparent border border-[#4a403a] text-[#4a403a] hover:bg-[#4a403a] hover:text-white transition-all duration-200 hover:scale-105">Reschedule</button>
                        <button class="text-sm font-medium text-gray-500 hover:text-[#4a403a] transition">Cancel</button>
                    </div>
                </div>
              </section>

              <section class="card-interactive h-full rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent animate-fadeInUp transition-all duration-300 hover:scale-[1.02] flex flex-col" style="animation-delay: 200ms;">
                <div class="px-5 py-4 border-b border-[#e6d3b3]/60">
                  <h2 class="font-serif text-lg font-medium tracking-tight">Today's Tasks</h2>
                </div>
                <div class="p-5 space-y-3 flex-grow">
                  <label class="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" class="mt-1 size-4 rounded border-[#e6d3b3] text-[#a3b98b] focus:ring-[#a3b98b]/50">
                    <div class="flex-1">
                      <div class="text-sm font-medium group-has-[:checked]:line-through">Update meal plan for Sarah J.</div>
                      <div class="text-xs text-gray-500">Add more high-fiber breakfast options</div>
                    </div>
                    <span class="text-[10px] px-2 py-1 rounded bg-[#4a403a]/10 text-[#4a403a] border border-transparent">Due 12 PM</span>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" class="mt-1 size-4 rounded border-[#e6d3b3] text-[#a3b98b] focus:ring-[#a3b98b]/50">
                    <div class="flex-1">
                      <div class="text-sm font-medium group-has-[:checked]:line-through">Send supplement guide PDF to Omar</div>
                      <div class="text-xs text-gray-500">Include Vitamin D dosage recommendations</div>
                    </div>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" class="mt-1 size-4 rounded border-[#e6d3b3] text-[#a3b98b] focus:ring-[#a3b98b]/50">
                    <div class="flex-1">
                      <div class="text-sm font-medium group-has-[:checked]:line-through">Review weekly check-ins</div>
                      <div class="text-xs text-gray-500">Clients: Ana, Ravi, Mei</div>
                    </div>
                    <span class="text-[10px] px-2 py-1 rounded bg-gray-500/10 text-gray-600 border border-transparent">Today</span>
                  </label>
                </div>
              </section>

              <section class="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fadeInUp" style="animation-delay: 300ms;">
                <div class="card-interactive rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent p-4 group transition-all duration-300 hover:scale-105">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-xs uppercase tracking-wide text-gray-500">Active Clients</div>
                      <div class="mt-2 text-2xl font-bold font-serif text-[#4a403a]">128</div>
                    </div>
                    <div class="h-10 w-10 rounded-md flex items-center justify-center bg-[#a3b98b]/20 ring-1 ring-[#a3b98b]/30 transition-transform duration-200 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4a403a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    </div>
                  </div>
                  <div class="mt-3 text-xs text-green-700 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="m6 15 6-6 6 6"></path></svg>
                    +4.1% this week
                  </div>
                </div>
                <div class="card-interactive rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent p-4 group transition-all duration-300 hover:scale-105">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-xs uppercase tracking-wide text-gray-500">Plans Due</div>
                      <div class="mt-2 text-2xl font-bold font-serif text-[#4a403a]">9</div>
                    </div>
                    <div class="h-10 w-10 rounded-md flex items-center justify-center bg-[#a3b98b]/20 ring-1 ring-[#a3b98b]/30 transition-transform duration-200 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4a403a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    </div>
                  </div>
                  <div class="mt-3 text-xs text-amber-700 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14"></path></svg>
                    Due within 48h
                  </div>
                </div>
                <div class="card-interactive rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent p-4 group transition-all duration-300 hover:scale-105">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-xs uppercase tracking-wide text-gray-500">New Messages</div>
                      <div class="mt-2 text-2xl font-bold font-serif text-[#4a403a]">14</div>
                    </div>
                    <div class="h-10 w-10 rounded-md flex items-center justify-center bg-[#a3b98b]/20 ring-1 ring-[#a3b98b]/30 transition-transform duration-200 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4a403a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                  </div>
                  <div class="mt-3 text-xs text-green-700 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="m6 15 6-6 6 6"></path></svg>
                    Response time: 1h avg
                  </div>
                </div>
              </section>

              <section class="card-interactive md:col-span-2 lg:col-span-2 rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent animate-fadeInUp transition-all duration-300 hover:scale-[1.02]" style="animation-delay: 400ms;">
                <div class="px-5 py-4 border-b border-[#e6d3b3]/60">
                  <h2 class="font-serif text-lg font-medium tracking-tight">Weekly Check-ins</h2>
                </div>
                <div class="p-5">
                  <div class="h-40 w-full">
                    <svg viewBox="0 0 320 120" class="w-full h-full">
                      <defs>
                        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stop-color="#a3b98b" stop-opacity="0.25"></stop>
                          <stop offset="100%" stop-color="#a3b98b" stop-opacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <g stroke="currentColor" stroke-opacity="0.08" class="text-[#4a403a]">
                        <path d="M0 100 H320"></path><path d="M0 75 H320"></path><path d="M0 50 H320"></path><path d="M0 25 H320"></path>
                      </g>
                      <path d="M0 90 C40 80, 80 65, 120 72 S200 60, 240 50 S280 40, 320 55 L320 120 L0 120 Z" fill="url(#area)"></path>
                      <path id="chart-line" d="M0 90 C40 80, 80 65, 120 72 S200 60, 240 50 S280 40, 320 55" fill="none" stroke="#a3b98b" stroke-width="2"></path>
                      <g fill="#a3b98b">
                        <circle cx="0" cy="90" r="3"></circle><circle cx="80" cy="65" r="3"></circle><circle cx="160" cy="66" r="3"></circle><circle cx="240" cy="50" r="3"></circle><circle cx="320" cy="55" r="3"></circle>
                      </g>
                    </svg>
                  </div>
                  <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>
              </section>

              <section class="card-interactive h-full rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent animate-fadeInUp transition-all duration-300 hover:scale-[1.02] flex flex-col" style="animation-delay: 500ms;">
                <div class="px-5 py-4 border-b border-[#e6d3b3]/60">
                  <h2 class="font-serif text-lg font-medium tracking-tight">Future Appointments</h2>
                </div>
                <div class="divide-y divide-[#e6d3b3]/60 flex-grow flex flex-col">
                  <div class="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200 flex-grow" style="">
                    <div class="w-16 shrink-0">
                      <div class="rounded-md border text-center py-2 bg-[#f0f2e9] border-[#e6d3b3]/60" style="">
                        <div class="text-base font-medium leading-none">25</div>
                        <div class="text-[10px] uppercase tracking-wide text-gray-500 mt-1" style="">Sep</div>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-sm font-medium truncate">Nutritionist Follow-up</div>
                      <div class="text-xs text-gray-500 truncate" style="">with Sara Mitchell</div>
                    </div>
                    <div class="text-sm text-gray-700 shrink-0">10:00 AM</div>
                  </div>
                  <div class="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200 flex-grow" style="">
                    <div class="w-16 shrink-0">
                      <div class="rounded-md border text-center py-2 bg-[#f0f2e9] border-[#e6d3b3]/60" style="">
                        <div class="text-base font-medium leading-none">28</div>
                        <div class="text-[10px] uppercase tracking-wide text-gray-500 mt-1" style="">Sep</div>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-sm font-medium truncate">Diet Plan Revision</div>
                      <div class="text-xs text-gray-500 truncate" style="">with Mark Evans</div>
                    </div>
                    <div class="text-sm text-gray-700 shrink-0">1:30 PM</div>
                  </div>
                  <div class="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200 flex-grow" style="">
                    <div class="w-16 shrink-0">
                      <div class="rounded-md border text-center py-2 bg-[#f0f2e9] border-[#e6d3b3]/60" style="">
                        <div class="text-base font-medium leading-none">02</div>
                        <div class="text-[10px] uppercase tracking-wide text-gray-500 mt-1" style="">Oct</div>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-sm font-medium truncate">Lab Reports Review</div>
                      <div class="text-xs text-gray-500 truncate" style="">with Dr. Priya Nair</div>
                    </div>
                    <div class="text-sm text-gray-700 shrink-0">9:15 AM</div>
                  </div>
                </div>
              </section>

              <section class="card-interactive md:col-span-2 lg:col-span-3 rounded-xl border shadow-lg bg-[#fdfbf6]/80 backdrop-blur-sm border-transparent animate-fadeInUp transition-all duration-300 hover:scale-[1.02]" style="animation-delay: 600ms;">
                <div class="px-5 py-4 border-b border-[#e6d3b3]/60">
                  <h2 class="font-serif text-lg font-medium tracking-tight">Recent Clients</h2>
                </div>
                <ul class="divide-y divide-[#e6d3b3]/60">
                  <li class="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200">
                    <img class="w-11 h-11 rounded-full ring-1 ring-black/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128&h=128&fit=crop" alt="Ana Gomez">
                    <div class="min-w-0 flex-1">
                      <div class="text-sm font-medium truncate">Ana Gomez</div>
                      <div class="text-xs text-gray-500 truncate">Weight management · Week 4</div>
                    </div>
                    <span class="text-[10px] font-medium px-2 py-1 rounded bg-green-100 text-green-800 border border-green-200/50">On Track</span>
                  </li>
                  <li class="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200">
                    <img class="w-11 h-11 rounded-full ring-1 ring-black/10 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="Ravi Kumar">
                    <div class="min-w-0 flex-1">
                      <div class="text-sm font-medium truncate">Ravi Kumar</div>
                      <div class="text-xs text-gray-500 truncate">Diabetes care · New plan</div>
                    </div>
                    <span class="text-[10px] font-medium px-2 py-1 rounded bg-amber-100 text-amber-800 border border-amber-200/50">Needs Review</span>
                  </li>
                  <li class="p-5 flex items-center gap-4 hover:bg-[#4a403a]/5 transition-colors duration-200">
                    <img class="w-11 h-11 rounded-full ring-1 ring-black/10 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=128&h=128&fit=crop" alt="Mei Lin">
                    <div class="min-w-0 flex-1">
                      <div class="text-sm font-medium truncate">Mei Lin</div>
                      <div class="text-xs text-gray-500 truncate">Sports nutrition · Check-in</div>
                    </div>
                    <span class="text-[10px] font-medium px-2 py-1 rounded bg-green-100 text-green-800 border border-green-200/50">On Track</span>
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </main>
      </div>
    </div>

    <div id="detailsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 opacity-0 invisible transition-opacity duration-300" aria-hidden="true">
      <div id="modalOverlay" class="absolute inset-0 bg-black/40"></div>
      <div role="dialog" aria-modal="true" aria-labelledby="modalTitle" class="w-full max-w-lg rounded-xl border shadow-xl bg-[#fdfbf6] border-[#e6d3b3]/60 overflow-hidden transition-all duration-300 scale-95">
        <div class="px-5 py-4 border-b border-[#e6d3b3]/60 flex items-center justify-between">
          <h3 id="modalTitle" class="font-serif text-lg font-medium tracking-tight">Appointment Details</h3>
          <button id="closeModal" class="inline-flex items-center justify-center rounded-md p-2 hover:bg-[#4a403a]/5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] transition-all duration-200 hover:scale-110" aria-label="Close details">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#4a403a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          </button>
        </div>
        <div class="p-5 space-y-4">
          <div class="flex items-start gap-3">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=96&h=96&fit=crop" class="w-12 h-12 rounded-full ring-1 ring-black/10 object-cover" alt="Dr. Emily Lawson">
            <div class="flex-1">
              <div class="text-sm font-medium">Dr. Emily Lawson</div>
              <div class="text-xs text-gray-500">General Physician</div>
              <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-[#a3b98b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                  Tuesday, 23 September 2025
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-[#a3b98b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  3:00 PM
                </div>
              </div>
            </div>
          </div>
          <div class="text-sm">
            <div class="font-medium mb-1">Agenda</div>
            <ul class="list-disc pl-5 space-y-1 text-gray-600">
              <li>Review recent blood work and vitals</li>
              <li>Discuss updated macronutrient targets</li>
              <li>Confirm follow-up in two weeks</li>
            </ul>
          </div>
        </div>
        <div class="px-5 py-4 border-t border-[#e6d3b3]/60 flex items-center justify-end gap-2">
          <button id="cancelModal" class="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm border bg-white hover:bg-gray-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] border-[#e6d3b3]/60 transition-all duration-200 hover:scale-105">Cancel</button>
          <button class="inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm text-white shadow-md bg-[#4a403a] hover:opacity-90 transition-all duration-200 hover:scale-105">Confirm</button>
        </div>
      </div>
    </div>

    <script>
      // Mobile sidebar toggle
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      const menuButton = document.getElementById('menuButton');

      function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0', 'invisible');
        overlay.classList.add('opacity-100', 'visible');
      }
      function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100', 'visible');
        overlay.classList.add('opacity-0', 'invisible');
      }

      if (menuButton) {
        menuButton.addEventListener('click', openSidebar);
      }
      if (overlay) {
        overlay.addEventListener('click', closeSidebar);
      }
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeSidebar();
          closeModal();
        }
      });

      // Details modal handling
      const detailsBtn = document.querySelector('section button:where(.inline-flex)');
      const detailsModal = document.getElementById('detailsModal');
      const modalDialog = detailsModal ? detailsModal.querySelector('[role="dialog"]') : null;
      const modalOverlay = document.getElementById('modalOverlay');
      const closeModalBtn = document.getElementById('closeModal');
      const cancelModalBtn = document.getElementById('cancelModal');

      function openModal() {
        if (!detailsModal || !modalDialog) return;
        detailsModal.classList.remove('opacity-0', 'invisible');
        detailsModal.setAttribute('aria-hidden', 'false');
        modalDialog.classList.remove('scale-95');
        // focus the close button for accessibility
        closeModalBtn && closeModalBtn.focus();
      }
      function closeModal() {
        if (!detailsModal || !modalDialog) return;
        detailsModal.classList.add('opacity-0');
        modalDialog.classList.add('scale-95');
        setTimeout(() => {
          detailsModal.classList.add('invisible');
          detailsModal.setAttribute('aria-hidden', 'true');
        }, 300); // Match duration of transition
      }

      if (detailsBtn) detailsBtn.addEventListener('click', openModal);
      if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
      if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
      if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);
    </script>
  </body>
</html>