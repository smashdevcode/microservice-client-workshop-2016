/**
 * Created by bpalmquist on 6/23/2016.
 */
import React, { PropTypes } from 'react';

const Quote = (quote) =>
{
  const quoteText = `"${quote ? quote.Text : ""}"`
  return (<div className="well well-sm"><p>{quoteText}</p></div>);
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default Quote;
