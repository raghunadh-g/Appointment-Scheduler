function login()
{
    var user=document.getElementById("mail").value;
    var pass=document.getElementById("pass").value;
    if(user=="teamliquid@gmail.com"&&pass=="cvr")
    window.location.href="admin.html";
    else
    document.getElementById("hh").innerHTML="wrong password";
}