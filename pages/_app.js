import NavBar from "../Design/Views/NavBar";
import TopNavBar from "../Design/Views/TopNavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{display:"flex"}}>
      <NavBar />
      <div>
        <TopNavBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
