let a=1; b=2; c=3;
    let val1 = a+b*c;
    let val2 = a%b+c;
    let val3 = c+a/b;
    let val4 = a*b+c;
    let min = Math.min(val1,val2,val3,val4);
    let max = Math.max(val1,val2,val3,val4);

console.log("a+b*c="+val1)
console.log("c+a/b="+val2)
console.log("a%b+c="+val3)
console.log("a*b+c="+val4)
console.log("Minimum Value is "+min)
console.log("Maximum Value is " +max)