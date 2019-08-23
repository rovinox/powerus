module.exports={
    getAll: (req, res) =>{
        const db = req.app.get("dbInstance")
    
        db.get_all().then((responce)=>{
            console.log(responce);
            res.status(200).json(responce)
        })
    }

    
}