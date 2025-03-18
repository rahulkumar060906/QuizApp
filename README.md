Quiz Game Project
This is a dynamic Quiz Game application built using HTML, CSS (Tailwind), and JavaScript. The project allows users to test their knowledge by answering randomized quiz questions and provides features to review results and restart the quiz with reshuffled questions.

Features
Dynamic Question Display: Questions and answers are rendered dynamically using JavaScript.

Answer Highlighting: Selected answers are highlighted for clarity.

Scoring System: Tracks user scores based on correct and incorrect answers:

+4 points for a correct answer.

-1 point for a wrong answer.

Review Mode: After completing the quiz, users can review the questions, their answers, and the correct answers.

Restart Functionality: The quiz can be restarted at any time, with questions appearing in a reshuffled order.

Responsive Design: The UI is styled using Tailwind CSS and optimized for various devices.

How to Use
Clone or download this repository to your local machine.

bash
git clone <repository-url>
Open the index.html file in your browser to load the quiz.

How It Works
Starting the Quiz:
Upon clicking the "Start Quiz" button, the greeting section hides, and the first question is displayed.

Each question shows multiple answer options. Users can select one option per question.

Scoring:
Correct answers: +4 points

Incorrect answers: -1 point

Navigating Questions:
The "Next Question" button becomes available after selecting an answer.

On the last question, the "Submit Quiz" button appears, which ends the quiz and displays the results.

Results and Review:
The score, number of correct answers, and wrong answers are displayed at the end.

Users can click "Show Answer" to review each question along with:

All answer options.

Their selected answer (highlighted in blue if wrong).

The correct answer (highlighted in green).

Restarting the Quiz:
Click the "Restart Quiz" button to shuffle the question order and start over.

JavaScript Highlights
Core Functions:
reshuffle(array): Randomizes the order of elements in the array (used for shuffling the questions at each restart).

startQuiz(): Resets quiz variables and UI elements to their initial state, reshuffles questions, and displays the first question.

displayQuestion(index): Dynamically renders a question and its answers, tracks user selection, and updates score.

endQuiz(): Displays the results section with score and answer counts.

displayAnswerSection(): Shows each question, the user's selected answer, and the correct answer for review.

Dependencies
This project uses:

HTML: For the structure of the page
Tailwind CSS (via CLI): For responsive and modern styling.
Javascipt: for the functionality

Customization
Add More Questions:

Open the script.js file.

Add more objects to the questions array with the following structure:

javascript
{
    "question": "Your Question Here",
    "answer": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correct answer": "Correct Option"
}
Styling:

Tailwind classes are used for styling. Modify or add classes directly in the JavaScript or HTML for customized designs.

Known Limitations
User-selected answers are not saved after restarting the quiz.

Currently designed for single-user interactions in a single browser session.

Future Improvements
Here are some enhancements that can be implemented:

Add a timer for each question.

Include support for multiple-choice questions (where multiple answers can be correct).

Save user progress in local storage to persist data between sessions.

Screenshots
Quiz Start Screen

A welcoming interface with a "Start Quiz" button.

Questions Section

Displays dynamic questions with styled answer options and navigation buttons.

Results Section

Displays the score, correct answers, and wrong answers, along with options to "Restart Quiz" or "Show Answer."

Answer Review Screen

Lists each question with:

All options.

The user's selected answer (if any).

The correct answer.

License
This project is open-source and free to use for educational purposes.
