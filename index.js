// let -> scope
// var -> global

//! Data Types

// 8ta data typelar bor 
// String , Number , BigInt , Boolean , Undefined , null , Symbol , Object

// console.log(undefined == null);
// let a = undefined , b = null;
// console.log(typeof a , typeof b);
// nullnu typesi object

// console.log(isNaN(NaN));

//! primitive vs nonPrimituive

//primitive pass by value
//nonPrimitive pass by reference

// const obj = {
//     name:'jasurbek',
//     age:19
// }
// const name = 'jasubek'

// let t = Symbol('text')
// console.log(t);

//!Type Convertion
 
// let m = '1,45vsfsvsb' , n = 10.5;

// console.log(parseFloat(n));

// let a = 1

// a++

//!logical operation

// console.log('sijn' || 'one');
// console.log('isjbnve' && 'jasur');
// console.log(undefined ?? 'skjdvbjkb');

// console.log(0 ?? 1);

// switch (20*10) {
//     case 200:
//         console.log('yes');
//         break;
//     default:
//         console.log('no');
//         break;
// }

//!For loop

// let i =5 

// for( ;i < 10; i++){
//     console.log(i);
// }

//!While loop

// a = 0
// while(a < 50){
//     console.log(a);
//     a++
// }

// a = 0
// do{
//     console.log(a);
//     a++
// }while(a < 20)

//! Function
//!hosting -> varable toki functionlarni yuqoriga olib chiqib declaer qilshiga hosting deyiladi

// function none() {}
// let none = function() {}
// const no = () => {}

// lexical envoirment -> function ichida global oczgaruvchi ishlatilsa

// a = 50

// function b(){
//     let a = 5
//     console.log(a);
// }

// console.log(a);
// b()

//!Object

// let emptyObj = new Object()

// emptyObj.name = 'jasur'

// // delete emptyObj.name
// console.log(emptyObj);

// let obj = {
//     name : 'jasurbek',
//     age : 19
// }

// Object.seal(obj)

// // delete obj.name no
// // obj.st  = 'student' no
// // obj.age = 50 yes

// console.log(obj);

// let obj1 = {name:'jasurbek'}
// let obj2 = structuredClone(obj1)

// obj1.age = 20

// Object.assign(obj1 , obj2)
// console.log(obj1);
// console.log(obj2);


// let name = 'jasurbek';

// obj = {
//     name
// }

// console.log(obj);


// for (const key in obj) {
//     console.log(obj[key]);
// }

// obj = 'jasur'

// console.log(obj);

// let obj = 
// {
//     name:'fvdf',
//     func(){
//         console.log(this.name);
//     }
// }

// obj.func(10)

//!optional chaining

// let user = {
//     id:1,
//     name:'jasur',
//     age:19,
//     status:'student',
//     obj:{
//         // age:20
//     }
// }

// console.log(user.name);
// console.log(user?.obj?.age);

// const {id , name , age} = user

//!Number

console.log(0.0005.toFixed(5));

// let a = '0.5 + 0.6';

// console.log(Number(a)); //nan
// console.log(parseFloat(a));// 0.5
// console.log(parseInt(a)); // 0
// console.log(eval(a));//1.1
