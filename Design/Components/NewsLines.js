import React from "react";

const newsLineText = [
  "The six-time Sri Lankan PM who became president",
  "Sri Lanka sees new president sworn into office",
  "Tense scenes in Sri Lanka - BBC reporter on the ground",
  "Sri Lankan forces raid anti-government camp",
  "Ex-leader Rajapaksa to return to Sri Lanka - official",
  "Sri Lankan athletes reported missing from Games",
  "Chinese 'spy ship' docks in Sri Lanka despite concern",
  "Ousted former Sri Lanka president returns",
  "Ousted former Sri Lanka president returns",
  "Sri Lanka inflation rate jumps above 70%",
  "Sri Lankans freed from Russian brutality in Ukraine",
];

export default function NewsLines() {
  //   console.log(newsLineText);
  const [item, setItem] = React.useState(0);
  setTimeout(() => {
    setItem(item + 1);
  }, 3000);
  if (item > newsLineText.length - 1) {
    setItem(0);
  }
  return (
    <div>
      <p
        style={{
          margin: "0px",
          fontSize: "18px",
          padding: "10px",
          fontWeight: "bold",
          
        }}
      >
        {newsLineText[item]}
      </p>
    </div>
  );
}
