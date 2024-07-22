function CheckArmstrong(num) {
    let sum=0;
    let digit=0;
    let temp=num;
    let temp2=num;
    while(temp>0)
    {
        digit++;
        temp=parseInt(temp/10);
    }
    
    while(temp2>0)
    {
        let rem=temp2%10;
        sum=sum + Math.pow(rem,digit);
        temp2=parseInt(temp2/10);

    }
  if(num==sum)
  {
    console.log(num+" "+"it is armstrong number")
  }
  else{
    console.log(num+" "+"it is not a armstrong number");
  }
}
CheckArmstrong(1);
CheckArmstrong(153);
CheckArmstrong(370);


