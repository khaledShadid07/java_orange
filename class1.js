var fac=1
for(var i=5;i>0;i--){
  fac=fac*i

}

console.log(fac)


const sum_even = user_num=>{
  var j=0
  var even=0
  var odd =0
  while (j<=user_num)
    {

      if( j%2 === 0 ){even+=j;console.log(j)}
      else{odd+=j} 
      j++
    }
    return even,odd
}

var even ,  odd = sum_even(5)
console.log(`sum even numbers:${even}`)
console.log(`sum odd numbers:${odd}`)


function fn1(){
 document.querySelector('.p1').innerHTML='khs'
 console.log('fn1')
  }
function fn2(){
 document.querySelector('.div-1').style.backgroundColor="red"
 console.log('fn2')
  }

var message =''
function fn3(e){
message=e.target.value;
console.log(message)

}

const fn4=()=>{

localStorage.setItem("message",message)
alert("message added successfuly to local storage")

}
const fn5=()=>{
document.querySelector('.input3').innerHTML=" "
localStorage.removeItem("message")
alert(" successfuly delete local storage")

}