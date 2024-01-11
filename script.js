document.addEventListener('DOMContentLoaded', function() {
    
    const magic8Ball = {
      listOfAnswers: ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."]
    };
  
    const hideAnswer = () => document.getElementById("answer").style.display = 'none';
    const shakeAndShowBall = () => {
      const ball = document.getElementById("8ball");
      ball.classList.add("shake");
      ball.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
    };
    const fadeInAnswer = () => document.getElementById("answer").style.display = 'block';
    const setTextAnswer = (answer) => document.getElementById("answer").textContent = answer;
  
    const askQuestion = function(question) {
      shakeAndShowBall();
      fadeInAnswer();
  
      const answer = getRandomAnswer();
      setTextAnswer(answer);
    };
  
    const getRandomAnswer = () => {
      const randomIndex = Math.floor(Math.random() * magic8Ball.listOfAnswers.length);
      return magic8Ball.listOfAnswers[randomIndex];
    };
  
    const handleButtonClick = function() {
      hideAnswer();
      document.getElementById("8ball").src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";
  
      setTimeout(function() {
        const question = prompt("ASK A YES/NO QUESTION!");
        askQuestion(question);
      }, 500);
    };
  
    document.getElementById("questionButton").addEventListener('click', handleButtonClick);
  });
  