let count = 0;


document.getElementById("btndecrease").onclick= function () {
  count--
  document.getElementById("num").innerHTML=count;
  document.getElementById("num").style.color = "red";
  
}
document.getElementById("btnincrease").onclick= function () {
  count++;
  document.getElementById("num").innerHTML=count;
  document.getElementById("num").style.color = "green";
  
}
document.getElementById("btnreset").onclick= function () {
  count=0;
  document.getElementById("num").innerHTML=count;
  document.getElementById("num").style.color = "black";
  
}
document.getElementById("btndecrease").onclick = function(){
  
  document.getElementById("btndecrease").style.color = "red";
  
}
