// schema
const mongoose =require('mongoose');
const schema_b = mongoose.Schema;
let Book = new schema_b({
    name:{
        type:String

    },
    price:{
        type:String
    },
    description:{
        type:String
    }
    
})

// export module

module.exports= mongoose.model('Books',Book)
