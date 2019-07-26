// Concept of Object
// let profile={
//         name:"Thalal",
//         age:21,
//         cpga:6.9,
//         valid:true};
// console.log(profile);



// if(profile.age>=18 && profile.cpga>7)
//     console.log("Eligible");
// else if(profile.age<=18 && profile.cpga<7)
//         console.log("Aged");
// else
//     console.log("Not");

// time=11;
// time>12? console.log("Good Morning"):console.log("Have a nice day");

// if(time>=9 && time<12)
//     console.log("Good Morning");
// else if(time>=12&&time<15)
//     console.log("Good AfterNoon");
// else if(time>=15&&time<=18)
//     console.log("Good Evening");
// else
//     console.log("Have a nice time");


    // Function userdefined and builtIn
// function display(){
//     console.log("Hello");
// }
// function display(name){
//     console.log("Hello "+name+" have a nice day");
//     return("hello")
// }

// console.log(display("thr"))
// display("rh")


// num1=10
// num2=20

// function add(a,b){
//     return(a+b)
// }
// function sub(a,b){
//     return(a-b)
// }
// function mul(a,b){
//     return(a*b)
// }
// function div(a,b){
//     if (b!=0){
//         return(a/b)
//     }else{
//         console.log("Cant divide by zero")
//     }
// }

// console.log("Sum "+add(num1,num2))
// console.log("Difference "+sub(num1,num2))
// console.log("Product "+mul(num1,num2))
// console.log("Quotient "+div(num1,num2))

// forloop
// for(i=0;i<5;i++){
// console.log("hello");
// console.log(i);
// }

//for in loop,for of loop

 profile={
            name:"Thalal",
            age:21,
            cpga:6.9,
            valid:true};
sum=0;
age=[11,22,33,44,55];
for(i in age){
    console.log(age[i]);
    sum+=age[i]

}

console.log(sum);
