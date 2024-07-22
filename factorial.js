

let n=prompt("enter a Number find to factorial"); 

function factorial(n) { 
    let ans = 1; 
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}

document.write(factorial(n));