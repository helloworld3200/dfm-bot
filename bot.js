
function runmain() {
var question = document.getElementById("question");
var questiont = question.innerHTML;
var question_real = questiont.replace("×", "*").replace("÷", "/");
var answer = String(eval(question_real));
console.log(answer);
console.log(answer.length);
document.getElementById("calculator-display").value += answer

let TargetInput = document.getElementById('calculator-display')

TargetInput.addEventListener('keydown',function(e){
    if(!e.isTrusted){
		//Mannually triggered
		this.value += e.data;
	}
}, false);

function Trigger(){
	var event = new KeyboardEvent('keydown', {
    keyCode : "13"
	}); 

	TargetInput.dispatchEvent(event);
}

Trigger()

//for (var i = 0; answer.length > i; i++) {
//console.log("in the thing");
//var answerid = "number-"+String(answer.charAt(i))
//console.log(answerid)
//document.getElementById("number-"+answerid).click();
//};

};
