import { Element } from "react-scroll";
import { Link } from "react-router-dom";

import { details , newLots } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Features = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100,
      });
    }
  }, [location]);
  return (
    <section>

 
    {/* <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />

                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section> */}
    <section>
    <Element name="logements">

  <div className="container">
  <h1 className="text-4xl font-bold text-center mb-12 text-p4">
  Nos biens résidentiels
      </h1>
    <div className="grid md:grid-cols-2 gap-8">
      {newLots
      .map(({ id, image, title, description , button , text}) => (
        <div
          key={id}
          className="rounded-3xl border-2 border-s3 p-5 shadow-lg bg-s3/20"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          {/* <h2 className="text-xl font-semibold mb-3">{title}</h2>
          <p className="text-gray-600">{description}</p> */}


          <p className="caption mb-6 max-md:mb-6">{description}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>

                <Link to={`/lot/${id}`} className="btn inline-flex items-center gap-2 text-p1 hover:text-p4">
                <Button icon={button.icon}>{button.title}</Button>
    </Link>
            
        </div>
      ))}
    </div>

  </div></Element>
</section>

<section>
      <Element name="offres">
        <div className="container">
         <h1 className="text-4xl font-bold text-center mb-12 text-p4 mt-20">
      Nos Offres
    </h1> 
    <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl overflow-hidden feature-after g7 ">
          
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl flex-wrap">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20  fill-current text-p1"
                    />
                  </div>

                  <h2 className="relative z-2 max-w-32 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>

    {/* <section>
  <Element name="features">
    <div className="container">
      <h1 className="text-4xl font-bold text-center mb-12 text-p4 mt-20">
        Nos Offres
      </h1>

      <div className="relative border-2 border-s3 rounded-7xl overflow-hidden feature-after p-6">
        <ul className="flex flex-wrap justify-center items-start gap-6 w-full">
          {details.map(({ id, icon, title }) => (
            <li
              key={id}
              className="flex flex-col items-center justify-start w-[130px] md:w-[150px] pt-10 pb-6 px-2"
            >
              
              <div className="flex items-center justify-center mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 w-20 h-20">
                <img
                  src={icon}
                  alt={title}
                  className="size-17/20 object-contain z-20"

/>
              </div>
              <h3 className="text-center text-xs uppercase text-p4 max-w-[100px]">
                {title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Element>
</section> */}

   </section>
  );
};
export default Features;
