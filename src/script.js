document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            "question": "What is the chemical symbol for gold?",
            "answer": ["Au", "Ag", "Pb", "Fe"],
            "correct answer": "Au"
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "answer": ["Venus", "Mars", "Jupiter", "Mercury"],
            "correct answer": "Mars"
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "answer": ["Gold", "Iron", "Diamond", "Platinum"],
            "correct answer": "Diamond"
        },
        {
            "question": "What is the speed of light in a vacuum?",
            "answer": [
                "300,000 km/s",
                "150,000 km/s",
                "500,000 km/s",
                "100,000 km/s"
            ],
            "correct answer": "300,000 km/s"
        },
        {
            "question": "What is the main gas found in the Earth's atmosphere?",
            "answer": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            "correct answer": "Nitrogen"
        },
        {
            "question": "Which scientist is known for developing the theory of relativity?",
            "answer": [
                "Isaac Newton",
                "Albert Einstein",
                "Galileo Galilei",
                "Marie Curie"
            ],
            "correct answer": "Albert Einstein"
        },
        {
            "question": "What is the boiling point of water at sea level in Celsius?",
            "answer": ["0°C", "50°C", "100°C", "200°C"],
            "correct answer": "100°C"
        },
        {
            "question": "What is the center of an atom called?",
            "answer": ["Electron", "Neutron", "Proton", "Nucleus"],
            "correct answer": "Nucleus"
        },
        {
            "question": "What type of energy is associated with motion?",
            "answer": [
                "Potential Energy",
                "Thermal Energy",
                "Kinetic Energy",
                "Chemical Energy"
            ],
            "correct answer": "Kinetic Energy"
        },
        {
            "question": "Which organ in the human body is responsible for pumping blood?",
            "answer": ["Lungs", "Brain", "Heart", "Liver"],
            "correct answer": "Heart"
        }
    ]
    const userSelections = []
    const startQuizButton = document.getElementById("start-quiz-button")
    const greetingSection = document.getElementById("greeting-section")
    const quizContainer = document.getElementById("quiz-container")
    const questionTitle = document.getElementById("question-title")
    const optionList = document.getElementById("options-list")
    const nextQuestionButton = document.getElementById("next-question-button")
    const submitButton = document.getElementById("submit-quiz-button")
    const resultSection = document.getElementById("result-section")
    const scoreDisplay = document.getElementById("score")
    const correctAnswerDisplay = document.getElementById("correct-count")
    const wrongAnswerDisplay = document.getElementById("wrong-count")
    const showAnswerButton = document.getElementById("show-answers-button")
    const answerSection = document.getElementById("answers-section")
    const answersList = document.getElementById("answers-list")
    const restartQuizButton = document.getElementById("restart-quiz-button")
    let score = 0
    let correctCount = 0
    let wrongCount = 0
    startQuizButton.addEventListener("click", function () {
        greetingSection.classList.add("hidden")
        quizContainer.classList.remove("hidden")
        startQuiz()
    })
    function reshuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    function displayQuestion(currentQuestionIndex) {

        let question = questions[currentQuestionIndex]
        questionTitle.textContent = question.question
        optionList.innerHTML = ""
        question.answer.forEach(answer => {
            const option = document.createElement("li")
            option.textContent = answer
            option.setAttribute("class", "bg-gray-700 hover:bg-gray-600 text-gray-100 py-2 px-4 rounded cursor-pointer transition duration-300")
            // Add click event listener to each option
            option.addEventListener("click", () => {
                userSelections[currentQuestionIndex] = option.textContent;
                // Clear previous selections
                document.querySelectorAll("#options-list li").forEach(opt => {
                    opt.classList.remove("bg-green-500"); // Remove the highlight from all options
                    opt.classList.add("bg-gray-700"); // Reset back to default gray background
                });

                // Highlight the selected option
                option.classList.remove("bg-gray-700", "hover:bg-gray-600");
                option.classList.add("bg-green-500"); // Highlight as selected
                if (option.textContent === question["correct answer"]) {
                    score += 4;
                    correctCount++;
                } else {
                    score -= 1;
                    wrongCount++;
                }
                nextQuestionButton.classList.remove("hidden");
                submitButton.classList.remove("hidden");
            });
            optionList.appendChild(option)
        })
    }
    function startQuiz() {
        // Reset quiz variables
        currentQuestionIndex = 0;
        score = 0;
        correctCount = 0;
        wrongCount = 0;
        userSelections.length = 0; // Clear user selections

        // Hide result section and show quiz container
        resultSection.classList.add("hidden");
        quizContainer.classList.remove("hidden");

        // Hide "Show Answer" and "Restart Quiz" buttons
        showAnswerButton.classList.add("hidden");
        restartQuizButton.classList.add("hidden");

        // Display the first question
        displayQuestion(currentQuestionIndex);
        nextQuestionButton.addEventListener("click", function () {
            currentQuestionIndex++
            if (currentQuestionIndex < questions.length) {
                displayQuestion(currentQuestionIndex)
            } else {
                endQuiz()
            }
        })
        submitButton.addEventListener("click", endQuiz)
    }

    function endQuiz() {
        quizContainer.classList.add("hidden")
        resultSection.classList.remove("hidden")
        scoreDisplay.textContent = score
        correctAnswerDisplay.textContent = correctCount
        wrongAnswerDisplay.textContent = wrongCount
        showAnswerButton.classList.remove("hidden")
        restartQuizButton.classList.remove("hidden")
    }
    function displayAnswerSection() {
        const answersList = document.getElementById("answers-list");
        answersList.innerHTML = ""; // Clear previous content, if any

        questions.forEach((question, index) => {
            const listItem = document.createElement("li");
            listItem.setAttribute("class", "p-4 bg-gray-700 rounded shadow");

            const questionText = document.createElement("p");
            questionText.textContent = `Q${index + 1}: ${question.question}`;
            questionText.classList.add("text-lg", "font-bold", "text-gray-100");

            const options = document.createElement("ul");
            options.setAttribute("class", "mt-2 space-y-2");

            question.answer.forEach(answer => {
                const option = document.createElement("li");
                option.textContent = answer;
                option.setAttribute(
                    "class",
                    `py-1 px-2 rounded ${answer === question["correct answer"]
                        ? "bg-green-500 text-gray-900"
                        : "bg-gray-600 text-gray-200"
                    }`
                );

                // Highlight user's selected answer in blue
                if (userSelections[index] === answer && answer !== question["correct answer"]) {
                    option.setAttribute("class", "bg-blue-500 text-gray-900");
                }

                options.appendChild(option);
            });

            const userAnswerText = document.createElement("p");
            userAnswerText.textContent = `Your Answer: ${userSelections[index] || "No Answer Selected"}`;
            userAnswerText.classList.add(
                "mt-3", "text-sm",
                userSelections[index] === question["correct answer"] ? "text-green-400" : "text-red-400"
            );

            const correctAnswerText = document.createElement("p");
            correctAnswerText.textContent = `Correct Answer: ${question["correct answer"]}`;
            correctAnswerText.classList.add("text-sm", "text-gray-300");

            listItem.appendChild(questionText);
            listItem.appendChild(options);
            listItem.appendChild(userAnswerText);
            listItem.appendChild(correctAnswerText);

            answersList.appendChild(listItem);
        });

        answerSection.classList.remove("hidden");
    }

    // Add event listener to the "Show Answer" button
    showAnswerButton.addEventListener("click", displayAnswerSection);
    restartQuizButton.addEventListener("click", function () {
        // Reshuffle the questions array
        reshuffle(questions);
        startQuiz();
        answerSection.classList.add("hidden")
    })
})