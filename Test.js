
var mysql = require('mysql');
var http = require ('http');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'mydb',
})


connection.connect(function (err){
    if (err)
    console.log('con.disconnect');
    else
    console.log('con.connected');
})


http.createServer(function (request, response){

    if (request.url =='/update'){
        
        var update = "UPDATE teacher SET teacher_name = 'izack' Where teacher_code = 'Uchral'";

        connection.query(update, function (err, result) {
            if (err) {
                console.log('Update'+result);
            }else {
                console.log("update hiisen");
            }
        });
    }else if (request.url == '/delete'){

        var deleteQuery= "Delete from teacher Where teacher_name = 'Izack'";

        connection.query(deleteQuery, function (err, result){
            if (err){
                console.log('delete Ajilsangui');
            }
            else{
                console.log('delete Amjilttai');
            }
        })
    }else if (request.url == '/insert'){
        
        var insert = "INSERT INTO teacher (teacher_name, teacher_code) values ('zerotwo','hairtaishu' ) ";

        connection.query(insert, function (err, result){
            if (err){
                console.log('insert Ajilsangui');
            }
            else{
                console.log('insert Amjilttai');
            }
        })
    }else if (request.url == '/select'){

        var select = "SELECT * from teacher";

        connection.query(select, function ( err , result){
            if (err){
                console.log("SELECT aldaa");
            }else{
                console.log(result);
            }
        })
    }
}) .listen (8080);