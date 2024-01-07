const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "There is some good in this world, and it’s worth fighting for.", author: "J.R.R. Tolkien" },
    { text: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.", author: "Antoine de Saint-Exupéry" },
    { text: "I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.", author: "Charlotte Brontë" },
    { text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.", author: "Charles Dickens" },
    { text: "Beware; for I am fearless, and therefore powerful.", author: "Mary Shelley" },
    { text: "A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well — or ill?", author: "John Steinbeck" },
    { text: "The only way out of the labyrinth of suffering is to forgive.", author: "John Green" },
    { text: "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.", author: "William Shakespeare" },
    { text: "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.", author: "Sylvia Plath" },
    { text: "Love is or it ain’t. Thin love ain’t love at all.", author: "Toni Morrison" },
    { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
    { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
    { text: "Start writing, no matter what. The water does not flow until the faucet is turned on.", author: "Louis L’Amour" },
    { text: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.", author: "William Faulkner" },
    { text: "The first draft is just you telling yourself the story.", author: "Terry Pratchett" },
    { text: "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.", author: "Octavia E. Butler" },
    { text: "Start before you’re ready.", author: "Steven Pressfield" },
    { text: "You can always edit a bad page. You can’t edit a blank page.", author: "Jodi Picoult" },
    { text: "You can’t wait for inspiration. You have to go after it with a club.", author: "Jack London" },
    { text: "I have never started a poem yet whose end I knew. Writing a poem is discovering.", author: "Robert Frost" },
    { text: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.", author: "Toni Morrison" },
    { text: "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles.", author: "Shannon Hale" },
    { text: "First, find out what your hero wants, then just follow him!", author: "Ray Bradbury" },
    { text: "The greatest part of a writer’s time is spent in reading, in order to write. A man will turn over half a library to make a book.", author: "Samuel Johnson" },
    { text: "To produce a mighty book, you must choose a mighty theme.", author: "Herman Melville" },
    { text: "Tell the readers a story! Because without a story, you are merely using words to prove you can string them together in logical sentences.", author: "Anne McCaffrey" },
    { text: "Description begins in the writer’s imagination but should finish in the reader’s.", author: "Stephen King" },
    { text: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.", author: "Robert Frost" },
    { text: "If you want to be a writer, you must do two things above all others: read a lot and write a lot.", author: "Stephen King" },
    { text: "The most valuable of all talents is that of never using two words when one will do.", author: "Thomas Jefferson" },
    { text: "It is perfectly okay to write garbage as long as you edit brilliantly.", author: "C. J. Cherryh" },
    { text: "Half my life is an act of revision.", author: "John Irving" },

];

let specialQuote = {};

function displayQuotes(quotesArray) {
    const quoteList = document.getElementById('quoteList');
    quoteList.innerHTML = '';

    quotesArray.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.classList.add('quote');
        const quoteText = document.createElement('p');
        quoteText.textContent = `"${quote.text}"`;
        const authorText = document.createElement('p');
        authorText.classList.add('author');
        authorText.textContent = `- ${quote.author}`;

        quoteDiv.appendChild(quoteText);
        quoteDiv.appendChild(authorText);
        quoteList.appendChild(quoteDiv);
    });
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    specialQuote = quotes[randomIndex];
    const otherQuotes = quotes.filter((quote, index) => index !== randomIndex);
    displayQuotes(otherQuotes);

    const specialQuoteDiv = document.createElement('div');
    specialQuoteDiv.classList.add('quote', 'special');
    const specialQuoteText = document.createElement('p');
    specialQuoteText.textContent = `"${specialQuote.text}"`;
    const specialAuthorText = document.createElement('p');
    specialAuthorText.classList.add('author');
    specialAuthorText.textContent = `- ${specialQuote.author}`;

    specialQuoteDiv.appendChild(specialQuoteText);
    specialQuoteDiv.appendChild(specialAuthorText);
    document.getElementById('quoteList').prepend(specialQuoteDiv);
}

getRandomQuote();