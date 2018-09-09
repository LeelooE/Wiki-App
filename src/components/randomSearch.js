import React from "react";

const RandomArticle = props => {
  return (
    <div className="random">
      <div>
        <p className='random__title'>See a Random Article</p>
      </div>
      <div className='random__box'>
      <div className='arrow-box-right'>
        <div className="arrow right" />
        </div>
        <a 
          className='mystery'
          href="http://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
          rel="noopener noreferrer"
        >
          ?
        </a>
        <div className='arrow-box-left'>
        <div className="arrow left" />
        </div>
      </div>
    </div>
  );
};

export default RandomArticle;
