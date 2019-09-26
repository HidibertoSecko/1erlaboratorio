function addTwoDigits(a){
  var resp=0;
    while (a!=0) {
        resp=parseInt(res+(a%10));
        a=a/10;
      }
  return parseInt(resp);
}
console.log(addTwoDigits(99));
