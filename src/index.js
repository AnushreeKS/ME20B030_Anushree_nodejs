const express = require("express");
const validator = require("email-validator");
const verifier = require("email-verify");

const app = express();
require("./db");
const Product = require("./models");

app.use(express.json());

app.post('/api/products', async (req, res) => {
    try{
        if(validator.validate(req.body.email)){
                const product = Product({
                    name: req.body.name,
                    email: req.body.email
                })
                await product.save();
                console.log(" Successfully added !!! ")
        }
        else{
            console.log(" email is not ryt");
        }
       
    
    //console.log(req.body.title);
    return res.send("Api working");
    } catch (e) {
        return res.status(500).send(e);
    }
});

app.get('/api/products', (req,res) => {
    return res.status(200).send({"title" : "SSchool"})
})

app.listen(3000, ()=>{console.log("Listening")})