console.log(firebase);
console.log(firebase.database());
var db=firebase.database();

var reemail=document.getElementById("regemail");
var repassword=document.getElementById("regpass");
var recon=document.getElementById("regconfirm");

function register()
{
    if(repassword.value==recon.value)
    writeUserData(reemail.value,repassword.value);
    else
        document.getElementById("check").innerHTML="check password and confirm password";

}

function writeUserData(Email,Password){

    db.ref('users/').push().set({
        email:Email,
        password:Password

    });
}

var email=document.getElementById("mail");
var password=document.getElementById("pass");

function login(){
    db.ref('users/').on('value',function(snapshot){
        var users=snapshot.val();
        for(var key in users)
        {
            var user=users[key];
            if(user.email==email.value&&user.password==password.value)
            {
                window.location.href="home.html";
            }
            else
            {
               document.getElementById("hh").innerHTML="Invalid UserName or Password";
               // location.reload();
            }
        }
    });
}