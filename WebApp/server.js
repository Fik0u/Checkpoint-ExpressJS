const express = require('express')

const app = express()

require("dotenv").config()

// On fait appel au template engine EJS
app.set("view engine", "ejs")
app.use(express.static('public'))

// La fonction de notre middleware
const checkin = require("./middlewares/checkin.js")
// app.use(checkin)



// Nos routes
app.get("/accueil", (req, res) => {
    res.render("accueil")
})

app.get("/services", (req, res) => {
    res.render("services")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})



//Importation du port
PORT = process.env.PORT;


// Le serveur sur écoute
app.listen(PORT, (err) => {
    err ? console.log(err) 
        : console.log(`Server is running on port ${PORT}`)
})