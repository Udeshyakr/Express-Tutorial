// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type': 'text/'})// this is an header
//     res.write('<h1> home page </h1>')// this is the body od a msg

//     console.log('User hit the server.')
//     res.end()
//     //this method response.end() must be called on each response
// })

// server.listen(8000)

const http = require('http')
// access the file
const {readFileSync} = require('fs')
// we are using this readFileSync because we are not invoking this method.
// when we use inside the proises readFile method then we invoke it as it is inside the function. 

//get all files

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage =  readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) =>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
         // this is an header
    }
    //styles
    else if(url ==='/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('about page')
        res.end()
    }
    else if(url ==='/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write('about page')
        res.end()
         // this is an header
    }
    else if(url ==='/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write('homeImage')
        res.end()
         // this is an header
    }
    else if(url ==='/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javacript'})
        res.write('homeLogic')
        res.end()
         // this is an header
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('page not found')
        res.end()
    }
})

server.listen(8000)
