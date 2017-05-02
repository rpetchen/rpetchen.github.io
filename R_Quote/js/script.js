// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function () {printQuote()}, false);


function printQuote () {
getRandomQuote();
}

var newQuote



var colors = ['red', 'blue', 'green', 'black', 'purple']


var quotes = [ 
{
"quote": "It is well that war is so terrible, or we would grow too fond of it.",
"source" : "Robert E Lee",
"year" : "1862",
},

{
"quote": "In great deeds, something abides. On great fields, something stays. Forms change and pass; bodies disappear; but spirits linger",
"source" : "Joshua Lawrence Chamberlain",
"year" : "1863",
},

{
"quote": "I tell you, war is Hell!.",
"source" : "William T Sherman",
"year" : "1864",
},


{
"quote": "War means fighting. The business of the soldier is to fight. ... To move swiftly, strike vigorously, and secure all the fruits of victory is the secret of successful war.",
"source" : "Thomas J Jackson",
"year" : "1861",
}
]

var quoteO = []

for (i = 0; i < quotes.length; i++) {
	quoteO[i] = quotes[i]
}



function getRandomQuote() {



quoteLocation = quoteO[Math.floor((Math.random()*quoteO.length))]

quoteNumber = quoteO.indexOf(quoteLocation)


 var html = '<i><p class="quote">%quote%</p></i><strong><p class="source"> - %src%</p></strong><span class="year">%year%</span></p>';

        // Use the 'replace' method to call the appropriate variable
        newQuote = html.replace('%quote%', quoteLocation.quote);
        newQuote = newQuote.replace('%src%', quoteLocation.source);
        newQuote = newQuote.replace('%year%', quoteLocation.year);
       

        // Use innerHTML to connect to the web page
        document.getElementById('quote-box').innerHTML= newQuote;
       document.body.style.backgroundColor = colors[Math.floor((Math.random()*colors.length))];
      console.log(quoteO.indexOf(quoteLocation) + " " + quoteNumber)

      quoteO.splice(quoteNumber, 1)

      refreshArray()

      window.setTimeout(getRandomQuote, 5000)
}




function refreshArray() {
 if (quoteO.length == 0 ) {
	for(i=0; i < quotes.length; i++) {
	quoteO[i] = quotes[i]	
	}
}




}




    