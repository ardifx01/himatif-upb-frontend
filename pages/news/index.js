import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="zoom-in-up">
      <title>News</title>
      <h1>News</h1>
    </div>
  );
};

export default About;
