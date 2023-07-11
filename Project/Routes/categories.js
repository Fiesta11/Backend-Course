const express = require('express')

const mongoose = require('mongoose')

const joi = require('joi');

const router = express.Router()

const category_schema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30}
})

const Category = mongoose.model('Category' , category_schema)

// const categories = [
//     {id : 1 , name : 'Web Development'},
//     {id : 2 , name : 'Digital Marketing'},
//     {id : 3 , name : 'Machine Learning'},
//     {id : 4 , name : 'Programming'},
// ]

router.get('/api/categories' ,  async (req , res) =>{
    let categories = await Category.find()
    res.send(categories);
});

router.post('/api/categories' , async (req , res) =>{

    const {error} = validate_data(req.body)
    const category = new Category ({
        name : req.body.name
    })
    if(error)
    {
        res.status(400).send(error.details[0].message)
    }
    await category.save();
    res.send(category); 
})

router.get('/api/categories/:id' , async(req , res) =>{
    const category = await Category.findById(req.params.id);

    if(!category)
    {
        return res.status(404).send("The Category with the given id was not Found");
    }

    res.send(category);
})
router.put('/api/categories/:id' , async (req , res) =>{

     const{error} = validate_data(req.body);  
     
     if(error)
        res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id , {name : req.body.name} , {new : true})

    if(!category)
    {
        return res.status(404).send("The Category with the given id was not Found");
    }
    res.send(category);
});

router.delete('/api/categories/:id' , async (req , res) =>{
    const category = await Category.findByIdAndDelete(req.params.id)

    if(!category)
        return res.status(404).send("NOt found");

    res.send(category);  
})

function validate_data(category){
    const schema = {
        name : joi.string().min(3).required()
    }

   return joi.validate(category , schema)
}

module.exports = router;