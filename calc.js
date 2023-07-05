function add(a ,b)
{
    console.log(a+b);
}

function subt(a , b)
{
    console.log(a-b);
}
function mult(a , b)
{
    console.log(a * b);
}
function div(a , b)
{
    console.log(a / b);
}
function mod(a , b)
{
    console.log(((a%b)+b)%b);
}

module.exports = {
    addition : add ,
    subtraction : subt,
    product : mult,
    division : div,
    modulus : mod
}