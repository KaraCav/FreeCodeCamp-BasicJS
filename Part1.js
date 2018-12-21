// 1. For Loops
function multiplyAll(arr) {
  var product = 1;
  for(var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
product = product * arr[i][j];
  }
}
  return product;
}
// 2. Iterate with JavaScript Do...While Loops
var myArray = [];
var i = 10;
do{
   myArray.push(i);
  i++;
}
while (i < 5);

// 3. Profile Lookup: We have an array of objects representing different people in our contacts lists. 
// A lookUpProfile function that takes name and a prop as arguments has been pre-written for you. 
// It should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, return the "value" of the property. If it doesn't correspond to any contacts return "No such contact"
// If prop does not correspond to any valid properties of a contact found to match name then return "No such property"
function lookUpProfile(name, prop){
  for(let i= 0; i <= contacts.length-1; i++){
    if(contacts[i].firstName === name){
        if(contacts[i].hasOwnProperty(prop)){
                    console.log(contacts[i][prop]);
             return contacts[i][prop];
        }
        else{
            return "No such property";
        }
    }
  }
    return "No such contact";
}
// NUMBERS 4 - 6:
// ParseInt() turns a string into an interger, second number is base:
  function convertToInteger(str) {
    return parseInt(str, 2); }
// Ternary
  function checkEqual(a, b) {
   return a === b ? true : false; }
// Multiple Ternaries
  function checkSign(num) {
   return num === 0 ? "zero" : num > 0 ? "positive" : "negative"; }
