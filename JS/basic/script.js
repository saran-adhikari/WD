// Question-1

// var num= prompt("Enter any number: ");
// // var a=2;
// if (num % 2 == 0){
//     document.write("even")

// }
// else{
//     document.write("odd")
// }

// Question-2

// var alphabet=prompt("Enter any alphabet").toUpperCase();
// if (alphabet==="A" || alphabet==="E" || alphabet==="I" || alphabet==="O" || alphabet==="U"){
//     document.write("Vowel")
// }
// else{
//     document.write("Consonant")
// }

// Question-3

// var marks=prompt("Enter your marks")
// if(marks<35){
//     document.write("Sorry you have failed")
// }
// else{
//     document.write("You have passed")
// }

// Question-4

// var number=prompt("Enter the number of month")
// const array=["January","Februrary","March","April","May","June","July","August","September","October","November","December"]

//     if(number >=1 && number<=12){
//         document.write("Your month is: " + array[number-1]);
//     }
//     else{
//         document.write("Invalid number");
//     }

// Question-5

// var salary=prompt("Enter your salary")
// var year=prompt("Enter your year of service")

// if(year>5){
//     var addedSalary= parseInt(salary) + (0.05 * salary);
//     document.write("Your net bonus is: "+ addedSalary)
// }
// else{
//     document.write("Sorry you are uneligible!")
// }

// Question-6

// var sales = prompt("Enter your total sales!")
// if (sales > 0 && sales < 1000) {
//     var commisonValue = 0.05 * parseInt(sales)
//     document.write("Your commison amount is: " + commisonValue)
// }
// if (sales > 1000 && sales < 2500) {
//     var commisonValue = 0.1 * parseInt(sales)
//     document.write("Your commison amount is: " + commisonValue)
// }
// if (sales > 2501) {
//     var commisonValue = 0.15 * parseInt(sales)
//     document.write("Your commison amount is: " + commisonValue)
// }

// else {
//     document.write("You did not have any commison")
// }

// Multiplication Table using for loop

// var num=prompt("Enter your number: ")
// document.writeln("Your multiplication table is: " + "<br>")

// for(i=1;i<=10;i++){
//     var table=parseInt(num)*i;
//     document.writeln(num + "*" + i + "="+ table + "<br>")
// }

