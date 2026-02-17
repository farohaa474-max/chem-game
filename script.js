let correctAnswer = "H2O";

function startGame() {

    document.getElementById("questionBox").style.display = "block";
    document.getElementById("question").innerText =
        "ما الصيغة الكيميائية للماء؟";

}

function checkAnswer() {

    let user = document.getElementById("answer").value;

    if(user === correctAnswer){
        document.getElementById("result").innerText = "إجابة صحيحة 🎉";
    }else{
        document.getElementById("result").innerText = "خطأ 😢 حاول مرة أخرى";
    }

}
alert("أحسنتِ 🎉");
progressBar.style.width = level*10 + "%";
function showWinMessage(){
    alert("أحسنتِ 🎉 لقد أنهيت المرحلة!");
}
// مثال عند تجاوز مرحلة
if(levelComplete){
    showWinMessage();
}
function updateProgress(level){
    let progress = (level / totalLevels) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}
