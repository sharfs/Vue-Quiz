
var quiz = {
    title: 'Maths Quiz',
    questions: [
      {
        text: "1. What is the root of 9",
        responses: [
          {text: '9'}, 
          {text: '3', correct: true}, 
          {text: '81'},
          {text: '27'},
        ]
      }, {
        text: "2. What is 6 x 12?",
        responses: [
          {text: '60'}, 
          {text: '72', correct: true}, 
          {text: '18'},
          {text: '74'},
        ]
      }, {
        text: "3. How many 5's are there in 30?",
        responses: [
          {text: '6', correct: true}, 
          {text: '180'}, 
          {text: '35'},
          {text: '5'},
        ]
      }, {
        text: "4. What is 8 x 10?",
        responses: [
          {text: '18'}, 
          {text: '180'}, 
          {text: '800'},
          {text: '80', correct: true},
        ]
      }, {
        text: "5. What is 78 x 45?",
        responses: [
          {text: '2456'}, 
          {text: '7842'}, 
          {text: '3510', correct: true},
          {text: '4567'},
        ]
      }, {
        text: "6. What is 20% of R30?",
        responses: [
          {text: '6', correct: true}, 
          {text: '3'}, 
          {text: '12'},
          {text: '27'},
        ]
      }, {
        text: "7. What is 75% as a fraction in its simplest form?",
        responses: [
          {text: '1/2'}, 
          {text: '2/3'}, 
          {text: '3/4', correct: true},
          {text: '7/8'},
        ]
      }, {
        text: "8. What are all the prime numbers between 20 & 30?",
        responses: [
          {text: '22, 26'}, 
          {text: '23, 25'}, 
          {text: '23, 29', correct: true},
          {text: '20, 30'},
        ]
      }, {
        text: "9. What is 18/20 as a percentage?",
        responses: [
          {text: '80%'}, 
          {text: '90%', correct: true}, 
          {text: '18%'},
          {text: '27%'},
        ]
      }, {
        text: "10. How do you write 1,5 million in numbers?",
        responses: [
          {text: '15 000'}, 
          {text: '1 500 000', correct: true}, 
          {text: '150 000'},
          {text: '15 000 000'},
        ]
      }, {
        text: "11. What is 19/20 as a decimal?",
        responses: [
          {text: '0.95', correct: true}, 
          {text: '0.19'}, 
          {text: '0.1920'},
          {text: '19.20'},
        ]
      }, {
        text: "12. What is half of 1,5 cups?",
        responses: [
          {text: '7.5 cups'}, 
          {text: '3 cups'}, 
          {text: '0.5 cups'},
          {text: '0.75 cups', correct: true},
        ]
      }, {
        text: "13. What is two thirds times 3?",
        responses: [
          {text: '1'}, 
          {text: '6'}, 
          {text: '3'},
          {text: '2', correct: true},
        ]
      }, {
        text: "14. 8 times what equals 32?",
        responses: [
          {text: '8'}, 
          {text: '4', correct: true}, 
          {text: '3'},
          {text: '6'},
        ]
      }, {
        text: "15. What is 0.8 as a fraction in its simplest form?",
        responses: [
          {text: '80/100'}, 
          {text: '8/10'}, 
          {text: '4/5', correct: true},
          {text: '40/50'},
        ]
      }, {
        text: "16. What is the square root of 25?",
        responses: [
          {text: '5', correct: true}, 
          {text: '125'}, 
          {text: '6'},
          {text: '30'},
        ]
      }, {
        text: "17. 6 is 15% of what number?",
        responses: [
          {text: '30'}, 
          {text: '60'}, 
          {text: '40', correct: true},
          {text: '80'},
        ]
      }, {
        text: "18. What is 90 x 4?",
        responses: [
          {text: '360', correct: true}, 
          {text: '270'}, 
          {text: '810'},
          {text: '180'},
        ]
      }, {
        text: "19. What is 24 / 4?",
        responses: [
          {text: '8'}, 
          {text: '4'}, 
          {text: '2'},
          {text: '6', correct: true},
        ]
      }, 
      {
        text: "20. What is the next number in the sequence? { 5, 10, 15, 20, ?} ?",
        responses: [
          {text: '15'}, 
          {text: '30'}, 
          {text: '35'},
          {text: '25', correct: true},
        ]
      } 
    ]
  };
        
  new Vue({
    el: '#app',
    data: {
      quiz: quiz,
      questionIndex: 0,
      userResponses: Array(quiz.questions.length).fill(false)
    },
    methods: {
      next: function() {
        this.questionIndex++;
      },
      prev: function() {
        this.questionIndex--;
      },
      score: function() {
        return this.userResponses.filter(function(val) { return val }).length;
      }
    }
  });