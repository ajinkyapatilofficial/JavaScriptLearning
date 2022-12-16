var stringHandsOn = function(){
    myString = "    Hey you are doing Good, keep it up    ";

    console.log(`1. Given string is = ${myString} \n`);

    
    console.log(`2. Length of the string is = ${myString.length} \n`);
    
    var myStar = myString.trim();
    
    console.log(`3. After Removing Leading & Trailling Extra Spaces = ${myStar} \n`);
    
    var onlyWords = myString.trim().split(" ");
    
    console.log(`4. count of remove extra spaces of the string = ${onlyWords.length} \n`);
    
    console.log(`5. after trim first character of the string is = ${myStar.charAt(0)} & the last character of the string is = ${myStar.charAt(myStar.length-1)} \n`);
    
    console.log(`6. count total no of words available in the string after step 3 is = ${myStar.length} \n`);
    
    console.log(`7. index of word "Good" from given string is = ${myStar.indexOf("Good")} \n`);
    
    console.log(`8. substring starting from index 22 using Substring() & slice () = ${myStar.slice(22)} \n`);
    
    console.log(`9. check is string ends up with word "up" after step 3 = ${myStar.endsWith("up")} \n`);
    
    console.log(`10. check is string start with word "Hey" after trimming = ${myStar.startsWith("Hey")}`);
}
stringHandsOn ();