  // set initial count
let count = 0;

//select value and buttons
const value = document.querySelector(#value');
 const btns = documet.querySelectorAll(".btn") 

 btns.forEach(function (item)  {
 btn.addEventListener("click",function (e) { 
  const styles = e.currentTarget.classList   
 if(styles.containes('decrease')){
  count--;
 }else if(styles.containes('increase'))
count++;
 }else{ 
  count=0;
 }
 if(count>0){                    
 value.style.color="green";
 }
  if(count<0)
   value.style.color='red'   
 }
 if(count===0){
value.style.color="#222";
     value.textContent=count;
 });
});
