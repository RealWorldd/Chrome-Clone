const quotes = [
    {
        quote: "Once you choose hope, anything is possible.",
        author: "Christopher Reeve",
    },
    {
        quote: "Sometimes it takes a good fall to know where you really stand.",
        author: "Hayley Williams",
    },
    {
        quote: "Genius is 1% inspiration and 99% perspiration.",
        author: "Tomas Edison",
    },
    {
        quote: "There is no benefit in worrying whatsoever.",
        author: "Dalai Lama",
    },
    {
        quote: "The power of imagination makes us infinite.",
        author: "Unknown",
    },
    {
        quote: "Your time is limited so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso",
    },
    {
        quote: "To succeed in life, you need two things: ignorance and confidence.",
        author: "Mark Twain",
    },
    {
        quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
        author: "Hennry Ford",
    },
    {
        quote: "Where there is no struggle, there is no strength",
        author: "Oprah Winfrey"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * 10)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;