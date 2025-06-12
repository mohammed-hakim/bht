// import { Element } from "react-scroll";

// import { details , newLots } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Map = () => {
  return (
    <section id="Map" className="bg-black-50 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-p4 mb-12">
        Localisation
      </h2>
  
      <div className="flex justify-center flex-wrap gap-10">
   

        <div className="w-full md:w-1/2 flex flex-col gap-6">

  
          {/* Carte Google Maps */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12789.106259406512!2d3.058756!3d36.753768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadf5875a4a4f%3A0x8b2a7594b929f774!2sAlger%2C%20Algeria!5e0!3m2!1sfr!2sdz!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Notre localisation"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};
export default Map;
