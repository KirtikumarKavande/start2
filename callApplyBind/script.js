//properties
var obj={num:2}   

//method
var addToThis=function(a)
{
    return this.num +a
}

//use method on properties
// it attaches function(method) to object(properties)

//1)call
//functionName(obj,functionArguments)
//here argument can be multiple
result=addToThis.call(obj,3)
console.log(result)

//output :5


//2)apply here no need to pass differently an argument here we can combine argument in an array

var addToThis2=function(a,b,c)
{
    return this.num +a+b+c
}

arr=[2,3,4]
result1=addToThis2.apply(obj,arr)
console.log(result1)

//3)bound
var addToThis3=function(a,b,c)
{
    return this.num +a+b+c
}

arr2=[5,6,7]
var bound=addToThis3.bind(obj)
console.log(bound)
result3=bound(5,6,7)
console.log(result3)



//------------------------------------------------------------------

studentAge={age:20}

studentDetails=function()
{
    console.log(`age of student is ${this.age}`)
}

studentInfo=studentDetails.bind(studentAge)
studentInfo()

//---------------------------------------------------------------
//-------------curring
function addition(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

let res1=addition(2)
console.log(res1)
let res2=res1(3)
console.log(res2)
res3=res2(4)
console.log(res3)



