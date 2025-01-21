const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromeChecker = () => {
  let cleanStr = input.value.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()+@'"?]/gi, "").toLowerCase();
  let reverseStr = cleanStr.split("").reverse().join("");
  if(input.value === ""){
    alert("Please input a value")
  }else {
    if (cleanStr === reverseStr){
      result.innerHTML = input.value + " is a palindrome";
    }else {
      result.innerHTML = input.value + " is not a palindrome";
    }   
  }
}

checkButton.addEventListener("click",palindromeChecker);