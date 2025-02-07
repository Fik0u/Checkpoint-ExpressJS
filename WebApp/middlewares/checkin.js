function checkin (req, res, next){
    const date = new Date();
        console.log(date)

    const jour = date.getDay();
        console.log(jour)

    const heure = date.getHours();
        console.log(heure)
    
    if(jour > 0 && jour < 6 && heure >= 9 && heure < 17){
        next();
    }
    else{
        res.render("erreur");
    }
}

module.exports = checkin