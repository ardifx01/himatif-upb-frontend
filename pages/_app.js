// pages/_app.js
import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/home/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
