const questions = [
    {
        title: "Загадка 1",
        text: "Назови фамилию шефа, которого знает весь мир и вся Россия",
        answer: "баранников"
    },
    {
        title: "Загадка 2",
        text: "Раунд громкого вопроса, надевай наушники",
        answer: "китеж"
    },
    {
        title: "Загадка 3",
        text: "В какое место вы с Эллиной должны были поехать на самом деле на практику? Поищи там",
        answer: "лысый"
    },
    {
        title: "Загадка 4",
        text: "Напиши нашему Пупсеню, может он знает код",
        answer: "915"
    },
    {
        title: "Загадка 5",
        text: "Какое первое закрепленное сообщение было у тебя с Эмилией?",
        answer: "отлижу"
    },    
        {
        title: "Загадка 6",
        text: "Раунд Кто я? Главное правильно написать",
        answer: "квочко"
    },
    {
        title: "Загадка 7",
        text: "Как назывался наш ресторан, у кторого есть сайт, вк (работали в команде с Васями, Даней, Никитой)",
        answer: "айха"
    },
    {
        title: "Загадка 8",
        text: "Позвони шкоднику, знак зодиака которого присутствует в названии басни Крылова (НЕ БОРИ)",
        answer: "mistress"
    },    
        {
        title: "Загадка 9",
        text: "Кто первый начал перепсику твою с Эмилией",
        answer: "алина"
    },
        { 
        title: "Загадка 8",
        text: "Какой объект стал объемным в твоих работах, благодаря Мише",
        answer: "помидор"
    },
        {
        title: "Загадка 8",
        text: "Кручусь, но не бегу вперёд, И грязь бесследно пропадёт.",
        answer: "шкодники"
    },
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





