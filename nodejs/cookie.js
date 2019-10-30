
const express = require('express')
const app = express();
var cookie = require('cookie')
app.get('/',(function(request, respons){
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
                ,"Path=Path; Path=/cookie"
                ,"domain=domain; Domain=o2.org"
            ]}
        ) 
     respons.end('Cookie!!')
     
 }))

 app.listen(port=3000,function(){
    console.log(`Example app listening on port ${port}!`)
 })
