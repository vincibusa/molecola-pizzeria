import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPizzaSlice, FaLeaf, FaWineBottle } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
}

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("pizza");

  // Categorie del menu
  const categories = [
    {
      id: "pizza",
      name: t("menu.categories.pizza"),
      icon: <FaPizzaSlice className="mr-2" />
    },
    {
      id: "starters",
      name: t("menu.categories.starters"),
      icon: <FaLeaf className="mr-2" />
    },
    {
      id: "drinks",
      name: t("menu.categories.drinks"),
      icon: <FaWineBottle className="mr-2" />
    },
    {
      id: "desserts",
      name: t("menu.categories.desserts"),
      icon: <GiCupcake className="mr-2" />
    }
  ];

  // Ottieni gli elementi del menu filtrati per categoria
  const getMenuItems = (): MenuItem[] => {
    // Questi sono solo esempi di menu items, nella versione reale verrebbero caricati da un'API
    const menuItems: MenuItem[] = [
      // Pizze
      { id: "p1", name: t("menu.items.molecola.name"), description: t("menu.items.molecola.description"), price: "14,90€", category: "pizza", isNew: true },
      { id: "p2", name: t("menu.items.margherita.name"), description: t("menu.items.margherita.description"), price: "9,90€", category: "pizza", isVegetarian: true },
      { id: "p3", name: t("menu.items.diavola.name"), description: t("menu.items.diavola.description"), price: "12,90€", category: "pizza", isSpicy: true },
      { id: "p4", name: t("menu.items.vegetariana.name"), description: t("menu.items.vegetariana.description"), price: "13,90€", category: "pizza", isVegetarian: true },
      { id: "p5", name: t("menu.items.tartufo.name"), description: t("menu.items.tartufo.description"), price: "16,90€", category: "pizza" },
      { id: "p6", name: t("menu.items.quattroformaggi.name"), description: t("menu.items.quattroformaggi.description"), price: "13,90€", category: "pizza", isVegetarian: true },
      
      // Antipasti
      { id: "s1", name: t("menu.items.bruschetta.name"), description: t("menu.items.bruschetta.description"), price: "7,90€", category: "starters", isVegetarian: true },
      { id: "s2", name: t("menu.items.capresesalad.name"), description: t("menu.items.capresesalad.description"), price: "9,90€", category: "starters", isVegetarian: true },
      { id: "s3", name: t("menu.items.frittura.name"), description: t("menu.items.frittura.description"), price: "10,90€", category: "starters" },
      
      // Bevande
      { id: "d1", name: t("menu.items.redwine.name"), description: t("menu.items.redwine.description"), price: "21,90€", category: "drinks" },
      { id: "d2", name: t("menu.items.whitewine.name"), description: t("menu.items.whitewine.description"), price: "19,90€", category: "drinks" },
      { id: "d3", name: t("menu.items.craftbeer.name"), description: t("menu.items.craftbeer.description"), price: "6,90€", category: "drinks" },
      
      // Dessert
      { id: "de1", name: t("menu.items.tiramisu.name"), description: t("menu.items.tiramisu.description"), price: "6,90€", category: "desserts" },
      { id: "de2", name: t("menu.items.pannacotta.name"), description: t("menu.items.pannacotta.description"), price: "5,90€", category: "desserts" }
    ];
    
    return menuItems.filter(item => item.category === selectedCategory);
  };

  const filteredItems = getMenuItems();

  return (
    <section className="py-20 bg-pizza-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-pizza-brown mb-4">
            {t("menu.title")}
          </h1>
          <div className="h-1 w-24 bg-pizza-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
            {t("menu.description")}
          </p>
        </div>

        {/* Tabs per le categorie */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? "bg-pizza-red text-white"
                  : "bg-white text-pizza-brown hover:bg-gray-100"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Lista elementi menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-playfair text-pizza-brown">
                    {item.name}
                    {item.isVegetarian && (
                      <span className="ml-2 text-green-600 text-sm" title={t("menu.vegetarian")}>
                        <FaLeaf />
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="ml-2 text-red-600 text-sm" title={t("menu.spicy")}>
                        🌶️
                      </span>
                    )}
                  </h3>
                  <div className="text-pizza-red font-medium">{item.price}</div>
                </div>
                <p className="text-gray-600 font-montserrat text-sm">{item.description}</p>
                
                {item.isNew && (
                  <div className="mt-3">
                    <span className="inline-block bg-pizza-red text-white text-xs px-2 py-1 rounded-full">
                      {t("menu.new")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note aggiuntive */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm font-montserrat">
            {t("menu.additionalNotes")}
          </p>
          <button
            className="pizza-btn bg-pizza-brown text-white px-6 py-3 mt-6"
          >
            {t("menu.downloadPdfButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;