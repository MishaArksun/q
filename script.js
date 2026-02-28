const questions = [
    {
        title: "Загадка 1",
        text: "сколько всегда с тобой, но ты этого не видишь?",
        answer: "спина"
    },
    {
        title: "Загадка 2",
        text: "Без чего не бывает утра?",
        answer: "ночь"
    },
    {
        title: "Загадка 3",
        text: "Что можно услышать, но нельзя увидеть?",
        answer: "тишина"
    },
    // 👇 добавь ещё 5
];

let current = 0;

function submitAnswer() {
    const input = document.getElementById("answer");
    const message = document.getElementById("message");
    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer === questions[current].answer) {
        current++;
        input.value = "";
        message.textContent = "";

        if (current === questions.length) {
            showFinal();
        } else {
            render();
        }
    } else {
        message.textContent = "Почти… попробуй ещё 💭";
    }
}

function render() {
    document.getElementById("question").textContent = questions[current].title;
    document.getElementById("text").textContent = questions[current].text;
    document.getElementById("progress").textContent =
        `${current + 1} / ${questions.length}`;
}

function showFinal() {
    document.querySelector(".card").innerHTML = `
        <h1>Ты прошла квест 💖</h1>
        <p>А теперь — финал</p>
        <img src="final.jpg" class="final-img">
    `;
}

render();

