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
    "name": "Pizzeria Fermento 2.0",
    "image": "https://www.fermento20.it/path/to/og-image.jpg",
    "url": "https://www.fermento20.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Giacomo Matteotti, 29",
      "addressLocality": "Cefalù",
      "postalCode": "90015",
      "addressRegion": "PA",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.0382736",
      "longitude": "14.0182135"
    },
    "telephone": "+39 331 872 7612",
    "servesCuisine": "Pizzeria, Cucina Italiana",
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "19:00",
        "closes": "23:00"
      }
    ],
    "menu": "https://www.fermento20.it/menu",
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
      "name": "Pizzeria Fermento 2.0"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pizzeria Fermento 2.0",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.fermento20.it/logo.png"
      }
    }
  } : null;

  // Schema per menu ristorante
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu Pizzeria Fermento 2.0",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Pizze Classiche",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Margherita",
            "description": "Pomodoro, mozzarella, basilico",
            "offers": {
              "@type": "Offer",
              "price": "8.00",
              "priceCurrency": "EUR"
            }
          }
          // Aggiungere altri elementi del menu se necessario
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