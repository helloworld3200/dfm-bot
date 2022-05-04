function runmain() {
Podium = {};
Podium.keydown = function(k) {
    var oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
                get : function() {
                    return this.keyCodeVal;
                }
    });     
    Object.defineProperty(oEvent, 'which', {
                get : function() {
                    return this.keyCodeVal;
                }
    });     

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, false, false, k, k);
    } else {
        oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
    }

    oEvent.keyCodeVal = k;

    if (oEvent.keyCode !== k) {
        alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
    }

    document.dispatchEvent(oEvent);
}  
var question = document.getElementById("question");
var questiont = question.innerHTML;
var question_real = questiont.replace("×", "*").replace("÷", "/");
var answer = String(eval(question_real));
console.log(answer);
console.log(answer.length);
document.getElementById("calculator-display").value += answer
Podium.keydown(13)
//for (var i = 0; answer.length > i; i++) {
//console.log("in the thing");
//var answerid = "number-"+String(answer.charAt(i))
//console.log(answerid)
//document.getElementById("number-"+answerid).click();
//};
};
