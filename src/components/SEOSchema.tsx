import React from "react";


interface SEOSchemaProps {
  type?: "restaurant" | "article" | "menu";
  articleData?: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
  };
}

const SEOSchema: React.FC<SEOSchemaProps> = ({ type = "restaurant", articleData }) => {


  // Dati schema per ristorante
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Molecola Pizzeria",
    "image": "https://www.molecolapizzeria.it/images/molecola-pizzeria.jpg",
    "url": "https://www.molecolapizzeria.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Giuseppe Velasquez, 29/35",
      "addressLocality": "Palermo",
      "postalCode": "90141",
      "addressRegion": "PA",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.123891",
      "longitude": "13.355316"
    },
    "telephone": "+39 375 5600 247",
    "servesCuisine": ["Pizza", "Cucina Innovativa", "Pizza Molecolare", "Italiana"],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "17:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "17:00",
        "closes": "22:00"
      }
    ],
    "menu": "https://www.molecolapizzeria.it/menu",
    "acceptsReservations": "True"
  };

  // Schema per articolo di blog
  const articleSchema = articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.headline,
    "description": articleData.description,
    "image": articleData.image,
    "datePublished": articleData.datePublished,
    "author": {
      "@type": "Person",
      "name": "Molecola Pizzeria"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Molecola Pizzeria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.molecolapizzeria.it/logo.png"
      }
    }
  } : null;

  // Schema per menu ristorante
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu Molecola",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Molecolari",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Essenza di Zucca",
            "description": "Bufala Campana DOP, Crema di zucca in agrodolce, Prosciutto Crudo Levoni 18 mesi, Pinoli Tostati, Cialde di zucca cristallizzata",
            "offers": {
              "@type": "Offer",
              "price": "18.00",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Tre consistenze di Formaggi",
            "description": "Crema di bufala DOP, Cialde di Grana padano 24 mesi, Spuma di blu di bufala, polvere di pomodoro Bio",
            "offers": {
              "@type": "Offer",
              "price": "18.00",
              "priceCurrency": "EUR"
            }
          }
        ]
      }
    ]
  };

  // Seleziona lo schema appropriato in base al tipo
  const schemaData = type === "restaurant" ? restaurantSchema : 
                    type === "article" ? articleSchema : menuSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SEOSchema; 