function percentage(){const p=Number(document.getElementById('percent').value),n=Number(document.getElementById('number').value),o=document.getElementById('percentResult');if(!Number.isFinite(p)||!Number.isFinite(n)||p<0||n<0){o.textContent='Enter valid numbers.';return}o.textContent=p+'% of '+n+' = '+(p/100*n).toFixed(2)}function ageCalculator(){const raw=document.getElementById('dob').value.trim(),o=document.getElementById('ageResult');let m=raw.match(/^(\d{8})$/);if(m){const s=m[1];m=[null,s.slice(0,2),s.slice(2,4),s.slice(4,8)];}else{m=raw.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);}if(!m){o.textContent='Enter DOB as 07062009 or 07/06/2009';return}const d=Number(m[1]),mo=Number(m[2]),y=Number(m[3]),dob=new Date(y,mo-1,d),today=new Date();if(dob.getFullYear()!==y||dob.getMonth()!==mo-1||dob.getDate()!==d||dob>today){o.textContent='Enter a valid date.';return}let a=today.getFullYear()-y;const md=today.getMonth()-(mo-1);if(md<0||(md===0&&today.getDate()<d))a--;o.textContent='Age: '+a+' years'}function attendance(){const a=Number(document.getElementById('attended').value),t=Number(document.getElementById('totalClasses').value),o=document.getElementById('attendanceResult');if(!t||a<0||a>t){o.textContent='Enter valid classes.';return}o.textContent=(a/t*100).toFixed(2)+'% attendance'}
function createResume(){
const name=document.getElementById("resumeName").value;
const phone=document.getElementById("resumePhone").value;
const email=document.getElementById("resumeEmail").value;
const location=document.getElementById("resumeLocation").value;
const objective=document.getElementById("resumeObjective").value;
const education=document.getElementById("resumeEducation").value;
const skills=document.getElementById("resumeSkills").value;
const projects=document.getElementById("resumeProjects").value;
const certifications=document.getElementById("resumeCertifications").value;

const preview=document.getElementById("resumePreview");

preview.innerHTML=`
<div class="resume-document">
<h1>${name || "Your Name"}</h1>
<p>${phone} | ${email} | ${location}</p>

<h2>Career Objective</h2>
<p>${objective}</p>

<h2>Education</h2>
<p>${education}</p>

<h2>Skills</h2>
<p>${skills}</p>

<h2>Projects</h2>
<p>${projects}</p>

<h2>Certifications</h2>
<p>${certifications}</p>

<button onclick="window.print()">Print / Save as PDF</button>
</div>`;
}
