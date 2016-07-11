import React, { PropTypes } from 'react';

const Quote = quote =>
{
    let content;

    if (quote) {
      const quoteText = `"${quote ? quote.text : ""}"`
      const quoteAuthor = `- ${quote ? quote.author : ""}`
      content = (
        <div>
          <p>{quoteText}</p>
          <p><i>{quoteAuthor}</i></p>
        </div>
      );
    } else {
      content = <p>Loading...</p>
    }

    return (
      <div className="well well-sm">
        {content}        
      </div>
    );
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default Quote;
