console.log("Hello World");

let num = 20;
if(num > 10 || num % 3 == 0){
    console.log("yes1");
}
if(num > 10 && num % 3 == 0){
    console.log("yes2");
}



let dayOfWeek = 3;

if (dayOfWeek === 1 || dayOfWeek === 0){
    console.log("Monday");
}else if (dayOfWeek === 2){
    console.log("Tuesday");
}else if (dayOfWeek === 3){
    console.log("Wednesday");
}else if (dayOfWeek === 4){
    console.log("Tursday");
}else if (dayOfWeek === 5){
    console.log("Friday");
}else {
    console.log("Weekend");
}


switch (dayOfWeek) {
    case 0:
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break
    default:
        break;
}


