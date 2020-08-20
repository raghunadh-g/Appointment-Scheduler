console.log(firebase.database());

var b=document.getElementById("sub");

function writeUserData(tempname,tempphone,date,time,status){
    console.log("hi likith");
    firebase.database().ref('appointment/').child(tempphone).set({
        name:tempname,
        phonenum:tempphone,
        date:date,
        time:time,
        status:status,
    });
}

function read(){
    var name = document.getElementById("name");

var phone = document.getElementById("phone");

var date=(document.getElementById("daten"));
var time=(document.getElementById("timen"));
document.getElementById("para").innerHTML=name;
writeUserData(name.value,phone.value,date.value,time.value,"pending");
}

