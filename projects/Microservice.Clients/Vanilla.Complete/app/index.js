import FunnyQuote from './common/js/forge/services/funnyQuote';

export default (function() {
    FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
    FunnyQuote.getRandomQuote().then((q) => {
        const quoteDiv = document.getElementById('quote');
        quoteDiv.innerText = q.Text;
    });
})();