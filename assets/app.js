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
  {title:'Instance Method',subtitle:'choose the right object',body:`<p>Use the <code>showInfo()</code> method to display the information for the <b>Miu Miu Hair Clip</b>.</p><p>Look at the objects you already created and decide which one should call this method.</p>`,checks:[['Instance method called on hairClip',/hairClip\s*\.\s*showInfo\s*\(\s*\)\s*;/]]},
  {title:'Static Method',subtitle:'choose the right caller',body:`<p>Calculate the combined price of these two items:</p><ul><li><b>Miu Miu Hair Clip</b></li><li><b>LV Earring</b></li></ul><p>Explore the provided APIs and decide which methods can retrieve the two prices and add them together.</p><ul><li>Store the result in <code>double total</code>.</li><li>Print the result so the console message is <code>Total: $1050.0</code>.</li></ul><p>Do not calculate with the numbers <code>450 + 600</code> directly. Pay attention to whether each method belongs to an <b>object</b> or a <b>class</b>.</p>`,checks:[
    ['Uses Calculator.add()',/Calculator\s*\.\s*add\s*\(/],['Uses hairClip.getPrice()',/hairClip\s*\.\s*getPrice\s*\(\s*\)/],['Uses earring.getPrice()',/earring\s*\.\s*getPrice\s*\(\s*\)/],['Passes both prices to Calculator.add()',/Calculator\s*\.\s*add\s*\(\s*hairClip\s*\.\s*getPrice\s*\(\s*\)\s*,\s*earring\s*\.\s*getPrice\s*\(\s*\)\s*\)/],['Stores result in double total',/double\s+total\s*=\s*Calculator\s*\.\s*add\s*\(/],['Prints total',/System\s*\.\s*out\s*\.\s*println\s*\(\s*"Total[ \t]*:[ \t]*\$"\s*\+\s*total\s*\)\s*;/]
  ]}
];

const TRAIL_STARTER = `public class Main {
    public static void main(String[] args) {
        String route = "cedar:waterfall#north";
        // Build your trail passes here. All four checkpoints share this file.

    }
}`;
// Structural checks are feedback, not a Java compiler. Named variables make
// the cumulative checkpoints explicit; values must be derived from the route.
const trailCheck = (label, pattern) => [label, new RegExp(pattern)];
const TRAIL_CHALLENGES = [
  {title:'Find the Landmarks',subtitle:'indexOf · delimiter positions',body:`<p>A park kiosk receives a route tag in the format <code>trail:destination#zone</code>, for example <code>cedar:waterfall#north</code>.</p><p>Assume one <code>:</code> and one <code>#</code>, a nonempty trail name, and a nonempty destination.</p><p>Use <code>route.indexOf(...)</code> to store the delimiter positions in <code>int colonIndex</code> and <code>int hashIndex</code>. Derive positions rather than counting characters.</p>`,checks:[
    ['Find : in route and store colonIndex', /int\s+colonIndex\s*=\s*route\s*\.\s*indexOf\s*\(\s*["']:["']\s*\)\s*;/],
    ['Find # in route and store hashIndex', /int\s+hashIndex\s*=\s*route\s*\.\s*indexOf\s*\(\s*["']#["']\s*\)\s*;/]
  ]},
  {title:'Full Trail Pass',subtitle:'substring · concatenation',body:`<p>Extract <code>String trail</code> and <code>String destination</code> using your delimiter positions and <code>route.substring(...)</code>.</p><p>Create <code>String fullPass</code>: the trail, a hyphen, then the destination. For the starter route, this is <code>cedar-waterfall</code>. Your code must also work for <code>oak:cove#east</code>, producing <code>oak-cove</code>.</p>`,checks:[
    ['Extract trail before the colon', /String\s+trail\s*=\s*route\s*\.\s*substring\s*\(\s*0\s*,\s*colonIndex\s*\)\s*;/],
    ['Extract destination between : and #', /String\s+destination\s*=\s*route\s*\.\s*substring\s*\(\s*colonIndex\s*\+\s*1\s*,\s*hashIndex\s*\)\s*;/],
    ['Build fullPass from extracted names', /String\s+fullPass\s*=\s*trail\s*\+\s*"-"\s*\+\s*destination\s*;/]
  ]},
  {title:'Short Trail Pass',subtitle:'first character · exclusive end',body:`<p>Use <code>substring</code> to extract <code>String initial</code>, the first character of <code>trail</code> (or <code>route</code>).</p><p>Create <code>String shortPass</code> from the initial, a hyphen, and the destination. Expected example: <code>c-waterfall</code>.</p><p>Remember: the second substring index is exclusive.</p>`,checks:[
    ['Extract the first character with substring', /String\s+initial\s*=\s*(?:trail|route)\s*\.\s*substring\s*\(\s*0\s*,\s*1\s*\)\s*;/],
    ['Build shortPass from initial and destination', /String\s+shortPass\s*=\s*initial\s*\+\s*"-"\s*\+\s*destination\s*;/]
  ]},
  {title:'Random Trail Number',subtitle:'length · Math.random',body:`<p>The park gives each visitor a random trail number. Use the length of <code>trail</code> to decide the largest possible number.</p><ol><li>Store <code>trail.length()</code> in <code>int trailLength</code>.</li><li>Create <code>int randomNumber</code> from <b>1 through trailLength</b> using <code>Math.random()</code>.</li><li>Print <code>randomNumber</code> using <code>System.out.println</code>.</li></ol><h3>Example to follow</h3><p>If the trail is <code>"river"</code>, its length is <b>5</b>:</p><pre class="api">int nameLength = "river".length();
int ticket = (int) (Math.random() * nameLength) + 1;
System.out.println(ticket);</pre><p>Possible outputs: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, or <code>5</code>. One run prints only one number.</p><p><code>Math.random()</code> gives a decimal from 0 up to (but not including) 1. Multiply by the length, use <code>(int)</code> to remove the decimal part, then add 1.</p><p>Now adapt the example using <code>trail</code>, <code>trailLength</code>, and <code>randomNumber</code>. For <code>"cedar"</code>, possible numbers are 1–5; for <code>"oak"</code>, they are 1–3.</p>`,checks:[
    ['Store trail.length() in trailLength', /int\s+trailLength\s*=\s*trail\s*\.\s*length\s*\(\s*\)\s*;/],
    trailCheck('Generate randomNumber from 1 through trailLength', String.raw`int\s+randomNumber\s*=\s*\(\s*int\s*\)\s*\(\s*(?:Math\s*\.\s*random\s*\(\s*\)\s*\*\s*trailLength|trailLength\s*\*\s*Math\s*\.\s*random\s*\(\s*\))\s*\)\s*\+\s*1\s*;`),
    ['Print randomNumber', /System\s*\.\s*out\s*\.\s*println\s*\(\s*randomNumber\s*\)\s*;/]
  ]}
];
const TRAIL_TRANSLATIONS = [
  '<p>公园的路线标签格式为 <code>步道:目的地#区域</code>，例如 <code>cedar:waterfall#north</code>。</p><p>使用 <code>route.indexOf(...)</code> 找到冒号和井号的位置，分别存入整数变量 <code>colonIndex</code> 和 <code>hashIndex</code>。不要手动数位置。</p>',
  '<p>使用 <code>route.substring(...)</code> 和上一题的位置，提取步道名 <code>trail</code> 与目的地名 <code>destination</code>。</p><p>把步道名、连字符 <code>"-"</code> 和目的地名拼接起来，存入 <code>String fullPass</code>。例如：<code>cedar-waterfall</code>；换成 <code>oak:cove#east</code> 时应得到 <code>oak-cove</code>。</p>',
  '<p>使用 <code>substring(0, 1)</code> 提取步道名的第一个字符，存入 <code>String initial</code>。</p><p>将首字母、连字符和目的地名拼接成 <code>String shortPass</code>。例如：<code>c-waterfall</code>。注意：substring 的结束位置不包含在结果中。</p>',
  '<p>公园要给游客一个随机的步道号码。号码范围是 <b>1 到步道名的字符数（包含两端）</b>。</p><ol><li>用 <code>trail.length()</code> 获取字符数，存入 <code>int trailLength</code>。</li><li>用 <code>Math.random()</code> 生成随机号码，存入 <code>int randomNumber</code>。</li><li>用 <code>System.out.println(randomNumber)</code> 输出号码。</li></ol><p>参考左侧英文题目的例子：<code>"river"</code> 有 5 个字符，所以一次运行可能输出 1、2、3、4 或 5 中的一个数字。先乘以长度，再用 <code>(int)</code> 去掉小数部分，最后加 1。</p><p>把例子中的变量换成题目要求的 <code>trailLength</code> 和 <code>randomNumber</code>。<code>"cedar"</code> 的范围是 1–5；<code>"oak"</code> 的范围是 1–3。</p>'
];

const LABS = {
  fashion:{title:'Fashion Item Java Lab',subtitle:'Objects · Constructors · Arguments · Methods',starter:STARTER,challenges:CHALLENGES,prefix:'FashionLab'},
  trail:{title:'Trail Pass Java Lab',subtitle:'Strings · Substrings · Random Numbers · Concatenation',starter:TRAIL_STARTER,challenges:TRAIL_CHALLENGES,prefix:'TrailLab'}
};
let activeLab = 'fashion';
const lab = () => LABS[activeLab];

const $ = id => document.getElementById(id);
let state = null;
let openFile = 'main';
let saveTimer;
const storageKey = id => activeLab==='fashion'?`fashionLab_${id}`:`trailLab_${id}`;
const teacherSubmissionsKey = 'fashionLab_teacherSubmissions';
const cleanId = id => id.trim().replace(/\s+/g, ' ');
const blankProgress = () => Object.fromEntries(lab().challenges.map((_,i)=>['challenge'+(i+1),false]));
function freshState(name,id){return {student:{name,id},code:lab().starter,currentChallenge:0,progress:blankProgress(),score:0,checkResults:{},curriculumVersion:activeLab==='trail'?2:1};}
function normalizeState(value,name,id){
  const base=freshState(name,id); if(!value||typeof value!=='object')return base;
  base.student={name:name||value.student?.name||'',id};
  base.code=typeof value.code==='string'?value.code:(typeof value.mainJava==='string'?value.mainJava:lab().starter);
  base.currentChallenge=Math.min(lab().challenges.length-1,Math.max(0,Number(value.currentChallenge)||0));
  for(const key of Object.keys(base.progress))base.progress[key]=value.progress?.[key]===true; base.score=Object.values(base.progress).filter(Boolean).length;
  if(activeLab==='trail'&&value.curriculumVersion!==2){base.progress.challenge4=false;base.score=Object.values(base.progress).filter(Boolean).length;}
  base.checkResults=Object.fromEntries(Object.keys(base.progress).filter(key=>value.checkResults?.[key]).map(key=>[key,value.checkResults[key]]));
  if(activeLab==='trail'&&value.curriculumVersion!==2)delete base.checkResults.challenge4;
  return base;
}
function save(){if(!state)return;state.score=Object.values(state.progress).filter(Boolean).length;localStorage.setItem(storageKey(state.student.id),JSON.stringify(state));$('saveStatus').textContent='Saved locally ✓';updateProgress();}
function login(name,id){
  activeLab='fashion'; id=cleanId(id); name=name.trim(); if(!name||!id)throw new Error('Please enter both your name and Student ID.');
  let stored=null; try{stored=JSON.parse(localStorage.getItem(storageKey(id)));}catch(_){/* replace malformed local data */}
  state=normalizeState(stored,name,id); save(); sessionStorage.setItem('fashionLab_currentStudent',id); showLabSelect();
}
function hideStudentViews(){$('loginView').classList.add('hidden');$('labSelectView').classList.add('hidden');$('labView').classList.add('hidden');}
function showLabSelect(){hideStudentViews();$('selectStudentBadge').textContent=`${state.student.name} · ${state.student.id}`;$('labSelectView').classList.remove('hidden');}
function openLab(id){
  clearTimeout(saveTimer);save();const student=state.student;activeLab=id;
  let stored=null;try{stored=JSON.parse(localStorage.getItem(storageKey(student.id)));}catch(_){}
  state=normalizeState(stored,student.name,student.id);showLab();
}
function showLab(){
  $('labTitle').textContent=lab().title;$('labSubtitle').textContent=lab().subtitle;
  $('fashionReference').classList.toggle('hidden',activeLab!=='fashion');
  $('trailReference').classList.toggle('hidden',activeLab!=='trail');
  document.querySelectorAll('#fileTabs [data-file]:not([data-file="main"])').forEach(b=>b.classList.toggle('hidden',activeLab!=='fashion'));
  hideStudentViews();$('labView').classList.remove('hidden');$('studentBadge').textContent=`${state.student.name} · ${state.student.id}`;$('endpoint').value=localStorage.getItem('judge0Endpoint')||'';selectChallenge(state.currentChallenge);selectFile('main');
}

function logout(){clearTimeout(saveTimer);save();state=null;sessionStorage.removeItem('fashionLab_currentStudent');hideStudentViews();$('loginView').classList.remove('hidden');$('loginForm').reset();$('studentName').focus();}
function updateProgress(){
  if(!state)return;$('challengeList').innerHTML=lab().challenges.map((c,i)=>`<button class="challenge ${i===state.currentChallenge?'active':''} ${state.progress['challenge'+(i+1)]?'complete':''}" data-challenge="${i}"><span class="progress-icon">${state.progress['challenge'+(i+1)]?'✓':'○'}</span><span><b>Challenge ${i+1}</b><small>${c.title}</small></span><span>›</span></button>`).join('');$('topScore').textContent=`Score: ${state.score} / ${lab().challenges.length}`;
}
function selectChallenge(index){state.currentChallenge=index;const c=lab().challenges[index];$('challengeNumber').textContent=`Challenge ${index+1} of ${lab().challenges.length}`;$('taskTitle').textContent=c.title;$('taskBody').innerHTML=c.body;$('translationCard').classList.toggle('hidden',activeLab!=='trail');$('taskTranslation').innerHTML=activeLab==='trail'?TRAIL_TRANSLATIONS[index]:'';$('feedback').innerHTML='';$('console').textContent='Ready. Continue editing the same Main.java.';save();}
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
  const code=withoutComments(state.code);const results=lab().challenges[state.currentChallenge].checks.map(([label,re])=>({label,passed:re.test(code)}));const all=results.every(r=>r.passed);state.checkResults['challenge'+(state.currentChallenge+1)]={passed:all,checkedAt:new Date().toISOString(),items:results};if(all)state.progress['challenge'+(state.currentChallenge+1)]=true;save();$('feedback').innerHTML=results.map(r=>`<div class="check ${r.passed?'ok':'bad'}">${r.passed?'✓':'✗'} ${r.label}</div>`).join('')+`<div class="check ${all?'ok':'bad'}"><b>${all?'✓ Challenge complete!':'Almost there — use the required Java structure and fix the items above.'}</b></div>`;
}
function saveForTeacher(output){
  let submissions=[];
  try{const stored=JSON.parse(localStorage.getItem(teacherSubmissionsKey));if(Array.isArray(stored))submissions=stored;}catch(_){/* replace malformed teacher data */}
  const existing=submissions.findIndex(item=>item?.student?.id===output.student.id&&(item.labId||'fashion')===output.labId);
  if(existing>=0)submissions.splice(existing,1,output);else submissions.push(output);
  localStorage.setItem(teacherSubmissionsKey,JSON.stringify(submissions));
}
function exportAssignment(){save();const output={version:'2.1',curriculumVersion:state.curriculumVersion,labId:activeLab,labTitle:lab().title,maxScore:lab().challenges.length,student:state.student,score:state.score,progress:state.progress,mainJava:state.code,checkResults:state.checkResults,submittedAt:new Date().toISOString()};try{saveForTeacher(output);$('console').textContent='Assignment exported and added to the Teacher Dashboard on this browser.';}catch(error){$('console').textContent=`The JSON was downloaded, but could not be saved to the Teacher Dashboard: ${error.message}`;}const blob=new Blob([JSON.stringify(output,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');const safeName=state.student.name.trim().replace(/[^a-z0-9]+/gi,'_').replace(/^_|_$/g,'');const safeId=state.student.id.replace(/[^a-z0-9_-]/gi,'_');a.href=url;a.download=`${lab().prefix}_${safeId}_${safeName||'Student'}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),0);}
async function runCode(){const ep=(localStorage.getItem('judge0Endpoint')||'').trim();const con=$('console');if(!ep){con.textContent='Java Runner is not configured yet.\n\nYou can still use Check Answer to complete this activity.';return;}con.textContent='Compiling and running…';try{const sep=ep.includes('?')?'&':'?';const dependencies=(activeLab==='fashion'?[FASHION_ITEM,CALCULATOR]:[]).map(code=>code.replace('public class','class'));const res=await fetch(ep+sep+'base64_encoded=false&wait=true',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({source_code:[state.code,...dependencies].join('\n\n'),language_id:62,stdin:''})});if(!res.ok)throw new Error(`Runner returned HTTP ${res.status}`);const data=await res.json();con.textContent=data.stdout||data.compile_output||data.stderr||data.message||JSON.stringify(data,null,2);}catch(error){con.textContent=`Java Runner error: ${error.message}\n\nCheck the endpoint and CORS settings. Check Answer remains available.`;}}

$('loginForm').addEventListener('submit',e=>{e.preventDefault();try{$('loginError').textContent='';login($('studentName').value,$('studentId').value);}catch(error){$('loginError').textContent=error.message;}});
$('challengeList').addEventListener('click',e=>{const button=e.target.closest('[data-challenge]');if(button)selectChallenge(Number(button.dataset.challenge));});
$('fileTabs').addEventListener('click',e=>{const button=e.target.closest('[data-file]');if(button)selectFile(button.dataset.file);});
$('editor').addEventListener('input',()=>{if(openFile!=='main')return;state.code=$('editor').value;$('saveStatus').textContent='Saving…';clearTimeout(saveTimer);saveTimer=setTimeout(save,650);});
$('checkBtn').addEventListener('click',checkAnswer);$('runBtn').addEventListener('click',runCode);$('exportBtn').addEventListener('click',exportAssignment);$('logoutBtn').addEventListener('click',logout);
$('lab1Btn').addEventListener('click',()=>openLab('fashion'));$('lab2Btn').addEventListener('click',()=>openLab('trail'));$('chooseLabBtn').addEventListener('click',showLabSelect);$('selectLogoutBtn').addEventListener('click',logout);
$('resetBtn').addEventListener('click',()=>{if(!confirm('Are you sure?\n\nThis will delete your saved code and challenge progress on this device.'))return;localStorage.removeItem(storageKey(state.student.id));state=freshState(state.student.name,state.student.id);save();selectFile('main');selectChallenge(0);});
$('saveEndpoint').addEventListener('click',()=>{localStorage.setItem('judge0Endpoint',$('endpoint').value.trim());$('console').textContent='Java Runner endpoint saved on this browser.';});
window.addEventListener('beforeunload',()=>{if(state)save();});

const remembered=sessionStorage.getItem('fashionLab_currentStudent');if(remembered){activeLab='fashion';try{const stored=JSON.parse(localStorage.getItem(storageKey(remembered)));if(stored?.student){state=normalizeState(stored,stored.student.name,remembered);showLabSelect();}}catch(_){sessionStorage.removeItem('fashionLab_currentStudent');}}
