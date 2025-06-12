// import { Element } from "react-scroll";

// import { details , newLots } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Contact = () => {
  return (
    <section id="contact" className="bg-black-50 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-p4 mb-12">
        Contactez-nous
      </h2>
  
      <div className="flex justify-center flex-wrap gap-10">
        {/* Formulaire de contact */}
        <div className="w-full md:w-1/2">
          <form className="g7 rounded-xl shadow-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-p1 rounded-md shadow-sm p-3 focus:ring-p1 focus:border-p1 g4"
                placeholder="Votre nom"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" 
              className="block text-sm font-medium text-white">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-p1 rounded-md shadow-sm p-3 focus:ring-p1 focus:border-p1 g4"
                placeholder="votre@email.com"
                required
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full border border-p1 rounded-md shadow-sm p-3 focus:ring-p1 focus:border-p1 g4"
                placeholder="Écrivez votre message ici..."
                required
              ></textarea>
            </div>
  
            <Button icon="/images/zap.svg">Envoyer le message</Button>

          </form>
        </div>
  
        {/* Coordonnées + Carte */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="g7 rounded-xl shadow-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold text-p4">Nos coordonnées</h3>
            <p className="text-sm text-white">
             Adresse : <span className="text-p1">
              Lotissement El Yasmine, Alger </span>
            </p>
            <p className="text-sm text-white">
              Téléphone : <a href="tel:+213551234567" className="text-p1">+213 551 23 45 67</a>
            </p>
            <p className="text-sm text-white">
              Email : <a href="mailto:contact@bht.dz" className="text-p1">contact@bht.dz</a>
            </p>
          </div>
  
        </div>
      </div>
    </div>
  </section>
  
  );
};
export default Contact;
