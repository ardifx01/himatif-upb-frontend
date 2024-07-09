// pages/_app.js
import "../app/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
