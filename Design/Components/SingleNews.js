import Image from "next/image";

export default function SingleNews(prop) {
  return (
    <div style={{ padding: "0px 50px", display: "flex" }}>
      <img src={prop.link} height="350vh" />
      <p style={{ paddingLeft: "80px" }}>
        <b>{prop.heading}</b>
        <br />
        <br />
        {prop.des}
      </p>
    </div>
  );
}
