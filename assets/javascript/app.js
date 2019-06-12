 $(document).ready(function() {  // I think this starts the Jquery on the page not sure why I need this
    console.log(questions.length); // log to console the array length to test
    var questionNum = 0;
    var numOfQuestions = 3;
    var score = 0;
    const scoreElem = () => {$("#play").click(function() {  
        $( this ).replaceWith( "<div>" + "Score: " + score + "</div>" );  // replaces play button with the current score 
       displayCurrentQ(); // this invokes my current q function but only shows the first q
    // couldn't get the style to change to what I wanted when question was added to html
});
    }
    
    

var questions = [   // Tried to make an object but got confused on what to call each time so went with an array.
    {
        q: "Twin Peaks is a TV show?",
        a: true
    },
    {
        q: "Twin Peaks is show about mountain climbing?",
        a: false
    },
    {
        q: "Twin Peaks take place in Washington",
        a: true
    }
];

console.log(questions);


// need to loop through the questions array and show each q 
function displayCurrentQ() {
        var questionLength = questions.length; // couldn't get the questions to loop through 
    for (i = 0; i < questionLength; i++){
        questionLength[i] = questionNum;
        
        $("#questions").replaceWith("<div>" + "Question: " + questions[questionNum].q);
    }

    if (questionNum >= questions.length) {
        $("#timer").replaceWith( "<div>" + "Total Score: " + score + "out of 2 correct!" +  "</div>");
        $("#play").replaceWith( "<div>" + " Game Over!" + "</div>");
        return;
    } 
    
}
$('#play').on("click", function() {
    gameOver = setTimeout(function() { // adds a timer of 8 seconds to the game kept it short because the game is broken
        alert("game over");  // doesn't start until you press play
    }, 8000)
});


// need to check if correct buttons is clicked
 function checkAnwser() {
    var buttonChecked = false;
    if (buttonChecked != $('#true') && buttonChecked != $('#false')){ // this is suppose to check if the right button was clicked but I couldn't get it to work
        // not valid guess stop
        return;
    }
   
    } 
     if ($("#true").prop("checked", true) && (questions[0].a === true)){ 
         score++;
         questionNum++;
    } else if ($('#false').prop("checked", true) && (questions[0].a === false)){
       score++;
       questionNum++;

    } 

    const endGame = () => {
        if (questionNum > numOfQuestions){
            return;
        }
    }

checkAnwser(); // this runs my broken function ... 
endGame(); 
scoreElem();

});