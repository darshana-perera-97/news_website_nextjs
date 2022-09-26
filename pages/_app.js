import TopBar from "../Design/Components/TopBar";
import NavBar from "../Design/Views/NavBar";
import NewsLine from "../Design/Views/NewsLine";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div>
        <NewsLine />
        <TopBar/>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
