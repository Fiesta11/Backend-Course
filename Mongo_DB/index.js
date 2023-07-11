const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/test_database')
.then(() => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt connect to mongodb' , err))

const course_schema = new mongoose.Schema(
    {
        name : {type : String , required : true , minlength : 5 , maxlength : 100},
        creator : {type : String , required : true} ,
        published_date : {type : Date, default : Date.now},
        is_published : {type : Boolean , required : true},
        rating : {type : Number , required : function(){
            return this.is_published
        }}
    }
)
const Course = mongoose.model('Course' , course_schema)

async function create_course(){
    const course = new Course(
        {
            name : 'C++',
            creator : "Utsav",
            is_published : false
        }
    );
    try{
        await course.validate()
    // const result = await course.save();
    // console.log(result);
}
    catch(error){
        console.log(error.message);
    }
}

async function get_course()
{
    const course = await Course.find({rating : {$in : [4.7 , 4.8]}}).select({name : 1 , published_date : 1});
    console.log(course);
}


async function update_course(id)
{
    let course = await Course.findById(id);

    course.name = 'DSA'
    course.creator = "Sandeep"

    const u_course =  await course.save();

    console.log(u_course);

}

async function delete_course(id)
{
    let course = await Course.findByIdAndDelete(id);
    console.log(course);
}

create_course()
// delete_course('64a97540b2a45e1e5ce79464');
// update_course('64a9766f732eebd9aed13dfb')
// get_course()
// create_course()
