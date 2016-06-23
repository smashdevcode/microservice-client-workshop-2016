import FunnyQuote from "./common/js/forge/services/funnyQuote";

export default (function() {
    FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
    FunnyQuote.getAll().then((quotes) => {
        const ul = document.getElementById("quoteList");
        quotes.forEach((q) => {
            const li = document.createElement("li");
            li.innerText = q.Text;
            ul.appendChild(li);
        });
    });
})();