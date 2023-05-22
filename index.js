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

// console.log(0.0005.toFixed(5));

// let a = '0.5 + 0.6';

// console.log(Number(a)); //nan
// console.log(parseFloat(a));// 0.5
// console.log(parseInt(a)); // 0
// console.log(eval(a));//1.1

// let a = 11;
// console.log(a.toString(16));

// console.log(Object.is('none' , 's'));

// let a = 0.0022205;

// console.log(a.toPrecision(10));

//!Math

// console.log(Math.PI);//3.14
// console.log(Math.abs(-10));//10
// console.log(Math.round(-0.55));//-1
// console.log(Math.ceil(-0.55));//-0
// console.log(Math.floor(-0.55));//-1
// console.log(Math.trunc(-0.55));//0
// console.log(Math.random() * 10);//0-1

// console.log(Math.sign(0));

//!String

// let str = 'jasurbek'//type string

// const str1 = new String('jasurbek') //type obj

// console.log(str1 === str);//false

// let a = 'jas'
// let b = 'jasur'
// a ning ichida b bolsa return  1 , a === b bolsa return 0 , a ning ichida bolmasa return -1
// console.log(a.localeCompare(b));

//! String Methods

let str = 'JasuebekOtelbayev'

//! indexOf()

// console.log(str.indexOf('v'));

//! lastIndexOf()

// console.log(str.lastIndexOf('v'));

//!includes()

// console.log(str.includes('Jas'));

//!endsWith()

// console.log(str.endsWith('bek'));

//!stertWith()

// console.log(str.startsWith("Jas"));

//!padEnd()

// console.log(str.padEnd(20 , 'n'));

//!padStart()

// console.log(str.padStart(30 , 'n'));

//!slice()

// console.log(str.slice(-7 , 16));

//!substring()

// console.log(str.substring(5));

//!substr()

// console.log(str.substr(10 , 5));

//!trim()

// console.log('        jasuebek'.trimStart().length);
// console.log('jasuebek       '.trimEnd().length);
// console.log('        jasuebek       '.trim().length);

//!split()

// let arr = str.split("a")

// console.log(arr.join(""));

//! concat()

// console.log('none'.concat(str));

//!valueOf()

// str = new String('jasurbek')
// console.log(str.valueOf());

//!for of 

// for (const i of str) {
//     console.log(i);
// }

//!Arrays

// let arr = [1 , 2 , 3 , 'jasur' , obj={}];

// console.log(arr[arr.length - 1]);

//!at();
// console.log(arr.at(-2));

// let array = new Array(5)

// array[0] = 'jasue'
// array[10] = 50

// console.log(array.length);

//! Array methods

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , ];

//! toString()

// console.log(typeof arr.toString("")); 1 , 2 , 3 , 4 , 5 , ...

//!join()

// console.log(arr.join('+')); 1+2+3+4+5+6+7+8+9

//!concat()

// console.log([0].concat(arr));[0,1,2,...]

// console.log([] == false);

//!js falsy valuse
//! false , null , undefined , "" , [] , 0 , NaN

//!for loop

// for(let i = 0; i < arr.length; i++){
//     console.log(i , arr[i]-1);
// }

//!For of

// for(let i of arr){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(typeof i);
// }

//!push()

// arr.push('none')

//!pop()

// arr.pop()

//!unshift()

// arr.unshift('none');

//!shift()

// arr.shift()

//!splice()

// let b = arr.splice(0 , 5)
// console.log(arr);
// console.log(b.concat(arr));

//!slice()

// console.log(arr.slice(0 , 5));

//!indexof()

// console.log(arr.indexOf('none'));

// console.log('jasuebka'.indexOf("a"));

//!lastIndeOf();

// console.log(arr.lastIndexOf(8));
// console.log(arr.indexOf(8));

//!split()

// arr = 'jasurbek'.split('')

// console.log(arr);

//!reverse

// console.log(arr.reverse());

//!includes()

// console.log(arr.includes(5));

//!filter()

// let res = arr.filter((e) => {
//     return e === 5
// })

// console.log(res);

//!sort()

// let res = arr.sort((a , b) => b - a)
// console.log(res);

// arr = ['a' , 'm' , 'b' , 'r' , 'p']

// console.log(arr.sort((b , a) => a.localeCompare(b)));

//!find()

// let res = arr.find((e) => false)
// console.log(res);

//!findIndex()

// console.log(arr.findIndex((e) => e = 1));
// console.log(arr.indexOf(1));

//!forEach()

// arr.forEach((e) => {
//     console.log(e);
// })

//!map()

// let res = arr.map(e => (e > 5)) 

// console.log(res);

//!every()

// console.log(arr.every((a) => a > 0));

//!some()

// console.log(arr.some((e) => e > 0));

//!fill() 

// let res = arr.fill(0 , -1)
// console.log(res);

//!copyWithIn()

// let res = arr.copyWithin(0 , 2 , 5)
// console.log(res);

//!flat()

// arr = [0 , [1 , [2 , [3 , 0] , 4] , 5] , 6]

// console.log(arr.flat(Infinity));

//!flatMap()

// let res = arr.flatMap((e) => e)

// console.log(res);

//!reduce()

// let res = arr.reduce((curr , value) => {
//     console.log(curr + ' and ' + value + ' then ' + eval(curr + value));
//     return curr + value
// } , 0)

//!CRUD

// let users = [
//     {id:1 , name:'eshamat' , age:15},
//     {id:2 , name:'toshmat' , age:5},
//     {id:3 , name:'xolmat' , age:20},
//     {id:4 , name:'gulmat' , age:50},
//     {id:5 , name:'oshmat' , age:16},
// ]

//!read filter sort 

// let res = users.filter((e) => {
//     return e.age > 18
// })

//!delate filter

// const delate = (id) => {
//     users = users.filter((e) => e.id !== id);
// }

// delate(4)

//!create

// const add = ({name , age}) => {
//     users = [...users , {id:users.length + 1 ,name , age}] 
// }

// add({name:'jasur' , age:19})

//!update

// const update = (id , name , age) => {
//     let res = users.map((e) => {
//         if(e.id == id) {
//             e.name = name;
//             e.age = age;
//         }
//         return e
//     })
//     users = res
// }

// update(6 , 'jasurbek' , 9)
// update(1 , 'jasurbek' , 9)

// console.log(users);


// let [a , b , c , d , f] = users

// console.log(a.age);


//! Date()

// let date = new Date();

// console.log(date.getDate()); //22
// console.log(date.getDay());//1
// console.log(date.getMonth());//4 -> may
// console.log(date.getFullYear());//2023
// console.log(date.getTime()); // 1970dan boshlab sekund
// console.log(date.getMinutes());//41
// console.log(date.getSeconds());//52
// console.log(Date.now());

//!JSON

// let user = {
//     id:1,
//     name:'jasurbek',
//     surname:'otelbayev',
//     age:19,
//     status:'student',
// }


// user = JSON.stringify(user , ['id' , 'name' , 'surname' , 'age'] , 2)

// console.log(user);
// console.log(JSON.parse(user));

//!Map()

// let map = new Map([['name' , 'jasur'] , ['age' , 19] , ['status' , 'student']]);

// map.name = 'jasurbek'

// console.log(map);
// map.set('name' , 'jasurbek')
// map.set('age' , 19)
// map.set('status' , 'student')


// console.log(map.get('age'));
// console.log(map.has('status'));

// map.delete('age')

// map.clear()

// console.log(map);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for (const iterator of map.entries()) {
//     console.log(iterator);
// }

// let gen = map.entries();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//!Set();

// let set = new Set(['jasurbek' , 'otelbayev' , 19]);
// console.log(set);
// set[0] = 'jasure' 

// set.add('jasurbek');
// set.add('otelbayev');
// set.add(19)
// set.add(19)

// console.log(set.has(19));
// set.delete(19)
// set.clear()
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

// let gen = set.entries();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//! Recursion function

// let webbrain = {
//     frontend:[
//         {course:'react' , price:1},
//         {course:'vue' , price:1},
//         {course:'angular' , price:1},
//     ] , 
//     backend:[
//         {course:'java' , price:1},
//         {course:'php' , price:1}
//     ],
//     mobile:{
//         andriod:[
//             {course:'flutter' , price:1}
//         ],
//         ios:[
//             {course:'dart' , price:1}
//         ]
//     }
// }


// let sum = 0;
// function recursion(obj) {
//     if(Array.isArray(obj)){
//         obj.map((e) => {
//             sum += e.price
//         })
//     } else {
//         for (const i in obj) {
//             recursion(obj[i])
//         }
//     }
//     return sum
// }

// console.log(recursion(webbrain));


// function recursionReduce(obj){
//     if(Array.isArray(obj)){
//         return obj.reduce((a,b) => a + b.price , 0);
//     } 
//     else {
//         let sum = 0
//         for (let i of Object.values(obj)) {
//             sum += recursionReduce(i)
//         }
//         return sum
//     }
// } 

// console.log(recursionReduce(webbrain));
