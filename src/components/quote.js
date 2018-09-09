import React from "react";

const Quote = props => {
  const array = [
    {
      quote:
        "The important thing is not being afraid to take a chance. Remember, the greatest failure is to not try. Once you find something you love to do, be the best at doing it.",
      author: "Debbi Fields"
    },
    {
      quote:
        "Running a startup is like eating glass. You just start to like the taste of your own blood.",
      author: "Sean Parker"
    },
    {
      quote:
        "It’s irreverence, foolish confidence, and naivety combined with persistence, open mindedness, and a continual ability to learn that created Facebook, Google, Yahoo, eBay, Microsoft, Apple, Juniper, AOL, Sun Microsystems, and others.",
      author: "Vinod Khosla"
    },
    {
      quote:
        "In the movies, you want a good story and characters that are honest, but you are also looking for a good director who can lead the ship. That’s how we look at business. Everybody has a great idea for a startup, and so do their relatives, and they tell me, ‘You gotta build it.’ I say, ‘I have to believe in it.",
      author: "Ashton Kutcher"
    },
    {
      quote:
        "Timing, perseverance, and 10 years of trying will eventually make you look like an overnight success.",
      author: "Biz Stone"
    },
    {
      quote:
        "Following is one of the most underrated aspects of leadership…. I have seen many a good [military unit] underachieve, because someone…thought the commander was incompetent, and quietly worked to undermine his authority.",
      author: "Admiral Bill McRaven"
    },
    { quote: "Data beats emotions", author: "Sean Rad, founder of Tinder" },
    {
      quote:
        "When you find an idea that you just can’t stop thinking about, that’s probably a good one to pursue.",
      author: "Josh James, CEO and founder of Omniture and Domo"
    },
    {
      quote: "I never took a day off in my 20s. Not one.",
      author: "Bill Gates"
    },
    {
      quote:
        "I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.",
      author: "Jeff Bezos"
    },
    {
      quote:
        "Running a startup is like being punched in the face repeatedly, but working for a large company is like being waterboarded.",
      author: "Paul Graham"
    },
    {
      quote: "You can’t make anything viral, but you can make something good.",
      author: "Peter Shankman"
    },
    {
      quote:
        "Embrace what you don’t know, especially in the beginning, because what you don’t know can become your greatest asset. It ensures that you will absolutely be doing things different from everybody else.",
      author: "Sara Blakely"
    },
    {
      quote:
        "For me, the most fun is change or growth. There are definitely elements of both that I like. Launching a business is kind of like a motorboat: You can go very quickly and turn fast.",
      author: "Tony Hsieh"
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Proverb"
    },
    {
      quote:
        "Never be ashamed! There’s some who will hold it against you, but they are not worth bothering with.",
      author: "J.K. Rowling"
    },
    {
      quote:
        "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      author: "Thomas Edison"
    },
    {
      quote:
        "The biggest startup successes-from Henry Ford to Bill Gates to Mark Zuckerberg-were pioneered by people from solidly middle-class backgrounds. These founders were not wealthy when they began. They were hungry for success, but knew they had a solid support system to fall back on if they failed.",
      author: "Eric Ries"
    },
    {
      quote:
        "Everything should be made as simple as possible, but not simpler.",
      author: "Albert Einstein"
    },
    {
      quote:
        "lways bear in mind that your own resolution to succeed is more important than any other one thing.",
      author: "President Abraham Lincoln"
    },
    {
      quote: "There are no working hours for leaders.",
      author: "James Cardinal Gibbons"
    },
    {
      quote:
        "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
      author: "Dwight Eisenhower"
    },
    {
      quote:
        "When I’m old and dying, I plan to look back on my life and say, ‘Wow, that was an adventure,’ not ‘Wow, I sure felt safe.’",
      author: "Tom Preston-Werner, co-founder of Github"
    },
    {
      quote:
        "If you can’t fly, then run; if you can’t run, then walk; if you can’t walk, then crawl; but whatever you do, you have to keep moving forward.",
      author: "Dr. Martin Luther King Jr."
    },
    {
      quote: "Singleness of purpose is essential for success in life.",
      author: "John D. Rockefeller"
    },
    {
      quote:
        "Business opportunities are like buses, there’s always another one coming.",
      author: "Sir Richard Branson"
    },
    {
      quote: "Good is the enemy of great.",
      author: "Jim Collins, author of Good to Great"
    },
    {
      quote: "Nothing works better than just improving your product.",
      author: "Joel Spolsky, co-founder of Stack Overflow"
    },
    {
      quote:
        "There’s lots of bad reasons to start a company. But there’s only one good, legitimate reason, and I think you know what it is: it’s to change the world.",
      author: "Phil Libin, Evernote"
    },
    {
      quote: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach"
    },
    { quote: "Fall seven times and stand up eight.", author: "Unknown" },
    {
      quote:
        "I don’t look to jump over 7-foot bars I look for 1-foot bars that I can step over.",
      author: "Warren Buffett"
    },
    {
      quote:
        "Being able to touch so many people through my businesses, and make money while doing it, is a huge blessing.",
      author: "Magic Johnson"
    },
    {
      quote:
        "Far and away the best prize that life offers is the chance to work hard at work worth doing.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Yesterday’s home runs don’t win today’s games.",
      author: "Babe Ruth"
    },
    {
      quote:
        "Don’t worry about funding if you don’t need it. Today, it’s cheaper to start a business than ever.",
      author: "Noah Everett, founder of Twitpic"
    },
    {
      quote:
        "There is only one boss: the customer. And he can fire everybody in the company, from the chairman on down, simply by spending his money somewhere else.",
      author: "Sam Walton, founder of Walmart and Sam’s Club"
    },
    {
      quote: "The crisis of today is the joke of tomorrow.",
      author: "H.G. Wells"
    },
    {
      quote:
        "The last 10 percent it takes to launch something takes as much energy as the first 90 percent.",
      author: "Rob Kalin, founder of Etsy"
    },
    {
      quote:
        "The trouble in America is not that we are making too many mistakes, but that we are making too few.",
      author: "Philip Knight"
    },
    {
      quote:
        "Entrepreneurship is neither a science nor an art. It is a practice.",
      author: "Peter Drucker"
    },
    {
      quote: "Diligence is the mother of good luck.",
      author: "Benjamin Franklin"
    },
    {
      quote:
        "Always look for the fool in the deal. If you don’t find one, it’s you..",
      author: "Mark Cuban"
    },
    {
      quote:
        "There’s nothing wrong with staying small. You can do big things with a small team.",
      author: "Jason Fried, founder of 37signals"
    },
    {
      quote:
        "Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.",
      author: "Arianna Huffington"
    },
    {
      quote:
        "If I have made a mistake in the design, then I’m the one who should pay for it. I certainly would not ask somebody else to fly a plane if I were afraid to do it myself.",
      author: "Howard Hughes"
    },
    {
      quote:
        "Care about what other people think, and you will always be their prisoner.",
      author: "Lao Tzu"
    },
    {
      quote:
        "Ambition is the path to success. Persistence is the vehicle you arrive in.",
      author: "Bill Bradley"
    }
  ];
  const randomItem = array[Math.floor(Math.random()*array.length)];
  const randomQuote = randomItem.quote;
  const randomAuthor = randomItem.author;
  return (
    <div className='quote'>
      <p>"{randomQuote}"</p>
      <p>- {randomAuthor}</p>
    </div>
  );
};

export default Quote;
