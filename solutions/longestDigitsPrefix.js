function longestDigitsPrefix(cad){
  var anst=0,ans;
  for(var i=0;i<cad.length;i++){
    var t=0,s="";
    while(cad[i]>='0' && cad[i]<='9'){
      s+=cad[i];
      t++;
      i++;
    }
    if(t>anst){
      anst=t;
      ans=s;
    }
  }
  return ans;
}
console.log(longestDigitsPrefix("123aa1"));
