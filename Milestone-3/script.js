var form = document.getElementById("resume-form");
var resumedisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumehtml = "\n<h2><b>Resume</b></h2>\n<h3> Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n\n<p><b>Email:</b>").concat(email, "</p>\n\n<p><b>Phone:</b>").concat(phone, "</p>\n\n<h3>Experience</h3>\n<p><b>Experience:</b>").concat(experience, "</p>\n\n<h3>skills</h3>\n<p><b>skills:</b>").concat(skills, "</p>\n\n\n");
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error("The resume display element is empty");
    }
});
