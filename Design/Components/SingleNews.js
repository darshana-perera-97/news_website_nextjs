export default function SingleNews(prop) {
  return (
    <div
      style={{ padding: "0px 50px", display: "flex", paddingBottom: "20px" }}
    >
      <img src={prop.link} height="250vh" />
      <p style={{ paddingLeft: "80px" }}>
        <b>{prop.heading}</b>
        <br />
        <br />
        {prop.des}
        <br/> <span style={{color:"red",textDecoration:"underline",cursor:"pointer"}}>Read More</span>
      </p>
      
    </div>
  );
}
