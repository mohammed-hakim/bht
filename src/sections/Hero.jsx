import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
            Immeuble Résidentiel
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Moderne et Élégant
            </h1>
            <p className="drop-shadow-[0_2px_6px_rgba(0,0,0,1)] max-w-440 mb-14 body-1 max-md:mb-10">
            Nous avons conçu cet immeuble résidentiel moderne pour offrir confort, style
            et fonctionnalité dans un cadre contemporain.
            </p>
            <LinkScroll to="logements" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Découvrer Nos Offres</Button>
            </LinkScroll>
          </div>

          <div className="z-[-1] absolute -top-32 left-[calc(50%)] w-[700px] pointer-events-none hero-img_res max-md:max-h-[120vh] overflow-hidden">
            <img
              src="/images/new/hero-bati.png"
              className="size-700 max-lg:h-auto "
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
