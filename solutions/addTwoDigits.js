function addTwoDigits(a){
  var res=0;
    while (a!=0) {
        res=parseInt(res+(a%10));
        a=a/10;
      }
  return parseInt(res);
}
console.log(addTwoDigits(99));
