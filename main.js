

function change_theme(){
        document.body.classList.toggle("dark")


}
document.getElementById("about_me").hidden=true

function  about_me(){
        document.getElementById("about_me").classList.add("active")
        document.getElementById("home").classList.remove("active")
        setTimeout(function () {
                document.getElementById("about_me").hidden = false
                document.getElementById("home").hidden = true
        }, 500)
}
function home(){
        document.getElementById("about_me").classList.remove("active")
        document.getElementById("home").classList.add("active")
         setTimeout(function (){
        document.getElementById("about_me").hidden=true
        document.getElementById("home").hidden=false
        },500)
}