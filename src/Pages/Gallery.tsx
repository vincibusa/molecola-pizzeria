import React, { useState, useEffect, useCallback } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavbar } from "../contexts/NavbarContenxt";

interface Image {
  id: number;
  url: string;
  category: string;
  tags: string[];
  alt: string;
}

const images: Image[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    category: "pizzas",
    tags: ["margherita", "classic"],
    alt: "Margherita Pizza",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee",
    category: "restaurant",
    tags: ["interior", "dining"],
    alt: "Restaurant Interior",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    category: "pizzas",
    tags: ["pepperoni", "specialty"],
    alt: "Pepperoni Pizza",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0",
    category: "kitchen",
    tags: ["chef", "cooking"],
    alt: "Pizza Chef at Work",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    category: "pizzas",
    tags: ["vegetarian", "fresh"],
    alt: "Vegetarian Pizza",
  },
];

const categories: string[] = ["all", "pizzas", "restaurant", "kitchen"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filteredImages, setFilteredImages] = useState<Image[]>(images);
  
  // Recupera la funzione per aggiornare lo stato di visibilità della navbar
  const { setIsVisible } = useNavbar();

  const filterImages = useCallback(() => {
    let filtered = images;
    if (selectedCategory !== "all") {
      filtered = filtered.filter((img) => img.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter((img) =>
        img.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    setFilteredImages(filtered);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    filterImages();
  }, [filterImages]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && selectedImage) {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Imposta la visibilità della navbar in base alla presenza di un'immagine selezionata
  useEffect(() => {
    if (selectedImage) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [selectedImage, setIsVisible]);

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

        <div className="mb-8 space-y-4 animate-slideRight">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-64 animate-fadeIn">
              <input
                type="text"
                placeholder="Search our menu..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 ease-in-out"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
            </div>
            <div className="flex gap-2 flex-wrap justify-center animate-fadeIn">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
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
