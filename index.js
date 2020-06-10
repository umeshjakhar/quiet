var server = require('diet');

var app = server();

app.get('/', function($){ $.sendFile('./public/index.html') })
app.post('/upload', function($){ $.end('multipart: ' + $.multipart) })

app.header(function($){
    console.log({
        url: $.url,
        method: $.method,
        body: $.body,
        multipart: $.multipart
    });

    $.header('Access-Control-Allow-Origin', '*');
    $.header('Access-Control-Allow-Headers', 'Content-Type');
    $.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    $.header('Access-Control-Allow-Credentials', true);
    
    $.return();
});


var static  = require('diet-static')({ path: app.path+'/public/' });

app.view('file', static);

app.listen("http://localhost:8000");