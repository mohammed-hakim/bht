import { useParams } from "react-router-dom";
import { newLots , lotData} from "../constants";
import Button from "../components/Button.jsx";

import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";

import { useEffect, useState } from "react";
const LotDetails = () => {
    
    const categories = Object.keys(lotData);
    const { id } = useParams();
    const [activeCategory, setActiveCategory] = useState("F2");
    const [selectedImages, setSelectedImages] = useState({});

    useEffect(() => {
    if (id && categories.includes(id)) {
        setActiveCategory(id);
    }
    }, [id]);

    const handleThumbnailClick = (modelId, imageUrl) => {
    setSelectedImages((prev) => ({ ...prev, [modelId]: imageUrl }));
    };

//   const lot = newLots.find((item) => item.id === parseInt(id));
//   const [selectedType, setSelectedType] = useState("F2");
//   if (!lot) return <p>Bien non trouvé</p>;



 return (
     <main className="overflow-hidden">
          <Header />
          {/* <div className="container py-20">
      <img
        src={lot.image}
        alt={lot.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />
      <h1 className="text-4xl font-bold text-p4 mb-4">{lot.title}</h1>
      <p className="text-lg mb-2">{lot.description}</p>
      <p className="text-md mb-6">{lot.text}</p>
      <button className="btn text-white bg-p1 px-6 py-2 rounded-xl">
        {lot.button.title}
      </button>
    </div>
    


  
      <section className="min-h-screen py-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-p4">Nos Lots Résidentiels</h1>
  

          <div className="mb-10 text-center">

            <img src="/images/new/image.jpg" alt="Plan d'architecture" className="mx-auto mb-4 rounded-xl shadow-lg max-w-4xl w-full" />
            <h2 className="text-2xl font-semibold mb-2">Projet Résidentiel X</h2>
            <p className="text-gray-600">Choisissez un type d’appartement pour découvrir les modèles disponibles.</p>
          </div>
  
          <div className="flex justify-center gap-4 mb-10">
            {["F2", "F3", "F4", "Duplex"].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full border-2 transition-all font-medium ${
                  selectedType === type
                    ? "bg-p4 text-white border-p4"
                    : "text-p4 border-p4 hover:bg-p4 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {lotData[selectedType].map(({ id, surface, planImage, details, floors }) => (
              <div key={id} className="rounded-2xl border border-gray-300 p-4 shadow">
                <img src={planImage} alt={`Plan ${id}`} className="rounded-xl mb-3 h-40 w-full object-cover" />
                <p className="text-lg font-semibold text-p4 mb-2">Surface : {surface}</p>
                <p className="text-sm text-gray-500 mb-3">
  Étages disponibles : {floors.map(f => `${f}ᵉ`).join(", ")}
</p>
                <div className="grid grid-cols-5 gap-2">
                  {details.map((src, idx) => (
                    <img key={idx} src={src} alt={`Détail ${idx + 1}`} className="w-full h-16 object-cover rounded-md" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    */}







  <section className="py-16 px-4">
    <h1 className="text-4xl mt-6 font-bold text-center mb-12 text-p4">
      Nos biens résidentiels
    </h1>
 <img src="/images/new/building.png" alt="Building" className="mx-auto mb-4 rounded-xl shadow-lg max-w-4xl w-full" />

 <h2 className="text-3xl mt-6 font-bold text-center mb-12 text-p4">
      Plan d&apos;architecture
    </h2>
 <img src="/images/lots/plan.jpg" alt="Building" className="mx-auto mb-4 rounded-xl shadow-lg max-w-4xl w-full" />
 <h1 className="text-3xl mt-6 font-bold text-center mb-12 text-p4">
      Nos Modéles
    </h1>
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {categories.map((cat , i) => (
        // <button
        //   key={cat}
        //   onClick={() => setActiveCategory(cat)}
        //   className={`px-6 py-2 rounded-full border text-sm font-semibold transition-colors ${
        //     activeCategory === cat
        //       ? "bg-p4 text-white"
        //       : "border-p4 text-p4 hover:bg-p4/10"
        //   }`}
        // >
        //   {cat}
        // </button>
                <Button key={i}       
                    onClick={() => setActiveCategory(cat)}
                selected={activeCategory == cat}>{cat}</Button>

      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      {lotData[activeCategory].map((model, index) => (
        <div
          key={model.id}
          className="rounded-3xl border-2 border-s3 p-6 shadow-xl g7"
        >
          <h2 className="text-xl text-center font-bold mb-4 text-p4">
            {`${activeCategory} - Modèle ${index + 1}`}
          </h2>

          <img
            src={selectedImages[model.id] || model.planImage}
            alt="Plan principal"
            className="w-full h-64 object-cover rounded-xl mb-4"
          />

          <div className="flex gap-2 mb-4 overflow-x-auto">
            {model.details.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Détail ${i + 1}`}
                onClick={() => handleThumbnailClick(model.id, img)}
                className={`w-16 h-16 rounded-md object-cover cursor-pointer border-2 ${
                  selectedImages[model.id] === img ? "border-p1" : "border-transparent"
                }`}
              />
            ))}
          </div>

          <p className="text-sm mb-2 font-medium">
            Surface: <span className="font-semibold">{model.surface}</span>
          </p>
          <p className="text-sm mb-2">
            Étages disponibles: {model.floors.join(", ")}
          </p>
          <p className={`text-sm font-bold ${model.disponible ? "text-green-600" : "text-red-600"}`}>
            {model.disponible ? "Disponible" : "Non disponible"}
          </p>
        </div>
      ))}
    </div>
  </section>


            <Footer />
        </main>
);
};

export default LotDetails;
