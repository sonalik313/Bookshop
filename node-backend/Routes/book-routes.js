// routes
const express= require("express");
const app = express();
const bookRoute =express.Router(); 
let Book =require("../model/Book");

// add Book
bookRoute.route('/add-book').post((req, res, next)=>{
    Book.create(req.body,(error, data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    });
});
// get all data/bool from store
bookRoute.route('/').get((req,res)=>{
    Book.find((error,data)=>{
        if(error){
           return next(error)
        }
        else{
            res.json(data)
        }

    });
});
// get book by id
bookRoute.route('/read-book/:id').get((req,res)=>{
    Book.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
         }
         else{
             res.json(data)
         }
    });
});
// update
bookRoute.route('/update-book/:id').put((req,res,next)=>{
    Book.findByIdAndUpdate(req.params.id,{$set:req.body},
        (error,data)=>{
        if(error){
            return next(error)
            console.log(error)
         }
         else{
             res.json(data)
             console.log('Book updated successfully')
         }
    });
});

bookRoute.route('/delete-book/:id').delete((req,res,next)=>{
    Book.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
         }
         else{
             res.status(200).json({msg:data})
         }
    });
})

module.exports= bookRoute;