console.log(`#====== Ternary Operator For Step 1. ======# \n`);
var maleMarriageEligibility = function (gender,age,boyName){
    var result = (gender="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage.`:
    `Hey ${boyName} you are not eligible for marriage. \n`;
    console.log(result);
}
maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Steve Jobs");

console.log(`#====== Ternary Operator For Step 2. ======# \n`);
var femaleMarriageEligibility = function (gender,age,girlName){
     var newResult = (genderß="Female" && age>=21) ? `Hey ${girlName} you are eligible for marriage.`:
      `Hey ${girlName} you are not eligible for marriage.`
      console.log(newResult);
}
femaleMarriageEligibility("Female",17,"Jennifer");
femaleMarriageEligibility("Female",27,"Milinda Gates");