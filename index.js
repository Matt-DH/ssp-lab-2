const { readFile } = require('fs').promises
const express = require('express')

const app = express();

app.get("/", async (request, response) => {
    
    response.send(await readFile("./index.html", "utf8")) 

})

app.get("/about", async (request, response) => {
    
    response.send(await readFile("./about.html", "utf8")) 

})

app.get("/contact", async (request, response) => {
    
    response.send(await readFile("./contact-me.html", "utf8")) 

})

app.use( async (req, res, next) => {
    res.status(404).send(await readFile("./404.html", "utf8"))
    })

app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"))