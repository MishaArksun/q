const questions = [
    {
        title: "Загадка 1",
        text: "Назови фамилию шефа, которого знает весь мир и вся Россия",
        answer: "Баранников"
    },
    {
        title: "Загадка 2",
        text: "Раунд громкого вопроса, надевай наушники",
        answer: "ночь"
    },
    {
        title: "Загадка 3",
        text: "Напиши нашему Вупсеню, может он что-то тебе подскажет",
        answer: "812"
    }
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
        <p>Подожди секунд 20 и выходи</p>
        <img src="final.jpg" class="final-img">
    `;
}

render();



