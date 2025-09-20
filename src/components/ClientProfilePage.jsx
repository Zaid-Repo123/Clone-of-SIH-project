import React, { useEffect } from 'react';

const ClientProfilePage = () => {
  useEffect(() => {
    // This effect hook encapsulates all the JavaScript from the original <script> tag.
    // It runs once after the component's HTML is rendered to the DOM.
    
    // Check for global libraries loaded from CDN
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
    
    // --- Tabs ---
    const tabButtons = Array.from(document.querySelectorAll('#tabbar [data-tab]'));
    const panels = Array.from(document.querySelectorAll('#panels [data-panel]'));
    
    function setActiveTab(name) {
      tabButtons.forEach(btn => {
        const active = btn.dataset.tab === name;
        btn.style.color = active ? '#333333' : '#888888';
        btn.style.borderBottomColor = active ? '#c89143' : 'transparent';
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach(p => p.classList.toggle('hidden', p.dataset.panel !== name));
      
      // Resize charts when their tab becomes visible
      if (name === 'measurements') {
        resizeCharts();
      }
      if (name === 'analysis') {
        updateTrendChart();
        updateComplianceChart();
        resizeCharts();
      }
    }
    tabButtons.forEach(btn => btn.addEventListener('click', () => setActiveTab(btn.dataset.tab)));

    // --- Accordions ---
    document.querySelectorAll('[data-acc-btn]').forEach((btn) => {
      const panel = btn.parentElement.querySelector('[data-acc-panel]');
      const icon = btn.querySelector('[data-lucide="chevron-down"]');
      if (!panel) return;
      btn.setAttribute('aria-expanded', !panel.classList.contains('hidden'));
      btn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
        const expanded = !panel.classList.contains('hidden');
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        if (icon) icon.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
      });
    });

    // --- Observations ---
    const obsAdd = document.getElementById('obs-add');
    const obsList = document.getElementById('obs-list');
    const observations = [];

    function renderObservations() {
      obsList.innerHTML = '';
      if (!observations.length) {
        obsList.innerHTML = `<p class="text-sm" style="color:#888888;">No observations yet.</p>`;
        return;
      }
      observations.forEach((o, i) => {
        const item = document.createElement('div');
        item.className = 'flex items-start justify-between gap-3 rounded-md p-2';
        item.style.cssText = 'background:#FAFAF7; border:1px solid rgba(90,82,76,0.1);';
        item.innerHTML = `
          <div>
            <p class="text-sm" style="color:#333333;">${o.text}</p>
            <p class="text-xs mt-0.5" style="color:#888888;">${o.date}</p>
          </div>
          <button class="shrink-0 rounded-md w-8 h-8 flex items-center justify-center" aria-label="Delete observation" title="Delete" style="border:1px solid rgba(90,82,76,0.1); background:#FFFFFF;"><i data-lucide="trash-2" class="h-4 w-4"></i></button>
        `;
        item.querySelector('button').addEventListener('click', () => {
          observations.splice(i, 1);
          renderObservations();
        });
        obsList.appendChild(item);
      });
      if (window.lucide) window.lucide.createIcons();
    }
    obsAdd.addEventListener('click', () => {
      const text = prompt('Add observation:');
      if (text && text.trim()) {
        observations.unshift({ text: text.trim(), date: new Date().toLocaleString() });
        renderObservations();
      }
    });
    renderObservations();

    // --- Files ---
    const fileBtn = document.getElementById('file-btn');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    let filesState = [];
    fileBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const newFiles = Array.from(e.target.files).map(f => ({ name: f.name, size: f.size }));
      filesState = filesState.concat(newFiles);
      renderFiles();
      fileInput.value = '';
    });

    function renderFiles() {
      fileList.innerHTML = '';
      if (!filesState.length) {
        fileList.innerHTML = `<li class="text-sm" style="color:#888888;">No files uploaded.</li>`;
        return;
      }
      filesState.forEach((f, i) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between gap-3 rounded-md p-2';
        li.style.cssText = 'background:#FAFAF7; border:1px solid rgba(90,82,76,0.1);';
        const sizeKB = Math.max(1, Math.round(f.size / 1024));
        li.innerHTML = `
          <div class="flex items-center gap-2 min-w-0">
            <i data-lucide="file" class="h-4 w-4 shrink-0" style="color:#c89143;"></i>
            <span class="text-sm truncate" style="color:#333333;">${f.name}</span>
            <span class="text-xs ml-auto shrink-0" style="color:#888888;">${sizeKB} KB</span>
          </div>
          <button class="rounded-md w-8 h-8 flex items-center justify-center shrink-0" aria-label="Remove file" title="Remove" style="border:1px solid rgba(90,82,76,0.1); background:#FFFFFF;"><i data-lucide="x" class="h-4 w-4"></i></button>
        `;
        li.querySelector('button').addEventListener('click', () => {
          filesState.splice(i, 1);
          renderFiles();
        });
        fileList.appendChild(li);
      });
      if (window.lucide) window.lucide.createIcons();
    }
    renderFiles();

    // --- Measurements ---
    const metrics = {
      body: [
        { id: 'weight', label: 'Weight', unit: 'kg' },
        { id: 'bodyfat', label: 'Body Fat', unit: '%' },
        { id: 'waist', label: 'Waist', unit: 'cm' },
        { id: 'hip', label: 'Hip', unit: 'cm' },
        { id: 'bmi', label: 'BMI', unit: '' }
      ],
      blood: [
        { id: 'glucose', label: 'Fasting Glucose', unit: 'mg/dL' },
        { id: 'hba1c', label: 'HbA1c', unit: '%' },
        { id: 'hdl', label: 'HDL', unit: 'mg/dL' },
        { id: 'ldl', label: 'LDL', unit: 'mg/dL' },
        { id: 'tg', label: 'Triglycerides', unit: 'mg/dL' }
      ]
    };
    const metricSelect = document.getElementById('m-metric');
    const mUnitHint = document.getElementById('m-unit-hint');
    const bodyWrap = document.getElementById('metric-list-body');
    const bloodWrap = document.getElementById('metric-list-blood');
    const mDate = document.getElementById('m-date');
    const mValue = document.getElementById('m-value');
    const mSource = document.getElementById('m-source');
    const mRegister = document.getElementById('m-register');
    const mTable = document.getElementById('m-table');
    const mChartTitle = document.getElementById('m-chart-title');
    const mChartSub = document.getElementById('m-chart-sub');
    let records = [
      { date: '2025-03-01', metric: 'weight', value: 72.8, unit: 'kg', source: 'practitioner' },
      { date: '2025-03-15', metric: 'weight', value: 72.0, unit: 'kg', source: 'client' },
      { date: '2025-04-01', metric: 'weight', value: 71.5, unit: 'kg', source: 'client' },
    ];

    function makeMetricPill(m) {
      const b = document.createElement('button');
      b.className = 'text-xs rounded-md px-2.5 py-1.5 text-left transition-colors';
      b.style.cssText = 'border:1px solid rgba(90,82,76,0.1); background:#FFFFFF; color:#333333;';
      b.textContent = m.label;
      b.addEventListener('click', () => {
        metricSelect.value = m.id;
        updateMetricUI();
      });
      return b;
    }

    function populateMetrics() {
      metricSelect.innerHTML = '';
      Object.values(metrics).flat().forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = `${m.label} (${m.unit || '—'})`;
        metricSelect.appendChild(opt);
      });
      bodyWrap.innerHTML = '';
      metrics.body.forEach(m => bodyWrap.appendChild(makeMetricPill(m)));
      bloodWrap.innerHTML = '';
      metrics.blood.forEach(m => bloodWrap.appendChild(makeMetricPill(m)));
      metricSelect.value = 'weight';
      updateMetricUI();
    }

    function getMetricMeta(id) {
      return Object.values(metrics).flat().find(m => m.id === id);
    }
    
    function updateMetricUI() {
      const meta = getMetricMeta(metricSelect.value);
      if(!meta) return;
      mUnitHint.textContent = 'Unit: ' + (meta.unit || '—');
      mChartTitle.textContent = meta.label + ' Progress';
      mChartSub.textContent = `Unit: ${meta.unit || '—'}`;
      updateChartFor(metricSelect.value);
    }

    function addRecord(rec) {
      records.push(rec);
      records.sort((a, b) => new Date(a.date) - new Date(b.date));
      renderTable();
      updateChartFor(metricSelect.value);
      updateTrendChart();
      computeFlags();
    }

    function renderTable() {
      mTable.innerHTML = '';
      if (!records.length) return;
      records.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="py-2 pr-4 whitespace-nowrap">${r.date}</td>
          <td class="py-2 pr-4">${getMetricMeta(r.metric)?.label || r.metric}</td>
          <td class="py-2 pr-4">${r.value}</td>
          <td class="py-2 pr-4">${r.unit || getMetricMeta(r.metric)?.unit || ''}</td>
          <td class="py-2 pr-0 capitalize">${r.source}</td>
        `;
        mTable.appendChild(tr);
      });
    }

    mRegister.addEventListener('click', () => {
      const id = metricSelect.value;
      const meta = getMetricMeta(id);
      const date = mDate.value || new Date().toISOString().slice(0, 10);
      const val = parseFloat(mValue.value);
      if (isNaN(val)) { alert('Please enter a value'); return; }
      addRecord({ date, metric: id, value: val, unit: meta?.unit || '', source: mSource.value });
      mValue.value = '';
    });

    // --- Chart.js setup ---
    if (!window.Chart) return;
    const progressCtx = document.getElementById('progressChart')?.getContext('2d');
    const trendCtx = document.getElementById('trendChart')?.getContext('2d');
    const complianceCtx = document.getElementById('complianceChart')?.getContext('2d');
    if (!progressCtx || !trendCtx || !complianceCtx) return;
    
    const gridColor = 'rgba(90,82,76,0.1)';
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { grid: { color: gridColor } }, y: { grid: { color: gridColor } } },
        plugins: { legend: { display: false } }
    };

    let progressChart = new window.Chart(progressCtx, {
      type: 'line',
      data: { labels: [], datasets: [{ label: 'Value', data: [], tension: 0.35, borderColor: '#c89143', backgroundColor: 'rgba(200,145,67,0.15)', fill: true, pointRadius: 3 }] },
      options: chartOptions
    });
    
    let trendChart = new window.Chart(trendCtx, {
        type: 'line',
        data: { labels: [], datasets: [{ label: 'Weight (kg)', data: [], tension: 0.35, borderColor: '#5a524c', backgroundColor: 'rgba(90,82,76,0.08)', fill: true, pointRadius: 2 }] },
        options: chartOptions
    });

    let complianceChart = new window.Chart(complianceCtx, {
      type: 'doughnut',
      data: {
        labels: ['On track', 'Missed'],
        datasets: [{ data: [80, 20], backgroundColor: ['#c89143', '#e6e1da'], borderWidth: 0 }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 10 } } }, cutout: '65%' }
    });
    
    function updateChartFor(metric) {
      const meta = getMetricMeta(metric);
      const data = records.filter(r => r.metric === metric);
      progressChart.data.labels = data.map(d => d.date);
      progressChart.data.datasets[0].data = data.map(d => d.value);
      progressChart.update();
      mChartSub.textContent = meta ? (data.length ? `Last: ${data[data.length - 1].value} ${meta.unit || ''}` : `No data yet`) : '';
    }

    function updateTrendChart() {
      const data = records.filter(r => r.metric === 'weight').slice(-8);
      trendChart.data.labels = data.map(d => d.date);
      trendChart.data.datasets[0].data = data.map(d => d.value);
      trendChart.update();
    }

    function updateComplianceChart() {
      const onTrack = Math.min(95, 60 + Math.round(Math.random() * 35));
      complianceChart.data.datasets[0].data = [onTrack, 100 - onTrack];
      complianceChart.update();
    }

    function resizeCharts() {
      progressChart.resize();
      trendChart.resize();
      complianceChart.resize();
    }

    populateMetrics();
    renderTable();
    updateTrendChart();
    updateComplianceChart();
    metricSelect.addEventListener('change', updateMetricUI);

    // --- Planning Calculations ---
    const planningInputs = [
        'p-weight', 'p-goal', 'p-height', 'p-age', 'p-sex',
        'p-activity', 'p-goal-type', 'p-protein', 'p-fat', 'p-notes'
    ].map(id => document.getElementById(id));
    
    const planningOutputs = [
        'p-bmi', 'p-bmr', 'p-tdee', 'p-cal-target', 'p-protein-p', 'p-fat-p',
        'p-carbs-p', 'p-protein-g', 'p-fat-g', 'p-carbs-g', 'p-protein-out',
        'p-fat-out', 'p-carbs-out', 'p-fiber-out', 'deliv-cal', 'deliv-macros', 'deliv-notes'
    ].reduce((acc, id) => { acc[id] = document.getElementById(id); return acc; }, {});
    
    function computePlan() {
        const [pWeight, , pHeight, pAge, pSex, pActivity, pGoalType, pProtein, pFat, pNotes] = planningInputs.map(el => el?.value);
        const w = parseFloat(pWeight) || 0;
        const h = parseFloat(pHeight) || 0;
        const age = parseFloat(pAge) || 0;
        const act = parseFloat(pActivity) || 1.2;
        const bmr = pSex === 'male' ? (10 * w + 6.25 * h - 5 * age + 5) : (10 * w + 6.25 * h - 5 * age - 161);
        const tdee = bmr * act;
        let calTarget = tdee;
        if (pGoalType === 'loss') calTarget *= 0.85;
        if (pGoalType === 'gain') calTarget *= 1.10;
        
        const pPct = parseInt(pProtein, 10);
        const fPct = parseInt(pFat, 10);
        let cPct = Math.max(0, 100 - pPct - fPct);

        const proteinG = (calTarget * (pPct / 100)) / 4;
        const fatG = (calTarget * (fPct / 100)) / 9;
        const carbsG = (calTarget * (cPct / 100)) / 4;
        const fiberG = Math.round(Math.max(20, Math.min(40, w * 0.35)));

        planningOutputs['p-bmi'].textContent = h ? (w / Math.pow(h / 100, 2)).toFixed(1) : '—';
        planningOutputs['p-bmr'].textContent = bmr ? `${Math.round(bmr)} kcal` : '— kcal';
        planningOutputs['p-tdee'].textContent = tdee ? `${Math.round(tdee)} kcal` : '— kcal';
        planningOutputs['p-cal-target'].textContent = calTarget ? `${Math.round(calTarget)} kcal` : '— kcal';

        planningOutputs['p-protein-p'].textContent = `${pPct}%`;
        planningOutputs['p-fat-p'].textContent = `${fPct}%`;
        planningOutputs['p-carbs-p'].textContent = `${cPct}%`;

        planningOutputs['p-protein-g'].textContent = `${Math.round(proteinG)} g`;
        planningOutputs['p-fat-g'].textContent = `${Math.round(fatG)} g`;
        planningOutputs['p-carbs-g'].textContent = `${Math.round(carbsG)} g`;
        
        planningOutputs['p-protein-out'].textContent = `${Math.round(proteinG)} g`;
        planningOutputs['p-fat-out'].textContent = `${Math.round(fatG)} g`;
        planningOutputs['p-carbs-out'].textContent = `${Math.round(carbsG)} g`;
        planningOutputs['p-fiber-out'].textContent = `${fiberG} g`;

        planningOutputs['deliv-cal'].textContent = planningOutputs['p-cal-target'].textContent;
        planningOutputs['deliv-macros'].textContent = `${Math.round(proteinG)}g P • ${Math.round(carbsG)}g C • ${Math.round(fatG)}g F`;
        planningOutputs['deliv-notes'].textContent = pNotes || '—';
    }

    planningInputs.forEach(el => el?.addEventListener('input', computePlan));
    document.getElementById('p-recalc')?.addEventListener('click', computePlan);
    computePlan();


    // --- Meals Planner ---
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const mealDaysWrap = document.getElementById('meal-days');
    const mealDayTitle = document.getElementById('meal-day-title');
    const mealList = document.getElementById('meal-list');
    const mealAdd = document.getElementById('meal-add');
    const mealsData = Object.fromEntries(days.map(d => [d, []]));
    let currentDay = days[0];

    function renderDays() {
      mealDaysWrap.innerHTML = '';
      days.forEach(d => {
        const b = document.createElement('button');
        b.className = 'rounded-md px-2.5 py-1.5 text-sm transition-colors';
        const active = d === currentDay;
        b.style.cssText = active ? 'background:#c89143; color:#FFFFFF;' : 'border:1px solid rgba(90,82,76,0.1); background:#FFFFFF; color:#333333;';
        b.textContent = d.slice(0, 3);
        b.addEventListener('click', () => { currentDay = d; renderDays(); renderMeals(); });
        mealDaysWrap.appendChild(b);
      });
    }
    
    function renderMeals() {
        mealDayTitle.textContent = `Meals for ${currentDay}`;
        mealList.innerHTML = '';
        const list = mealsData[currentDay];
        if (!list.length) {
            mealList.innerHTML = `<p class="text-sm" style="color:#888888;">No meals added yet.</p>`;
            return;
        }
        list.forEach((m, i) => {
            const card = document.createElement('div');
            card.className = 'rounded-md p-3 flex items-start justify-between gap-3';
            card.style.cssText = 'background:#FAFAF7; border:1px solid rgba(90,82,76,0.1);';
            card.innerHTML = `
                <div>
                    <p class="text-sm font-medium" style="color:#333333;">${m.name}</p>
                    <p class="text-xs mt-0.5" style="color:#888888;">${m.cals} kcal • ${m.p}g P • ${m.c}g C • ${m.f}g F</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="rounded-md w-8 h-8 flex items-center justify-center" title="Duplicate" aria-label="Duplicate" style="border:1px solid rgba(90,82,76,0.1); background:#FFFFFF;"><i data-lucide="copy" class="h-4 w-4"></i></button>
                    <button class="rounded-md w-8 h-8 flex items-center justify-center" title="Remove" aria-label="Remove" style="border:1px solid rgba(90,82,76,0.1); background:#FFFFFF;"><i data-lucide="trash-2" class="h-4 w-4"></i></button>
                </div>`;
            const [dupBtn, delBtn] = card.querySelectorAll('button');
            dupBtn.addEventListener('click', () => { mealsData[currentDay].splice(i + 1, 0, {...m}); renderMeals(); });
            delBtn.addEventListener('click', () => { mealsData[currentDay].splice(i, 1); renderMeals(); });
            mealList.appendChild(card);
        });
        if (window.lucide) window.lucide.createIcons();
    }
    
    mealAdd.addEventListener('click', () => {
        const name = prompt('Meal name (e.g., Oats with fruit):');
        if (!name) return;
        const cals = parseInt(prompt('Calories:'), 10) || 0;
        const p = parseInt(prompt('Protein (g):'), 10) || 0;
        const c = parseInt(prompt('Carbs (g):'), 10) || 0;
        const f = parseInt(prompt('Fat (g):'), 10) || 0;
        mealsData[currentDay].push({ name, cals, p, c, f });
        renderMeals();
    });
    
    renderDays();
    renderMeals();

    // --- Recommendations ---
    const recInput = document.getElementById('rec-input');
    const recAdd = document.getElementById('rec-add');
    const recList = document.getElementById('rec-list');
    let recs = [];
    
    function renderRecs() {
        recList.innerHTML = '';
        if (!recs.length) {
            recList.innerHTML = `<li class="text-sm" style="color:#888888;">No recommendations yet.</li>`;
            return;
        }
        recs.forEach((r, i) => {
            const li = document.createElement('li');
            li.className = 'flex items-center justify-between gap-3 rounded-md p-2';
            li.style.cssText = 'background:#FAFAF7; border:1px solid rgba(90,82,76,0.1);';
            li.innerHTML = `
                <label class="flex items-center gap-2 flex-1">
                    <input type="checkbox" ${r.done ? 'checked' : ''} class="rounded" aria-label="Toggle done">
                    <span class="text-sm ${r.done ? 'line-through' : ''}" style="color:#333333;">${r.text}</span>
                </label>
                <button class="rounded-md w-8 h-8 flex items-center justify-center shrink-0" aria-label="Delete rec" style="border:1px solid rgba(90,82,76,0.1); background:#FFFFFF;"><i data-lucide="x" class="h-4 w-4"></i></button>`;
            li.querySelector('input').addEventListener('change', (e) => { recs[i].done = e.target.checked; renderRecs(); });
            li.querySelector('button').addEventListener('click', () => { recs.splice(i, 1); renderRecs(); });
            recList.appendChild(li);
        });
        if (window.lucide) window.lucide.createIcons();
    }
    
    recAdd.addEventListener('click', () => {
        let text = recInput?.value || '';
        if (!text) text = prompt('Recommendation:') || '';
        if (text.trim()) {
            recs.unshift({ text: text.trim(), done: false });
            if (recInput) recInput.value = '';
            renderRecs();
        }
    });
    renderRecs();
    
    // --- Analysis Flags ---
    const flagList = document.getElementById('flag-list');
    
    function computeFlags() {
        flagList.innerHTML = '';
        const lastWeight = records.filter(r => r.metric === 'weight').slice(-1)[0]?.value;
        const firstWeight = records.filter(r => r.metric === 'weight')[0]?.value;
        const change = lastWeight && firstWeight ? (lastWeight - firstWeight) : 0;
        const flags = [];
        if (change > 0.5) flags.push({ icon: 'alert-triangle', text: `Weight increased by ${change.toFixed(1)} kg` });
        if (records.some(r => r.metric === 'glucose' && r.value > 110)) flags.push({ icon: 'flask-round', text: 'Elevated fasting glucose' });
        if (!flags.length) flags.push({ icon: 'check', text: 'No risk flags detected' });
        flags.forEach(f => {
            const li = document.createElement('li');
            li.className = 'flex items-center gap-2';
            li.innerHTML = `<i data-lucide="${f.icon}" class="h-4 w-4" style="color:#c89143;"></i><span class="text-sm" style="color:#333333;">${f.text}</span>`;
            flagList.appendChild(li);
        });
        if (window.lucide) window.lucide.createIcons();
    }
    computeFlags();

    // --- Deliverables ---
    document.getElementById('dl-pdf')?.addEventListener('click', () => window.print());
    document.getElementById('copy-link')?.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard');
        } catch {
            alert('Failed to copy link');
        }
    });
    document.getElementById('export-json')?.addEventListener('click', () => {
        const [ pCalTarget, pProteinOut, pCarbsOut, pFatOut, pNotes ] = ['p-cal-target', 'p-protein-out', 'p-carbs-out', 'p-fat-out', 'p-notes'].map(id => document.getElementById(id));
        const data = {
            client: 'Example client',
            plan: {
                calories: pCalTarget.textContent,
                protein: pProteinOut.textContent,
                carbs: pCarbsOut.textContent,
                fat: pFatOut.textContent,
                notes: pNotes.value
            },
            measurements: records,
            recommendations: recs,
            meals: mealsData
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'client-plan.json';
        a.click();
        URL.revokeObjectURL(a.href);
    });
    
    // Set default date
    document.getElementById('m-date').value = new Date().toISOString().slice(0, 10);

  }, []); // The empty dependency array ensures this effect runs only once on mount.

  return (
    <div className="antialiased min-h-screen" style={{ backgroundColor: '#FAFAF7', color: '#333333', fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'" }}>
      {/* Fixed Top Navigation */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="w-full" style={{ height: '8px', background: 'linear-gradient(90deg, #f5f4f0, #ffffff)' }}></div>
        <div className="w-full backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90" style={{ borderBottom: '1px solid rgba(90, 82, 76, 0.1)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              {/* Left: Brand */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ backgroundColor: '#c89143', color: '#ffffff' }}>
                  <span className="text-sm font-semibold tracking-tight">AA</span>
                </div>
                <div className="hidden sm:flex items-center gap-6">
                  <span className="text-sm font-medium tracking-tight" style={{ color: '#333333' }}>AyuAahar</span>
                </div>
              </div>
              {/* Right: Actions */}
              <div className="flex items-center gap-3">
                <button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-[#a97b39]" style={{ backgroundColor: '#c89143', color: '#ffffff' }}>
                  <i data-lucide="plus" className="h-4 w-4"></i>
                  New
                </button>
                <button className="inline-flex items-center justify-center rounded-md w-9 h-9 md:hidden transition-colors" style={{ border: '1px solid rgba(90, 82, 76, 0.1)', backgroundColor: '#FFFFFF' }}>
                  <i data-lucide="menu" className="h-5 w-5" style={{ color: '#333333' }}></i>
                </button>
                <div className="hidden md:flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-colors" style={{ border: '1px solid rgba(90, 82, 76, 0.1)', backgroundColor: '#FFFFFF', color: '#333333' }}>
                    <i data-lucide="bell" className="h-4 w-4" style={{ color: '#888888' }}></i>
                    Alerts
                  </button>
                  <div className="h-8 w-8 rounded-full overflow-hidden ring-1" style={{ '--tw-ring-color': 'rgba(90, 82, 76, 0.1)' }}>
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop" alt="User avatar" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Page Header: Client */}
        <section className="rounded-lg p-4 sm:p-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90, 82, 76, 0.1)' }}>
          <div className="flex items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden ring-1" style={{ '--tw-ring-color': 'rgba(90, 82, 76, 0.1)' }}>
                <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="Client avatar" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: '#333333' }}>Example client</h1>
                <p className="text-sm mt-1" style={{ color: '#888888' }}>DOB: 1992-08-15 • ID: CL-000214</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="inline-flex items-center rounded px-2 py-0.5 text-xs" style={{ backgroundColor: '#FAFAF7', color: '#888888', border: '1px solid rgba(90,82,76,0.1)' }}>Active</span>
                  <span className="inline-flex items-center rounded px-2 py-0.5 text-xs" style={{ backgroundColor: '#FAFAF7', color: '#888888', border: '1px solid rgba(90,82,76,0.1)' }}>Premium</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors" title="Edit" style={{ border: '1px solid rgba(90,82,76,0.1)', backgroundColor: '#FFFFFF', color: '#333333' }}>
                <i data-lucide="pencil" className="h-4.5 w-4.5"></i>
              </button>
              <button className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors" title="Message" style={{ border: '1px solid rgba(90,82,76,0.1)', backgroundColor: '#FFFFFF', color: '#333333' }}>
                <i data-lucide="message-circle" className="h-4.5 w-4.5"></i>
              </button>
              <button className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors" title="Delete" style={{ border: '1px solid rgba(90,82,76,0.1)', backgroundColor: '#FFFFFF', color: '#333333' }}>
                <i data-lucide="trash-2" className="h-4.5 w-4.5"></i>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <div id="tabbar" className="flex gap-4 sm:gap-6 overflow-x-auto">
              <button data-tab="information" className="shrink-0 pb-3 text-sm font-medium tracking-tight border-b-2" style={{ color: '#333333', borderBottomColor: '#c89143' }}>Information</button>
              <button data-tab="measurements" className="shrink-0 pb-3 text-sm font-medium border-b-2" style={{ color: '#888888', borderBottomColor: 'transparent' }}>Measurements</button>
              <button data-tab="planning" className="shrink-0 pb-3 text-sm font-medium border-b-2" style={{ color: '#888888', borderBottomColor: 'transparent' }}>Planning</button>
              <button data-tab="meals" className="shrink-0 pb-3 text-sm font-medium border-b-2" style={{ color: '#888888', borderBottomColor: 'transparent' }}>Meals</button>
              <button data-tab="recommendations" className="shrink-0 pb-3 text-sm font-medium border-b-2" style={{ color: '#888888', borderBottomColor: 'transparent' }}>Recommendations</button>
              <button data-tab="analysis" className="shrink-0 pb-3 text-sm font-medium border-b-2" style={{ color: '#888888', borderBottomColor: 'transparent' }}>Analysis</button>
              <button data-tab="deliverables" className="shrink-0 pb-3 text-sm font-medium border-b-2" style={{ color: '#888888', borderBottomColor: 'transparent' }}>Deliverables</button>
            </div>
            <div className="w-full" style={{ borderBottom: '1px solid rgba(90, 82, 76, 0.1)' }}></div>
          </div>
        </section>

        {/* Panels */}
        <section id="panels" className="mt-6 space-y-6">
          {/* Information */}
          <div data-panel="information">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Accordions */}
              <div className="lg:col-span-2 space-y-4">
                {/* Consultation Details */}
                <div className="rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <button data-acc-btn className="w-full flex items-center justify-between px-4 sm:px-5 py-3">
                    <div className="flex items-center gap-2">
                      <i data-lucide="calendar-check" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                      <h3 className="text-base font-medium tracking-tight" style={{ color: '#333333' }}>Consultation Details</h3>
                    </div>
                    <i data-lucide="chevron-down" className="h-5 w-5 transition-transform"></i>
                  </button>
                  <div data-acc-panel className="px-4 sm:px-5 pb-4 space-y-4">
                    <div>
                      <label className="block text-sm mb-1" style={{ color: '#888888' }}>Reason for appointment</label>
                      <textarea className="w-full rounded-md px-3 py-2 text-sm" rows="3" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} placeholder="Describe the main reason"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm mb-1" style={{ color: '#888888' }}>Expectations</label>
                      <textarea className="w-full rounded-md px-3 py-2 text-sm" rows="3" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} placeholder="What outcomes are expected?"></textarea>
                    </div>
                  </div>
                </div>
                {/* Personal and social history */}
                <div className="rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <button data-acc-btn className="w-full flex items-center justify-between px-4 sm:px-5 py-3">
                    <div className="flex items-center gap-2">
                      <i data-lucide="users" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                      <h3 className="text-base font-medium tracking-tight" style={{ color: '#333333' }}>Personal and social history</h3>
                    </div>
                    <i data-lucide="chevron-down" className="h-5 w-5 transition-transform"></i>
                  </button>
                  <div data-acc-panel className="px-4 sm:px-5 pb-4 space-y-4 hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Bowel movements</label>
                        <select className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }}>
                          <option>Regular</option>
                          <option>Constipation</option>
                          <option>Diarrhea</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Sleep quality</label>
                        <select className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }}>
                          <option>Good</option>
                          <option>Average</option>
                          <option>Poor</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Smoker</label>
                        <select className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }}>
                          <option>No</option>
                          <option>Yes</option>
                          <option>Former</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Alcohol consumption</label>
                        <select className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }}>
                          <option>None</option>
                          <option>Social</option>
                          <option>Frequent</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Marital status</label>
                        <select className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }}>
                          <option>Single</option>
                          <option>Married</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Physical activity</label>
                        <input type="text" className="w-full rounded-md px-3 py-2 text-sm" placeholder="e.g., 3x/week gym" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Medical history */}
                <div className="rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <button data-acc-btn className="w-full flex items-center justify-between px-4 sm:px-5 py-3">
                    <div className="flex items-center gap-2">
                      <i data-lucide="stethoscope" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                      <h3 className="text-base font-medium tracking-tight" style={{ color: '#333333' }}>Medical history</h3>
                    </div>
                    <i data-lucide="chevron-down" className="h-5 w-5 transition-transform"></i>
                  </button>
                  <div data-acc-panel className="px-4 sm:px-5 pb-4 space-y-4 hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Diseases</label>
                        <input type="text" className="w-full rounded-md px-3 py-2 text-sm" placeholder="e.g., Hypertension" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Medication</label>
                        <input type="text" className="w-full rounded-md px-3 py-2 text-sm" placeholder="e.g., Metformin" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Personal history</label>
                        <textarea className="w-full rounded-md px-3 py-2 text-sm" rows="3" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} placeholder="Personal medical history"></textarea>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Family history</label>
                        <textarea className="w-full rounded-md px-3 py-2 text-sm" rows="3" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} placeholder="Relevant family history"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dietary history */}
                <div className="rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <button data-acc-btn className="w-full flex items-center justify-between px-4 sm:px-5 py-3">
                    <div className="flex items-center gap-2">
                      <i data-lucide="utensils" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                      <h3 className="text-base font-medium tracking-tight" style={{ color: '#333333' }}>Dietary history</h3>
                    </div>
                    <i data-lucide="chevron-down" className="h-5 w-5 transition-transform"></i>
                  </button>
                  <div data-acc-panel className="px-4 sm:px-5 pb-4 space-y-4 hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Wake-up time</label>
                        <input type="time" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Bedtime</label>
                        <input type="time" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Types of diet</label>
                        <input type="text" className="w-full rounded-md px-3 py-2 text-sm" placeholder="e.g., vegetarian, gluten-free" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Favorite food</label>
                        <input type="text" className="w-full rounded-md px-3 py-2 text-sm" placeholder="e.g., Paneer tikka" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Allergies</label>
                        <input type="text" className="w-full rounded-md px-3 py-2 text-sm" placeholder="e.g., Peanuts" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                      <div>
                        <label className="block text-sm mb-1" style={{ color: '#888888' }}>Water intake (L/day)</label>
                        <input type="number" step="0.1" className="w-full rounded-md px-3 py-2 text-sm" placeholder="e.g., 2.5" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Running Log & Files */}
              <div className="space-y-4">
                {/* Observations */}
                <div className="rounded-lg p-4" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium tracking-tight" style={{ color: '#333333' }}>Observations</h4>
                    <button id="obs-add" className="inline-flex items-center gap-1 text-xs rounded-md px-2 py-1 transition-colors" style={{ border: '1px solid rgba(90,82,76,0.1)', background: '#FFFFFF', color: '#333333' }}>
                      <i data-lucide="plus" className="h-3.5 w-3.5"></i> New Entry
                    </button>
                  </div>
                  <div id="obs-list" className="mt-2 space-y-2">
                    {/* Populated by JS */}
                  </div>
                </div>
                {/* Files */}
                <div className="rounded-lg p-4" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium tracking-tight" style={{ color: '#333333' }}>File Uploads</h4>
                    <div className="flex items-center gap-2">
                      <input id="file-input" type="file" multiple className="hidden" />
                      <button id="file-btn" className="inline-flex items-center gap-1 text-xs rounded-md px-2 py-1 transition-colors" style={{ border: '1px solid rgba(90,82,76,0.1)', background: '#FFFFFF', color: '#333333' }}>
                        <i data-lucide="upload" className="h-3.5 w-3.5"></i> Upload
                      </button>
                    </div>
                  </div>
                  <ul id="file-list" className="mt-2 space-y-2">
                    {/* Populated by JS */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Measurements */}
          <div data-panel="measurements" className="hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Metrics List */}
              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <div className="flex items-center gap-2">
                    <i data-lucide="activity" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                    <h3 className="text-sm font-medium tracking-tight">Body Composition</h3>
                  </div>
                  <div id="metric-list-body" className="mt-3 grid grid-cols-2 gap-2">
                    {/* Metrics inserted by JS */}
                  </div>
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <div className="flex items-center gap-2">
                    <i data-lucide="flask-round" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                    <h3 className="text-sm font-medium tracking-tight">Blood Work</h3>
                  </div>
                  <div id="metric-list-blood" className="mt-3 grid grid-cols-2 gap-2">
                    {/* Metrics inserted by JS */}
                  </div>
                </div>
              </div>
              {/* Right: Actions & charts */}
              <div className="lg:col-span-2 space-y-4">
                {/* Record form */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h3 className="text-sm font-medium tracking-tight">Record Measurement</h3>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-3">
                    <select id="m-metric" className="rounded-md px-3 py-2 text-sm col-span-2 sm:col-span-2" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }}></select>
                    <input id="m-date" type="date" className="rounded-md px-3 py-2 text-sm col-span-2 sm:col-span-1" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                    <input id="m-value" type="number" step="0.01" placeholder="Value" className="rounded-md px-3 py-2 text-sm col-span-2 sm:col-span-1" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }} />
                    <select id="m-source" className="rounded-md px-3 py-2 text-sm col-span-2 sm:col-span-1" style={{ background: '#FFFFFF', color: '#333333', border: '1px solid rgba(90,82,76,0.1)' }}>
                      <option value="practitioner">Practitioner</option>
                      <option value="client">Client</option>
                    </select>
                    <button id="m-register" className="rounded-md px-3.5 py-2 text-sm font-medium col-span-2 sm:col-span-1 hover:bg-[#a97b39]" style={{ background: '#c89143', color: '#FFFFFF' }}>
                      Add
                    </button>
                  </div>
                  <p id="m-unit-hint" className="text-xs mt-2" style={{ color: '#888888' }}>Unit: —</p>
                </div>

                {/* Chart */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <div className="flex items-center justify-between">
                    <h3 id="m-chart-title" className="text-sm font-medium tracking-tight">Progress</h3>
                    <span id="m-chart-sub" className="text-xs" style={{ color: '#888888' }}>Select a metric</span>
                  </div>
                  <div className="mt-3 h-64">
                    <canvas id="progressChart"></canvas>
                  </div>
                </div>

                {/* Data Table */}
                <div className="rounded-lg p-4 overflow-x-auto" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h3 className="text-sm font-medium tracking-tight">Data Table</h3>
                  <table className="min-w-full text-sm mt-3">
                    <thead>
                      <tr className="text-left" style={{ color: '#888888' }}>
                        <th className="py-2 pr-4">Date</th>
                        <th className="py-2 pr-4">Metric</th>
                        <th className="py-2 pr-4">Value</th>
                        <th className="py-2 pr-4">Unit</th>
                        <th className="py-2 pr-0">Source</th>
                      </tr>
                    </thead>
                    <tbody id="m-table" style={{ color: '#333333' }}>
                      {/* Rows via JS */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* ... Other Panels ... */}

           {/* Planning */}
          <div data-panel="planning" className="hidden">
            <div className="space-y-4">
              {/* Core Data */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                <h3 className="text-sm font-medium tracking-tight">Core Data</h3>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Weight (kg)</label>
                    <input id="p-weight" type="number" step="0.1" defaultValue="72.5" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Goal Weight (kg)</label>
                    <input id="p-goal" type="number" step="0.1" defaultValue="68" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Height (cm)</label>
                    <input id="p-height" type="number" step="0.1" defaultValue="173" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Age (y)</label>
                    <input id="p-age" type="number" defaultValue="33" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Sex</label>
                    <select id="p-sex" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Activity level</label>
                    <select id="p-activity" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }} defaultValue="1.55">
                      <option value="1.2">Sedentary (little or no exercise)</option>
                      <option value="1.375">Lightly active (1–3 days/week)</option>
                      <option value="1.55">Moderately active (3–5 days/week)</option>
                      <option value="1.725">Very active (6–7 days/week)</option>
                      <option value="1.9">Extra active (athlete)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Goal</label>
                    <select id="p-goal-type" className="w-full rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }} defaultValue="maintain">
                      <option value="loss">Fat loss (−15%)</option>
                      <option value="maintain">Maintenance (0%)</option>
                      <option value="gain">Muscle gain (+10%)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-md p-3" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-xs" style={{ color: '#888888' }}>BMI</p>
                    <p id="p-bmi" className="text-lg font-semibold tracking-tight" style={{ color: '#333333' }}>—</p>
                  </div>
                  <div className="rounded-md p-3" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-xs" style={{ color: '#888888' }}>BMR</p>
                    <p id="p-bmr" className="text-lg font-semibold tracking-tight" style={{ color: '#333333' }}>— kcal</p>
                  </div>
                  <div className="rounded-md p-3" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-xs" style={{ color: '#888888' }}>TDEE</p>
                    <p id="p-tdee" className="text-lg font-semibold tracking-tight" style={{ color: '#333333' }}>— kcal</p>
                  </div>
                  <div className="rounded-md p-3" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-xs" style={{ color: '#888888' }}>Daily Target</p>
                    <p id="p-cal-target" className="text-lg font-semibold tracking-tight" style={{ color: '#333333' }}>— kcal</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <button id="p-recalc" className="rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-[#a97b39]" style={{ background: '#c89143', color: '#FFFFFF' }}>
                    Recalculate
                  </button>
                </div>
              </div>
              {/* Macro Targets */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium tracking-tight">Macro Targets</h3>
                  <span className="text-xs" style={{ color: '#888888' }}>Adjust distribution, totals must equal 100%</span>
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Protein (%)</label>
                    <input id="p-protein" type="range" min="10" max="50" defaultValue="25" className="w-full" />
                    <div className="flex items-center justify-between mt-1 text-xs">
                      <span id="p-protein-p" style={{ color: '#333333' }}>25%</span>
                      <span id="p-protein-g" style={{ color: '#888888' }}>— g</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Fat (%)</label>
                    <input id="p-fat" type="range" min="15" max="40" defaultValue="30" className="w-full" />
                    <div className="flex items-center justify-between mt-1 text-xs">
                      <span id="p-fat-p" style={{ color: '#333333' }}>30%</span>
                      <span id="p-fat-g" style={{ color: '#888888' }}>— g</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs mb-1" style={{ color: '#888888' }}>Carbs (%)</label>
                    <div className="rounded-md px-3 py-2 text-sm flex items-center justify-between" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                      <span id="p-carbs-p" className="font-medium">45%</span>
                      <span id="p-carbs-g" className="text-xs" style={{ color: '#888888' }}>— g</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-md p-3 text-center" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-[11px]" style={{ color: '#888888' }}>Protein</p>
                    <p id="p-protein-out" className="text-base font-semibold" style={{ color: '#333333' }}>— g</p>
                  </div>
                  <div className="rounded-md p-3 text-center" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-[11px]" style={{ color: '#888888' }}>Fat</p>
                    <p id="p-fat-out" className="text-base font-semibold" style={{ color: '#333333' }}>— g</p>
                  </div>
                  <div className="rounded-md p-3 text-center" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-[11px]" style={{ color: '#888888' }}>Carbs</p>
                    <p id="p-carbs-out" className="text-base font-semibold" style={{ color: '#333333' }}>— g</p>
                  </div>
                  <div className="rounded-md p-3 text-center" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                    <p className="text-[11px]" style={{ color: '#888888' }}>Fiber (est.)</p>
                    <p id="p-fiber-out" className="text-base font-semibold" style={{ color: '#333333' }}>— g</p>
                  </div>
                </div>
              </div>
              {/* Plan Notes */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                <div className="flex items-center gap-2">
                  <i data-lucide="target" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                  <h3 className="text-sm font-medium tracking-tight">Plan Notes</h3>
                </div>
                <textarea id="p-notes" rows="3" placeholder="Coaching notes, constraints, cultural preferences..." className="w-full mt-3 rounded-md px-3 py-2 text-sm" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}></textarea>
                <div className="mt-3 flex items-center justify-end gap-2">
                  <button id="p-save" className="rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-[#a97b39]" style={{ background: '#c89143', color: '#FFFFFF' }}>Save Plan</button>
                </div>
              </div>
            </div>
          </div>
          {/* Meals */}
          <div data-panel="meals" className="hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Day Selector */}
              <div className="rounded-lg p-4 h-max" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                <div className="flex items-center gap-2">
                  <i data-lucide="calendar-range" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                  <h3 className="text-sm font-medium tracking-tight">Week Planner</h3>
                </div>
                <div id="meal-days" className="mt-3 grid grid-cols-3 gap-2">
                  {/* days via JS */}
                </div>
              </div>
              {/* Meals List */}
              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <i data-lucide="utensils" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                      <h3 id="meal-day-title" className="text-sm font-medium tracking-tight">Meals for Monday</h3>
                    </div>
                    <button id="meal-add" className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#a97b39]" style={{ background: '#c89143', color: '#FFFFFF' }}>
                      <i data-lucide="plus" className="h-4 w-4"></i> Add meal
                    </button>
                  </div>
                  <div id="meal-list" className="mt-3 space-y-3">
                    {/* meal cards */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recommendations */}
          <div data-panel="recommendations" className="hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i data-lucide="list-checks" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                    <h3 className="text-sm font-medium tracking-tight">Recommendations</h3>
                  </div>
                  <div className="flex gap-2">
                    <input id="rec-input" type="text" placeholder="Add a recommendation..." className="rounded-md px-3 py-2 text-sm w-56 hidden sm:block" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }} />
                    <button id="rec-add" className="rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-[#a97b39]" style={{ background: '#c89143', color: '#FFFFFF' }}>Add</button>
                  </div>
                </div>
                <ul id="rec-list" className="mt-3 space-y-2">
                  <li className="text-sm" style={{ color: '#888888' }}>No recommendations yet.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h4 className="text-sm font-medium tracking-tight">Lifestyle Focus</h4>
                  <ul className="mt-2 text-sm space-y-1" style={{ color: '#333333' }}>
                    <li className="flex items-center gap-2"><i data-lucide="moon" className="h-4 w-4" style={{ color: '#c89143' }}></i> 7–8 hours sleep</li>
                    <li className="flex items-center gap-2"><i data-lucide="droplets" className="h-4 w-4" style={{ color: '#c89143' }}></i> 2–3 L water</li>
                    <li className="flex items-center gap-2"><i data-lucide="dumbbell" className="h-4 w-4" style={{ color: '#c89143' }}></i> 2–3 strength sessions</li>
                    <li className="flex items-center gap-2"><i data-lucide="leaf" className="h-4 w-4" style={{ color: '#c89143' }}></i> Whole foods emphasis</li>
                  </ul>
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h4 className="text-sm font-medium tracking-tight">Supplements (optional)</h4>
                  <div className="mt-2 space-y-2 text-sm">
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" aria-label="Omega-3" /> Omega-3 (1–2 g/day)</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" aria-label="Vitamin D3" /> Vitamin D3 (2000 IU)</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" aria-label="Probiotic" /> Probiotic (CFU 10B)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Analysis */}
          <div data-panel="analysis" className="hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-lg p-4 lg:col-span-2" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i data-lucide="chart-line" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                    <h3 className="text-sm font-medium tracking-tight">Weight Trend</h3>
                  </div>
                  <span className="text-xs" style={{ color: '#888888' }}>Last 8 entries</span>
                </div>
                <div className="mt-3 h-64">
                  <canvas id="trendChart"></canvas>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h4 className="text-sm font-medium tracking-tight">Compliance</h4>
                  <div className="mt-3 h-44">
                    <canvas id="complianceChart"></canvas>
                  </div>
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h4 className="text-sm font-medium tracking-tight">Flags</h4>
                  <ul id="flag-list" className="mt-2 text-sm space-y-1">
                    {/* flags via JS */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Deliverables */}
          <div data-panel="deliverables" className="hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i data-lucide="files" className="h-4.5 w-4.5" style={{ color: '#c89143' }}></i>
                    <h3 className="text-sm font-medium tracking-tight">Export & Share</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button id="dl-pdf" className="rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-[#a97b39]" style={{ background: '#c89143', color: '#FFFFFF' }}>
                      Print / PDF
                    </button>
                    <button id="copy-link" className="rounded-md px-3.5 py-2 text-sm font-medium transition-colors" style={{ border: '1px solid rgba(90,82,76,0.1)', background: '#FFFFFF', color: '#333333' }}>
                      Copy share link
                    </button>
                    <button id="export-json" className="rounded-md px-3.5 py-2 text-sm font-medium transition-colors" style={{ border: '1px solid rgba(90,82,76,0.1)', background: '#FFFFFF', color: '#333333' }}>
                      Export JSON
                    </button>
                  </div>
                </div>
                <div className="mt-3 rounded-md p-4" style={{ background: '#FAFAF7', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h4 className="text-sm font-medium tracking-tight">Preview</h4>
                  <p className="text-sm mt-1" style={{ color: '#888888' }}>Use the controls above to generate a print-friendly document or export structured data.</p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded p-3" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                      <p className="text-xs" style={{ color: '#888888' }}>Client</p>
                      <p className="text-sm font-medium">Example client</p>
                    </div>
                    <div className="rounded p-3" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                      <p className="text-xs" style={{ color: '#888888' }}>Calories</p>
                      <p id="deliv-cal" className="text-sm font-medium">— kcal</p>
                    </div>
                    <div className="rounded p-3" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                      <p className="text-xs" style={{ color: '#888888' }}>Macros</p>
                      <p id="deliv-macros" className="text-sm font-medium">—</p>
                    </div>
                    <div className="rounded p-3" style={{ background: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                      <p className="text-xs" style={{ color: '#888888' }}>Notes</p>
                      <p id="deliv-notes" className="text-sm">—</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h4 className="text-sm font-medium tracking-tight">Branding</h4>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#c89143', color: '#ffffff' }}>
                      <span className="text-sm font-semibold">AA</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">AyuAahar</p>
                      <p className="text-xs" style={{ color: '#888888' }}>Client-friendly report</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(90,82,76,0.1)' }}>
                  <h4 className="text-sm font-medium tracking-tight">Tips</h4>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1" style={{ color: '#333333' }}>
                    <li>Keep meals culturally aligned</li>
                    <li>Use simple, available ingredients</li>
                    <li>Plan around schedule and preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </section>
      </main>
    </div>
  );
};

export default ClientProfilePage;