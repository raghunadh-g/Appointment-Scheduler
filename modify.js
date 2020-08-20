console.log(firebase.database());

var b=document.getElementById("sub");

function writeUserData(tempname,tempphone,date,time,status){
    console.log("hi likith");
    
    
    var re=firebase.database().ref("appointment/"+tempphone);
    re.update({
        "name":tempname,
        "phonenum":tempphone,
        "date":date,
        "time":time,
        "status":status,
    });
    
}

function read(){
    
    var name = document.getElementById("name");

var phone = document.getElementById("phone");
let userref=firebase.database.ref('appointment/').child(phone).set(null);
var date=(document.getElementById("daten"));
var time=(document.getElementById("timen"));
document.getElementById("para").innerHTML=name;
writeUserData(name.value,phone.value,date.value,time.value,"pending");
}

