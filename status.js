var database = firebase.database().ref().child('appointment');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(data){
            var date= data.val().date;
            var name= data.val().name;
            var phone=data.val().phonenum;
            var status=data.val().status;
            var time=data.val().time;
            content += '<tr>';
            content += '<td>' + name + '</td>'; 
            content += '<td>' + phone + '</td>';
            content += '<td>' + date + '</td>'; 
            content += '<td>' + time + '</td>';
            content += '<td>' + status + '</td>';
            content += '</tr>';
        });

        $('#table_body').append(content);
    }
});

