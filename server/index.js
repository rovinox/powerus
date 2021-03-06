require("dotenv").config()
const express = require("express");
const session = require("express-session")
const massive = require("massive");



const app = express()
app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );
const {CONNECTING_STRING, SERVER_PORT} = process.env





massive(CONNECTING_STRING).then(db => {
    app.set("db",db)
    console.log("Database Connected")
}).catch(error => console.log(error, "database did not connect"))




app.get("/api/amp", (req, res) =>{
    const db = req.app.get("db")
    db.getAmps().then((responce)=>{
        
        res.status(200).json(responce)
    })
})

app.get("/api/amp/:id", (req, res) =>{
    const db = req.app.get("db")
       
        db.getting_one(+req.params.id).then(responce =>{
            
            res.status(200).json(responce)
            
        })

})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))