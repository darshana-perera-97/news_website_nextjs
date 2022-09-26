import TopNavBar from "../Design/Views/TopNavBar";

export default function authors() {
  return (
    <div>
      <TopNavBar name="Authors of the NEWS" />
      <div style={{ display: "flex", padding: "40px 350px" }}>
        <img
          src="http://www.emsateknik.com.tr/wp-content/uploads/2018/01/avatar-png-1.png"
          height="250vh"
        />
        <div style={{ paddingLeft: "50px" }}>
          <h1>Darshana Perera</h1>
          <p style={{ margin: "0px",fontWeight:"bold" }}>Author of NEWS 24x7</p>
          <br />
          <p style={{ margin: "0px" }}>Connect Author</p>
          <a
            href="https://www.linkedin.com/in/darshana-perera-/"
            style={{ color: "blue",paddingLeft:"20px" }}
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/darshana-perera-97"
            style={{ color: "blue",paddingLeft:"20px" }}
          >
            GitHub
          </a>
          <br/>
          <a
            href="https://stackoverflow.com/users/20057317/darshana-perera"
            style={{ color: "blue",paddingLeft:"20px" }}
          >
            stackoverflow
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}
