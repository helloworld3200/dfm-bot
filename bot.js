function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function startbotting() {
var playing = true
var lastquestiont = ""
while (playing) {
var question = document.getElementById("question");
var questiont = question.innerHTML;
if (questiont != lastquestiont) {
var question_real = questiont.replace("×", "*").replace("÷", "/");
var answer = String(eval(question_real));
console.log(answer);
console.log(answer.length);
//document.getElementById("calculator-display").value += answer;
for (var i = 0; answer.length > i; i++) {
console.log("in the thing");
var answerid = "button-"+String(answer.charAt(i));
console.log(answerid);
document.getElementById(answerid).click();
};
lastquestiont = questiont
sleep(100)
};
};
};
