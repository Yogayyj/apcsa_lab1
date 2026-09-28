'use strict';

const FASHION_ITEM = `public class FashionItem {
    private String brand;
    private String type;
    private double price;

    public FashionItem(String itemBrand, String itemType, double itemPrice) {
        brand = itemBrand;
        type = itemType;
        price = itemPrice;
    }

    public void showInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Type: " + type);
        System.out.println("Price: $" + price);
    }

    public double getPrice() { return price; }
}`;
const CALCULATOR = `public class Calculator {
    public static double add(double price1, double price2) {
        return price1 + price2;
    }

    public static double discount(double price, double discountRate) {
        return price * (1 - discountRate);
    }
}`;
const STARTER = `public class Main {
    public static void main(String[] args) {
        // Keep adding your code here. All challenges share this file.

    }
}`;
const CHALLENGES = [
  {title:'Create It',subtitle:'new object + constructor',body:`<p>Create a <code>FashionItem</code> object called <b>hairClip</b>.</p><ul><li>Brand: <code>"Miu Miu"</code></li><li>Type: <code>"Hair Clip"</code></li><li>Price: <code>450</code></li></ul><p><b>Focus:</b> class, object, <code>new</code>, constructor</p>`,checks:[
    ['FashionItem object created',/new\s+FashionItem\s*\(/],['Variable name is hairClip',/FashionItem\s+hairClip\s*=/],['Correct constructor and arguments',/FashionItem\s+hairClip\s*=\s*new\s+FashionItem\s*\(\s*"Miu Miu"\s*,\s*"Hair Clip"\s*,\s*450(?:\.0)?\s*\)\s*;/]
  ]},
  {title:'Arguments',subtitle:'parameters vs arguments',body:`<p>Keep <b>hairClip</b>. Add two more objects:</p><ul><li><b>ribbon</b>: <code>"LV", "Ribbon", 200</code></li><li><b>earring</b>: <code>"LV", "Earring", 600</code></li></ul><p>The constructor declares <b>parameters</b>; these values are your <b>arguments</b>.</p>`,checks:[
    ['ribbon created with correct arguments',/FashionItem\s+ribbon\s*=\s*new\s+FashionItem\s*\(\s*"LV"\s*,\s*"Ribbon"\s*,\s*200(?:\.0)?\s*\)\s*;/],['earring created with correct arguments',/FashionItem\s+earring\s*=\s*new\s+FashionItem\s*\(\s*"LV"\s*,\s*"Earring"\s*,\s*600(?:\.0)?\s*\)\s*;/]
  ]},
  {title:'Instance Method',subtitle:'object.method()',body:`<p>Keep all your objects. Ask the hair clip to display its information:</p><pre class="api">hairClip.showInfo();
────────  ──────────
 object      method</pre>`,checks:[['Instance method called on hairClip',/hairClip\s*\.\s*showInfo\s*\(\s*\)\s*;/]]},
  {title:'Static Method',subtitle:'class.method()',body:`<p>Add the hair clip and earring prices with <code>Calculator.add()</code>.</p><ul><li>Get both prices through <code>getPrice()</code>.</li><li>Store the result in <code>double total</code>.</li><li>Print <code>"Total: $" + total</code>.</li></ul><p>Do not calculate with the numbers <code>450 + 600</code> directly.</p>`,checks:[
    ['Uses Calculator.add()',/Calculator\s*\.\s*add\s*\(/],['Uses hairClip.getPrice()',/hairClip\s*\.\s*getPrice\s*\(\s*\)/],['Uses earring.getPrice()',/earring\s*\.\s*getPrice\s*\(\s*\)/],['Passes both prices to Calculator.add()',/Calculator\s*\.\s*add\s*\(\s*hairClip\s*\.\s*getPrice\s*\(\s*\)\s*,\s*earring\s*\.\s*getPrice\s*\(\s*\)\s*\)/],['Stores result in double total',/double\s+total\s*=\s*Calculator\s*\.\s*add\s*\(/],['Prints total',/System\s*\.\s*out\s*\.\s*println\s*\(\s*"Total: \$"\s*\+\s*total\s*\)\s*;/]
  ]}
];

const $ = id => document.getElementById(id);
let state = null;
let openFile = 'main';
let saveTimer;
const storageKey = id => `fashionLab_${id}`;
const cleanId = id => id.trim().replace(/\s+/g, ' ');
const blankProgress = () => ({challenge1:false,challenge2:false,challenge3:false,challenge4:false});
function freshState(name,id){return {student:{name,id},code:STARTER,currentChallenge:0,progress:blankProgress(),score:0,checkResults:{}};}
function normalizeState(value,name,id){
  const base=freshState(name,id); if(!value||typeof value!=='object')return base;
  base.student={name:name||value.student?.name||'',id};
  base.code=typeof value.code==='string'?value.code:(typeof value.mainJava==='string'?value.mainJava:STARTER);
  base.currentChallenge=Math.min(3,Math.max(0,Number(value.currentChallenge)||0));
  base.progress={...base.progress,...value.progress}; base.score=Object.values(base.progress).filter(Boolean).length;
  base.checkResults=value.checkResults&&typeof value.checkResults==='object'?value.checkResults:{}; return base;
}
function save(){if(!state)return;state.score=Object.values(state.progress).filter(Boolean).length;localStorage.setItem(storageKey(state.student.id),JSON.stringify(state));$('saveStatus').textContent='Saved locally ✓';updateProgress();}
function login(name,id){
  id=cleanId(id); name=name.trim(); if(!name||!id)throw new Error('Please enter both your name and Student ID.');
  let stored=null; try{stored=JSON.parse(localStorage.getItem(storageKey(id)));}catch(_){/* replace malformed local data */}
  state=normalizeState(stored,name,id); save(); sessionStorage.setItem('fashionLab_currentStudent',id); showLab();
}
function showLab(){
  $('loginView').classList.add('hidden');$('labView').classList.remove('hidden');$('studentBadge').textContent=`${state.student.name} · ${state.student.id}`;$('endpoint').value=localStorage.getItem('judge0Endpoint')||'';selectChallenge(state.currentChallenge);selectFile('main');
}
function logout(){clearTimeout(saveTimer);save();state=null;sessionStorage.removeItem('fashionLab_currentStudent');$('labView').classList.add('hidden');$('loginView').classList.remove('hidden');$('loginForm').reset();$('studentName').focus();}
function updateProgress(){
  if(!state)return;$('challengeList').innerHTML=CHALLENGES.map((c,i)=>`<button class="challenge ${i===state.currentChallenge?'active':''} ${state.progress['challenge'+(i+1)]?'complete':''}" data-challenge="${i}"><span class="progress-icon">${state.progress['challenge'+(i+1)]?'✓':'○'}</span><span><b>Challenge ${i+1}</b><small>${c.title}</small></span><span>›</span></button>`).join('');$('topScore').textContent=`Score: ${state.score} / 4`;
}
function selectChallenge(index){state.currentChallenge=index;const c=CHALLENGES[index];$('challengeNumber').textContent=`Challenge ${index+1} of 4`;$('taskTitle').textContent=c.title;$('taskBody').innerHTML=c.body;$('feedback').innerHTML='';$('console').textContent='Ready. Continue editing the same Main.java.';save();}
function selectFile(file){openFile=file;document.querySelectorAll('#fileTabs button').forEach(b=>b.classList.toggle('active',b.dataset.file===file));$('editor').value=file==='main'?state.code:(file==='fashion'?FASHION_ITEM:CALCULATOR);$('editor').readOnly=file!=='main';$('saveStatus').textContent=file==='main'?'Saved locally ✓':'Teacher-provided · read only';}
function withoutComments(code){
  let result='',mode='code';
  for(let i=0;i<code.length;i++){
    const char=code[i],next=code[i+1];
    if(mode==='line'){if(char==='\n'){result+='\n';mode='code';}continue;}
    if(mode==='block'){if(char==='*'&&next==='/'){i++;mode='code';}else if(char==='\n')result+='\n';continue;}
    if(mode==='string'||mode==='character'){
      result+=char;
      if(char==='\\'&&next!==undefined){result+=next;i++;continue;}
      if((mode==='string'&&char==='"')||(mode==='character'&&char==="'"))mode='code';
      continue;
    }
    if(char==='/'&&next==='/'){i++;mode='line';continue;}
    if(char==='/'&&next==='*'){i++;mode='block';continue;}
    result+=char;if(char==='"')mode='string';else if(char==="'")mode='character';
  }
  return result;
}
function checkAnswer(){
  const code=withoutComments(state.code);const results=CHALLENGES[state.currentChallenge].checks.map(([label,re])=>({label,passed:re.test(code)}));const all=results.every(r=>r.passed);state.checkResults['challenge'+(state.currentChallenge+1)]={passed:all,checkedAt:new Date().toISOString(),items:results};if(all)state.progress['challenge'+(state.currentChallenge+1)]=true;save();$('feedback').innerHTML=results.map(r=>`<div class="check ${r.passed?'ok':'bad'}">${r.passed?'✓':'✗'} ${r.label}</div>`).join('')+`<div class="check ${all?'ok':'bad'}"><b>${all?'✓ Challenge complete!':'Almost there — use the required Java structure and fix the items above.'}</b></div>`;
}
function exportAssignment(){save();const output={version:'1.0',student:state.student,score:state.score,progress:state.progress,mainJava:state.code,checkResults:state.checkResults,submittedAt:new Date().toISOString()};const blob=new Blob([JSON.stringify(output,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');const safeName=state.student.name.trim().replace(/[^a-z0-9]+/gi,'_').replace(/^_|_$/g,'');const safeId=state.student.id.replace(/[^a-z0-9_-]/gi,'_');a.href=url;a.download=`FashionLab_${safeId}_${safeName||'Student'}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),0);}
async function runCode(){const ep=(localStorage.getItem('judge0Endpoint')||'').trim();const con=$('console');if(!ep){con.textContent='Java Runner is not configured yet.\n\nYou can still use Check Answer to complete this activity.';return;}con.textContent='Compiling and running…';try{const sep=ep.includes('?')?'&':'?';const dependencies=[FASHION_ITEM,CALCULATOR].map(code=>code.replace('public class','class'));const res=await fetch(ep+sep+'base64_encoded=false&wait=true',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({source_code:[state.code,...dependencies].join('\n\n'),language_id:62,stdin:''})});if(!res.ok)throw new Error(`Runner returned HTTP ${res.status}`);const data=await res.json();con.textContent=data.stdout||data.compile_output||data.stderr||data.message||JSON.stringify(data,null,2);}catch(error){con.textContent=`Java Runner error: ${error.message}\n\nCheck the endpoint and CORS settings. Check Answer remains available.`;}}

$('loginForm').addEventListener('submit',e=>{e.preventDefault();try{$('loginError').textContent='';login($('studentName').value,$('studentId').value);}catch(error){$('loginError').textContent=error.message;}});
$('challengeList').addEventListener('click',e=>{const button=e.target.closest('[data-challenge]');if(button)selectChallenge(Number(button.dataset.challenge));});
$('fileTabs').addEventListener('click',e=>{const button=e.target.closest('[data-file]');if(button)selectFile(button.dataset.file);});
$('editor').addEventListener('input',()=>{if(openFile!=='main')return;state.code=$('editor').value;$('saveStatus').textContent='Saving…';clearTimeout(saveTimer);saveTimer=setTimeout(save,650);});
$('checkBtn').addEventListener('click',checkAnswer);$('runBtn').addEventListener('click',runCode);$('exportBtn').addEventListener('click',exportAssignment);$('logoutBtn').addEventListener('click',logout);
$('resetBtn').addEventListener('click',()=>{if(!confirm('Are you sure?\n\nThis will delete your saved code and challenge progress on this device.'))return;localStorage.removeItem(storageKey(state.student.id));state=freshState(state.student.name,state.student.id);save();selectFile('main');selectChallenge(0);});
$('saveEndpoint').addEventListener('click',()=>{localStorage.setItem('judge0Endpoint',$('endpoint').value.trim());$('console').textContent='Java Runner endpoint saved on this browser.';});
window.addEventListener('beforeunload',()=>{if(state)save();});

const remembered=sessionStorage.getItem('fashionLab_currentStudent');if(remembered){try{const stored=JSON.parse(localStorage.getItem(storageKey(remembered)));if(stored?.student){state=normalizeState(stored,stored.student.name,remembered);showLab();}}catch(_){sessionStorage.removeItem('fashionLab_currentStudent');}}
