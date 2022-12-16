console.log(`#======== Ternary Operator & Function Expression With No Return Value========# \n`);
var tcsInterviewEligibility = function (gradScore,hscScore,sscScore,candidateName){
    var result = (gradScore>="70%" || hscScore>="80%" || sscScore>="90%" ) ? `Congrates ${candidateName} you are eligible for TCS Interview.`:
    `Unfortunately ${candidateName} you are not eligible for TCS Interview. \n`;
    console.log(result);
}
tcsInterviewEligibility("80%","86%","90%","Ajinkya Patil");
tcsInterviewEligibility("70%","65%","55%","Sumit Phadatare");
tcsInterviewEligibility("60%","79%","88%","Darshan Patil");
