import React, { useState, useEffect } from "react";
import OptimizedImage from "../components/OptimizedImage";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

const RestaurantBlog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const realArticles: Article[] = [
    {
      id: 1,
      title: "A Palermo c'é una nuova Molecola, ma è la pizzeria del pizzaiolo Salvo Capizzi",
      excerpt: "Nel 2023 una nuova pizzeria ha aperto nel centro storico di Palermo, in via Velasquez a due passi dal Teatro Politeama, e fin qui nulla di strano, ma la sua inconsueta formula ha catalizzato la nostra attenzione, sia per il nome che per il suo ideatore e conduttore, essa si chiama Molecola Pizzeria e lui è Salvo Capizzi.",
      date: "04-04-2024",
      image: "	https://www.allfoodsicily.it/wp-content/uploads/2024/03/pizzeria_molecola_2024_001.jpg",
      link: "https://www.allfoodsicily.it/a-palermo-ce-una-nuova-molecola-ma-e-la-pizzeria-del-pizzaiolo-salvo-capizzi/"
    },
    {
      id: 2,
      title: "Da Molecola a Palermo la sperimentazione approda in un menù tutto vegan",
      excerpt: "La passione per la chimica sta alla base della cucina molecolare e Salvatore Capizzi, patron di Molecola Pizzeria e istruttore dell’Accademia Pizza DOC, la chimica continua a studiarla in cucina attraverso lo studio delle materie prime.",
      date: "18-02-2025",
      image: "https://www.allfoodsicily.it/wp-content/uploads/2025/02/Salvo-Capizzi.jpg",
      link: "https://www.allfoodsicily.it/da-molecola-il-nuovo-menu-vegan-salvo-capizzi-sperimentazione-sulle-materie-prime/"
    },
    {
      id: 3,
      title: "Pizza molecolare in Sicilia? Il pizzaiolo Salvo Capizzi apre Molecola",
      excerpt: "Salvatore Capizzi, patron e pizzaiolo di Molecola, ha intrapreso il percorso della cucina dopo gli studi in ingegneria, seguendo la sua passione per il mondo dei lievitati e della gastronomia in generale, come dimostra il suo ruolo di istruttore presso l’Accademia Pizza DOC e uno studio approfondito sulle metodologie, che gli ha consentito di diventare tecnico di un noto molino nazionale.",
      date: "01-02-2024",
      image: "https://www.allfoodsicily.it/wp-content/uploads/2024/01/Molecola.jpeg",
      link: "https://www.allfoodsicily.it/a-palermo-ce-una-nuova-molecola-ma-e-la-pizzeria-del-pizzaiolo-salvo-capizzi/"
    }
  ];

  useEffect(() => {
    setArticles(realArticles);
  }, []);

  interface ArticleCardProps {
    article: Article;
  }

  const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 flex flex-col h-full">
      <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <OptimizedImage
          src={article.image}
          alt={article.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">{article.title}</h3>
        <p className="text-accent mb-4 flex-grow line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center justify-end text-sm text-muted-foreground">
          <span>{article.date}</span>
        </div>
        <div className="mt-4 flex items-center justify-end">
          <button
            onClick={() => window.open(article.link, "_blank")}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Leggi di più
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-foreground mb-8">
          PARLANO DI NOI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantBlog;