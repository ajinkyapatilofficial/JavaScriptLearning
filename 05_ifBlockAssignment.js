console.log(`====*Age is Eligible For Voting Or Not By Using if Block Statement*==== \n`);

var ageCheck = function(age) {
    if (age>=18 && age<120) {
        console.log(`Your Given Age Is = "${age}".....& You Are 'Eligible' For Voting. \n`);
    }
    if (age<18 && age>0) {
        console.log(`Your Given Age Is = "${age}".....& Yor Are 'Not Eligible' For Voting. \n`);
    }
    if (age<=0 || age>120) {
        console.log(`Your Given Age Is = "${age}".....& This Is Invalid Data. \n`);
    } 
     
}
ageCheck(45);
ageCheck(17);
ageCheck(08);
ageCheck(20);
ageCheck(-10);
ageCheck(200);
ageCheck(0);


console.log(`======*Grade Calaculation By Using if Block Statement*====== \n`);
var gradeCalculation = function (marks){
    if (marks>=90 && marks<100){
        console.log(`Fantastic Marks : "${marks}" & Your Grade is 'A+'. \n`);
    }

    if (marks>=75 && marks<90){
        console.log(`Excellent Marks : "${marks}" & Your Grade is 'A'. \n`);
    }

    if (marks>=50 && marks<75){
        console.log(`Good Marks : "${marks}" & Your Grade is 'B'. \n`);
    }

    if (marks>=35 && marks<50){
        console.log(`Your Marks is : "${marks}" & Your Grade is 'C', Need Improvement. \n`);
    }

    if (marks<=0 || marks>100){
        console.log(`Your Marks Are : "${marks}" , Please Provide The Valid Marks. \n`);
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
