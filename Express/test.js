const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(function(req , res , next)
{
    console.log("I am Middleware");
    next()
})

app.use(function(req , res , next)
{
    console.log("I am Second Middleware");
    next()
})

let courses = [
    {id : 1 , name : 'python'},
    {id : 2  , name : 'java'} ,
    {id : 3 , name : 'react'} , 
    {id : 4 , name : 'c++ '},
]


app.post('/courses' , (req , res) =>{
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.put('/courses/:cname' , (req , res) =>{
    let course = courses.find(course => course.name === req.params.cname);

    course.name = req.body.name;
    res.send(course);
})

app.delete('/courses/:cnames' , (req , res) =>{

    let ucourses = courses.filter(course => course.name !== req.params.cnames)

    courses = ucourses;
    res.send(courses); 
})
app.get('/' , function(req , res){
    res.send("Hello From Utsav")
})

app.get('/about' , (req,res) =>{
    res.send("I work Hard")
})

app.get('/contact' , (req , res) =>{
    res.send("Contact me via Email or Linkedin");
})
const port = 7000 || process.env.PORT
app.listen(port , ()=> console.log(`port is running on ${port}`))

app.get('/courses' , (req,res) =>{
    res.send(courses)
})

// app.get('/courses/:id' , (req , res) =>{
//     console.log(req.params);
//     let course = courses.find(course => course.id === parseInt(req.params.id))

//     if(!course)
//     {
//         res.status(404).send('404 Not Found');
//     }
//     res.send(course);
// })


// routing parameter


app.get('/courses/:name' , (req , res)=>{
    let course = courses.find(course => course.name === (req.params.name))

    if(!course)
    res.status(404).send('The course does not exist')

    res.send(course);
})

