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
const totalCards = 80; 
let unlockedCards = 0;  

const library = document.getElementById("library");

// توليد البطاقات
for(let i=1; i<=totalCards; i++){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerText = `Card ${i}`;
    library.appendChild(card);
}

// وظيفة فتح بطاقة جديدة بعد إنهاء مرحلة
function unlockCard() {
    if(unlockedCards < totalCards){
        const cardToUnlock = library.children[unlockedCards];
        cardToUnlock.classList.add("unlocked");
        unlockedCards++;
    }
}

// مثال: بعد إنهاء مرحلة، نفتح بطاقة جديدة
// unlockCard();
