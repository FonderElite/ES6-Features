
/*Variables(const,let)
const human = "John";
let alien = "John2;
console.log(human);
console.log(alien);
*/

/*String concatenation
const name = "John";
let sentence = `My name is:${name}`;
console.log(sentence);
*/

/*Object Literals
const warrior = (name,age) =>{
    const obj = {
        name:`${name}`,
        age: `${age}`
    }
    console.log(obj);
}
warrior("FonderElite",28);
*/

/*Obj deconstruction
const func = (iamroot) =>{
const obj = {
    name:"User2",
    age:20,
    array:["$","#"],
    rootuser: `${iamroot}`
}
const {name,age,array} = obj;
console.log(obj.array[0]);
console.log(obj);
console.log(obj.rootuser);
}
func("kali@kali:#");
*/

/*Arrow Function*/
/*
const arrowfunc = (){
    console.log("This is an arrow function")
}
*/
/*More on arrow functions*/


/*More on Arrow functions*/
/*
const arrowfunc = () =>{
const list = ["python","js","ruby"];
for(let i = 0; i <= list.length; i++){
list.forEach(product =>{
    console.log(product + "Language");
    
});
}
list.sort((a,b) => a - b);
console.log(list);
}
arrowfunc();
*/

/*Default params*/
/*
const paramfunc = (a,b) =>{
   const object = {
        add:`${a + b}`,
        minus:`${a - b}`
    }
console.log(object.add);
}
paramfunc(50,50);
*/


/*Constructor functions && classes*/
/*
class Turtle{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    cool(){
        console.log("Cool Turtle!")
    }
    notcool(){
        console.log("Arrogant Turtle sh1t ");
    }
    
    
}
class Turtles{
    constructor(name1,name2){
        this.name1 = name1;
        this.name2 = name2;
    }
}
const turtle1 = new Turtle("0x8",8);
const turtle2 = new Turtle("0x9",9);
const turtle = new Turtles(["0x1","0x2"]);
console.log(turtle1.cool());
console.log(turtle2.notcool());
console.log(turtle);
*/

/*Promises*/
/*
const promise = new Promise(resolve,reject) =>{
    setTimeout(() =>{
        resolve({user:"FonderElite",pass:"284783828dj"});
    },2000);
}
promise.then(data =>{
    console.log(data);
});
*/

/*Code1
const boss = (Demon) =>{
    const player = {
        name:"FonderElite",
        level: "999"
}
war = [player,`${Demon}`];
console.log(war);
console.log(player.name);
}
boss("Mr.Vengeance");

*/

/*const func = (population) =>{
const cities = {
    newyork:`${population}`,
    losangeles:"20,000,000"
}
const{newyork,losangeles} = cities;
console.log(cities);
}
func("20,000,000");
*/


/*Code2

class House {
constructor(roof,floor){
this.roof = roof;
this.floor = floor;
}
build(){
let time = new Date();
console.log(`Current time: ${time}`);
}
stop(){
let stop = {
stop1:"roof",
stop2:"floor"
}
alert(`stopping building on ${stop.stop1} and ${stop.stop2}`);

}
}
const builder1 = new House("Moderna-X");
console.log(builder1.stop())
*/
