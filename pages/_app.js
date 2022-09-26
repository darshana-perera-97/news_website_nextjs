import NavBar from "../Design/Views/NavBar";
import NewsLine from "../Design/Views/NewsLine";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div>
        <NewsLine />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
