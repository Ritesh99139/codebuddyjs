// level 2
const  fibonacci=(num)=>
{
    var num1=1;
    var num2=1;
    var n3;
    var sum1=num1+num2;
      for (let i = 2; i < num; i++) 
    {
        n3=num1+num2;
        num1=num2;
        num2=n3;
        sum1=sum1+n3
    }
    return sum1;
}
console.log(fibonacci(7))