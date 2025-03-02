import { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { GiFullPizza, GiHotMeal, GiFrenchFries, GiCookingPot } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { MdLocalPizza } from "react-icons/md";
import { IoIosPizza } from "react-icons/io";
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
const Menu = () => {
  const { t } = useTranslation();
  // Utilizziamo la stringa italiana come identificatore, che verrà tradotta per la visualizzazione
  const [activeCategory, setActiveCategory] = useState("Pizze Classiche");

  // Array delle categorie (identificate con la stringa originale, usata per il filtraggio)
  const categories: { name: CategoryName; icon: JSX.Element }[] = [
    { name: "Antipasti", icon: <GiFrenchFries /> },
    { name: "Pizze Classiche", icon: <FaPizzaSlice /> },
    { name: "Pizze Speciali", icon: <FaPizzaSlice /> },
    { name: "Vegetariane", icon: <FaPizzaSlice /> },
    { name: "Pizze fritte", icon: <MdLocalPizza /> },
    { name: "Pizze 180 Grammi", icon: <IoIosPizza /> },
    { name: "Pizze al Padellino", icon: <GiCookingPot /> },
    { name: "Padellino Farcito", icon: <GiHotMeal /> },
    { name: "Pizze Doppia Cottura", icon: <GiFullPizza /> },
    { name: "Bevande", icon: <BiDrink /> },
  ];

  // Mappatura dei nomi delle categorie alle chiavi di traduzione (da definire nelle risorse i18n)
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <div className="max-w-4xl mx-auto flex flex-col h-full">
        {/* Sezione Categorie - Fissa in alto */}
        <div className="sticky top-0 z-10 bg-background pt-4 pb-2 px-4">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-4 pb-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.name
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-secondary/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{t(categoryTranslations[category.name])}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sezione Items del Menu - Contenuto scrollabile */}
        <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between py-4 border-b border-border hover:bg-secondary/5 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-heading text-foreground mb-1">
                  {t(item.name)}
                  </h3>
                  <p className="text-accent text-sm mb-2">
                  {t(item.description)}
                  </p>
                </div>
                <motion.span
                  className="text-xl font-bold text-primary ml-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {item.price}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;