// random colors array
var colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#77B1A9',
    '#73A857'
];
// random quotes array
var quotes = [
    ["Man, I thought Ultimate Robot Fighting was real, like pro-wrestling, but it turns out it's fixed, like boxing.", "Phillip J. Fry"],
    ["That was the saltiest thing I ever tasted! And I once ate a big heaping bowl of salt!", "Phillip J. Fry"],
    ["Space. It seems to go on forever. But then you get to the end and the gorilla starts throwin' barrels at you.", "Phillip J. Fry"],
    
    ["Hey, whose been messing with my radio? This isn’t alternative rock, it’s college rock.", "Bender R. Rodriguez"],
	["My story is a lot like yours, only more interesting 'cause it involves robots.", "Bender R. Rodriguez"],
    ["Hey! Bite my shiney metal a**!", "Bender R. Rodriguez"],
    
    ["She’s built like a steakhouse, but she handles like a bistro!", "Cpt. Zapp Brannigan"],
	["If we hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.", "Cpt. Zapp Brannigan"],
	["Well, well. We meet again, Leela, only this time, I’m the one judging the sausage.", "Cpt. Zapp Brannigan"],
];
// global variables for display content
var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

// math.random to cycle through quotes array
// get the current quote from the quotes array via math.random selection
function getQuote() {
    randomquote = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
}
// call the getQuote function
getQuote();

// select the [div] element with id "quotes"
var quotesBkg = document.getElementById('quotes');
// var topbar = document.getElementById('topbar');
// math.random to cycle through colors array
// change quotes [div] background to a a random color in the color array
function getColor() {
    randomcolor = Math.floor(Math.random() * colors.length);
    quotesBkg.style.backgroundColor = colors[randomcolor];
    // topbar.style.backgroundColor = colors[randomcolor];
}


// select html elements for quotes display
// showQuote = <blockquote>
// showAuthor = <h5>
var showQuote = document.getElementById('showQuote');
var showAuthor = document.getElementById('showAuthor');
// display the quotes inside the html elements above
function displayQuotes() {
    showQuote.innerHTML = currentQuote;
    showAuthor.innerHTML = currentAuthor;
}

// select the button 
var randomBtn = document.querySelector('button');
// event listeners for randomBtn
randomBtn.addEventListener('click', displayQuotes);
randomBtn.addEventListener('click', getQuote);
randomBtn.addEventListener('click', getColor);


