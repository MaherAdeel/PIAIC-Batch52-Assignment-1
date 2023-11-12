//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName1:string="mr. adeel is a programmer";
//case1 shown in to lowercase
let lowercase1:string=myName1.toLowerCase();
console.log(lowercase1);
//case2 shown in uppercase
let uppercase1:string=myName1.toUpperCase();
console.log(uppercase1);
//case3 shon in titlecase
const submyName1:Array<string>=myName1.split(" ")
console.log(submyName1)
const modifyarray=submyName1.map((value)=>{
    let temp=value[0].toUpperCase();
    console.log(temp);
    return temp + value.slice(1)
})
console.log(modifyarray.join(" "));