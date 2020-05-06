var button = document.querySelector("#button");
var quiz = document.querySelector("#quiz");
var hscore = document.querySelector("#score");

button.addEventListener("click", run);  
  
function run(){ 

    var time = 60;
    var interval = setInterval(function(){
        document.getElementById("time").innerHTML=time;
        time;
        if (time === 0){
        alert("You're out of time!");
        }
    }, 1000);

var questions = [
    {
    prompt: "What Artist is Hip Hop?\n(a) The Rza\n\(b) Zack de la Roocha\n\(c) Bjork",

    answer: "a"
    },
    {
    prompt: "What Artist is Rock?\n(a) The Rza\n\(b) Zack de la Roocha\n\(c) Bjork",
    
    answer: "b"
    },
    {
    prompt: "What Artist is a electronic?\n(a) The Rza\n\(b) Zack de la Roocha\n\(c) Bjork",

    answer: "c"
    },    
]
var score = 0;

for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions [i].prompt);
    if(response == questions [i].answer){
        score++;}
    }
alert("You Got" + score + "/" + questions.length);
};

hscore = score + "/";


renderHighScore();

function renderHighScore() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";


  for (var i = 0; i < hscore.length; i++) {
    var hscore = hscore[i];

    var li = document.createElement("li");
    li.textContent = hscore;
    todoList.appendChild(li);
  }
}
    
    
     

