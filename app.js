window.onload = function(){
    show(0)
}

var questions = [{
    id: 1,
    question: "Who's go first on moon?",
    answer: "Neil Armstrong",
    options: [
        "Neil Armstrong",
        "Newton",
        "Donald Trump",
        "Vien Diesel"
    ]


},
{
    id: 2,
    question: "Who is the inventor of gravity?",
    answer: "Newton",
    options: [
        "Neil Armstrong",
        "Newton",
        "Donald Trump",
        "Vien Diesel"
    ]

},
{
    id: 3,
    question: "Who is the Prime minister of America?",
    answer: "Donald Trump",
    options: [
        "Neil Armstrong",
        "Newton",
        "Donald Trump",
        "Vien Diesel"
    ]

},
{
    id: 4,
    question: "Who is the main actor of Fast and furious?",
    answer: "Vien Diesel",
    options: [
        "Einstien",
        "Newton",
        "Tom Crius",
        "Vien Diesel"
    ]

},
{
    id: 5,
    question: "Who is the most geneious in the world?",
    answer: "Einstien",
    options: [
        "Einstien",
        "Newton",
        "Tom Crius",
        "Charlie Chaplin"
    ]

},
{
    id: 6,
    question: "Among here who is chinease actor?",
    answer: "Bruce Lee",
    options: [
        "Sanjay Duth",
        "Danish Taimoor",
        "Tom Crius",
        "Bruce Lee"
    ]

},
{
    id: 7,
    question: "If you put salt into the water what chemical reaction is it?",
    answer: "NACL",
    options: [
        "H2SO4",
        "CO2",
        "NACL",
        "O2"
    ]

},
{
    id: 8,
    question: "What is the national game of Pakistan?",
    answer: "Hockey",
    options: [
        "Cricket",
        "Hockey",
        "Tennis",
        "Khoo Khoo"
    ]

},
{
    id: 9,
    question: "What is the answer of 2*2+(9/3)/(4*6)+27(100-54)?",
    answer: "1,246.125",
    options: [
        "1,246.000",
        "1,246.500",
        "1,246.250",
        "1,246.125"
    ]

},
{
    id: 10,
    question: "Which city is the city of light and which is the city of bird?",
    answer: "Karachi and Hyderabad",
    options: [
        "Karachi and Hyderabad",
        "Hyderabad and Karachi",
        "Lahore and Islamabad",
        "Islamabad and lahore"
    ]

}

]

var question_count = 0;
function next(){
    question_count++;
    console.log(question_count)
    show(question_count)
}

function show(e){
    var ques = document.getElementById('question');
    ques.innerHTML = `<h1 class="ques-heading"> ${questions[e].question} </h1>
    <ul class="list">
        <li class="option"> ${questions[e].options[0]} </li>
        <li class="option"> ${questions[e].options[1]} </li>
        <li class="option"> ${questions[e].options[2]} </li>
        <li class="option"> ${questions[e].options[3]} </li>
    </ul>`
    Active();
}

function Active(){
    let option1 = document.querySelectorAll('li.option');

    for(let i = 0 ; i < option1.length ; i++){
        option1[i].onclick = function(){
            for(let j = 0 ; j < option1.length ; j++){
                if(option1[j].classList.contains('active')){
                    option1[j].classList.remove('active')
                }
            }
            option1[i].classList.add('active')
        }
    }
}

var min = 0;
var sec = 0;

var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');

function timer(){
    if(sec < 9){
        sec++;
        secHeading.innerHTML = "0" + sec
    }
    else{
        sec++;
        secHeading.innerHTML = sec
    }
    if(sec >= 59){
        if(min < 9){
            min++;
            minHeading.innerHTML = "0" + min;
            sec = 0;
        }
        else{
            min++;
            minHeading.innerHTML = min;
            sec = 0;
        }
    }
    if(min > 29){
        minHeading.innerHTML = "0" + 0;
        secHeading.innerHTML = "0" + 0;
    }
}
var interval;

function start(){
    interval = setInterval(timer,1000);
}