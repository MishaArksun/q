function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "спина"; // ← нужный ответ

    if (userAnswer === correctAnswer) {
        window.location.href = "level2.html";
    } else {
        document.getElementById("message").textContent =
            "❌ Неверно. Попробуй ещё раз!";
    }
}