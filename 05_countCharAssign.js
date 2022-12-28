function countCharA(sentence){
    counter=0;
    for(let index=0;index<=sentence.length;index++)
    {
         var char=sentence.charAt(index);
        if(char=='A' || char=='a')
        {
            counter=counter+1;
        }
    }
    console.log(`${sentence}`);
    console.log(`Total Number of 'A' or 'a' in the given String is :${counter}`);
}
countCharA(`"I Am Learning JavaScript ,The Language of Internet"`);
console.log(`--------------------------------------------------------------------`);
countCharA(`"My Favourite movie is LAggAn"`);