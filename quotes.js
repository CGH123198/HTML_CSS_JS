const quotes = [
    {
        quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        author: "DOLLY PARTON",
    },
    {
        quote: "Keep away from people who try to belittle your ambitions. Small peole always do that, but the really great make you feel that you, too, can become great.",
        author: "Mark Twain",
    },
    {
        quote: "A word is dead When it is said, Some say. I say it just begins to live that day.",
        author: "Emily Dickinson",
    },
    {
        quote: "Fantasy is hardly An escape from reality. It's a way of understanding it.",
        author: "Lloyd Alexander",
    },
    {
        quote: "To a great mind, Nothing is little.",
        author: "Sherlock Holmes",
    },
    {
        quote: "All art is a kind of confession.",
        author: "James Baldwin",
    },
    {
        quote: "A great pleasure in life is Doing what people say you cannot do.",
        author: "Walter Bagehot",
    },
    {
        quote: "It takes courage to be the author of your life.",
        author: "Nicholas Lore",
    },
    {
        quote: "We need to be the authors of our own life.",
        author: "Peter Senge",
    },
    {
        quote: "Wherever I am, if I've got a book with me, I have a place I can go and be happy.",
        author: "J.K. Rowling",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


function authorAndQuote () {
    const quoteNum=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[quoteNum].quote;
    author.innerText=quotes[quoteNum].author;
};

authorAndQuote();
setInterval(authorAndQuote,20000);