import React, { useState, useEffect } from "react";



interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;

  date: string;
  image: string;

  link:string
}

const RestaurantBlog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const dummyArticles: Article[] = [
    {
      id: 1,
      title: "La pizza di Fermento 2.0 a Cefalù è un viaggio tra sapori genuini e innovazione",
      excerpt: "il locale immerso nel centro storico di Cefalù che punta tutto su un mix di tradizione e contemporaneità",
      category: "Recipes",
   
      date:"20-06-2024",
      image: "https://www.allfoodsicily.it/wp-content/uploads/2024/04/PRIMO-PIANO.jpeg",
     
      link:"https://www.allfoodsicily.it/la-pizza-di-fermento-2-0-a-cefalu-e-un-viaggio-tra-sapori-genuini-e-innovazione/"
    },
    {
        id: 2,
        title: "La pizza di Fermento 2.0 a Cefalù è un viaggio tra sapori genuini e innovazione",
        excerpt: "il locale immerso nel centro storico di Cefalù che punta tutto su un mix di tradizione e contemporaneità",
        category: "Recipes",
     
        date:"20-06-2024",
        image: "https://www.allfoodsicily.it/wp-content/uploads/2024/04/PRIMO-PIANO.jpeg",
       
        link:"https://www.allfoodsicily.it/la-pizza-di-fermento-2-0-a-cefalu-e-un-viaggio-tra-sapori-genuini-e-innovazione/"
      },
   
  ];

  useEffect(() => {
    setArticles(dummyArticles);
  }, []);

  interface ArticleCardProps {
    article: Article;
  }

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 flex flex-col h-full">
    <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
        {article.category}
      </span>
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
          Our Latest Articles
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