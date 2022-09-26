import TopNavBar from "../Design/Views/TopNavBar";

export default function contacts() {
  return (
    <div>
      <TopNavBar name="Contacts" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 100px",
        }}
      >
        <img
          src="https://www.newsfirst.lk/wp-content/themes/nfst-eng-theme/assets/dist/images/Media-Gold.png"
          height="150vh"
        />
        <div>
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            News 24x7, News Channel (Pvt) Ltd, MBC Networks (Pvt) Ltd, 45/3,
            Maine Street, Colombo.
            <br /> T.P : +94 114 792 700, Fax : +94 114 792 733 <br />{" "}
            contact@news24x7.lk
          </p>
        </div>
        <img
          src="https://www.newsfirst.lk/wp-content/themes/nfst-eng-theme/assets/dist/images/Media-Gold.png"
          height="150vh"
        />
      </div>
    </div>
  );
}
