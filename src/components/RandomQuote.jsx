import React, {useState} from "react";

const quotes = [
  "Believe in yourself!",
  "Keep going, never give up.",
  "Mistakes are proof you are trying.",
  "Stay positive, work hard.",
  "React makes UI fun!",
  "Success is the sum of small efforts.",
  "Every day is a new beginning.",
  "Push yourself, because no one else will.",
  "Dream it. Wish it. Do it.",
  "Doubt kills more dreams than failure ever will.",
  "Your only limit is your mind.",
];

const RandomQuote = () => {
  const [quote, setQuote] = useState("Click the button to see a quote!");
  const [copied, setCopied] = useState(false);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quote).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div>
      <h2>7. Random Quote</h2>
      <button onClick={generateQuote}>Generate Quote</button>
      <button onClick={handleCopy} style={{marginLeft: "10px"}}>
        Copy Quote
      </button>
      {copied && <span> Copied!</span>}
      <p style={{fontStyle: "italic", marginBottom: "0"}}>{quote}</p>
    </div>
  );
};

export default RandomQuote;
