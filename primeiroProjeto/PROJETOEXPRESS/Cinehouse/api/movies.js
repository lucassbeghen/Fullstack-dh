const {fstat} = require("fs")

module.exports = app => {
   const get = (req,res) => {
     try{
      res.status(200).json({id: 1, name:"Harry Potter", ano: 2001})
     }
    catch(err){
      res.status(500).json({error: true, msg: "erro no servidor"})
    }


  }
    const getbyid = (req,res) => {
        const movieid = req.params.id
        const movie = db.filter(register =>  register.id = movieid)
        res.status(200).json(movie)
    }
 const post = (req,res) => {
      const movie = req.body
      db.push(movie)
       try{
           fs.writeFileSync('../movies.json', JSON.stringify(db))
           res.status(201).json(movie.id)
       }
       catch(err){
         console.log(err)
         res.status(500).json(err)
       }
   }
    return { get, getbyid, post }
}