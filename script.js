// Simple JavaScript Console Quiz Game
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "How many sides does a triangle have?",
        answer: "3"
    },
    {
        question: "What language is JS short for?",
        answer: "javascript"
    }
];

let score = 0;
const totalQuestions = quizQuestions.length;

// Loop through each question using a for loop
for (let i = 0; i < totalQuestions; i++) {
    const userAnswer = prompt(`Question ${i + 1}/${totalQuestions}: ${quizQuestions[i].question}`);
    
    // Process user input with trim() and toLowerCase()
    const cleanAnswer = userAnswer ? userAnswer.trim().toLowerCase() : "";
    
    // Check answer with conditional and provide immediate feedback
    if (cleanAnswer === quizQuestions[i].answer) {
        score++;
        alert("✅ Correct! Well done!");
    } else {
        alert(`❌ Incorrect. The correct answer was: ${quizQuestions[i].answer}`);
    }
}

// Display final score
alert(`Quiz Complete! Your score: ${score}/${totalQuestions} (${Math.round((score/totalQuestions)*100)}%)`);
console.log(`Final Score: ${score}/${totalQuestions}`);
