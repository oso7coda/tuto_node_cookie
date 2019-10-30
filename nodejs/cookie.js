var http = require('http')
var cookie = require('cookie')
 http.createServer(function(request, respons){
     console.log(request.headers.cookie);
     var cookies = {};

     if(request.headers.cookie!==undefined){
         var cookies = cookie.parse(request.headers.cookie);
         console.log(cookies.yummy_cookie)
        }
        respons.writeHead(200,{'Set-Cookie':
            [
                'yummy_cookie=choco'
                ,'tasty_cookie=strawberry'
                ,`Permanent=cookies;Max-Age=${60*60*23*30}`
                ,"Secure=secure; Secure"
                ,"HttpOnly=HttpOnly; HttpOnly"
            ]}
        ) 
     respons.end('Cookie!!')
     
 }).listen(3000);