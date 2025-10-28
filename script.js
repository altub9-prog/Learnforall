const quizzes = {
  physics: [
    {
      q: "ما وحدة قياس القوة؟",
      options: ["نيوتن", "جول", "واط", "أوم"],
      answer: 0
    },
    {
      q: "ما الذي يحفظ الجسم من السقوط؟",
      options: ["الاحتكاك", "القصور الذاتي", "الجاذبية", "المغناطيسية"],
      answer: 2
    }
  ],

  islamic: [
    {
      q: "ما أول سورة نزلت في القرآن الكريم؟",
      options: ["الفاتحة", "العلق", "البقرة", "الإخلاص"],
      answer: 1
    },
    {
      q: "كم عدد أركان الإسلام؟",
      options: ["ثلاثة", "خمسة", "سبعة", "ستة"],
      answer: 1
    }
  ]
};

function startQuiz(subject) {
  const main = document.getElementById("main-content");
  const quiz = quizzes[subject];
  let current = 0;
  let score = 0;

  function showQuestion() {
    const q = quiz[current];
    main.innerHTML = `
      <div class="lesson-card quiz">
        <h2>${q.q}</h2>
        ${q.options
          .map(
            (opt, i) =>
              `<div class="option" onclick="selectOption(${i})">${opt}</div>`
          )
          .join("")}
      </div>
    `;
  }

  window.selectOption = (i) => {
    const q = quiz[current];
    const options = document.querySelectorAll(".option");
    options.forEach((opt, index) => {
      opt.classList.remove("correct", "wrong");
      if (index === q.answer) opt.classList.add("correct");
      else if (index === i) opt.classList.add("wrong");
    });

    if (i === q.answer) score++;

    setTimeout(() => {
      current++;
      if (current < quiz.length) showQuestion();
      else showResult();
    }, 800);
  };

  function showResult() {
    main.innerHTML = `
      <div class="lesson-card">
        <h2>النتيجة</h2>
        <p>لقد حصلت على ${score} من ${quiz.length}</p>
        <button onclick="location.reload()">العودة للقائمة</button>
      </div>
    `;
  }

  showQuestion();
}