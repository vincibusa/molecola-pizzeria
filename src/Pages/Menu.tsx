import { useState } from "react";
import { FaPizzaSlice, FaLeaf, FaWineGlassAlt } from "react-icons/fa";
import { GiFullPizza, GiHotMeal, GiFrenchFries, GiCookingPot, GiChefToque, GiPizzaCutter } from "react-icons/gi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { menuItems } from "../data/menuData";
import { JSX } from "react/jsx-runtime";

type CategoryName =
  | "Antipasti"
  | "Pizze Classiche"
  | "Pizze Speciali"
  | "Vegetariane"
  | "Pizze fritte"
  | "Pizze 180 Grammi"
  | "Pizze al Padellino"
  | "Padellino Farcito"
  | "Pizze Doppia Cottura"
  | "Bevande";

// Interfaccia per gli elementi del menu
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isVegetarian?: boolean;
}

const Menu = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryName>("Pizze Classiche");
  const [animateItems, setAnimateItems] = useState(true);

  // Array delle categorie
  const categories: { name: CategoryName; icon: JSX.Element }[] = [
    { name: "Antipasti", icon: <GiFrenchFries className="text-pizza-red" /> },
    { name: "Pizze Classiche", icon: <FaPizzaSlice className="text-pizza-red" /> },
    { name: "Pizze Speciali", icon: <GiChefToque className="text-pizza-red" /> },
    { name: "Vegetariane", icon: <FaLeaf className="text-pizza-red" /> },
    { name: "Pizze fritte", icon: <GiPizzaCutter className="text-pizza-red" /> },
    { name: "Pizze 180 Grammi", icon: <GiFullPizza className="text-pizza-red" /> },
    { name: "Pizze al Padellino", icon: <GiCookingPot className="text-pizza-red" /> },
    { name: "Padellino Farcito", icon: <GiHotMeal className="text-pizza-red" /> },
    { name: "Pizze Doppia Cottura", icon: <GiFullPizza className="text-pizza-red" /> },
    { name: "Bevande", icon: <FaWineGlassAlt className="text-pizza-red" /> },
  ];

  // Mappatura dei nomi delle categorie alle chiavi di traduzione
  const categoryTranslations: Record<CategoryName, string> = {
    "Antipasti": "menu.categories.antipasti",
    "Pizze Classiche": "menu.categories.pizzeClassiche",
    "Pizze Speciali": "menu.categories.pizzeSpeciali",
    "Vegetariane": "menu.categories.vegetariane",
    "Pizze fritte": "menu.categories.pizzeFritte",
    "Pizze 180 Grammi": "menu.categories.pizze180Grammi",
    "Pizze al Padellino": "menu.categories.pizzeAlPadellino",
    "Padellino Farcito": "menu.categories.padellinoFarcito",
    "Pizze Doppia Cottura": "menu.categories.pizzeDoppiaCottura",
    "Bevande": "menu.categories.bevande",
  };

  // Filtra gli items in base alla categoria attiva
  const filteredItems = menuItems.filter((cat) => cat.category === activeCategory)[0]?.items || [];

  // Gestisce il cambio di categoria con animazione
  const handleCategoryChange = (category: CategoryName) => {
    if (category === activeCategory) return;
    
    setAnimateItems(false);
    setTimeout(() => {
      setActiveCategory(category);
      setAnimateItems(true);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-pizza-background">
      {/* Header del menu */}
      <div className="bg-pizza-brown text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair text-center mb-2"
          >
            {t("menu.title")}
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-pizza-red mx-auto mb-4"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-200 max-w-2xl mx-auto"
          >
            {t("menu.subtitle")}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Sezione Categorie */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-pizza-red text-white shadow-md"
                    : "bg-white hover:bg-gray-100 text-pizza-brown"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span className="font-medium text-sm md:text-base whitespace-nowrap">
                  {t(categoryTranslations[category.name])}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Sezione Items del Menu */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            animate={{ opacity: animateItems ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="pizza-card p-4 relative overflow-hidden group"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-pizza-yellow opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="flex justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-playfair text-pizza-brown group-hover:text-pizza-red transition-colors duration-300">
                      {t(item.name)}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {t(item.description)}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-pizza-red">
                      €{item.price}
                    </span>
                    
                    {activeCategory === "Vegetariane" && (
                      <span className="flex items-center text-xs text-pizza-green mt-1">
                        <FaLeaf className="mr-1" />
                        {t("menu.vegetarian")}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Decorative pizza slice */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 text-pizza-yellow opacity-10 transform rotate-45">
                  <GiFullPizza size={48} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Footer del menu */}
      <div className="bg-white py-8 mt-12 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl text-pizza-brown mb-4">{t("menu.footer.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("menu.footer.text")}</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pizza-btn bg-pizza-brown text-white px-6 py-3 mt-6"
            >
              {t("reservationButton")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Menu;