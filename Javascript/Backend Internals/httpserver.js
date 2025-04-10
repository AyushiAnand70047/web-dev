const http = require('http')

const server = http.createServer(function(req,res){
    console.log('Incoming request came')
    switch(req.method){
        case 'GET': {
            if(req.url === '/')
                return res.end('Home page')
            if(req.url === '/contact-us')
                return res.end('Contact Us page')
            if(req.url === '/about-us')
                return res.end('About Us Page')
        }
        break
        case 'POST': {}
    }
})

server.listen(8000, function(){
    console.log('Server started')
})

// node httpserver.js
// curl http://localhost:8000