// Triangle pattern 
//       *
//      * *
//     *   *
//    *     *
//   *       *
//  *         *
// *************

function hollowTriangle (n){
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
hollowTriangle(7)





// hollowSquare pattern 
// *****
// *   *
// *   *
// *   *
// *****

function hollowSquare (n){
for (let i = 1; i <= n; i++) {
   
    if ( i == 1 || i == n){
        console.log("*".repeat(n));
    }else {
        console.log("*" + " ".repeat(n-2) + "*");
    }
    
}
}
hollowSquare(5)


// Square

// * * * * * 
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function square (n){
for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(n)); 
}
}
square(5)


// Right Triangle
// * 
// * *
// * * *
// * * * *
// * * * * *

function rightTriangle (n){
for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(i)); 
}
}
rightTriangle(5)


// left triangle
//         * 
//       * *
//     * * *
//   * * * *
// * * * * *


function leftTriangle (n){
for (let i = 1; i <= n; i++) {
        console.log("  ".repeat(n-i) + "* ".repeat(i)); 
}
}
leftTriangle(5)



// full triangle
//     * 
//    * *
//   * * *
//  * * * *
// * * * * *


function fullTriangle (n){
for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "* ".repeat(i)); 
}
}
fullTriangle(5)
