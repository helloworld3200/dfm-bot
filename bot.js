function runmain() {
var question = document.getElementById("question");
var questiont = question.innerHTML;
var question_real = questiont.replace("?", "*").replace("?", "/");
var answer = String(eval(question_real));
console.log(answer);
console.log(answer.length);
for (var i = 0; answer.length > i; i++) {
console.log("in the thing");
document.getElementById("number-"+String(charAt(String(answer))))
};