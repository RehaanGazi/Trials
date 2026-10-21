/* WDC Study Lab — vanilla JavaScript, runs offline without dependencies. */
(() => {
 'use strict';
 const QUESTIONS = Array.isArray(window.WDC_QUESTIONS) ? window.WDC_QUESTIONS : (typeof WDC_QUESTIONS !== 'undefined' ? WDC_QUESTIONS : []);
 if (!QUESTIONS.length) { document.body.insertAdjacentHTML('afterbegin','<p style="padding:30px;color:#fff">Question bank missing. Keep questions.js in the same folder as index.html.</p>'); return; }
 const UNIT_META = [
   ['Internet & Web','#77cce8','How the web actually works'],
   ['Web Design','#a6d69b','Planning and interface principles'],
   ['HTML','#d5b4f0','Structure, forms and tables'],
   ['HTML5','#f0c885','Modern elements and APIs'],
   ['CSS','#7eaae6','Selectors, styles and transforms'],
   ['JavaScript','#f1a7a5','Logic, functions and loops']
 ];
 const FOCUS_CONFIG = window.WDC_FOCUSED || {sections:[],extra:[]};
 const FOCUS_SECTIONS = FOCUS_CONFIG.sections;
 const Q_BY_ID = new Map(QUESTIONS.map(q=>[q.id,q]));
 const FOCUS_EXTRA = FOCUS_CONFIG.extra;
 const extraBySection = new Map(FOCUS_SECTIONS.map(s=>[s.key,FOCUS_EXTRA.filter(q=>q.section===s.key)]));
 const FOCO = [];
 for (const s of FOCUS_SECTIONS) {
   for(const id of s.ids) { const q=Q_BY_ID.get(id);if(q&&!FOCO.some(o=>o.id===id))FOCO.push({...q,kind:'Theory'}); }
   for(const q of extraBySection.get(s.key) || []) FOCO.push(q);
 }
 const allTopics = [...new Set(QUESTIONS.map(q=>q.topic))];
 const STORAGE_KEY = 'wdc-study-lab-progress-v1';
 const $ = id=>document.getElementById(id);
 const safe = s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let progress = {};
 try { const obj=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); if(obj&&typeof obj==='object'&&!Array.isArray(obj)) progress=obj; } catch(e) { /* private browsing */ }
 let view='study', selectedUnit='all', studyTopic='all', studyScope='all', shuffled=false, shuffledIndex={}, studyIndex=0, revealed=false, draft='';
 let librarySearch='', libraryUnit='all', libraryOffset=0; const expanded=new Set();
 let exam=null, toastTimer=null;
 let focusTopic='all',focusGroup='all',focusStatus='all',focusFormat='all',focusIndex=0,focusRevealed=false,focusDraft='';
 function count(unit){return QUESTIONS.filter(q=>unit==='all'||q.unit===unit).length;}
 function getRec(id){ return progress[id]||{}; }
 function save(){try {localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));} catch(e){notify('Browser storage is unavailable. Export your progress to keep it.');} updateStats();renderFocusStats();}
 function setRec(id,patch){progress[id]={...getRec(id),...patch,updatedAt:Date.now()};save();}
 function notify(message){const t=$('toast');t.textContent=message;t.classList.add('on');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('on'),3000);}
 function updateStats(){
   const recs=QUESTIONS.map(q=>getRec(q.id));const attempted=recs.filter(r=>r.attempts>0).length;const mastered=recs.filter(r=>r.rating==='easy').length;const weak=recs.filter(r=>r.rating==='again').length;
   $('totalQuestions').textContent=QUESTIONS.length;$('seenQuestions').innerHTML=attempted+' <small>/ '+QUESTIONS.length+'</small>';$('masteredQuestions').textContent=mastered;$('weakQuestions').textContent=weak;$('seenBar').style.width=100*attempted/QUESTIONS.length+'%';$('navTotal').textContent=QUESTIONS.length;
   renderUnitNav();renderUnitCards();
 }
 function renderUnitNav(){
   $('unitNav').innerHTML=`<button class="${selectedUnit==='all'?'active':''}" data-unit="all"><span class="unit-pip" style="--unitColor:#a2dde9"></span>All units<span class="unit-mini-count">${QUESTIONS.length}</span></button>`+UNIT_META.map(([name,color])=>`<button class="${selectedUnit===name?'active':''}" data-unit="${safe(name)}"><span class="unit-pip" style="--unitColor:${color}"></span>${safe(name)}<span class="unit-mini-count">${count(name)}</span></button>`).join('');
 }
 function renderUnitCards(){
   const box=$('unitCards');if(!box)return;
   box.innerHTML=UNIT_META.map(([name,color,desc])=>{const arr=QUESTIONS.filter(q=>q.unit===name);const done=arr.filter(q=>getRec(q.id).attempts>0).length;return `<button class="unit-card ${selectedUnit===name?'active':''}" data-unit="${safe(name)}"><span class="strip" style="--unitColor:${color}"></span><span><b>${safe(name)}</b><small>${safe(desc)} · ${done}/${arr.length} done</small></span><span class="count">${arr.length} ↗</span></button>`;}).join('');
 }
 function setView(next){view=next;for(const name of ['study','library','exam','focused']){$(name+'View').classList.toggle('hidden',name!==next);}document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('selected',b.dataset.view===next));$('sidebar').classList.remove('open');if(next==='study')renderStudy();if(next==='library')renderLibrary();if(next==='exam')renderExam();if(next==='focused')renderFocused();window.scrollTo({top:Math.max(0,$('hero').offsetTop+210),behavior:'smooth'});}
 function selectUnit(unit){selectedUnit=unit;studyTopic='all';studyIndex=0;revealed=false;draft='';$('scopeFilter').value=studyScope;renderTopicSelect();renderUnitNav();renderUnitCards();setView('study');}
 function renderTopicSelect(){const topics=[...new Set(QUESTIONS.filter(q=>selectedUnit==='all'||q.unit===selectedUnit).map(q=>q.topic))];if(!topics.includes(studyTopic))studyTopic='all';$('topicFilter').innerHTML='<option value="all">All topics</option>'+topics.map(t=>`<option value="${safe(t)}" ${t===studyTopic?'selected':''}>${safe(t)}</option>`).join('');}
 function pool(){let arr=QUESTIONS.filter(q=>(selectedUnit==='all'||q.unit===selectedUnit)&&(studyTopic==='all'||q.topic===studyTopic));const now=Date.now();if(studyScope==='unseen')arr=arr.filter(q=>!getRec(q.id).attempts);if(studyScope==='weak')arr=arr.filter(q=>getRec(q.id).rating==='again');if(studyScope==='starred')arr=arr.filter(q=>getRec(q.id).starred);if(studyScope==='due')arr=arr.filter(q=>getRec(q.id).nextReview!=null&&getRec(q.id).nextReview<=now);if(shuffled){for(const q of arr){if(shuffledIndex[q.id]===undefined)shuffledIndex[q.id]=Math.random();}arr.sort((a,b)=>shuffledIndex[a.id]-shuffledIndex[b.id]);}return arr;}
 function studyCardMarkup(q,idx,total){const rec=getRec(q.id);return `<article class="question-card"><div class="q-top"><span class="q-number">QUESTION ${String(idx+1).padStart(3,'0')} / ${String(total).padStart(3,'0')} <span style="color:#668fa5">· ${safe(q.unit)}</span></span><div class="q-actions"><button class="icon-btn ${rec.starred?'active':''}" title="${rec.starred?'Remove bookmark':'Bookmark question'}" aria-label="Bookmark question" id="starQuestion">${rec.starred?'★':'☆'}</button></div></div><span class="topic-pill">${safe(q.topic.toUpperCase())}</span><h3>${safe(q.q)}</h3><div class="thinking">Think it through first. No need for perfect wording.</div><textarea class="answer-draft" id="draftAnswer" placeholder="Type a few points from memory (optional). Answers are not auto-graded." aria-label="Write your answer before revealing">${safe(draft)}</textarea>${revealed?`<div class="answer-panel" id="answerPanel"><h4>THE SIMPLE ANSWER</h4><div class="answer-text">${safe(q.a)}</div>${q.example?`<div class="example-wrap"><div class="example-title">EXAMPLE / MEMORY HOOK <button class="copy-mini" id="copyAnswer">COPY ANSWER</button></div><div class="example-text">${safe(q.example)}</div></div>`:''}</div><div class="grade-row"><span class="grade-text">How did you do?</span><button class="grade-btn again" data-grade="again">1 · Needs work</button><button class="grade-btn good" data-grade="good">2 · Got it</button><button class="grade-btn easy" data-grade="easy">3 · Mastered</button></div>`:''}<div class="q-bottom"><div class="source"><strong>FROM YOUR NOTES</strong><br>${safe(q.source)} · ${safe(q.page)}</div>${revealed?'<button class="control-btn" id="hideAnswer">Hide answer ↑</button>':'<button class="reveal-btn" id="revealAnswer">Reveal answer ↗</button>'}</div></article>`;}
 function renderStudy(){const arr=pool();if(studyIndex>=arr.length)studyIndex=Math.max(0,arr.length-1);const host=$('studyCard');$('prevBtn').disabled=studyIndex<=0||!arr.length;$('nextBtn').disabled=studyIndex>=arr.length-1||!arr.length;if(!arr.length){let detail=studyScope==='weak'?'No weak questions here yet. Mark questions “Needs work” to collect them.':studyScope==='due'?'Nothing is due right now. Questions will appear after their review interval.':studyScope==='starred'?'No bookmarks in this filter yet. Star a question to find it here.':'No questions match your filters.';host.innerHTML=`<div class="empty-state"><div style="font-size:37px">✓</div><h3>All clear for now</h3><p>${detail}</p><button id="resetStudyFilters" class="primary-btn">Show all questions →</button></div>`;return;}host.innerHTML=studyCardMarkup(arr[studyIndex],studyIndex,arr.length);}
 function changeQuestion(step){const arr=pool();const next=studyIndex+step;if(next<0||next>=arr.length)return;studyIndex=next;revealed=false;draft='';renderStudy();}
 function gradeCurrent(rating){const arr=pool();const q=arr[studyIndex];if(!q)return;const rec=getRec(q.id);const now=Date.now();const msDay=86400000;setRec(q.id,{rating,attempts:(rec.attempts||0)+1,nextReview:rating==='again'?now:now+msDay*(rating==='good'?1:4)});
    const nextArr=pool();
    if (!nextArr.length) studyIndex=0;
    else if (nextArr.some(item=>item.id===q.id)) studyIndex=(studyIndex+1)%nextArr.length; // Move on when graded question still matches filter.
    else studyIndex=Math.min(studyIndex,nextArr.length-1); // Removed from 'unseen' or 'weak': next item takes its place.
    revealed=false;draft='';notify(rating==='again'?'Saved for revision. You’ll get it next time.':rating==='good'?'Good — scheduled for tomorrow.':'Mastered — nice work.');renderStudy(); }
 function renderLibrary(){const term=librarySearch.trim().toLowerCase();let arr=QUESTIONS.filter(q=>(libraryUnit==='all'||q.unit===libraryUnit)&&(!term||[q.q,q.a,q.topic,q.unit,q.source,q.example].some(t=>String(t).toLowerCase().includes(term))));$('bankCount').textContent=arr.length+' QUESTIONS';const shown=arr.slice(0,libraryOffset+25);$('libraryResults').innerHTML=shown.length?shown.map(q=>{const ex=expanded.has(q.id);return `<div class="bank-item"><button class="bank-summary" data-expand="${q.id}" aria-expanded="${ex}"><span class="bank-index">#${q.id.slice(1)}</span><span class="bank-item-title">${safe(q.q)}</span><span class="bank-topic">${safe(q.topic)}</span><span class="bank-chevron">${ex?'−':'+'}</span></button>${ex?`<div class="bank-answer"><div class="answer-text">${safe(q.a)}</div>${q.example?`<div class="example-wrap"><div class="example-title">EXAMPLE / MEMORY HOOK</div><div class="example-text">${safe(q.example)}</div></div>`:''}<div class="bank-source">SOURCE: ${safe(q.source)} · ${safe(q.page)}</div><div class="bank-footer-actions"><button class="control-btn" data-jump="${q.id}">Practice this question →</button><button class="control-btn" data-star="${q.id}">${getRec(q.id).starred?'★ Bookmarked':'☆ Bookmark'}</button></div></div>`:''}</div>`;}).join(''):'<div class="empty-state">No matching questions. Try a broader search.</div>';$('libraryFooter').innerHTML=arr.length>shown.length?`<button class="control-btn" id="loadMore">Show 25 more · ${arr.length-shown.length} remaining ↓</button>`:`<span style="font:11px monospace;color:#7894a7">SHOWING ${shown.length} / ${arr.length}</span>`;}
 function randSample(arr,n){let clone=arr.slice();for(let i=clone.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[clone[i],clone[j]]=[clone[j],clone[i]];}return clone.slice(0,Math.min(n,clone.length));}
 function examSetup(){return `<div class="exam-setup"><h3>Build your practice paper</h3><p>All questions are short or long-answer theory prompts from your six files. You write an answer, reveal a clear model answer, and decide whether you knew it. No fake AI grading and no tricky MCQ guessing.</p><div class="exam-grid"><label>QUESTIONS<select id="examCount"><option value="10">10 questions · quick run</option><option value="20" selected>20 questions · standard</option><option value="30">30 questions · deep practice</option><option value="50">50 questions · marathon</option></select></label><label>UNIT<select id="examUnit"><option value="all">All 6 units</option>${UNIT_META.map(u=>`<option value="${safe(u[0])}" ${selectedUnit===u[0]?'selected':''}>${safe(u[0])}</option>`).join('')}</select></label></div><button class="primary-btn" id="beginExam">Generate mock paper ↗</button></div>`;}
 function renderExam(){const host=$('examHost');if(!exam){host.innerHTML=examSetup();return;}if(exam.index>=exam.questions.length){const total=exam.questions.length,correct=exam.scores.filter(v=>v===2).length,partial=exam.scores.filter(v=>v===1).length,weak=exam.scores.filter(v=>v===0).length,score=Math.round(100*(correct+partial*.5)/total);host.innerHTML=`<div class="exam-result"><div class="eyebrow">PAPER COMPLETE / RESULT</div><h3>You made it through ${total} questions.</h3><div class="result-score">${score}<span style="font-size:25px">%</span></div><p style="color:#96bbcc">Recall score based on your own self-assessment. Partial answers count as half-credit.</p><div class="result-detail"><div><b>${correct}</b><small>Correct</small></div><div><b>${partial}</b><small>Partially correct</small></div><div><b>${weak}</b><small>Needs work</small></div></div><button class="primary-btn" id="restartExam">${exam.focused?"New focused paper":"New practice paper"} ↗</button><button class="control-btn" id="reviewWeakExam" style="margin-left:8px">Practice weak questions →</button>${exam.focused?'<button class="control-btn" id="returnFocused">← Focused mode</button>':''}</div>`;return;}
 const i=exam.index,q=exam.questions[i],compared=!!exam.compared;host.innerHTML=`<div class="exam-paper"><div class="exam-top"><span>QUESTION ${String(i+1).padStart(2,'0')} / ${exam.questions.length}</span><span>${exam.focused?"TEACHER FOCUS · ":"SELF-ASSESSED · "}${safe(q.unit)}</span></div><div class="exam-progress"><div style="width:${100*i/exam.questions.length}%"></div></div><span class="topic-pill">${safe(q.topic.toUpperCase())}</span><h3>${safe(q.q)}</h3><p style="color:#a3baca;font-size:12px">Write what you remember. You can use bullet points.</p><textarea class="exam-answer" id="examAnswer" ${compared?'readonly':''} placeholder="Your answer...">${safe(exam.answers[i]||'')}</textarea><div class="source" style="margin-top:13px">SOURCE: ${safe(q.source)} · ${safe(q.page)}</div>${compared?`<div class="exam-review"><div class="eyebrow" style="margin-bottom:8px">MODEL ANSWER</div><div class="answer-text">${safe(q.a)}</div>${q.example?`<div class="example-wrap"><div class="example-text">${safe(q.example)}</div></div>`:''}</div><p style="font-size:12px;color:#adcad6">Compare the main points, not exact wording.</p><div class="exam-grade"><button class="grade-btn again" data-exam-grade="0">Needs work</button><button class="grade-btn good" data-exam-grade="1">Partially right</button><button class="grade-btn easy" data-exam-grade="2">Correct ✓</button></div>`:`<div class="exam-buttons"><button class="control-btn" id="exitExam">Exit paper</button><button class="reveal-btn" id="compareAnswer">Compare to model answer ↗</button></div>`}</div>`;
 }
 function startExam(){const u=$('examUnit').value,n=Number($('examCount').value);const source=QUESTIONS.filter(q=>u==='all'||q.unit===u);exam={questions:randSample(source,n),index:0,scores:[],answers:[],compared:false,focused:false};renderExam();}
 function gradeExam(value){if(!exam)return;const q=exam.questions[exam.index],old=getRec(q.id),now=Date.now();setRec(q.id,{rating:value===0?'again':value===2?'easy':'good',attempts:(old.attempts||0)+1,nextReview:value===0?now:now+86400000*(value===1?1:4)});exam.scores.push(value);exam.index++;exam.compared=false;renderExam();}
 function downloadProgress(){const blob=new Blob([JSON.stringify({type:'wdc-study-lab-progress',version:1,savedAt:new Date().toISOString(),progress},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='WDC-Study-Lab-Progress.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);notify('Progress exported. Keep the JSON somewhere safe.');}

 // Focused mode: preserves all original 354 questions and uses the same saved progress.
 function focusMatchesStatus(q){const r=getRec(q.id);return focusStatus==='all'||(focusStatus==='unseen'&&!r.attempts)||(focusStatus==='weak'&&r.rating==='again')||(focusStatus==='starred'&&r.starred);}
 function baseFocusPool(){
   const selected=FOCUS_SECTIONS.filter(s=>(focusGroup==='all'||s.category===focusGroup)&&(focusTopic==='all'||s.key===focusTopic));
   const seen=new Set(),out=[];
   for(const s of selected){for(const id of s.ids){const q=Q_BY_ID.get(id);if(q&&!seen.has(id)){seen.add(id);out.push({...q,kind:'Theory'});}}
     for(const q of extraBySection.get(s.key)||[]){if(!seen.has(q.id)){seen.add(q.id);out.push(q);}}
   }
   return out;
 }
 function focusedPool(){return baseFocusPool().filter(q=>focusMatchesStatus(q)&&(focusFormat==='all'||(focusFormat==='theory'?q.kind==='Theory'||q.kind==='Recall':['Write code','Find error','Predict output','Explain code','Diagram','Calculate','Compare','Debug'].includes(q.kind))));}
 function renderFocusStats(){
   if(!$('focusDone'))return;
   const arr=FOCO;const done=arr.filter(q=>getRec(q.id).attempts>0).length,mastered=arr.filter(q=>getRec(q.id).rating==='easy').length;
   $('focusAllCount').textContent=arr.length;$('focusDone').textContent=done;$('focusMastered').textContent=mastered;
   $('focusMeter').style.width=(arr.length?100*done/arr.length:0)+'%';
   $('focusSectionCount').textContent=FOCUS_SECTIONS.length;$('focusExtraCount').textContent=FOCUS_EXTRA.length;
 }
 function renderFocusTopics(){
   const sections=FOCUS_SECTIONS.filter(s=>focusGroup==='all'||s.category===focusGroup);
   if(!sections.some(s=>s.key===focusTopic))focusTopic='all';
   $('focusTopic').innerHTML='<option value="all">All priority topics</option>'+sections.map(s=>`<option value="${safe(s.key)}" ${focusTopic===s.key?'selected':''}>${safe(s.title)}</option>`).join('');
   document.querySelectorAll('[data-fgroup]').forEach(b=>b.classList.toggle('active',b.dataset.fgroup===focusGroup));
   const buckets=['css','js','html'];const labels={css:'CSS / 01',js:'JAVASCRIPT / 02',html:'HTML / 03'};
   $('focusTopicMap').innerHTML=buckets.filter(g=>focusGroup==='all'||focusGroup===g).map(g=>{
    const subset=sections.filter(s=>s.category===g);
    return `<div class="focus-map-group"><div class="focus-map-group-title">${labels[g]}</div>${subset.map(s=>{
      const arr=[...new Set(s.ids)].map(id=>Q_BY_ID.get(id)).filter(Boolean).concat(extraBySection.get(s.key)||[]);
      const done=arr.filter(q=>getRec(q.id).attempts>0).length;
      return `<button class="focus-map-topic ${focusTopic===s.key?'active':''}" data-focus-topic="${safe(s.key)}"><span class="focus-map-tick">${done===arr.length?'✓':String(done).padStart(2,'0')}</span><span class="focus-map-text"><b>${safe(s.title)}</b><small>${safe(s.note)}</small><span class="focus-map-track"><i style="width:${100*done/arr.length}%"></i></span></span><span class="focus-map-count">${arr.length}</span></button>`;
     }).join('')}</div>`;
   }).join('');
 }
 function focusedQuestionMarkup(q,idx,total){
   const rec=getRec(q.id);
   return `<article class="question-card focused-question"><div class="q-top"><span class="q-number">FOCUSED ${String(idx+1).padStart(3,'0')} / ${String(total).padStart(3,'0')} <span style="color:#7bc2b4">· ${safe(q.unit)}</span></span><div class="q-actions"><button class="icon-btn ${rec.starred?'active':''}" id="focusStar" title="Bookmark" aria-label="Bookmark focused question">${rec.starred?'★':'☆'}</button></div></div><div class="focus-question-tags"><span class="topic-pill">${safe(q.topic.toUpperCase())}</span><span class="question-kind">${safe(q.kind||'THEORY')}</span></div><h3>${safe(q.q)}</h3><div class="thinking">Explain it in your own words, or write the code first.</div><textarea class="answer-draft" id="focusDraft" placeholder="Your memory-first answer (optional)...">${safe(focusDraft)}</textarea>${focusRevealed?`<div class="answer-panel" id="focusAnswerPanel"><h4>EXAM-READY ANSWER</h4><div class="answer-text">${safe(q.a)}</div>${q.example?`<div class="example-wrap"><div class="example-title">WHY IT WORKS / MEMORY HOOK</div><div class="example-text">${safe(q.example)}</div></div>`:''}</div><div class="grade-row"><span class="grade-text">How confident were you?</span><button class="grade-btn again" data-focus-grade="again">1 · Needs work</button><button class="grade-btn good" data-focus-grade="good">2 · Got it</button><button class="grade-btn easy" data-focus-grade="easy">3 · Mastered</button></div>`:''}<div class="q-bottom"><div class="source"><strong>${q.id.startsWith('f')?'EXTRA PRACTICE / TEACHER TOPIC':'FROM COURSE NOTES'}</strong><br>${safe(q.source)} · ${safe(q.page)}</div><button class="${focusRevealed?'control-btn':'reveal-btn'}" id="${focusRevealed?'focusHide':'focusReveal'}">${focusRevealed?'Hide answer ↑':'Reveal answer ↗'}</button></div></article>`;
 }
 function renderFocused(){
   renderFocusStats();renderFocusTopics();const arr=focusedPool();
   if(focusIndex>=arr.length)focusIndex=Math.max(0,arr.length-1);
   $('focusPrev').disabled=focusIndex<=0||!arr.length;$('focusNext').disabled=focusIndex>=arr.length-1||!arr.length;
   $('focusCard').innerHTML=arr.length?focusedQuestionMarkup(arr[focusIndex],focusIndex,arr.length):'<div class="empty-state"><h3>No questions in this filter yet.</h3><p>Try All questions, or mark a few as Needs work / Bookmarked.</p><button class="primary-btn" id="focusReset">Clear filters ↗</button></div>';
 }
 function focusNavigate(step){const n=focusIndex+step;if(n<0||n>=focusedPool().length)return;focusIndex=n;focusRevealed=false;focusDraft='';renderFocused();}
 function focusGrade(rating){const q=focusedPool()[focusIndex];if(!q)return;const old=getRec(q.id),now=Date.now();setRec(q.id,{rating,attempts:(old.attempts||0)+1,nextReview:rating==='again'?now:now+86400000*(rating==='good'?1:4)});
   const next=focusedPool();focusIndex=next.some(x=>x.id===q.id)?((focusIndex+1)%next.length):Math.min(focusIndex,Math.max(0,next.length-1));focusRevealed=false;focusDraft='';renderFocused();notify(rating==='again'?'Added to your weak-topic revision.':'Progress saved — next question ready.');
 }
 function startFocusedExam(){const q=baseFocusPool();if(!q.length){notify('Choose a topic with questions.');return;}const n=Number($('focusExamCount').value);exam={questions:randSample(q,n),index:0,scores:[],answers:[],compared:false,focused:true};setView('exam');}
 $('focusTopic').addEventListener('change',e=>{focusTopic=e.target.value;focusIndex=0;focusRevealed=false;focusDraft='';renderFocused();});
 $('focusStatus').addEventListener('change',e=>{focusStatus=e.target.value;focusIndex=0;focusRevealed=false;focusDraft='';renderFocused();});
 $('focusFormat').addEventListener('change',e=>{focusFormat=e.target.value;focusIndex=0;focusRevealed=false;focusDraft='';renderFocused();});
 $('focusGroups').addEventListener('click',e=>{const b=e.target.closest('[data-fgroup]');if(!b)return;focusGroup=b.dataset.fgroup;focusTopic='all';focusIndex=0;focusRevealed=false;focusDraft='';renderFocused();});
 $('focusTopicMap').addEventListener('click',e=>{const b=e.target.closest('[data-focus-topic]');if(!b)return;focusTopic=b.dataset.focusTopic;focusIndex=0;focusRevealed=false;focusDraft='';renderFocused();$('focusPracticeArea').scrollIntoView({behavior:'smooth',block:'start'});});
 $('focusStart').addEventListener('click',()=>$('focusPracticeArea').scrollIntoView({behavior:'smooth',block:'start'}));
 $('focusMock').addEventListener('click',startFocusedExam);
 $('focusCreateExam').addEventListener('click',startFocusedExam);
 $('focusPrev').addEventListener('click',()=>focusNavigate(-1));
 $('focusNext').addEventListener('click',()=>focusNavigate(1));
 $('focusCard').addEventListener('input',e=>{if(e.target.id==='focusDraft')focusDraft=e.target.value;});
 $('focusCard').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
   if(b.id==='focusReveal'){focusRevealed=true;renderFocused();}
   else if(b.id==='focusHide'){focusRevealed=false;renderFocused();}
   else if(b.id==='focusStar'){const q=focusedPool()[focusIndex];if(q){setRec(q.id,{starred:!getRec(q.id).starred});renderFocused();}}
   else if(b.id==='focusReset'){focusStatus='all';focusFormat='all';focusGroup='all';focusTopic='all';focusIndex=0;$('focusStatus').value='all';$('focusFormat').value='all';renderFocused();}
   else if(b.dataset.focusGrade)focusGrade(b.dataset.focusGrade);
 });

 $('exportBtn').addEventListener('click',downloadProgress);
 $('importProgress').addEventListener('change',async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(data.type!=='wdc-study-lab-progress'||!data.progress||typeof data.progress!=='object'||Array.isArray(data.progress))throw Error('Wrong file');const validIds=new Set([...QUESTIONS,...FOCUS_EXTRA].map(q=>q.id));for(const [id,rec] of Object.entries(data.progress)){if(validIds.has(id)&&rec&&typeof rec==='object'&&!Array.isArray(rec))progress[id]={...getRec(id),...rec};}save();renderStudy();if(view==='library')renderLibrary();notify('Progress imported successfully.');}catch(err){notify('Could not read this progress file.');}finally{e.target.value='';}});
 document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',()=>setView(el.dataset.view)));
 $('unitNav').addEventListener('click',e=>{const el=e.target.closest('[data-unit]');if(el)selectUnit(el.dataset.unit);});
 $('unitCards').addEventListener('click',e=>{const el=e.target.closest('[data-unit]');if(el)selectUnit(el.dataset.unit);});
 $('menuToggle').addEventListener('click',()=>$('sidebar').classList.toggle('open'));
 $('startStudy').addEventListener('click',()=>setView('study'));
 // Exam simulator remains available from the main navigation.

 $('heroFocus').addEventListener('click',()=>setView('focused'));
 $('topicFilter').addEventListener('change',e=>{studyTopic=e.target.value;studyIndex=0;revealed=false;draft='';renderStudy();});
 $('scopeFilter').addEventListener('change',e=>{studyScope=e.target.value;studyIndex=0;revealed=false;draft='';renderStudy();});
 $('shuffleBtn').addEventListener('click',()=>{shuffled=!shuffled;shuffledIndex={};studyIndex=0;revealed=false;draft='';$('shuffleBtn').classList.toggle('active',shuffled);$('shuffleBtn').setAttribute('aria-pressed',shuffled?'true':'false');$('shuffleBtn').textContent=shuffled?'⇄ Shuffle on':'⇄ Shuffle off';renderStudy();});
 $('prevBtn').addEventListener('click',()=>changeQuestion(-1));$('nextBtn').addEventListener('click',()=>changeQuestion(1));
 $('studyCard').addEventListener('input',e=>{if(e.target.id==='draftAnswer')draft=e.target.value;});
 $('studyCard').addEventListener('click',e=>{
  const el=e.target.closest('button');if(!el)return;
  if(el.id==='revealAnswer'){revealed=true;renderStudy();}
  if(el.id==='hideAnswer'){revealed=false;renderStudy();}
  if(el.id==='resetStudyFilters'){studyScope='all';studyTopic='all';$('scopeFilter').value='all';renderTopicSelect();studyIndex=0;renderStudy();}
  if(el.id==='starQuestion'){const q=pool()[studyIndex];if(!q)return;setRec(q.id,{starred:!getRec(q.id).starred});renderStudy();}
  if(el.id==='copyAnswer'){const q=pool()[studyIndex];if(q&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(q.a).then(()=>notify('Model answer copied.')).catch(()=>notify('Copy unavailable in this browser.'));}else notify('Clipboard unavailable: select the answer to copy.');}
  if(el.dataset.grade)gradeCurrent(el.dataset.grade);
 });
 $('searchInput').addEventListener('input',e=>{librarySearch=e.target.value;libraryOffset=0;renderLibrary();});
 $('libraryUnit').addEventListener('change',e=>{libraryUnit=e.target.value;libraryOffset=0;renderLibrary();});
 $('libraryResults').addEventListener('click',e=>{const el=e.target.closest('button');if(!el)return;
  if(el.dataset.expand){expanded.has(el.dataset.expand)?expanded.delete(el.dataset.expand):expanded.add(el.dataset.expand);renderLibrary();}
  if(el.dataset.star){const id=el.dataset.star;setRec(id,{starred:!getRec(id).starred});renderLibrary();}
  if(el.dataset.jump){const q=QUESTIONS.find(q=>q.id===el.dataset.jump);if(!q)return;selectedUnit=q.unit;studyTopic=q.topic;studyScope='all';$('scopeFilter').value='all';shuffled=false;shuffledIndex={};$('shuffleBtn').textContent='⇄ Shuffle off';$('shuffleBtn').classList.remove('active');renderTopicSelect();studyIndex=pool().findIndex(x=>x.id===q.id);if(studyIndex<0)studyIndex=0;revealed=false;draft='';setView('study');}
 });
 $('libraryFooter').addEventListener('click',e=>{if(e.target.id==='loadMore'){libraryOffset+=25;renderLibrary();}});
 $('expandAll').addEventListener('click',()=>{const term=librarySearch.trim().toLowerCase();const items=QUESTIONS.filter(q=>(libraryUnit==='all'||q.unit===libraryUnit)&&(!term||[q.q,q.a,q.topic,q.unit,q.source,q.example].some(t=>String(t).toLowerCase().includes(term)))).slice(0,libraryOffset+25);const shouldExpand=items.some(q=>!expanded.has(q.id));for(const q of items){if(shouldExpand)expanded.add(q.id);else expanded.delete(q.id);}renderLibrary();$('expandAll').textContent=shouldExpand?'Collapse visible':'Expand visible';});
 $('examHost').addEventListener('input',e=>{if(e.target.id==='examAnswer'&&exam)exam.answers[exam.index]=e.target.value;});
 $('examHost').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='beginExam')startExam();if(b.id==='compareAnswer'&&exam){exam.compared=true;renderExam();}if(b.dataset.examGrade!==undefined)gradeExam(Number(b.dataset.examGrade));if(b.id==='exitExam'){const wasFocused=exam?.focused;exam=null;if(wasFocused)setView('focused');else renderExam();}if(b.id==='returnFocused'){exam=null;setView('focused');}if(b.id==='restartExam'){const wasFocused=exam?.focused;exam=null;if(wasFocused)startFocusedExam();else renderExam();}if(b.id==='reviewWeakExam'){const wasFocused=exam?.focused;exam=null;if(wasFocused){focusStatus='weak';focusTopic='all';focusGroup='all';focusFormat='all';focusIndex=0;focusRevealed=false;focusDraft='';$('focusStatus').value='weak';$('focusFormat').value='all';setView('focused');}else{studyScope='weak';$('scopeFilter').value='weak';studyTopic='all';selectedUnit='all';renderTopicSelect();studyIndex=0;revealed=false;draft='';setView('study');}}
 });
 document.addEventListener('keydown',e=>{
  if(!['study','focused'].includes(view)||e.ctrlKey||e.metaKey||e.altKey)return;
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;
  if(view==='focused'){if(e.code==='Space'){e.preventDefault();if(!focusRevealed&&focusedPool().length){focusRevealed=true;renderFocused();}}else if(e.key==='ArrowRight')focusNavigate(1);else if(e.key==='ArrowLeft')focusNavigate(-1);else if(focusRevealed&&['1','2','3'].includes(e.key))focusGrade(({1:'again',2:'good',3:'easy'})[e.key]);return;}
  if(e.code==='Space'){e.preventDefault();if(!revealed&&pool().length){revealed=true;renderStudy();}}
  else if(e.key==='ArrowRight')changeQuestion(1);else if(e.key==='ArrowLeft')changeQuestion(-1);
  else if(revealed&&e.key==='1')gradeCurrent('again');else if(revealed&&e.key==='2')gradeCurrent('good');else if(revealed&&e.key==='3')gradeCurrent('easy');
 });
 // Start app. Source filenames and page/slide references remain on every card.
 $('libraryUnit').innerHTML='<option value="all">All units</option>'+UNIT_META.map(u=>`<option value="${safe(u[0])}">${safe(u[0])}</option>`).join('');
 renderTopicSelect();updateStats();renderStudy();renderFocused();
})();
