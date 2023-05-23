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

let str = "JasuebekOtelbayev";

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

//!Scope and Cloauser

// console.log(a); Can not acces befor initialization
// console.log(b);

// let a = 0
// var b = 10\

//! lexical envoirment -> a ni bitinchi local memorydan qidiradi topilsamasa global memoryga otadi
// let a = 15

// function getData() {
//     console.log(a);
// }

// getData()

//!Closuer - function ichida globaldan variable or innenr function ichida auter functrion verabilsini olib ishlatishga aytiladi

// function outer() {
//     let b = 10
//     function inner(){
//         console.log(b);
//     }
//     inner()
// }

// outer()

//!old var and global object

// {
//     let a = 10
//     var b = 25
// }

// console.log(a);
// console.log(b);

//! IIFE -> immideatly invoked function expression

// var counter = (function() {
//     let count = 0;

//     function increment() {
//       count++;
//       console.log("Count:", count);
//     }

//     function decrement() {
//       count--;
//       console.log("Count:", count);
//     }

//     return {
//       increment: increment,
//       decrement: decrement
//     };
//   })();

//   counter.increment();
//   counter.increment();
//   counter.decrement();

// let iife = (function(){
//     var a = 15;
//     function inc(){
//         a++
//         console.log(a);
//     }
//     function dec(){
//         a--
//         console.log(a);
//     }
//     return {
//         inc:inc,
//         dec:dec
//     }
// })()

// iife.inc()
// iife.dec()

// globalThis

// globalThis.a = 50

// let a = 20

// globalThis.console.log("hello")

//!NFE

// let func = function newFunc(){
//     console.log('none');
// }

// func()

//!new Function
// let f = 521
// let fun = new Function(`

//     let a = ${f};
//     let b = 20;

//     return a + b

// `)

// console.log(fun());

//! setTimeout();

// console.log('starting...');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 10000);

// console.log('finish!');

//!CallStack
//!webAPI
//!Queue

//!setInterval()

// let a = setInterval(() => {
//     console.log('jasurbek');
// }, 1000);

// setTimeout(() => {
//     clearTimeout(a)
// } , 5000)

//!call apply bind -> contaxtga malumot biriktiradi

// let user = {
//     name:'jasuerbek',
//     age:19
// }

// let getName = function(a , b){
//     console.log(`hi my name is ${this.name}. I am ${this.age} years old!` + a + b);
// }

// getName.call(user , ' eshamt' , ' toshmat')
// getName.apply(user , [' eshmat' , ' toshmat'])
// getName.bind(user , ' eshmat' , ' toshmat')()

//!Flag properties

// let user = {
//   name: "jasurbek",
//   age: 19,
// };

// let a = Object.getOwnPropertyDescriptor(user , 'name')

// console.log(a);

// Object.defineProperty(user , 'name' , {
//     writable : false,
//     value:'none'
// })

// console.log(user);

// user.name = 'none'
// console.log(user);
// for (const iterator in user) {
//     console.log(iterator);
// }

//!DDOS Attack

// let sum = (a) => {
//     return (b) => {
//         if(b) {
//             return sum(a + b)
//         }
//         return a
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)());

// let cards = document.getElementById('cards')

//     fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((res) => res.json())
//     .then((res) => {
//       res.map((e) => {
//         let card = document.createElement('div')
//         let image = document.createElement('div')
//         let img = document.createElement('img')
//         let title = document.createElement('div')
//         let p = document.createElement('p')
//         p.innerHTML = e.title
//         img.src = e.url
//         card.classList.add('card')
//         card.appendChild(image)
//         image.appendChild(img)
//         card.appendChild(title)
//         title.appendChild(p)
//         cards.appendChild(card)
//       })
//     })



// let obj = {
//   user:'user',
//   getData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(res => console.log(res))
//   }
// }

// let getCached = (func) => {
//   let map = new Map()
//   return (x) => {
//     if(map.has(x)) {
//       console.log(map.get(x));
//     } else {
//       let res = func.call(this)
//       map.set(x , res);
//     }
//   }
// }


// obj.getData = getCached(obj.getData)

//! proto and prototype
//proto
// let obj1 = {
//   name:'jasurbek',
//   surname:'otelbayev',
// }

// let obj2 = {
//   age:19,
//   status:'student'
// }

// obj1.__proto__ = obj2

// console.log(obj1.status);

//prototype
// Array.prototype.jasur = function(n){
//   let res = this.filter((e) => e !== n)
//   return res
// }

// let arr = [1 , 2 , 3 , 4 , 5]

// console.log(arr.jasur(4));

//!gettr and setter

// const obj = {
//   name:'jasurbek',
//   age:19,
//   get fullName(){
//     console.log(this.name , this.age);
//   },
//   set fullName(v){
//     this.name = v.name
//     this.age = v.age
//   }
// }

// obj.fullName = {name:'none' , age:520852}
// obj.fullName


//!OOP 

// class Users {
//   constructor(name){
//     this.name = name
//   }
//   title = 'jasurbek'
//   getName() {
//     console.log(this.title);
//   }
//   get getInfo(){
//     console.log(this.title);
//   }
//   set getInfo(v){
//     this.title = v;
//   }
//   ['jasur' + 'bek'](a){
//     console.log(a);
//   }
// }

// let user = new Users()

// user.jasurbek('nonw')

// user.getInfo = 'none'

// user.getInfo

//!inherins meros olish

// class Animals {
//   constructor(props){
//   }
//   parent(a){
//     console.log('this is parent' + a);
//   }
// }

// class Dog extends Animals {
//   constructor(props) {
//     super(props)
//   }
//   child(){
//     super.parent('jasur')
//   }
// }

// let alfa = new Dog();

// alfa.child()

// class First{
//   constructor(props){
//     console.log(props);
//   }
// }

// class Second extends First {}

// let a = new First('jasur')
// let b = new Second('none')

//!static variable and static function

// class Jasur{
//   age = 15
//   getAge(){
//     console.log(this.age);
//   }
//   static year = 2004;
//   static func(){
//     console.log(this.year);
//   }
//   now(){
//     console.log(Jasur.year);
//   }
// }


// Jasur.func()

//!public and private

// class Protected {
//   _name = 'jasurbek';//public
//   #age = 19 //private
//   get getPrivate(){
//     console.log(this.#age);
//   }
//   set getPrivate(v){
//     this.#age = v
//   }
// }

// let p = new Protected()

// p.getPrivate = 20
// p.getPrivate

// class arr extends Array{}
// console.log(arr);

// class obj extends Object{}
// console.log(obj);

//! instanceof

// console.log([] instanceof Array);
// console.log({} instanceof Array);

//!mixin

// class ga obj ning backgroundini bog'lab beradi

// class User {
//   getUser(){
//     console.log('username');
//   }
// }

// let obj = {
//   getObj(){
//     console.log('getObj');
//   }
// }

// Object.assign(User.prototype , obj)

// let user = new User();

// user.getObj()

//!try catch

// try{
//   throw new Error('none')
// } catch(error){
//   console.log(error);
// } finally{
//   console.log('finally');
// }

//!callback

// let data = {
//   login:1,
//   pw:1,
//   name:'jasurbek'
// }

// console.log('started');
// const login = (login , pw , callback) => {
//   setTimeout(() => {
//     if(login === data.login && pw === data.pw) return callback(data.name)
//     else return callback('none')
//   }, 1000);
// }

// login(1 , 1 , (e) => {
//   console.log(e);
//   console.log('finished');
// })

//!Promise

// let base = {
//   login:123,
//   pw:123
// }

// let promise = new Promise((resolve , reject) => {
//       if(base.login === 123 && base.pw === 13){
//         resolve('welcome uka')
//       } else {
//         reject('good bye')
//       }
// })

// promise.then((res) => console.log(res))
//        .catch((err) => console.log(err))
//        .finally(() => console.log('finally'))

// let all = Promise.all([
//   new Promise((resolve , reject) => {
//     resolve('yes')
//     reject('no')
//   }),
//   new Promise((resolve , reject) => {
//     resolve(false)
//     reject('no')
//   }),
//   new Promise((resolve , reject) => {
//     resolve('yes')
//     reject('no')
//   }),
//   new Promise((resolve , reject) => {
//     resolve('yes')
//     reject('no')
//   }),
// ])

// all.then((e) => console.log(e))
//    .catch((e) => console.log(e))
//    .finally(() => console.log('none'))

//!async await

// let promise = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     resolve('hello')
//     reject('good bye')
//   }, 1000);
// })

// let get = async () => {
//   console.log('start');
//   await promise.then((e) => console.log(e))
//   console.log('finish');
// }
// get()

//!generator function

// function* generator(){
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let gen = generator();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* generator(){
//   let a = 0
//   while(true){
//     yield a++
//     if(a === 3) return a
//   }
// }

// let gen = generator();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for(let value of gen){
//   console.log(value);
// }

// console.log([...gen]);

//!params

// function* generator(array) {
//   for(let value of array){
//     yield value
//   }
// }

// let arr = [1 , 2 , 3 , 5]

// const gen = generator(arr)

// console.log([...gen]);

// let counter = 0;
// function* a(){
//   while(true){
//     let p = yield;
//     if(p){
//       counter += p;
//     }
//   }
// }
// setTimeout(() => {
//   console.log(counter);
// },1000)

// const b = a();

// b.next()
// b.next(1)
// b.next(2)
// b.next(3)

//! modules

// import { student } from "./mock";

// student()

// users.map((e) => {
//   let tr = document.createElement('tr')
//   let id = document.createElement('td')
//   let name = document.createElement('td')
//   let age = document.createElement('td')
//   let status = document.createElement('td')
//   id.innerHTML = e.id
//   name.innerHTML = e.name
//   age.innerHTML = e.age
//   status.innerHTML = e.status
//   tr.appendChild(id)
//   tr.appendChild(name)
//   tr.appendChild(age)
//   tr.appendChild(status)
//   table.appendChild(tr)
// })

//!curry function

// let sum = (a) => {
//   return (b) => {
//     if(b){
//     return sum(a + b)
//     }
//     return a
//   }
// }

// console.log(sum(1)(2)(3)());

// let curry = (...params) => {
//   switch(params[0]){
//     case 'add':
//       params = params.slice(1);
//       console.log(eval(params.join('+')));
//       break;
//     case 'multiplication':
//       params = params.slice(1);
//       console.log(eval(params.join('*')));
//       break;
//   }
// }

// console.log(curry("add" , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9));
// console.log(curry("multiplication" , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9));

//!proxy

// console.log(Object.getOwnPropertyDescriptor(user));

// Object.defineProperty(user , 'login' , {
//   value:'none'
// })

// console.log(user);

//!proxy vazifasi validation

// let user = {
//   name:'jasurbek',
//   _age:19,
//   fullName:'Jasurbek Otelbayev',
//   to:50,
//   from:10,
// }

// let proxy = new Proxy(user , {
//   //!private bolgan keyni korsatmaydi
//   get(target , prop){
//     if(prop.startsWith('_')){
//       return 'this is private bro'
//     } else {
//       return target[prop]
//     }
//   },
//   //! private bolgan keyni ozgartiemaydi
//   set(target , prop , value){
//     if(prop.startsWith('_')){
//       return false
//     } else {
//       target[prop] = value;
//       return true
//     }
//   },
//   //!private bolgan keyni loop da yashiradi
//   ownKeys(target){
//     return Object.keys(target).filter((e) => !e.startsWith('_'))
//   },
//!oraliqqa tekshirtadi
//   has(target , prop){
//     return target.from < prop && target.to > prop
//   }
// })

// proxy._age = 50;

// for (const key in proxy) {
//   console.log(key);
// }

// console.log(20 in proxy);