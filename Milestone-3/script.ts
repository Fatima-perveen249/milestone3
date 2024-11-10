const form = document.getElementById("resume-form") as HTMLFormElement;

const resumedisplayElement = document.getElementById("resume-display") as HTMLDivElement

form.addEventListener ("submit",(event:Event) =>{
    event.preventDefault();

const name =(document.getElementById("name") as HTMLInputElement).value

const email =(document.getElementById("email") as HTMLInputElement).value

const phone =(document.getElementById("phone") as HTMLInputElement).value

const education =(document.getElementById("education") as HTMLInputElement).value

const experience =(document.getElementById("experience") as HTMLInputElement).value

const skills =(document.getElementById("skills") as HTMLInputElement).value

const resumehtml = `
<h2><b>Resume</b></h2>
<h3> Personal Information</h3>
<p><b>Name:</b>${name}</p>

<p><b>Email:</b>${email}</p>

<p><b>Phone:</b>${phone}</p>

<h3>Experience</h3>
<p><b>Experience:</b>${experience}</p>

<h3>skills</h3>
<p><b>skills:</b>${skills}</p>


`;
if(resumedisplayElement){
    resumedisplayElement.innerHTML = resumehtml;
} else {
    console.error("The resume display element is empty");
}
});