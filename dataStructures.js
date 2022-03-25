// level 2
//q-1
const arr=[1, 3, 4, 6, 7, 8];
const evenArr=arr.filter(ele=>ele%2!==0)
console.log(evenArr);
//q-2
let str='Elie';
const correct=str.replace('i','I').replace('e','E');
console.log(correct);
//q-3
const arr1=[1, 3, 4, 6, 7, 8, 2, 5];
const max=arr1.reduce((acc,ele)=>{
    if(ele>=acc)return ele;
    else return acc;
},arr1[0])
console.log(max);