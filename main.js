function change_theme(){
        document.body.classList.toggle("dark")
        if(document.getElementsByClassName("logo").item(0).attributes.item(0).value=="Light_Naum.png"){
                document.getElementsByClassName("logo").item(0).attributes.item(0).value="Dark_Naum.png"
        }else{
                 document.getElementsByClassName("logo").item(0).attributes.item(0).value="Light_Naum.png"
        }

}
document.getElementById("about_me").hidden=true

function about_me(){
        document.getElementById("about_me").hidden=false
        document.getElementById("home").hidden=true


}
function home(){
        document.getElementById("about_me").hidden=true
        document.getElementById("home").hidden=false
}