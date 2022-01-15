
console.log("Hello World");

let num = 20;
if (num > 10 || num % 3 == 0){
    console.log("yes")
}
if (num > 10 && num % 3 == 0){
    console.log("yes")
}


let dayOfWeek = 3;

if (dayOfWeek == 1)
    console.log("Monday");
else if(dayOfWeek == 2)
    console.log("Tuesday");
else if(dayOfWeek == 3)
    console.log("Wednesday");
else if(dayOfWeek == 4)
    console.log("Thursday");
else if(dayOfWeek == 5)
    console.log("Friday");
else if(dayOfWeek == 6)
    console.log("Saturday");
else if(dayOfWeek == 7)
    console.log("Sunday");


switch (dayOfWeek) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        break;
}