let button = document.querySelector('.clickable');
let show = document.querySelector('.display');

document.querySelector('.clickable').addEventListener('click', function(event){
  // console.log(event.target.innerText);
  // show.value = event.target.innerText;

  if (event.target.classList.contains('appear')){
    show.value += event.target.innerText;
  }else if (event.target.classList.contains('equals')){
    show.value = displayResult()
  }else {
    show.value = ' ';
  }
});


let result;
function displayResult (){
  if (show.value.includes('/')) {
    let digits = show.value.split('/');
    // console.log(digits);
    let firstNum = parseInt(digits[0]);
    let secNum = parseInt(digits[1]);
   
    // console.log(firstNum, secNum);

    result = firstNum / secNum;

    // console.log(result);

    return result;

  }else if (show.value.includes('X')) {
    let digits = show.value.split('X');
    let firstNum = parseInt(digits[0]);
    let secNum = parseInt(digits[1]);
   
    result = firstNum * secNum;
    return result;
  
  }else if (show.value.includes('-')) {
  let digits = show.value.split('-');
  let firstNum = parseInt(digits[0]);
  let secNum = parseInt(digits[1]);

   result = firstNum - secNum;
  return result;
  
}else  if (show.value.includes('+')) {
  let digits = show.value.split('+');
  let firstNum = parseInt(digits[0]);
  let secNum = parseInt(digits[1]);
 
  result = firstNum + secNum;
  return result;
  }
}
