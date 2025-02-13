import { addNumber, comparePosNeg, countIntegersInFloatArray, countPositiveNumbers, findFirstPrime, findLastEvenNumber, findMinNumber, findMinPositiveNumber, sortArray, sumPositiveNumbers, swapElements } from "./fuction.js";

let arrDisplay=document.getElementById("arrayDisplay");
let result=document.getElementById("result");
let numbers=[];


document.getElementById("numberAdd").onclick=function(){
    let num=document.getElementById("numberInput").value*1;
    addNumber(num,numbers);
    arrDisplay.innerHTML=`[${numbers}]`
}

//Tổng các số dương trong mảng
document.getElementById("numberSumPositive").onclick=function(){
    let sum=sumPositiveNumbers(numbers)
    result.innerHTML=sum
}

//Đếm số dương trong mảng
document.getElementById("numberCountPositive").onclick=function(){
    let count=countPositiveNumbers(numbers);
    result.innerHTML=count
}

//Tìm số nhỏ nhất
document.getElementById("numberFindMin").onclick=function(){
    let min=findMinNumber(numbers);
    result.innerHTML=min
}

document.getElementById("numberFindMinPositive").onclick=function(){
    let min=findMinPositiveNumber(numbers);
    result.innerHTML=min
}

document.getElementById("numberFindLastEven").onclick=function(){
    let last=findLastEvenNumber(numbers);
    result.innerHTML=last
}

document.getElementById("numberSwapElements").onclick=function(){
    let index1=document.getElementById("index1").value*1;
    let index2=document.getElementById("index2").value*1;
    result.innerHTML=swapElements(index1,index2,numbers);
}

document.getElementById("numberSortArray").onclick=function(){
    result.innerHTML=sortArray(numbers)
}

document.getElementById("numberFindFirstPrime").onclick=function(){
    result.innerHTML=findFirstPrime(numbers)
}

document.getElementById("numberIntInFloat").onclick=function(){
    result.innerHTML=countIntegersInFloatArray(numbers)
}

document.getElementById("numberComparePosNeg").onclick=function(){
    result.innerHTML=comparePosNeg(numbers)
}
