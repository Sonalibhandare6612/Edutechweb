// Global variable to hold the player object
var player;

// This function creates the YouTube player object
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'VIDEO_ID_HERE',
        playerVars: {
            'autoplay': 1,
            'controls': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    // Do something when player is ready
}

function onPlayerStateChange(event) {
    // Do something when player state changes
}
// Load the YouTube IFrame Player API script
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Call the onYouTubeIframeAPIReady() function when the script has finished loading
function onYouTubeIframeAPIReady() {
    // Create the YouTube player object
    // ...
}
// Global variable to hold the player object
var player;

// This function creates the YouTube player object
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '501',
        videoId: '6ITFkZVv2r8',
        playerVars: {
            'autoplay': 1,
            'controls': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// This function is called when the player is ready
function onPlayerReady(event) {
    // Do something when player is ready
}

// This function is called when the player state changes
function onPlayerStateChange(event) {
    // Do something when player state changes
}

// Load the YouTube IFrame Player API script
var tag = document.createElement('script');
tag.src = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=6ITFkZVv2r8&key=AIzaSyA_U3vJ5fFTQCdT8aDRNCYI7xz-TADT6HM'

// Random Questions
var questions = [
    "What is Python?",
    "What are the basic data types in Python?",
    "How do you declare a variable in Python?",
    "What are conditional statements in Python?",
    "What is a loop in Python?",
    "How do you define a function in Python?",
    "What are the built-in data structures in Python?",
    "How do you handle errors in Python?",
    "What is object-oriented programming in Python?",
    "How do you import modules in Python?"
];
function displayRandomQuestion() {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * questions.length);

    // Get the selected question
    var selectedQuestion = questions[randomIndex];

    // Display the question on the page
    var questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = selectedQuestion;
}

// Random AI Generated Answers
var answers = [
    "A virtual environment is a self-contained Python environment that allows you to install packages and dependencies for a specific project without affecting the system's global Python environment.",
    "pip is a package manager for Python, used to install and manage third-party packages and libraries.A module is a file containing Python definitions and statements that can be imported and used in other Python code.",
    "OOP is a programming paradigm that focuses on creating objects that encapsulate data and behavior. In Python, classes define objects, and instances of classes are the actual objectspip is a package manager for Python, used to install and manage third-party packages and libraries.",
    "Python environment that allows you to install packages and dependencies for a specific project without affecting the system's global Python environment. It helps manage dependencies and maintain reproducibility of code across different environments.",
    "A module is a file containing Python definitions and statements that can be imported and used in other Python code.pip is a package manager for Python, used to install and manage third-party packages and libraries.",
    " Python has several built-in data types, including integers, floating-point numbers, complex numbers, strings, lists, tuples, sets, and dictionaries.",
    "Modules help organize code, facilitate code reuse, and provide a way to package and distribute code.",
    "Python is known for its simplicity, readability, and versatility. It has a large standard library, supports multiple programming paradigms, and has an active community that contributes",
    "General-purpose programming language that is easy to learn and widely used for web development, data analysis, artificial intelligence, scientific computing, and more.",
    "For a specific project without affecting the system's global Python environment. It helps manage dependencies and maintain reproducibility of code across different environments."
];
function displayAiAnswers() {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * answers.length);

    // Get the selected question
    var selectedAnswer = answers[randomIndex];

    // Display the question on the page
    var answersContainer = document.getElementById("item");
    answersContainer.innerHTML = selectedAnswer;
}

