const questions =
[
    {
      "id": "1",
      "question": "What is your primary focus in college?",
      "choices": [
        { "text": "Academics", "score": 10, "nextId": "2" },
        { "text": "Love Life", "score": -10, "nextId": "3" },
        { "text": "Co-curricular Activities", "score": 0, "nextId": "4" }
      ]
    },
    {
      "id": "2",
      "question": "How do you prepare for your exams?",
      "choices": [
        { "text": "Study rigorously and plan ahead", "score": 10, "nextId": "5" },
        { "text": "Last minute cramming", "score": -5, "nextId": "6" },
        { "text": "Group study and discussions", "score": 5, "nextId": "5" }
      ]
    },
    {
      "id": "3",
      "question": "What is your approach to relationships?",
      "choices": [
        { "text": "I prefer meaningful connections and deep conversations", "score": -10, "nextId": "7" },
        { "text": "I enjoy the thrill of dating casually", "score": -5, "nextId": "7" },
        { "text": "I'm focused on personal growth right now", "score": 0, "nextId": "8" }
      ]
    },
    {
      "id": "4",
      "question": "Which co-curricular activity excites you the most?",
      "choices": [
        { "text": "Sports and Fitness", "score": 5, "nextId": "9" },
        { "text": "Arts and Drama", "score": -5, "nextId": "10" },
        { "text": "Clubs and Leadership", "score": 5, "nextId": "9" }
      ]
    },
    {
      "id": "5",
      "question": "How do you handle challenging academic problems?",
      "choices": [
        { "text": "Break them down logically and research", "score": 10, "nextId": "11" },
        { "text": "Ask for help immediately", "score": 5, "nextId": "11" },
        { "text": "Avoid them until they become urgent", "score": -10, "nextId": "11" }
      ]
    },
    {
      "id": "6",
      "question": "Exam day arrives, and you feel unprepared. What do you do?",
      "choices": [
        { "text": "Panic and guess answers", "score": -10, "nextId": "11" },
        { "text": "Stay calm and try to manage your time", "score": 5, "nextId": "11" },
        { "text": "", "score": 0, "nextId": "1" }
      ]
    },
    {
      "id": "7",
      "question": "When conflict arises in a relationship, how do you react?",
      "choices": [
        { "text": "Discuss calmly and try to understand", "score": -10, "nextId": "13" },
        { "text": "Let emotions take over and react impulsively", "score": -5, "nextId": "13" },
        { "text": "", "score": 0, "nextId": "1" }
      ]
    },
    {
      "id": "8",
      "question": "Do you believe that love should be pursued over personal goals?",
      "choices": [
        { "text": "Yes, love is life", "score": -10, "nextId": "13" },
        { "text": "No, personal growth comes first", "score": 10, "nextId": "13" },
        { "text": "", "score": 0, "nextId": "1" }
      ]
    },
    {
      "id": "9",
      "question": "In team activities, how do you contribute?",
      "choices": [
        { "text": "I take charge and lead the team", "score": 10, "nextId": "11" },
        { "text": "I support and motivate others", "score": 5, "nextId": "11" },
        { "text": "I follow instructions quietly", "score": 0, "nextId": "11" }
      ]
    },
    {
      "id": "10",
      "question": "How do you express your creativity?",
      "choices": [
        { "text": "I create art that speaks to emotions", "score": -10, "nextId": "11" },
        { "text": "I design solutions with precision", "score": 10, "nextId": "11" },
        { "text": "I experiment without a set plan", "score": 0, "nextId": "11" }
      ]
    },
    {
      "id": "11",
      "question": "College is challenging. How do you balance your commitments?",
      "choices": [
        { "text": "I meticulously plan my schedule", "score": 10, "nextId": "13" },
        { "text": "I go with the flow and adapt", "score": 0, "nextId": "13" },
        { "text": "I often feel overwhelmed and struggle", "score": -10, "nextId": "13" }
      ]
    },
    {
      "id": "13",
      "question": "How do you handle stress and setbacks?",
      "choices": [
        { "text": "I use mindfulness and proactive problem-solving", "score": 10, "nextId": "14" },
        { "text": "I often feel overwhelmed and take time off", "score": -10, "nextId": "14" },
        { "text": "I seek support from friends and mentors", "score": 0, "nextId": "14" }
      ]
    },
    {
      "id": "14",
      "question": "What are your career aspirations and how do you plan for the future?",
      "choices": [
        { "text": "I set clear goals and take calculated steps", "score": 10, "nextId": "15" },
        { "text": "I explore various interests and remain flexible", "score": 0, "nextId": "15" },
        { "text": "I follow my passions regardless of practicality", "score": -10, "nextId": "15" }
      ]
    },
    {
      "id": "15",
      "question": "Overall, how do you see yourself in your college journey?",
      "choices": [
        { "text": "I am a planner who values logic and strategy", "score": 10, "nextId": null },
        { "text": "I trust my instincts and emotional responses", "score": -10, "nextId": null },
        { "text": "I balance both but lean slightly one way", "score": 0, "nextId": null }
      ]
    }
  ]
  
  document.addEventListener("DOMContentLoaded", function () {
    const questiontxt = document.querySelector("#ques-text");
    const option1 = document.querySelector("#optn-1");
    const option2 = document.querySelector("#optn-2");
    const option3 = document.querySelector("#optn-3");
    const option1r = document.getElementById("option-1");
    const option2r = document.getElementById("option-2");
    const option3r = document.getElementById("option-3");
    const submitbtn = document.querySelector(".btn");
    const quesnum = document.querySelector("#num");
  
    let score = 0;
    let currentQuestionIndex = 0;
    let dispquesno = 1;
  
    function startQuiz() {
      score = 0;
      currentQuestionIndex = 0;
      dispquesno = 1;
      showQuestion(currentQuestionIndex);
    }
  
    function selectedOption() {
      if (option1r && option1r.checked) return 0;
      if (option2r && option2r.checked) return 1;
      if (option3r && option3r.checked) return 2;
      return -1;
    }
  
    function showQuestion(index) {
      let currentQuestion = questions[index];
      quesnum.innerText = dispquesno;
      questiontxt.innerText = currentQuestion.question;
      option1.innerText = currentQuestion.choices[0].text;
      option2.innerText = currentQuestion.choices[1].text;
      option3.innerText = currentQuestion.choices[2].text;
      deselectOptions();
    }
  
    function deselectOptions() {
      if (option1r) option1r.checked = false;
      if (option2r) option2r.checked = false;
      if (option3r) option3r.checked = false;
    }
  
    submitbtn.addEventListener("click", () => {
      let selectedOptionIndex = selectedOption();
      if (selectedOptionIndex === -1) {
        alert("Please select an option!");
        return;
      }
  
      let currentQuestion = questions[currentQuestionIndex];
      let chosenOption = currentQuestion.choices[selectedOptionIndex];
  
      score += chosenOption.score;
      let nextId = chosenOption.nextId;
  
      if (nextId === null) {
        alert(`Quiz Over! Your final score is: ${score}`);
        startQuiz(); // Restart the quiz
      } else {
        currentQuestionIndex = questions.findIndex((q) => q.id === nextId);
        dispquesno++;
        showQuestion(currentQuestionIndex);
      }
    });
  
    startQuiz();
  });
