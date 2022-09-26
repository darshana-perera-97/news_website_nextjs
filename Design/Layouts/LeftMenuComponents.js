import Link from "next/link";
import SingleLink from "../Components/SingleLink";

export default function LeftMenuComponents() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontSize: "19px",
          margin: "0px",
          fontWeight: "bold",
          color: "white",
          background: "#484848",
          padding: "20px",
        }}
      >
        Main Menu
      </p>
      <SingleLink name="Home" route="/" />
      <SingleLink name="Authors" route="/authors" />
      <SingleLink name="Contacts" route="/contacts" />
      <SingleLink name="Join with us" route="/join" />
      <SingleLink name="About" route="/about" />
    </div>
  );
}
//home
// authors
//contacts
// join with us
//about
