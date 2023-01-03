//global
this.table = "my table";
console.log(this.table);

this.gardge = {
  table: "gardge table",
};
console.log(this.gardge.table);

//inside object
let johansRoom = {
  table: "johans table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  },
};
johansRoom.cleanTable();

this.mygardge = {
  table: "my table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  },
};
this.mygardge.cleanTable();

// this in  function
this.table = "func table";
funcClean = function (soap) {
  console.log(`cleaning ${this.table} using ${soap} `);
};
funcClean.call(this, "Dettol");

//this in inner function
innerTable = "my job";
const cleanInnerTable = function () {
  const innerFunction = (mysoap) => {
    console.log(`cleaning table using ${this.innerTable} using soap ${mysoap}`);
  };
  innerFunction("dettole");
};
cleanInnerTable();


innerTable = "my job";
const cleanInnerTable2 = function () {
    that=this
  const innerFunction =function(mysoap) {
    console.log(`cleaning table using ${that.innerTable} using soap ${mysoap}`);
  };
  innerFunction("dettole");
};
cleanInnerTable2();


//--------------------------------------------
class student {
  static count = 0; //static variable to call

  constructor(name, age, ph_no, marks) {
    this.name = name;

    this.age = age;

    this.ph_no = ph_no;

    this.marks = marks;

    student.countStudent();
    
  }

  static countStudent() {
    return student.count++; //this is how u access static variable
  }
 

  eligible() {
    if (this.marks >= 40) {
      console.log(`${this.name} age ${this.age} is eligible`);
    } else if (this.marks < 40) {
      console.log(`${this.name} age ${this.age} is not eligible`);
    }
  }
}

const Riya = new student("Riya", 18, 1234, 34);

const Hiya = new student("Hiya", 15, 2345, 35);

const Diya = new student("Diya", 16, 4567, 60);

const Siya = new student("Siya", 17, 7891, 70);

const Rooh = new student("Rooh", 19, 3456, 80);

console.log(student.countStudent());

Riya.eligible();

Hiya.eligible();

Diya.eligible();

Siya.eligible();

Rooh.eligible();

//------------------------------------


//fat arraow

var x=function()
{
  that=this
    this.val=1
setTimeout(function(){
  that.val++
    console.log(that.val)
},1000)
}
var xx=new x()


var x=function()
{
 
    this.val=1
setTimeout(()=>{
  this.val++
    console.log(that.val)
},1000)
}
var xx=new x()


var myVar=function()
{
  console.log("my argument",arguments[0])
}
myVar(1,2,3)

var myVar2=(...n)=>{
  console.log("my argument",n[0])
}
myVar2(1,2,3)



//-------------------problem given using fat arrow

class Students
{
  constructor(name,age,marks)
  {
  this.name=name;
  this.age=age;
  this.marks=marks
  }
  setAgeInfo(minAge){
    console.log("inside minAge",this)
    return  (minMarks)=>{
      console.log("inside setMarks",this)
          if( this.age>minAge && this.marks>minMarks)
          {
            console.log(`${this.name} is elgible`)
          }
          else{
            console.log(`${this.name} is not elgible`)

          }
    }
  }
}



kirti=new Students('kirti',24,75)
yuvi=new Students('yuvi',13,67)

kirti.setAgeInfo(18)(40)
yuvi.setAgeInfo(18)(40)









