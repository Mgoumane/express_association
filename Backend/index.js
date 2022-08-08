const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
app.listen(port ,(req, res)=> {
    console.log('Serveur lancé')
})
 
const listeKonexio = [];

const informationKonexio = [];

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.post("/konexio", (req,res)=>{
    listeKonexio.push(req.body);
    res.send("Bénévole enregistré")
    console.log("Voici la liste des bénévoles :");
    console.log(listeKonexio);
})

// app.post("/informationKonexio", (req,res)=>{
//     informationKonexio.push(req.body);
//     console.log(informationKonexio);
//     res.send("information enregistré")
// })

