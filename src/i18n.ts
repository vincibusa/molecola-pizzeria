import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Book a Table",
      viewMenuButton: "View Menu",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Fermento 2.0",
      "navbar.toggleMenu": "Toggle menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Gallery",
      "navbar.press": "Press",
      "navbar.reservation": "Reservation",
      // HistorySection texts
      "historySection.title": "OUR HISTORY",
      "historySection.paragraph1":
        "In the heart of the historic center of Cefalù, just steps from the Duomo, Fermento 2.0 is the project of the two brothers <b>Salvatore and Rosario Mirenda</b>, founded in 2021 with the aim of offering a taste and experimentation experience.",
      "historySection.paragraph2":
        "In a venue with an industrial style and personal character, the <b>pizza</b> offered is a Neapolitan one that speaks in a contemporary language. From a <b>blend of type 1 and wholemeal flour</b>, with a fermentation lasting between sixteen and twenty hours, a light dough with a rustic texture is born, capable of satisfying even the most demanding palates. Not just a pizza but a <b>tasty story</b> that brings all the flavors of Sicily to the table.",
      "historySection.paragraph3":
        "Alternative options are available, such as the <b>double-cooked pizza</b>, first fried and then baked for extra crispiness, or the <b>small pan pizza</b> which uses a pre-fermented and reworked dough before being cooked and topped, doing justice to the <b>local ingredients</b>.",
      "historySection.shortParagraph1":
        "In the heart of the historic center of Cefalù, just steps from the Duomo, Fermento 2.0 is the project of the two <b>brothers Salvatore and Rosario Mirenda</b>, founded in 2021 with the aim of offering a taste and experimentation experience.",
      "historySection.shortParagraph2":
        "In a venue with an industrial style and personal character, the <b>pizza</b> offered is a Neapolitan one that speaks in a contemporary language. The unique and light dough with a rustic texture satisfies even the most demanding palates, doing justice to the <b>local ingredients</b>. Not just a pizza but a <b>tasty story</b> that brings all the flavors of Sicily to the table.",
      "historySection.image.alt": "Salvatore and Rosario Mirenda",
      "historySection.image.caption": "Founders of Fermento 2.0",
      // Cookie consent texts
      "cookieConsent.text":
        "We use cookies to improve your browsing experience. Please choose your preferences.",
      "cookieConsent.acceptAll": "Accept All",
      "cookieConsent.acceptEssential": "Only Essential",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service and Hospitality",
      "culinaryPhilosophy.item1.description":
        "We love taking care of our customers",
      "culinaryPhilosophy.item2.title": "Quality Ingredients",
      "culinaryPhilosophy.item2.description":
        "We select the best flours and choose the finest seasonal products",
      "culinaryPhilosophy.item3.title": "Perfect Pairings",
      "culinaryPhilosophy.item3.description":
        "Our wine list offers many choices, not just local options",
      // Footer texts
      "footer.tagline": "Authenticity in every bite.",
      "footer.description":
        "Our passion for pizza is reflected in every dish we serve!",
      "footer.quickLinksHeader": "Quick Links",
      "footer.contactHeader": "Contact",
      "footer.address.line1": "Via Giacomo Matteotti, 29",
      "footer.address.line2": "90015, Cefalù, PA",
      "footer.phone": "Tel: +39 331 872 7612",
      "footer.email": "info@fermento2.0.com",
      "footer.hours.weekdays": "Tuesday-Sunday: 19:00-23:00",
      "footer.hours.monday": "Monday: closed",
      "footer.copyright":
        "© {{year}} Fermento 2.0. All rights reserved.",
      // PressSection texts
      "pressSection.heading": "PRESS & RECOGNITIONS",
      "pressSection.leftArticle.title":
        "Awarded by Gambero Rosso with 'Uno Spicchio' in the Italian Pizzerie Guide 2025",
      "pressSection.leftArticle.preview":
        "The brothers Salvatore and Rosario Mirenda have received the prestigious Gambero Rosso recognition with their pizzeria Fermento 2.0 in Cefalù. The 'Pizzerie d'Italia 2025' guide awarded them 'Uno Spicchio', praising their dedication to the art of pizza and the use of high-quality ingredients.",
      "pressSection.leftArticle.imageAlt": "Gambero Rosso Award",
      "pressSection.article.readMore": "Read full article",
      "pressSection.readMoreArticles": "Read more articles",
      // team gallery texts
      "teamGallerySection.heading": "GALLERY",
    },
  },
  it: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Prenota il tavolo",
      viewMenuButton: "Visualizza il Menù",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Fermento 2.0",
      "navbar.toggleMenu": "Mostra/Nascondi menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galleria",
      "navbar.press": "Press",
      "navbar.reservation": "Prenotazioni",
      // HistorySection texts
      "historySection.title": "LA NOSTRA STORIA",
      "historySection.paragraph1":
        "Nel cuore del centro storico di Cefalù, a pochissimi passi dal Duomo, Fermento 2.0 è il progetto dei due fratelli <b>Salvatore e Rosario Mirenda</b> che nasce nel 2021 con l’intento di far vivere un’esperienza di gusto e sperimentazione.",
      "historySection.paragraph2":
        "In un locale dallo stile industrial e dal carattere personale, la <b>pizza</b> proposta è una napoletana che parla contemporaneo. Da un <b>blend di farina di tipo 1 e integrale</b>, con una lievitazione tra le sedici e le venti ore, prende vita un impasto leggero dalla trama rustica, in grado di conquistare anche i palati più esigenti. Non una semplice pizza ma un <b>racconto gustativo</b> che porta in tavola tutti i sapori della Sicilia.",
      "historySection.paragraph3":
        "Non mancano opzioni alternative come la <b>pizza in doppia cottura</b>, prima fritta e poi passata al forno per una maggiore croccantezza, o il <b>padellino</b> che prevede l’utilizzo di un impasto pre-fermentato e rimpastato per poi essere cotto e farcito, rendendo giustizia alle <b>materie prime</b> del territorio.",
      "historySection.shortParagraph1":
        "Nel cuore del centro storico di Cefalù, a pochissimi passi dal Duomo, Fermento 2.0 è il progetto dei due <b>fratelli Salvatore e Rosario Mirenda</b> che nasce nel 2021 con l’intento di far vivere un’esperienza di gusto e sperimentazione.",
      "historySection.shortParagraph2":
        "In un locale dallo stile industrial e dal carattere personale, la <b>pizza</b> proposta è una napoletana che parla contemporaneo. L’impasto unico e leggero dalla trama rustica conquista anche i palati più esigenti, rendendo giustizia alle <b>materie prime</b> del territorio. Non una pizza ma un <b>racconto gustativo</b> che porta in tavola tutti i sapori della Sicilia.",
      "historySection.image.alt": "Salvatore e Rosario Mirenda",
      "historySection.image.caption": "Fondatori di Fermento 2.0",
      // Cookie consent texts
      "cookieConsent.text":
        "Utilizziamo i cookie per migliorare la tua esperienza di navigazione. Scegli le tue preferenze.",
      "cookieConsent.acceptAll": "Accetta Tutti",
      "cookieConsent.acceptEssential": "Solo Essenziali",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servizio e accoglienza",
      "culinaryPhilosophy.item1.description":
        "Amiamo prenderci cura dei nostri clienti",
      "culinaryPhilosophy.item2.title": "Ingredienti di qualità",
      "culinaryPhilosophy.item2.description":
        "Selezioniamo le migliori farine e scegliamo i prodotti di stagione più pregiati",
      "culinaryPhilosophy.item3.title": "Abbinamenti perfetti",
      "culinaryPhilosophy.item3.description":
        "La nostra carta di vini offre molte proposte, non solo locali",
      // Footer texts
      "footer.tagline": "Autenticità in ogni morso.",
      "footer.description":
        "La nostra passione per la pizza si riflette in ogni piatto che serviamo!",
      "footer.quickLinksHeader": "Link Rapidi",
      "footer.contactHeader": "Contatti",
      "footer.address.line1": "Via Giacomo Matteotti, 29",
      "footer.address.line2": "90015, Cefalù, PA",
      "footer.phone": "Tel: +39 331 872 7612",
      "footer.email": "info@fermento2.0.com",
      "footer.hours.weekdays": "Martedì-Domenica: 19:00-23:00",
      "footer.hours.monday": "Lunedì: chiuso",
      "footer.copyright":
        "© {{year}} Fermento 2.0. Tutti i diritti riservati.",
      // PressSection texts
      "pressSection.heading": "RICONOSCIMENTI E PRESS",
      "pressSection.leftArticle.title":
        "Premiati dal Gambero Rosso con 'Uno Spicchio' nella Guida Pizzerie d'Italia 2025",
      "pressSection.leftArticle.preview":
        "I fratelli Salvatore e Rosario Mirenda hanno conquistato il prestigioso riconoscimento del Gambero Rosso con la loro pizzeria Fermento 2.0 a Cefalù. La guida 'Pizzerie d'Italia 2025' ha assegnato loro 'Uno Spicchio', premiando la loro dedizione all'arte della pizza e l'utilizzo di ingredienti di alta qualità.",
      "pressSection.leftArticle.imageAlt": "Riconoscimento Gambero Rosso",
      "pressSection.article.readMore": "Leggi l'articolo completo",
      "pressSection.readMoreArticles": "Leggi altri articoli",
      // team gallery texts
        "teamGallerySection.heading": "GALLERIA",
    },
  },
  fr: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Réserver une table",
      viewMenuButton: "Voir le Menu",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Fermento 2.0",
      "navbar.toggleMenu": "Basculer le menu",
      "navbar.home": "Accueil",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Réservations",
      // HistorySection texts
      "historySection.title": "NOTRE HISTOIRE",
      "historySection.paragraph1":
        "Au cœur du centre historique de Cefalù, à deux pas du Duomo, Fermento 2.0 est le projet des deux frères <b>Salvatore et Rosario Mirenda</b>, lancé en 2021 avec l'intention de faire vivre une expérience de goût et d'expérimentation.",
      "historySection.paragraph2":
        "Dans un lieu au style industriel et au caractère personnel, la <b>pizza</b> proposée est une pizza napolitaine au langage contemporain. À partir d'un <b>mélange de farine de type 1 et complète</b>, avec une fermentation de seize à vingt heures, une pâte légère à la texture rustique naît, capable de satisfaire même les palais les plus exigeants. Ce n'est pas une simple pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.paragraph3":
        "Des options alternatives ne manquent pas, comme la <b>pizza à double cuisson</b>, d'abord frite puis passée au four pour plus de croustillant, ou le <b>padellino</b> qui utilise une pâte pré-fermentée et retravaillée avant d'être cuite et garnie, rendant hommage aux <b>ingrédients locaux</b>.",
      "historySection.shortParagraph1":
        "Au cœur du centre historique de Cefalù, à deux pas du Duomo, Fermento 2.0 est le projet des deux frères <b>Salvatore et Rosario Mirenda</b>, lancé en 2021 pour offrir une expérience de goût et d'expérimentation.",
      "historySection.shortParagraph2":
        "Dans un lieu au style industriel et au caractère personnel, la <b>pizza</b> proposée est une pizza napolitaine contemporaine. La pâte unique et légère à la texture rustique satisfait même les palais les plus exigeants, rendant hommage aux <b>ingrédients locaux</b>. Ce n'est pas une pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.image.alt": "Salvatore et Rosario Mirenda",
      "historySection.image.caption": "Fondateurs de Fermento 2.0",
      // Cookie consent texts
      "cookieConsent.text":
        "Nous utilisons des cookies pour améliorer votre expérience de navigation. Veuillez choisir vos préférences.",
      "cookieConsent.acceptAll": "Tout accepter",
      "cookieConsent.acceptEssential": "Essentiels uniquement",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service et accueil",
      "culinaryPhilosophy.item1.description":
        "Nous aimons prendre soin de nos clients",
      "culinaryPhilosophy.item2.title": "Ingrédients de qualité",
      "culinaryPhilosophy.item2.description":
        "Nous sélectionnons les meilleures farines et choisissons les produits de saison les plus raffinés",
      "culinaryPhilosophy.item3.title": "Accords parfaits",
      "culinaryPhilosophy.item3.description":
        "Notre carte des vins offre de nombreuses propositions, pas seulement locales",
      // Footer texts
      "footer.tagline": "Authenticité à chaque bouchée.",
      "footer.description":
        "Notre passion pour la pizza se reflète dans chaque plat que nous servons !",
      "footer.quickLinksHeader": "Liens rapides",
      "footer.contactHeader": "Contacts",
      "footer.address.line1": "Via Giacomo Matteotti, 29",
      "footer.address.line2": "90015, Cefalù, PA",
      "footer.phone": "Tél: +39 331 872 7612",
      "footer.email": "info@fermento2.0.com",
      "footer.hours.weekdays": "Mardi-Dimanche: 19:00-23:00",
      "footer.hours.monday": "Lundi: fermé",
      "footer.copyright":
        "© {{year}} Fermento 2.0. Tous droits réservés.",
      // PressSection texts
      "pressSection.heading": "RECONNAISSANCES ET PRESSE",
      "pressSection.leftArticle.title":
        "Récompensés par Gambero Rosso avec 'Uno Spicchio' dans le Guide des Pizzerias d'Italie 2025",
      "pressSection.leftArticle.preview":
        "Les frères Salvatore et Rosario Mirenda ont reçu la prestigieuse reconnaissance du Gambero Rosso avec leur pizzeria Fermento 2.0 à Cefalù. Le guide 'Pizzerias d'Italie 2025' leur a décerné 'Uno Spicchio', saluant leur dévouement à l'art de la pizza et l'utilisation d'ingrédients de haute qualité.",
      "pressSection.leftArticle.imageAlt": "Récompense Gambero Rosso",
      "pressSection.article.readMore": "Lire l'article complet",
      "pressSection.readMoreArticles": "Lire plus d'articles",
      // team gallery texts
        "teamGallerySection.heading": "GALERIE",
    },
  },
  es: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Reserva la mesa",
      viewMenuButton: "Ver el Menú",
      // Navbar texts
      "navbar.logoAlt": "Pizzería Fermento 2.0",
      "navbar.toggleMenu": "Alternar menú",
      "navbar.home": "Inicio",
      "navbar.menu": "Menú",
      "navbar.gallery": "Galería",
      "navbar.press": "Prensa",
      "navbar.reservation": "Reservas",
      // HistorySection texts
      "historySection.title": "NUESTRA HISTORIA",
      "historySection.paragraph1":
        "En el corazón del casco antiguo de Cefalù, a pocos pasos del Duomo, Fermento 2.0 es el proyecto de los dos hermanos <b>Salvatore y Rosario Mirenda</b>, iniciado en 2021 con la intención de ofrecer una experiencia de sabor y experimentación.",
      "historySection.paragraph2":
        "En un local de estilo industrial y con un carácter personal, la <b>pizza</b> propuesta es una napolitana que habla en un lenguaje contemporáneo. A partir de una <b>mezcla de harina tipo 1 e integral</b>, con una fermentación de dieciséis a veinte horas, nace una masa ligera con una textura rústica, capaz de conquistar incluso a los paladares más exigentes. No es simplemente una pizza, sino una <b>historia gustativa</b> que trae a la mesa todos los sabores de Sicilia.",
      "historySection.paragraph3":
        "No faltan opciones alternativas, como la <b>pizza de doble cocción</b>, primero frita y luego horneada para mayor crocancia, o el <b>padellino</b> que utiliza una masa pre-fermentada y reamasada antes de ser cocida y rellena, haciendo justicia a las <b>materias primas</b> del territorio.",
      "historySection.shortParagraph1":
        "En el corazón del casco antiguo de Cefalù, a pocos pasos del Duomo, Fermento 2.0 es el proyecto de los dos <b>hermanos Salvatore y Rosario Mirenda</b>, iniciado en 2021 para ofrecer una experiencia de sabor y experimentación.",
      "historySection.shortParagraph2":
        "En un local de estilo industrial y con un carácter personal, la <b>pizza</b> propuesta es una napolitana contemporánea. La masa única y ligera con una textura rústica conquista incluso a los paladares más exigentes, haciendo justicia a las <b>materias primas</b>. No es simplemente una pizza, sino una <b>historia gustativa</b> que trae a la mesa todos los sabores de Sicilia.",
      "historySection.image.alt": "Salvatore y Rosario Mirenda",
      "historySection.image.caption": "Fundadores de Fermento 2.0",
      // Cookie consent texts
      "cookieConsent.text":
        "Utilizamos cookies para mejorar tu experiencia de navegación. Por favor, elige tus preferencias.",
      "cookieConsent.acceptAll": "Aceptar todo",
      "cookieConsent.acceptEssential": "Solo esenciales",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servicio y acogida",
      "culinaryPhilosophy.item1.description":
        "Nos encanta cuidar a nuestros clientes",
      "culinaryPhilosophy.item2.title": "Ingredientes de calidad",
      "culinaryPhilosophy.item2.description":
        "Seleccionamos las mejores harinas y elegimos los productos de temporada de la más alta calidad",
      "culinaryPhilosophy.item3.title": "Combinaciones perfectas",
      "culinaryPhilosophy.item3.description":
        "Nuestra carta de vinos ofrece muchas opciones, no solo locales",
      // Footer texts
      "footer.tagline": "Autenticidad en cada bocado.",
      "footer.description":
        "¡Nuestra pasión por la pizza se refleja en cada plato que servimos!",
      "footer.quickLinksHeader": "Enlaces rápidos",
      "footer.contactHeader": "Contacto",
      "footer.address.line1": "Via Giacomo Matteotti, 29",
      "footer.address.line2": "90015, Cefalù, PA",
      "footer.phone": "Tel: +39 331 872 7612",
      "footer.email": "info@fermento2.0.com",
      "footer.hours.weekdays": "Martes-Domingo: 19:00-23:00",
      "footer.hours.monday": "Lunes: cerrado",
      "footer.copyright":
        "© {{year}} Fermento 2.0. Todos los derechos reservados.",
      // PressSection texts
      "pressSection.heading": "RECONOCIMIENTOS Y PRENSA",
      "pressSection.leftArticle.title":
        "Premiados por Gambero Rosso con 'Uno Spicchio' en la Guía de Pizzerías de Italia 2025",
      "pressSection.leftArticle.preview":
        "Los hermanos Salvatore y Rosario Mirenda han recibido el prestigioso reconocimiento del Gambero Rosso con su pizzería Fermento 2.0 en Cefalù. La guía 'Pizzerías de Italia 2025' les otorgó 'Uno Spicchio', elogiando su dedicación al arte de la pizza y el uso de ingredientes de alta calidad.",
      "pressSection.leftArticle.imageAlt": "Premio Gambero Rosso",
      "pressSection.article.readMore": "Leer el artículo completo",
      "pressSection.readMoreArticles": "Leer más artículos",
      // team gallery texts
        "teamGallerySection.heading": "GALERÍA",
    },
  },
  de: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Tisch reservieren",
      viewMenuButton: "Menü anzeigen",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Fermento 2.0",
      "navbar.toggleMenu": "Menü umschalten",
      "navbar.home": "Startseite",
      "navbar.menu": "Menü",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Reservierungen",
      // HistorySection texts
      "historySection.title": "UNSERE GESCHICHTE",
      "historySection.paragraph1":
        "Im Herzen der Altstadt von Cefalù, nur wenige Schritte vom Duomo entfernt, ist Fermento 2.0 das Projekt der beiden Brüder <b>Salvatore und Rosario Mirenda</b>, das 2021 ins Leben gerufen wurde, um ein Erlebnis von Geschmack und Experimentierfreude zu bieten.",
      "historySection.paragraph2":
        "In einem Lokal mit industriellem Stil und persönlichem Charakter ist die angebotene <b>Pizza</b> eine neapolitanische Pizza, die zeitgenössisch spricht. Aus einem <b>Mix aus Typ-1- und Vollkornmehl</b>, mit einer Fermentationsdauer von sechzehn bis zwanzig Stunden, entsteht ein leichter Teig mit rustikaler Textur, der auch die anspruchsvollsten Gaumen überzeugt. Es ist nicht nur eine Pizza, sondern eine <b>geschmackliche Erzählung</b>, die alle Aromen Siziliens auf den Tisch bringt.",
      "historySection.paragraph3":
        "Alternative Optionen sind nicht ausgeschlossen, wie die <b>Doppeltgebackene Pizza</b>, die zuerst frittiert und dann im Ofen gebacken wird für extra Knusprigkeit, oder der <b>Padellino</b>, bei dem ein vorfermentierter und neu durchgekneteter Teig verwendet wird, der dann gebacken und belegt wird, um den <b>regionalen Zutaten</b> gerecht zu werden.",
      "historySection.shortParagraph1":
        "Im Herzen der Altstadt von Cefalù, nur wenige Schritte vom Duomo entfernt, ist Fermento 2.0 das Projekt der beiden <b>Brüder Salvatore und Rosario Mirenda</b>, das 2021 ins Leben gerufen wurde, um ein Erlebnis von Geschmack und Experimentierfreude zu bieten.",
      "historySection.shortParagraph2":
        "In einem Lokal mit industriellem Stil und persönlichem Charakter ist die angebotene <b>Pizza</b> eine zeitgenössische neapolitanische Pizza. Der einzigartige und leichte Teig mit rustikaler Textur überzeugt auch die anspruchsvollsten Gaumen und bringt den <b>regionalen Zutaten</b> gerecht. Es ist nicht nur eine Pizza, sondern eine <b>geschmackliche Erzählung</b>, die alle Aromen Siziliens auf den Tisch bringt.",
      "historySection.image.alt": "Salvatore und Rosario Mirenda",
      "historySection.image.caption": "Gründer von Fermento 2.0",
      // Cookie consent texts
      "cookieConsent.text":
        "Wir verwenden Cookies, um Ihre Navigationserfahrung zu verbessern. Bitte wählen Sie Ihre Präferenzen.",
      "cookieConsent.acceptAll": "Alle akzeptieren",
      "cookieConsent.acceptEssential": "Nur essentielle",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service und Gastfreundschaft",
      "culinaryPhilosophy.item1.description":
        "Wir lieben es, uns um unsere Kunden zu kümmern",
      "culinaryPhilosophy.item2.title": "Qualitätszutaten",
      "culinaryPhilosophy.item2.description":
        "Wir wählen die besten Mehle aus und entscheiden uns für die erlesensten saisonalen Produkte",
      "culinaryPhilosophy.item3.title": "Perfekte Kombinationen",
      "culinaryPhilosophy.item3.description":
        "Unsere Weinkarte bietet viele Auswahlmöglichkeiten, nicht nur lokale",
      // Footer texts
      "footer.tagline": "Authentizität in jedem Biss.",
      "footer.description":
        "Unsere Leidenschaft für Pizza spiegelt sich in jedem Gericht wider!",
      "footer.quickLinksHeader": "Schnellzugriffe",
      "footer.contactHeader": "Kontakt",
      "footer.address.line1": "Via Giacomo Matteotti, 29",
      "footer.address.line2": "90015, Cefalù, PA",
      "footer.phone": "Tel: +39 331 872 7612",
      "footer.email": "info@fermento2.0.com",
      "footer.hours.weekdays": "Dienstag-Sonntag: 19:00-23:00",
      "footer.hours.monday": "Montag: geschlossen",
      "footer.copyright":
        "© {{year}} Fermento 2.0. Alle Rechte vorbehalten.",
      // PressSection texts
      "pressSection.heading": "PRESSE & REKOGNITIONEN",
      "pressSection.leftArticle.title":
        "Ausgezeichnet vom Gambero Rosso mit 'Uno Spicchio' im Pizzerien-Guide Italien 2025",
      "pressSection.leftArticle.preview":
        "Die Brüder Salvatore und Rosario Mirenda haben mit ihrer Pizzeria Fermento 2.0 in Cefalù die prestigeträchtige Anerkennung des Gambero Rosso erhalten. Der 'Pizzerien-Guide Italien 2025' hat ihnen 'Uno Spicchio' verliehen und damit ihr Engagement für die Kunst der Pizza und die Verwendung hochwertiger Zutaten gewürdigt.",
      "pressSection.leftArticle.imageAlt": "Gambero Rosso Auszeichnung",
      "pressSection.article.readMore": "Artikel komplett lesen",
      "pressSection.readMoreArticles": "Weitere Artikel lesen",
      // team gallery texts
        "teamGallerySection.heading": "GALERIE",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("selectedLanguage") || "it", // lingua iniziale
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React gestisce già l'escaping
  },
});

export default i18n;