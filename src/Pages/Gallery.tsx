import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useNavbar } from "../contexts/NavbarContenxt";
import Loader from "../components/Loader";

interface Image {
  id: number;
  url: string;
  category: string;
  tags: string[];
  alt: string;
}

const importAllImages = (): Image[] => {
  const modules = import.meta.glob("../assets/fermento 2.0 FOTO/*.{png,jpg,jpeg,svg}", { eager: true });
  const imagesArray: Image[] = Object.entries(modules).map(([path, module], index) => {
    const url = (module as any).default || module;
    const altText = path.split("/").pop() || "";
    return {
      id: index,
      url,
      category: "Default",
      tags: [],
      alt: altText,
    };
  });
  return imagesArray;
};

const images: Image[] = importAllImages();

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filteredImages] = useState<Image[]>(images);
  const { setIsVisible } = useNavbar();
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  // Stato per il caricamento delle immagini
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Calcola le immagini correnti in base alla pagina
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  // Resetta il contatore e lo stato del loader quando cambia la pagina
  useEffect(() => {
    setImagesLoadedCount(0);
    setAllImagesLoaded(false);
  }, [currentPage]);

  // Quando tutte le immagini della pagina corrente sono caricate, aggiorna lo stato
  useEffect(() => {
    if (currentImages.length > 0 && imagesLoadedCount === currentImages.length) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoadedCount, currentImages.length]);

  const handleImageLoad = () => {
    setImagesLoadedCount(prev => prev + 1);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && selectedImage) {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    setIsVisible(!selectedImage);
  }, [selectedImage, setIsVisible]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-background p-6 animate-fadeIn">
      {/* Mostra il loader finché le immagini della pagina corrente non sono tutte caricate */}
      {!allImagesLoaded && <Loader />}
      <div className="max-w-7xl mx-auto" style={{ display: allImagesLoaded ? "block" : "none" }}>
        <div className="text-center mb-12 animate-slideDown">
          <h1
            className="text-heading text-center mb-5 md:mb-10 text-4xl lg:text-6xl"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
           QUESTO È FERMENTO 2.0
          </h1>
          <p className="text-accent text-lg">
            Impasto unico, ingredienti di prima scelta e un atmosfera calda e accogliente.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer animate-fadeIn"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                onLoad={handleImageLoad}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-4">
              
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          {Array.from({ length: Math.ceil(filteredImages.length / imagesPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary-foreground transition-colors duration-300"
            >
              <FiX size={24} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain animate-scaleIn"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
