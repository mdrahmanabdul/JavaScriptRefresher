console.log('---------------CREATING AN OBJECT-------------------');

//OBJECT LITERAL
const bike = {
    type : 'Sports',
    mileage : '43Kmpl',
    topSpeed : 120
}

//CONSTRUCTOR FUNCTION
function createBike(type,mileage,topSpeed){
    this.type = type;
    this.mileage = mileage;
    this.topSpeed = topSpeed;  
}
const pulsur = new createBike("Sports",'35kmpl',120);
console.log(pulsur);


//CLASS SYNTAX
class Bike{
    constructor(name,mileage,topSpeed){
        this.name=name;
        this.mileage=mileage;
        this.topSpeed=topSpeed;
    }
}
const activa = new Bike("Activa",'45kmpl',100);
console.log(activa);


//OBJECT.CREATE()
const bike2 = Object.create(bike);
bike2.type = "Unicorn",
bike2.mileage = 45,
bike2.topSpeed = 150
console.log(bike2);


//FUNCTION CONSTRUCTOR WITH NEW
const bike3 = new createBike();
bike3.type = "Sports";
bike3.mileage = '45kmpl',
bike3.topSpeed='120';
console.log(bike3);


//OBJECT.ASSIGN
const target = {a:1,b:2};
const source = {c:3,d:4};

var result = Object.assign(target,source);
console.log(result);

const source2 = {e:5,f:6}; 
result = Object.assign(target,source,source2);  //can add multiple sources also
console.log(result);



//DESTRUCTURING ASSIGNMENT
const {type,mileage,topSpeed} = bike3;
const bike4 = {type,mileage,topSpeed};
console.log(bike4);


//FACTORY FUNCTION
function createNewBike2(bikeName, mileage, topSpeed){
    return{
        bikeName,
        mileage,
        topSpeed
    };
}
const bike5 = createNewBike2("Pulsor200",'30kmpl',120);
console.log(bike5);
