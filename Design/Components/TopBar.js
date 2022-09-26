import Link from "next/link";

export default function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 100px",
        background: "#00AAFF",
        color: "white",
        fontWeight:"bold"
      }}
    >
      <Link href="/">Local News</Link>
      <Link href="/foreign">Foreign News</Link>
      <Link href="/sports">Sports News</Link>
      <Link href="/whether">Whether Report</Link>
    </div>
  );
}

//latest news
//local news
//internation news
//sports
//weather report
