// start task1
function test1(){
    var x=document.getElementById("grad").value;
 if(x>=90){
    document.getElementById("demo1").innerHTML=("GRAD: "+"A");
 }
 else if(x>=80){
    document.getElementById("demo1").innerHTML=("GRAD: "+"B");

 }
 else if(x>=70){
    document.getElementById("demo1").innerHTML=("GRAD: "+"c");

 }
 else if(x>=60){
    document.getElementById("demo1").innerHTML=("GRAD: "+"D");

 }
 else if(60>=x){
    document.getElementById("demo1").innerHTML=("GRAD: "+"F");

 }
    }
// end task1

// start task2
function test2(){
var num1=parseInt(document.getElementById("num1").value);
var num2=parseInt(document.getElementById("num2").value);
var oper=document.getElementById("oprators").value;
if(oper ==="+"){
    document.getElementById("result").innerHTML= num1+num2;
 }

 else if(oper==="-"){
    document.getElementById("result").innerHTML= num1-num2;

 }
 else if(oper==="*"){
    document.getElementById("result").innerHTML= num1*num2;

 }
 else if(oper==="/"){
    document.getElementById("result").innerHTML= num1/num2;

 }
 else if(oper==="%"){
    document.getElementById("result").innerHTML= num1%num2;
 }
}
// end task2

// start task3
var album="";
for(var i=0;i<10;i++){
    album +=`
    <div class="col-md-4 d-flex justify-content-center pb-2">
    <div class="box w-50  shadow  text-center flex-column ">
        <img class="w-100" src="./img/ab3.jfif" alt="">
        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam perferendis reprehenderit amet.</div>
                    <button class="btn btn-info">BUTTON</button>

    </div>
</div>
    `
}
document.getElementById("demo").innerHTML= album;
// end task3
