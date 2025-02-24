import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CookieConsentModal, { CookiePreferences } from "./CookieConsentModal";

const SocialPosts: React.FC = () => {
  // Stato per le preferenze cookie lette dal localStorage
  const [cookieConsent, setCookieConsent] = useState<CookiePreferences | null>(null);
  // I post Facebook verranno caricati solo se la preferenza "marketing" è true
  const cookiesAccepted = cookieConsent?.marketing === true;
  const [postsLoaded, setPostsLoaded] = useState<number>(0);

  // Aggiorna periodicamente lo stato delle preferenze dal localStorage
  useEffect(() => {
    const checkConsent = () => {
      const consentString = localStorage.getItem("cookieConsent");
      if (consentString) {
        const consent: CookiePreferences = JSON.parse(consentString);
        setCookieConsent(consent);
      }
    };
    checkConsent();
    const interval = setInterval(checkConsent, 1000);
    return () => clearInterval(interval);
  }, []);

  // Carica gli script degli embed
  useEffect(() => {
    // Script di Instagram (non particolarmente invasivo)
    const igScript = document.createElement("script");
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;
    document.body.appendChild(igScript);

    // Script di Facebook solo se l'utente ha accettato i cookie non essenziali
    if (cookiesAccepted) {
      if (!document.getElementById("facebook-jssdk")) {
        const fbScript = document.createElement("script");
        fbScript.id = "facebook-jssdk";
        fbScript.src = "https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v16.0";
        fbScript.async = true;
        document.body.appendChild(fbScript);
      } else if ((window as any).FB) {
        (window as any).FB.XFBML.parse();
      }
    }
  }, [cookiesAccepted]);

  // Polling per riprocessare gli embed
  useEffect(() => {
    const checkAndProcess = () => {
      if ((window as any).instgrm && (window as any).instgrm.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
      if (cookiesAccepted && (window as any).FB && (window as any).FB.XFBML) {
        (window as any).FB.XFBML.parse();
      }
      setPostsLoaded((prev) => prev + 1);
    };

    const interval = setInterval(checkAndProcess, 1000);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [cookiesAccepted]);

  // Configurazione delle animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const posts = [
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DDHY1gQBSq_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DCjckApsBGR/?igsh=MWRwNG9mcDk3bDdh",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DF7r3NoBJSg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DGN0SbFMXq7/?igsh=b3V1MzJiejk4ZG5i",
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <CookieConsentModal />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {posts.map((post, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className=""
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="h-full "
            >
              {post.type === "instagram" ? (
                <blockquote
                  className="instagram-media shadow-lg rounded-lg"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "12px",
                    boxShadow: "none",
                    display: "block",
                    margin: 0,
                    minWidth: "326px",
                    padding: 0,
                    width: "100%",
                  }}
                ></blockquote>
              ) : (
                cookiesAccepted ? (
                  <div
                    className="fb-post"
                    data-href={post.url}
                    data-width="100%"
                    data-show-text="true"
                  ></div>
                ) : (
                  <div className="bg-gray-100 p-8 text-center rounded-lg">
                    <p className="text-gray-600">
                      Accetta i cookie per visualizzare questo post.
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {postsLoaded < posts.length && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8 p-4 bg-gray-50 rounded-lg shadow-sm"
        >
          <div className="animate-pulse">
            Caricamento post in corso...
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SocialPosts;
