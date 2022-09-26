import NewsLines from "../Components/NewsLines";

export default function NewsLine() {
  return (
    <div style={{ display: "flex" }}>
      <p
        style={{
          margin: "0px",
          fontSize: "18px",
          letterSpacing: "3px",
          padding: "10px",
          fontWeight: "bold",
          background: "red",
          color: "white",
        }}
      >
        NEWS
      </p>
      <NewsLines />
    </div>
  );
}
