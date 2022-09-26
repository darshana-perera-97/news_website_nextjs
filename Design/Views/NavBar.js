import CopyRightLine from "../Components/CopyRightLine";
import Logo from "../Components/Logo";
import LeftMenuComponents from "../Layouts/LeftMenuComponents";

export default function NavBar() {
  return (
    <div style={{ backgroundColor: "#C8C8C8", height: "100vh" }}>
      <Logo />
      <LeftMenuComponents />
      {/* <CopyRightLine style={{ position: "absolute", bottom: "0" }} /> */}
    </div>
  );
}

//home
// authors
//contacts
// join with us
//about
