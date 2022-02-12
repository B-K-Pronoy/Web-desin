// const myNumber = -5;
// const output =Math.abs(myNumber);
// // console.log(output);
// let ma= -5;

// let data=Math.abs(ma);
// document.write(data);

 
// let taka=Math.ceil(6.0398);
// document.write(taka);



// let taka=Math.floor(6.0398);
// document.write(taka);

// let output=Math.random()*100;
// document.write("Vereyfication: "  +Math.round(output));



// for (i=1; i<=50; i++){

//     const output =Math.random()*100;
//     const rounded=Math.floor(output);
//     document.write(rounded);
// }

// var first="5";
// var second="6";
// document.write(first, second);



// var tem=first;
// first=second;
// second=tem;

// document.write(first, second);


// var fName="Pronoy";
// var lName="Bcom"
// document.write(fName +lName);


// var update=[fName,lName]=[lName,fName];
// document.write(update);


// function largestElement(numbers){
// let lergetNumber=0;
// for (var i=0; i< numbers.length; i++){
//     var element=numbers[i];
//     if(element>lergetNumber){   // যদি ইলিমেন্ট লারজেজ নাম্বারের থেকে বড় হয়। 
//         lergetNumber=element;   // তাহলে লারজেজ নাম্বারই প্রকৃত ইলিমেন্ট হবে। 
//     }
// }
// return lergetNumber;
// }
// var allData=[20,50,60,10,15,80,13,90];
// var checkData=largestElement(allData);

// document.write(checkData+" is gater than any other Numbers")
// function smallNumbers(numbers){
//     var smallNumber=5;
// for(var i=0; i<numbers.length; i++) {
// var element=numbers[i];
// if(element<smallNumber){

// smallNumber=element;
// }

// }
// return smallNumber;

// }
// var mydata=smallNumbers([5,10,15,2,12,30,6,3,4]);
// document.write(mydata);




//Wood Count//


// function woodCalculator (chairQuantity,tableQuantity,bedQuantity){
// const parChairWood=3;
// const perTable=10;
// const perBed=50;
// const chairWoodQuantity= chairQuantity*parChairWood;
// const tableWoodQuantity=tableQuantity*perTable;
// const bedWoodQuantity=bedQuantity*perBed;
// const totalWoodQuantity= chairWoodQuantity+tableWoodQuantity+bedWoodQuantity;
// return totalWoodQuantity;

// }

// const firstOption=woodCalculator(1,1,1);

// document.write(firstOption);


// const secondOption=woodCalculator(2,2,2);
// document.write(secondOption);

// 2 দি য়ে 3 দিয়ে  ৪ দিয়ে 5 দিয়ে বিভাজ্য কি না?
// for (let i=1; i<50; i++){
// if(i%2==0 && i%3==0){
// console.log("Yes 6")
// }
// else if(i%2==0){
//     console.log("D2")
// }
// else if(i%3==0){
//     console.log("D3")
// }
// else if(i%4==0){
//     console.log("D4")
//     }
// else{
//     console.log(i);
// }

// }

//অ্যারের মধ্য থেকে কোনটা 2,3,4,5 দ্বারা বিভ্যাজ্য সেটা নির্ণয় করা। 
// function tryNumber(number){

//     for(var i=1;i<number.length;i++){
//         var deposit=number[i];
//         if(deposit%5==0){
//            document.write("Yes it is dividet 5")
//         } 
//         if(deposit%4==0){
//             document.write("Yes it is dividet 4")
//         } 
//         if(deposit%2==0 && deposit%3==0){
//             document.write("Yes it is dividet 6")
//         } 
//         if(deposit%2==0){
//             document.write("Yes it is dividet 2")
//         } 
//         if(deposit%3==0){
//             document.write("Yes it is dividet 3")
//         } 
        
//     }
//     return deposit;

// }

// var mydata=[2,3,4,7,20,30,33,60,77,52,66,90]
// var result=tryNumber(mydata);
// // document.write(result);


// কম দামে মনিটর মূল্য বের করা। 

// let monitors=[
//     {name:'HP',price:12000,disply:'22 inc'},
//     {name:'DEL',price:15000,disply:'20 inc'},
//     {name:'Asus',price:16000,disply:'22 inc'},
//     {name:'Walton',price:10000,disply:'22 inc'},
// ]
// let cheap=monitors[0];
// for (const monitor of monitors){  // এভাবে লেখলে বুঝায় মনিটরগুলোর মধ্যে থেকে একএকটা মনিটর মনিটরের মধ্যে রাখবে।
//     if (monitor.price<cheap.price){
//         cheap=monitor;
//     }
// }
// console.log(cheap);

// ভিন্ন নিয়মে সস্তা ফোন  
// var phones=[
//     {name:'camtia',price:64000,rom:32,camera:64},
//     {name:'walton',price:10000,rom:12,camera:14},
//     {name:'sansung',price:12000,rom:4,camera:8},
//     {name:'nokeya',price:15000,rom:22,camera:4},
//     {name:'iphone',price:100000,rom:32,camera:64},
//     {name:'sonoy',price:9000,rom:32,camera:64},
//     {name:'samponoy',price:20000,rom:32,camera:64},
//     {name:'itel',price:17000,rom:32,camera:64},
// ]

// let count=phones[0]; // আগে সেট করা ভেলু
// for(var i=0; i<phones.length;i++){
//    var phone=phones[i]; // গননা করার পর ভেলু
// if(phone.price<count.price){
// count=phone;
// }
// }
// console.log(count);



// const products=[
//     {name:'laptop',price:43000},
//     {name:'shirt', price:3600},
//     {name:'watch',price:1000},
//     {name:'phone',price:50000}
// ];

// let totalpriceOfProduc =0;
// for(let product of products){ //গুনে গুনে পোডাক্টের মধ্যে রাখবে। 
//     totalpriceOfProduc=totalpriceOfProduc+product.price;
// }
// console.log(totalpriceOfProduc);


// //ভিন্ন নিয়মে

// let goods=[
//     {name:'laptop',price:43000},
//     {name:'shirt', price:3600},
//     {name:'watch',price:1000},
//     {name:'phone',price:50000}
// ];

// let totalprice =0;
// for(var i=0; i<goods.length;i++){ //গুনে গুনে পোডাক্টের মধ্যে রাখবে। 

// var good=goods[i];
//     totalprice=totalprice+good.price;
// }
// console.log(totalprice);




// একাধিক পন্য কিনলে তার টোটাল মূল্য নির্নয়। (যেমন: আমাজনের কার্ড,দারাজের কাডে)

// var products=[
//     {name:'laptop',price:43000,quantity:2},
//     {name:'shirt', price:3600,quantity:10},
//     {name:'watch',price:1000,quantity:6},
//     {name:'phone',price:50000,quantity:6}
// ];

// let totalpriceOfProduce=0;
// for(let product of products){ //গুনে গুনে পোডাক্টের মধ্যে রাখবে। 
//     totalpriceOfProduce =product.price*product.quantity;


// }
// console.log(totalpriceOfProduce);

// ভিন্ন উপায়ে নির্নয়

// var amajonProduc=[
//     {
//         name:'Monitor', price:40000,quantity:2
//     },
//     {
//         name:'Cable', price:400,quantity:6
//     },
//     {
//         name:'TV', price:30000,quantity:3
//     },
//     {
//         name:'Shoe', price:40000,quantity:1
//     },
//     {
//         name:'Bag', price:2000,quantity:5
//     },
//     {
//         name:'Printer', price:35000,quantity:3
//     },
// ]
// let totalCard=0;// এখানে প্রত্যেকটি প্রোডাক্টের মূল্য লুপের মধ্যে ঘুরে ঘুরে যোগ হয়ে বসবে। 
//                 // যোগের বেলার  এখানে 0 ধরা যাাবে। কিন্তু গুনের বেলায় শূণ্য ইনডেক্স বসাতে হবে।
// for(var i=0;i<amajonProduc.length;i++){
// var product=amajonProduc[i]; // প্রত্যেকটি  অ্যামাজনের প্রোডাক্ট  প্রোডাক্ট নামে ভেরিয়েবলের মধ্যে জমা হচ্ছে। 
//     totalCard=product.price*product.quantity; // জমা হওয়া প্রত্যেকটি  প্রোডাক্টের মূল্যের সাথে পরিমানের গুন হচ্ছে। 
// }
// console.log(totalCard);

let deposite_section=document.getElementById('deposite-btn').addEventListener('click',function(){
let depositeText=document.getElementById('inputFildDeposite');
let depositeAmaunt=parseFloat(depositeText.value);

let depositAmaunt=document.getElementById('dpositeAmaunt');
let priviusAmaunt= parseFloat(depositAmaunt.innerText);

let totalDeposite=priviusAmaunt+depositeAmaunt;
depositAmaunt.innerText= totalDeposite;


let beforBlance=document.getElementById('priviusBlance');
let totalMoney=parseFloat(beforBlance.innerText);
let updateMoney=totalMoney+depositeAmaunt;
beforBlance.innerText=updateMoney;
depositeText.value='';


})



// draw section desine here
let draw=document.getElementById('draw-btn').addEventListener('click', function (){

let numberText=document.getElementById('inputFild');
let inputText=numberText.value;
let amaunt=parseFloat(inputText);
console.log(amaunt);

let priviusWidra=document.getElementById('priviusAmaunt');
let privisTotal=priviusWidra.innerText;
let cllacAmaunt=parseFloat(privisTotal)
let total_amount=cllacAmaunt+amaunt;
priviusWidra.innerText=total_amount;


let priviousBlance=document.getElementById('priviusBlance');
let totalMoneyText=priviousBlance.innerText;
let totalMoneyAccount=parseFloat(totalMoneyText);
let upDateBlance=totalMoneyAccount-amaunt;
priviousBlance.innerText=upDateBlance;
numberText.value='';
})