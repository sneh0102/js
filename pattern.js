// Triangle pattern 
function triangle (n){
for (let i = 1; i <= n; i++) {
    if(i == 1){
        console.log(" ".repeat(n-i) + "*");
    }else if(i == n){
        console.log("*".repeat(2 * n - 1));
    }else{
        console.log(" ".repeat(n - i) + "*" + " ".repeat(2 * i - 3) + "*");
    }
    
}
}
triangle(7)