console.log(`(*)====== Age Is Eligible For Voting Or Not By Using 'if' 'else' Block Statement ======(*) \n`);
var votingEligibility = function (age) {
    if (age <= 0 || age > 120 ) {
      console.log(`Invalid Data : Because Your Age Is "${age}"`);
    } else {
        if (age >=18 ) {
       console.log(`Your Given Age Is "${age}" : Congratulation You Are Eligible For Voting.`);
      }  else{
       console.log(`Your Given Age Is "${age}" : Sorry You Are Not Eligible For Voting.`);
       }
      }
    }
  votingEligibility(45);
  votingEligibility(17);
  votingEligibility(08);
  votingEligibility(20);
  votingEligibility(-10);
  votingEligibility(200);
  votingEligibility(0)

  console.log(`\n`);
  console.log(`(*)====== Grade Calculation By Using 'if' 'else' Statement ======(*) \n`);
  
  var gradeCalculation = function (marks){
    if (marks >= 90 && marks <= 100 ){
      console.log(`Fantastic Marks - "${marks}" : Your Grade is 'A+'.`);
    }   
    if (marks >= 75 && marks < 90){
        console.log(`Excellent Marks - "${marks}" : Your Grade is 'A'.`);
    }
    if (marks >= 50 && marks < 75) {
      console.log(`Good Marks - "${marks}" : Your Grade is 'B'.`);
    }
   if (marks >= 35 && marks < 50) {
        console.log(`Marks Are - "${marks}" : Your Grade is 'C' (Need Improvement).`);
    }
    if (marks == 0 || marks < 0 || marks > 100 || (typeof marks)!= "number") {
      console.log(`Marks Are "${marks}" : Please Provide The Valid Marks.`);
    }
    }
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation("91");
  gradeCalculation("Eighty");


  