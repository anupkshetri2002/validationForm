
// console.log("Hey There");
// let a = "5";
// let b="10";
// sum = a+b;
// console.log("answer is " +sum);
 
// let arraye =[1,2,3,4];
// let abc =arraye[3];
// console.log(abc);

// arraye.push(6);
// console.log(arraye);
// arraye.pop(6);
// console.log(arraye);


// for 
//     (let i = 0 ; i < arraye.length;i++)
//     {
//         console.log(arraye[i]);
//     }
 
// // Create an array of your favorite fruits.
// // Use a loop to print each fruit in the array.
// // Add a new fruit to the end of the array using push.
// // Remove the first fruit from the array using shift.
// // Create a new array containing a subset of the original array using slice


// let fruit = ['apple','banana','mango','watermelon','papaya'];
// for (
//     frt=0;
//     frt < fruit.length; frt++)
//     {
//         console.log(fruit[frt])
//     }
// fruit.push('grapes');
// console.log(fruit);
// let frutiveg =fruit.shift();
// console.log(frutiveg);


// const book={
//     name:'science',
//     page:200,
//     author:'ram baran',
//     enroll(){
//         console.log('you are sucessfully selected')
//     }

// }
// book.enroll()
// console.log(book.name);
// book.thickness="2.5 cm"
// // console.log(book)
 
// function Course(title){
//     this.title=title,
//     this.enroll= function(){
//         console.log("hello maam");
//     }
// }
//  const course = new Course('Social');
//  course.enroll()
//  cour[se.color="pink"
//  console.log(course)
// //  delete course.color;
// let press=  document.getElementById("btns");
// press.addEventListener('click',inputMsg);

// function inputMsg(){
//    let name=prompt("name of student");
//    press.textContent =("Roll no: 1" + " " + name);
// // }
// var time=prompt("time is: ");
//     if
//         (time <= 5)  {
//             alert("morning");
//         }
//         else if (time <=8){
//             alert("aftermoom ");
//         }
//         else if ( time < 18){
//             alert("night")
//         }
//         else{
//             alert("bye");
// //         }
//     var book=prompt("whih one do you like to buy?")
//     switch(book){
//         case "science":
//             console.log("boook is science");
//             break;
//         case "social":
//             console.log("boook is social");
//             break;
//         default:
//             alert("sorry");
//     }

// function submit(){
    
// var name = document.getElementById(name);
// var password = document.getElementById(password);

//     if (password ="Password"){
//         alert("password cant be password");
//     }
//     else{
//         alert("submitted");
//  //



function validateForm(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    
    
    console.log(password.length);

    if(name==="" || password==="" || email===""){
        document.getElementById("error-message").innerHTML = "Form Not Completely Filled" ;
        return false;
    }
    else if((password.length) < 7){

        document.getElementById("error-message").innerHTML = "Password is Short";
        return false;
    }
    
    else if (password === "password"){

        document.getElementById("error-message").innerHTML = "Password cant be Password";
        return false;
    }
    else{
        // document.getElementById("error-message").innerHTML = "Thanks";
        return true;
    }

    
        
    
}
