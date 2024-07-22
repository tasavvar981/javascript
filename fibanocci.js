let n=10;

function fibb(n){
    let a=0;
    let b=1;
    for (let i = 1; i <= n; i++) {
        if (i > 2) {
            let c = a+b;
            a = b;
            b = c;
            document.writeln(c);
        }
 
        if (i == 1) {
            document.writeln(a);
        }
        if (i == 2) {
           document.writeln(b);
    }
}
}
fibb(n);