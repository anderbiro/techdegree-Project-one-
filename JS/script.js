/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * here below are 5 quotes I chose to add in the array in the form of objects
 
***/

let quotes = [

  {quote:"Strive not to be a success, but rather to be of value", source:"Albert Einstein"},
  
  {quote:"Every strike brings me closer to the next home run", source:"Babe Ruth"},
  
  {quote:"Life isn't about getting and having, it's about giving and being.", source: "Kevin Kruse"},
  
  {quote:"It's the possibility of having a dream come true that makes life interesting.", source:"Paulo Coelho", citation: "The Alchemist"},                                                                 
  
  {quote: "the future depends on what you do today" , source: ["Mahatma Ghandi"] , year: ["1984"]},                                            
  
  ];
  

  /***
 * `getRandomQuote` function
 * Here, I create this function to generate a random quote 
***/

function getRandomQuote () {


  const rand = Math.floor(Math.random()*quotes.length);

  return quotes[rand];

}


/***
 * `printQuote` function
 * This function will print the random quote generated in html.And so it can be displayed on the website
 * quotes are composed of sources, citations and years as you can see in the original array "quotes"
***/

function printQuote () {

  let randq = getRandomQuote();
 
  let html = `<p class="quote"> ${randq.quote} </p>  
              <p class="source"> ${randq.source}  `
              


  if(Object.keys(randq).includes("citation")) {

  html +=  `<span class="citation">${randq.citation} </span> </p> `;
           
    }


  if(Object.keys(randq).includes("year")) {

  html +=  `<span class="citation">${randq.year} </span> </p> `;


    }


    document.getElementById('quote-box').innerHTML = html; 

}
  

/***
 * this object below creates a clickable button that will generate a new random quote each time
   it is clicked.
 
***/



document.getElementById('load-quote').addEventListener("click", printQuote, false);