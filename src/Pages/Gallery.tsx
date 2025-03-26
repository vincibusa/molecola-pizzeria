import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import OptimizedImage from "../components/OptimizedImage";

// Importazione delle foto della galleria
import gallery1 from "../assets/molecola/DSCF7969.jpg";
import gallery2 from "../assets/molecola/DSCF8020.jpg";
import gallery3 from "../assets/molecola/DSCF8037.jpg";
import gallery4 from "../assets/molecola/DSCF8063.jpg";
import gallery5 from "../assets/molecola/DSCF8076.jpg";
import gallery6 from "../assets/molecola/DSCF8120.jpg";
import gallery7 from "../assets/molecola/DSCF8147.png";
import gallery8 from "../assets/molecola/DSCF8158.png";
import gallery9 from "../assets/molecola/DSCF8177.png";
import gallery10 from "../assets/molecola/DSCF8191.png";
import gallery11 from "../assets/molecola/DSCF8205.png";
import gallery12 from "../assets/molecola/DSCF8218.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const imagesPerPage = 9;

  // Array di immagini della galleria
  const galleryImages: GalleryImage[] = [
    { src: gallery1, alt: t("gallery.pizzaAlt"), category: "restaurant" },
    { src: gallery2, alt: t("gallery.pizzaAlt"), category: "pizza" },
    { src: gallery3, alt: t("gallery.ingredientsAlt"), category: "ingredients" },
    { src: gallery4, alt: t("gallery.restaurantAlt"), category: "restaurant" },
    { src: gallery5, alt: t("gallery.pizzaAlt"), category: "pizza" },
    { src: gallery6, alt: t("gallery.teamAlt"), category: "team" },
    { src: gallery7, alt: t("gallery.ingredientsAlt"), category: "ingredients" },
    { src: gallery8, alt: t("gallery.ingredientsAlt"), category: "ingredients" },
    { src: gallery9, alt: t("gallery.pizzaAlt"), category: "pizza" },
    { src: gallery10, alt: t("gallery.pizzaAlt"), category: "pizza" },
    { src: gallery11, alt: t("gallery.restaurantAlt"), category: "restaurant" },
    { src: gallery12, alt: t("gallery.teamAlt"), category: "team" },
  ];

  // Filtra le immagini in base alla categoria selezionata
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  // Immagini nella pagina corrente
  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  // Aggiorna la pagina corrente quando cambia la categoria
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Categorie disponibili
  const categories = [
    { id: "all", label: t("gallery.categories.all") },
    { id: "pizza", label: t("gallery.categories.pizza") },
    { id: "ingredients", label: t("gallery.categories.ingredients") },
    { id: "restaurant", label: t("gallery.categories.restaurant") },
    { id: "team", label: t("gallery.categories.team") },
  ];

  return (
    <section className="py-20 bg-pizza-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-pizza-brown mb-4">
            {t("gallery.title")}
          </h1>
          <div className="h-1 w-24 bg-pizza-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
            {t("gallery.description")}
          </p>
        </div>

        {/* Filtri per categorie */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? "bg-pizza-red text-white"
                  : "bg-white text-pizza-brown hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Griglia galleria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                width={400}
                height={256}
                loading={index < 6 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 flex items-center justify-center transition-opacity duration-200">
                <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-200 transform translate-y-2 hover:translate-y-0">
                  <span className="sr-only">{t("gallery.viewImage")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginazione */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`mx-1 px-3 py-1 rounded hover:scale-110 active:scale-95 transition-transform duration-200 ${
                  currentPage === i + 1 ? "bg-pizza-red text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-screen-lg max-h-screen">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary-foreground hover:scale-110 active:scale-90 transition-all duration-200"
              aria-label={t("gallery.close")}
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
