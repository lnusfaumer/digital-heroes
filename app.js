const express = require ("express")
const app = express()
let heroes = require("./heroes.json")


app.get ("/", function(req, res){
      res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes cÃ³mo las y los Heroes de carne yhueso que encontrarÃ¡s en este sitio. Esperamos que ellas y ellos te sirvan comoinspiraciÃ³n para poder cumplir tus objetivos. Recuerda: Â¡nunca pares de creer enti!.")

})
app.get ("/heroes", function(req, res){
      res.send(heroes)

})


app.listen(3000)