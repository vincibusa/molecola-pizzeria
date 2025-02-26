import { useState } from "react";
import { FaPizzaSlice, } from "react-icons/fa";
import { GiFullPizza, GiHotMeal, GiFrenchFries, GiCookingPot } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { MdLocalPizza } from "react-icons/md";
import { IoIosPizza } from "react-icons/io";
import {motion} from "framer-motion";
import menuItems from "../data/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Pizze Classiche");

 const categories = [

  { name: "Antipasti", icon: <GiFrenchFries /> },
    { name: "Pizze Classiche", icon: <FaPizzaSlice /> },
    { name: "Pizze Speciali", icon: <FaPizzaSlice /> },
    { name: "Pizze fritte", icon: <MdLocalPizza /> },
    { name: "Pizze 180 Grammi", icon: <IoIosPizza /> },
    { name: "Pizze al Padellino", icon: <GiCookingPot /> },
    { name: "Padellino Farcito", icon: <GiHotMeal /> },
    { name: "Pizze Doppia Cottura", icon: <GiFullPizza /> },
    { name: "Bevande", icon: <BiDrink /> }
  ];
  const filteredItems =
    menuItems.filter((cat) => cat.category === activeCategory)[0]?.items ||
    [];

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="h-screen p-4 md:p-8 overflow-hidden"
  >
    <div className="max-w-4xl mx-auto h-full flex flex-col">
      {/* Categories Section */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
      >
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.name
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-card dark:bg-dark-card hover:bg-secondary/20 dark:hover:bg-dark-secondary/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Menu Items Section */}
      <motion.div 
        className="flex-1 overflow-y-auto space-y-6"
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
            className="flex items-center justify-between py-4 border-b border-border dark:border-dark-border hover:bg-secondary/5 dark:hover:bg-dark-secondary/5 transition-colors duration-200 px-4"
          >
            <div className="flex-1">
              <h3 className="text-xl font-heading text-foreground dark:text-dark-foreground mb-1">
                {item.name}
              </h3>
              <p className="text-accent dark:text-dark-accent text-sm mb-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
        
              </div>
            </div>
            <motion.span 
              className="text-xl font-bold text-primary dark:text-dark-primary ml-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
            >
              {item.price}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.div>
  );
};

export default Menu;
