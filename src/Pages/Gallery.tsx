import React, { useState, useEffect } from "react";
import { FiX, } from "react-icons/fi";
import { useNavbar } from "../contexts/NavbarContenxt";

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

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-background p-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-primary mb-4">
            La Pizzeria Italiana
          </h1>
          <p className="text-accent text-lg">
            Explore our authentic Italian pizzas and restaurant atmosphere
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
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-4">
                  <p className="text-lg font-semibold">{image.category}</p>
                  <p className="text-sm">{image.tags.join(", ")}</p>
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
                currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
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
