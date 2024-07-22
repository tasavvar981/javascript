let n=parseInt(prompt("enter a Number to check pelindrome or not")); 
function palindrome(n){
    let reverse=0,rem;
    let temp=n;
    while(temp>0)
    {
        rem=temp%10;
        reverse=(reverse*10)+rem;
        temp=parseInt(temp/10);
    }
    if(n==reverse)
    {
        document.write("it is a palindrome");
    }
    else{
        document.write("it is not a palindrome");
    }
    
}
palindrome(n);