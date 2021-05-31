var quotes = [
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        quote: " In accusamus non necessitatibus, perferendis,",
    },
    {
        quote: " ut ea illum reiciendis mollitia soluta beatae eaque,",
    },
    {
        quote: "cupiditate voluptates hic officia quisquam earum fugit",
    },
    {
        quote: "id omnis facilis nostrum nobis obcaecati! Veritatis",
    },
    {
        quote: "debitis laboriosam ad. Officia sunt ad libero error",
    },
    {
        quote: " dolorem? Aperiam magnam perspiciatis odit incidunt,",
    },
    {
        quote: "mollitia sunt vero saepe dignissimos error aspernatur",
    },
    {
        quote: "atque quas tempora, illum architecto. Id magni numquam labore",
    },
    {
        quote: "et dolorem rem quos? Iure molestias deleniti quae laudantium eius",
    },
]

function getQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length)
    var quote = document.getElementById("quote");
    quote.innerHTML = quotes[randomNumber].quote;
}