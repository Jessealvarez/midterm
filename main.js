// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2){

}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(array1, array2){
    let newarray = [];
    
    for(let i = 0; i < array1.length; i++){
        newarray[i] = array1[i] - array2[i];
     
    }
return newarray;
}

/* console.logs to test */
console.log("arraySubtract");
console.log(arraySubtract([3,3,3],[1,2,3]));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(array, string1, string2){
Array.from(string1);
Array.from(string2);
array.unshift(string1);
array.push(string2);
return array;

}

/* console.logs to test */
console.log("surroundArray");
console.log(surroundArray(["Jesse", "HTML", "Javascript"], "Hi", "Bye"));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(array){}

/* console.logs to test */
console.log("longestString");

console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str){}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
let itworks = false;
    if(num % 4 === 0 && num % 7 === 0){
        itworks = true;
        
    }
return itworks;
}

console.log("divisibleby4And7");
console.log(divisibleBy4And7(28));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str){
    let itworks1 = false;
    let itworks2 = false;
    let doesitwork = false;
    for(let i = 0; i < str.length; i ++){
        if(str[i] === "!"){
            itworks1 = true;
        }
        if(str[i] === "?"){
            itworks2 = true;
        }

    }
if(itworks1 === true && itworks2 === true){
    doesitwork = true;
}
return doesitwork;
    
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log(exclamationAndQuestion("I am probably going to fail this midterm!?!"))
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str){
    let array = [];
    let howmanya= 0;
    let howmanyb= 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] === "a" || str[i] === "A"){
                howmanya = howmanya +1;
            }
            
            if(str[i] === "b" || str[i] === "B"){
                howmanyb = howmanyb +1;
            }
            
        }
array = [howmanya, howmanyb];
return array;
}

/* console.logs to test */
console.log("countAB");
console.log(countAB("Apple banna"));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arr, str){

usethiselement = "";
returnedstring = usethiselement + str;
      for(let i = 0; i < arr.length; i++){
        if(arr[i].includes("s")){
        
        usethiselement = arr[i];
        }
      }
return returnedstring;

}

/* console.logs to test */
console.log("addStringIfLastS");
console.log(addStringIfLastS(["cats", "cat", "dog"], "BEST"));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(array){
    
    let smallArray = [];
    
        if(array.length < 2){
            return undefined;
        }
        else{
        for(let i = 0; i < array.length; i ++){
            
            
            if(array[i] < array.length-1 ){
                
                smallArray[i] = smallArray + array[i];
            }
            
        }
    }
return smallArray[0,1];


}

/* console.logs to test */
console.log(twoSmallest([1, 2, 3, 4, 5]));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

