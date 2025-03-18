## Quiz Game Project
 This is a dynamic Quiz Game application built using HTML, CSS (Tailwind), and JavaScript. The project allows users to test their knowledge by answering randomized quiz questions and provides features to review results and restart the quiz with reshuffled questions.

### Features
Dynamic Question Display: Questions and answers are rendered dynamically using JavaScript.

Answer Highlighting: Selected answers are highlighted for clarity.

Scoring System: Tracks user scores based on correct and incorrect answers:

    +4 points for a correct answer.

    -1 point for a wrong answer.

1. Review Mode: After completing the quiz, users can review the questions, their answers, and the correct answers.

2. Restart Functionality: The quiz can be restarted at any time, with questions appearing in a reshuffled order.

3. Responsive Design: The UI is styled using Tailwind CSS and optimized for various devices.
### Customization

#### Adding More Questions:

1. Open the `script.js` file.
2. Add more objects to the `questions` array using the following structure:

```javascript
{
  "question": "Your Question Here",
  "answer": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "correctAnswer": "Correct Option"
}
```

### Styling

Tailwind CSS classes are used for styling. You can modify or add classes directly in the JavaScript or HTML files for customized designs.

### Known Limitations

- User-selected answers are not saved when restarting the quiz.
- The quiz is currently designed for single-user interactions within a single browser session.

### Future Improvements

Here are some enhancements that can be implemented:

- Add a timer for each question.
- Include support for multiple-choice questions, allowing multiple correct answers.
- Save user progress in local storage to retain data between sessions.


### License

This project is open-source and free to use for educational purposes.
