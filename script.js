let data = [];

/* LOAD JSON FIRST */
fetch("data.json")
.then(res => res.json())
.then(json => {
data = json;
init();   // run your original logic AFTER loading
});

/* ALL YOUR ORIGINAL CODE SAME */
function openAuth(){authBox.style.display="flex";}
function register(){localStorage.setItem(user.value,pass.value);authMsg.innerText="Registered";}
function login(){
if(localStorage.getItem(user.value)==pass.value){
landing.style.display="none";
authBox.style.display="none";
app.style.display="block";
loadProfile();
}else{authMsg.innerText="Wrong";}
}
function logout(){app.style.display="none";landing.style.display="flex";}
function show(id){
document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}
function saveProfile(){
let profile={name:pname.value,age:age.value,marks:marks.value,income:income.value,category:category.value,gender:gender.value,course:course.value};
localStorage.setItem("profile",JSON.stringify(profile));
profileMsg.innerText="Saved ";
}
function loadProfile(){
let p=JSON.parse(localStorage.getItem("profile"));
if(p){
pname.value=p.name||"";
age.value=p.age||"";
marks.value=p.marks||"";
income.value=p.income||"";
category.value=p.category||"";
gender.value=p.gender||"";
course.value=p.course||"";
}
}
function find(){
let s=search.value.toLowerCase();
let out="";
data.forEach(d=>{
if(d.name.toLowerCase().includes(s)){out+=card(d);}
});
result.innerHTML=out;
}
function card(d){
return `<div class="card">
<h3>${d.name}</h3>
<div class="schemeRow">
<a href="${d.link}" target="_blank">Apply</a>
</div>
</div>`;
}

/* YOUR ORIGINAL onload LOGIC MOVED HERE */
function init(){
let html="",guide="";

data.forEach(d=>{
html+=card(d);

guide+=`<div class="card">
<h4>${d.name}</h4>
<p><b>Step 1:</b> Search about this scholarship</p>
<p><b>Step 2:</b> Watch proper guidance before applying</p>
<p><b>Step 3:</b> Understand eligibility & documents</p>
<p><b>Step 4:</b> Then apply safely</p>

<a href="https://www.youtube.com/results?search_query=${d.name.replace(/ /g,'+')}+scholarship+how+to+apply" target="_blank">
 Reference links
</a>
</div>`;
});

allSchemes.innerHTML=html;
guideList.innerHTML=guide;
}

function apply(n){alert("Applied: "+n);}
function chat(){chatBox.innerHTML+="<p>Use Finder</p>";}
function checkScam(){
if(scamInput.value.includes(".gov")){scamResult.innerText="Safe";}
else{scamResult.innerText="Careful";}
}