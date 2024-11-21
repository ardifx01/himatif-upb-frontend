// pages/_app.js
import "../app/globals.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "@/pages/home/footer/index.jsx";
import Feedback from "@/pages/home/feedback/index.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Feedback />
      <Footer />
    </div>
  );
}

export default MyApp;
