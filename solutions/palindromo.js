function Palindromo(palabra){
    if(palabra==null || palabra.length==0){
        return false;
    }
    var lastIndex=Math.ceil(palabra.length/2);
    for (var i = 0; i < lastIndex  && i< palabra.length; i++) {
        if (palabra[i] != palabra[palabra.length-1-i]) {
            return false;
        }
     }
     return true;
}
console.log(Palindromo("aabaa"))
