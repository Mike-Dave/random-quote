"use strict";
// element selectors
const quoteButton = document.querySelector(".quote-btn");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

// Quotes and Authors Objects
const firstQuote = {
  quote:
    " People are not lazy. They simply have impotent goals - that is, goals that do not inspire them.",
  author: "Tony Robbins",
};

const secondQuote = {
  quote: "I have no limitations",
  author: "Thomas Shelby",
};

const thirdQuote = {
  quote:
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  author: "Jame Cameron",
};

const fourthQuote = {
  quote:
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  author: "Mathin Luther King JR",
};
const fifthQuote = {
  quote:
    "I have decided to stick to love... Hate is too great a burden to bear.",
  author: "Mathin Luther King JR",
};
const sixthQuote = {
  quote: "It's just myself talking to myself about myself.",
  author: "Thomas Shelby",
};
const seventhQuote = {
  quote:
    "Education is the most powerful weapon which you can use to change the world.",
  author: "Nelson Mandela",
};
const eighthQuote = {
  quote: "All great achievements require time.",
  author: "Maya Angelou",
};
const ninthQuote = {
  quote: "Alone we can do so little, together we can do so much.",
  author: "Helen Keller",
};
const tenthQuote = {
  quote: "You can change what you do, but you can't change what what you want.",
  author: "Thomas Shelby",
};
const eleventhQuote = {
  quote: "One day it will pay off, at the moment keep grinding.",
  author: "Michael Chukwu",
};
// All quotes arrays
const quotes = [
  firstQuote,
  secondQuote,
  thirdQuote,
  fourthQuote,
  fifthQuote,
  sixthQuote,
  seventhQuote,
  eighthQuote,
  ninthQuote,
  tenthQuote,
  eleventhQuote,
];

quoteButton.addEventListener("click", function () {
  // Creating random numbers
  const randomNumber = Math.trunc(Math.random() * quotes.length);

  // Changing text contents
  quoteText.textContent = quotes[randomNumber].quote;
  quoteAuthor.textContent = `-${quotes[randomNumber].author}`;
});
