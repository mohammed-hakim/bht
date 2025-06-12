import Header from "../sections/Header.jsx";
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import Map from "../sections/map.jsx";
import Faq from "../sections/Faq.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Contact from "../sections/contact.jsx";
import Footer from "../sections/Footer.jsx";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Faq />
      <Testimonials />
      <Contact />
      <Map />

      <Footer />
    </main>
  );
};

export default Home;
