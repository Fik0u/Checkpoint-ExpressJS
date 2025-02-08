const express = require('express')

const app = express()

require("dotenv").config()

app.set("view engine", "ejs")
app.use(express.static('public'))

const checkin = require("./middlewares/checkin.js")
// app.use(checkin)


app.get("/accueil", (req, res) => {
    res.render("accueil")
})

app.get("/services", (req, res) => {
    res.render("services")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})


PORT = process.env.PORT;

app.listen(PORT, (err) => {
    err ? console.log(err) 
        : console.log(`Server is running on port ${PORT}`)
})