import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    // <footer>
    //   <div className="container py-10">
    //     <div className="flex w-full max-md:flex-col">
    //       <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
    //         <p className="opacity-70">Copyright, XORA</p>
    //       </div>
    //       <div className="flex items-center justify-center sm:ml-auto">
    //         <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
    //           Privacy Policy
    //         </p>
    //         <p className="text-p5 transition-all duration-500 hover:text-p1">
    //           Terms of Use
    //         </p>
    //       </div>

    //       <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
    //         {socials.map(({ id, url, icon, title }) => (
    //           <li key={id}>
    //             <a href={url} className="social-icon">
    //               <img
    //                 src={icon}
    //                 alt={title}
    //                 className="size-1/3 object-contain"
    //               />
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
  
    <footer className="g7 border-t border-s3 mt-20">
    <div className="container py-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        {/* Logo et texte */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
         {/* src="/images/xora.svg" */}
          <img src="/images/logo.svg" alt="Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-500 max-w-xs">
            © {new Date().getFullYear()} Ceatic Immobilier. Tous droits réservés.
          </p>
        </div>
  
        {/* Liens légaux */}
        <div className="flex flex-col items-center gap-2 text-sm text-gray-500 md:text-right">
          <a href="/mentions-legales" className="hover:text-p1 transition">Mentions légales</a>
          <a href="/politique-confidentialite" className="hover:text-p1 transition">Politique de confidentialité</a>
          <a href="/conditions-utilisation" className="hover:text-p1 transition">Conditions d’utilisation</a>
        </div>
  
        {/* Réseaux sociaux */}
        <div className="flex justify-center md:justify-end flex-1 gap-4">
          {socials.map(({ id, url, icon, title }) => (
            <a
              key={id}
              href={url}
              aria-label={title}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-70"
            >
              <img src={icon} alt={title} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
  
  );
};
export default Footer;
