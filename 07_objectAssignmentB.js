const professor={

}
professor.name="Ritesh Deshamukh",
professor.age= 40,
professor.gendar="Male",
professor.city="Pune",

console.log("1");
console.log(professor);

console.log("2");
console.log(`Accessing an nested degrees property`);
professor.degrees={
   Enginerring:"Computar Enginering",
   PHD:"Adv computing" ,
   college:"COEP",
}
console.log(professor.degrees);

console.log(3);
console.log(`Accessing an nested certification proprty`);

  professor.certificates={
    1:"Hacker Rank",
    2:"certificate IN IFE",
    3:"Adv Programing",
   }
   console.log(professor.certificates);

   console.log(4);
   console.log(`Add and concat degrees of professor`);
   console.log(professor.degrees);
   console.log(`The total degrees of professor are Engineering,PHD,College`);


   console.log(5);
   console.log(`Add new proprty in proffesor object`);
   professor.height=6,
   console.log(professor);


   console.log(6);
   console.log(`Modifiying Age proprty of object`);
   professor.age=50,
   console.log(professor);


   console.log(7);
   console.log(`Deleting one certificate from object`);
   delete professor.certificates[1];
   console.log(professor.certificates);


   console.log(8);
   console.log(`Adding one certificate from object`);
   professor.certificates={
    1:"Data Science",
    2:"certificate IN IFE",
    3:"Adv Programing",
   }
   console.log(professor.certificates);


   console.log(9);
   console.log(`Adding one certificates from object`);
   console.log(professor.certificates[1]);