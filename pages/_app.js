// pages/_app.js
import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="w-full top-5 justify-center items-center fixed flex z-50">
        <div className="w-3/4 justify-center items-center ">
          <Navbar />
        </div>
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
