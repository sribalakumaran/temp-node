//Modules - app.js has function calls names.js has variable names utils.js has function implementation
// const names=require('./names')
// const sayHi=require('./utils')
// sayHi(names.john)
// sayHi(names.susan)
// sayHi('Bala')

// const os=require("os");
// const currentos={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem()
// }
// console.log(currentos)

//HTTPS modules

const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to our homepage")
    }
    if(req.url==='/about'){
        res.end("Welcome to our about page")
    }
    
})

server.listen(5000)