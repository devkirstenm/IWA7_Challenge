const nickName= "Timmy"; // changed to correct case
const firstName = "Timothy";

if(nickName || firstName) {
    console.log(`Good Morning, ${nickName || firstName}`) 
} else {
    console.log('Good Morning!')
}

//incorrect placement of quotes
//use template literals instead of quotes
//put {} bracket around both nickname and firstname
//added if else statement incase name not present