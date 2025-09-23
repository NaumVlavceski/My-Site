
function toggleLanguage() {
    document.querySelectorAll(".lang").forEach(el => el.classList.toggle("active"));
    if (document.getElementById("changeLangue").innerHTML==="<span>EN</span> <i class=\"fa-solid fa-globe\"></i>"){
            document.getElementById("changeLangue").innerHTML="<span>MK</span> <i class=\"fa-solid fa-globe\"></i>"
    }else{
            document.getElementById("changeLangue").innerHTML="<span>EN</span> <i class=\"fa-solid fa-globe\"></i>"
    }
}
function showSection(sectionId,button) {
     document.querySelectorAll(".section").forEach(el => el.classList.remove("active"));
    let mkSection = document.getElementById(sectionId);
    if (mkSection) mkSection.classList.add("active");
    let enSection = document.getElementById(sectionId + "_en");
    if (enSection) enSection.classList.add("active");
    document.querySelectorAll(".nav-link").forEach(el=>el.classList.remove("active"))
        button.classList.add("active")
}


function change_theme() {
        document.body.classList.toggle("dark");
}