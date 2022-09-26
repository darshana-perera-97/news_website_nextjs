import TopNavBar from "../Design/Views/TopNavBar";

export default function about() {
  return (
    <div>
      <TopNavBar name="About US" />
      <div style={{ padding: "20px 100px" }}>
        <h2 style={{ margin: "0px" }}>This is the</h2>
        <h1 style={{ fontSize: "50px", margin: "0px" }}>About Us Page</h1>
      </div>
    </div>
  );
}
