import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Book a Table",
      viewMenuButton: "View Menu",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Molecola",
      "navbar.toggleMenu": "Toggle menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Gallery",
      "navbar.press": "Press",
      "navbar.reservation": "Reservation",
      // HistorySection texts
      "historySection.title": "OUR HISTORY",
      "historySection.paragraph1":
        "In the heart of Palermo's city center, just a few steps from Piazza Politeama, Molecola is the innovative project that was born with the aim of offering a unique taste and experimentation experience focused on molecular pizza.",
      "historySection.paragraph2":
        "In a venue with a modern style and personal character, the <b>pizza</b> offered speaks a contemporary language. Using a <b>blend of selected flours</b> and a special fermentation process, a light dough with a unique texture is born, capable of satisfying even the most demanding palates. Not just a pizza but a <b>gastronomic story</b> that brings all the flavors of Sicily to the table.",
      "historySection.paragraph3":
        "Alternative options are also available, such as the <b>Crunch</b>, with its distinctive crispiness, or the <b>Padellini</b> (small pan pizzas) which use special dough preparation techniques before being cooked and topped, doing justice to the <b>high-quality ingredients</b> carefully selected from local producers.",
      "historySection.shortParagraph1":
        "In the heart of Palermo's city center, just a few steps from Piazza Politeama, Molecola is the innovative project that was born with the aim of offering a unique taste and experimentation experience focused on molecular pizza.",
      "historySection.shortParagraph2":
        "In a venue with a modern style and personal character, the <b>pizza</b> offered speaks a contemporary language. The unique light dough satisfies even the most demanding palates, doing justice to the <b>high-quality ingredients</b>. Not just a pizza but a <b>gastronomic story</b> that brings all the flavors of Sicily to the table.",
      "historySection.image.alt": "Molecola Pizzeria Team",
      "historySection.image.caption": "The team behind Molecola Pizzeria",
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
      "culinaryPhilosophy.title": "OUR CULINARY PHILOSOPHY",
      "culinaryPhilosophy.subtitle": "We believe that exceptional pizza comes from innovation, molecular techniques, and the finest ingredients.",
      "culinaryPhilosophy.quote": "A well-prepared pizza is more than food; it's a scientific fusion of flavors, textures and emotions - a complete experience to savor with all your senses.",
      "culinaryPhilosophy.quoteAuthor": "Molecola Pizzeria Team",
      // Footer texts
      "footer.tagline": "Molecular innovation in every bite.",
      "footer.description":
        "Our passion for pizza experimentation is reflected in every dish we serve!",
      "footer.quickLinksHeader": "Quick Links",
      "footer.contactHeader": "Contact",
      "footer.address.line1": "Via Giuseppe Velasquez, 29/35",
      "footer.address.line2": "90141, Palermo, PA",
      "footer.phone": "Tel: +39 375 5600 247",
      "footer.email": "info@molecolapizzeria.it",
      "footer.hours.weekdays": "Monday-Thursday: 17:00-21:30",
      "footer.hours.monday": "Friday-Saturday: 17:00-22:00",
      "footer.copyright":
        "© {{year}} Molecola Pizzeria. All rights reserved.",
      "footer.about": "About Us",
      "footer.newsletter.title": "Subscribe to Our Newsletter",
      "footer.newsletter.description": "Get updates about special events, new menu items, and seasonal offers!",
      "footer.newsletter.placeholder": "Your email address",
      "footer.newsletter.button": "Subscribe",
      // PressSection texts
      "pressSection.heading": "PRESS & RECOGNITIONS",
      "pressSection.subtitle": "What the critics and food enthusiasts say about our innovative molecular pizza",
      "pressSection.award": "Innovation Award",
      "pressSection.leftArticle.title":
        "Awarded for Innovation in Sicilian Pizza Making with Molecular Techniques",
      "pressSection.leftArticle.preview":
        "Molecola Pizzeria in Palermo has been recognized for its innovative approach to pizza making using molecular gastronomy techniques. Their creative menu featuring items like 'Fluorescent Molecola' and 'Three Cheese Consistencies' has garnered attention from food critics and enthusiasts alike, praising their dedication to pushing the boundaries of traditional pizza.",
      "pressSection.leftArticle.imageAlt": "Molecola Innovation Award",
      "pressSection.leftArticle.source": "SiciliaGourmet - December 2023",
      "pressSection.article.readMore": "Read full article",
      "pressSection.readMoreArticles": "Read more articles",
      // Team gallery texts
      "teamGallerySection.heading": "GALLERY",
      "teamGallerySection.viewGallery": "View Full Gallery",
      "teamGallerySection.description": "Meet the people behind Molecola Pizzeria's success. Our talented team works together to create unforgettable dining experiences through molecular innovation.",

      // ReservationModal texts
      "reservationModal.title": "Book Your Table",
      "reservationModal.firstNameLabel": "First Name",
      "reservationModal.firstNamePlaceholder": "Enter your first name",
      "reservationModal.lastNameLabel": "Last Name",
      "reservationModal.lastNamePlaceholder": "Enter your last name",
      "reservationModal.phoneLabel": "Phone Number",
      "reservationModal.phonePlaceholder": "Enter your phone number",
      "reservationModal.dateLabel": "Date",
      "reservationModal.timeLabel": "Time",
      "reservationModal.timePlaceholder": "Select time",
      "reservationModal.noTimeSlots": "No time slot available",
      "reservationModal.peopleLabel": "Number of People",
      "reservationModal.personSingular": "person",
      "reservationModal.personPlural": "people",
      "reservationModal.specialRequestsLabel": "Special Requests",
      "reservationModal.specialRequestsPlaceholder": "Any special requests...",
      "reservationModal.submitting": "Booking in progress...",
      "reservationModal.submitButton": "Book Now",
      "reservationModal.error.firstNameRequired": "First name is required",
      "reservationModal.error.lastNameRequired": "Last name is required",
      "reservationModal.error.phoneRequired": "Phone number is required",
      "reservationModal.error.dateRequired": "Date is required",
      "reservationModal.error.timeRequired": "Time is required",
      "reservationModal.error.general": "Error during reservation",
      "reservationModal.successTitle": "Booking Confirmed!",
      "reservationModal.successMessage": "Thank you for choosing Molecola Pizzeria",
      "reservationModal.holdTimeMessage": "Your table will be held for 15 minutes after the booking time",
      "reservationModal.closeButton": "Close",
      "reservationModal.contactInfo": "Contact us by phone: +39 375 5600 247",
      "reservationModal.emailLabel": "Email",
      "reservationModal.emailPlaceholder": "Enter your email",
      "reservationModal.error.emailRequired": "Email is required",
      "reservationModal.error.emailInvalid": "Please enter a valid email",

      // Hero Section / VideoBackground
      "heroSection.title": "MOLECULAR PIZZA INNOVATION",
      "heroSection.subtitle": "A unique experience of taste and innovation in the heart of Palermo",
      "scrollDown": "Scroll Down",
      
      // Gallery Page
      "gallery.title": "THIS IS MOLECOLA",
      "gallery.subtitle": "Innovative molecular techniques, quality ingredients, and a modern, welcoming atmosphere.",
      "gallery.imageAlt": "Gallery image",
      "gallery.close": "Close",
      "gallery.next": "Next image",
      "gallery.previous": "Previous image",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Previous image",
      "carousel.nextImage": "Next image",
      "carousel.goToImage": "Go to image {{number}}",
      "carousel.pizzaAlt": "Artisanal Italian pizza",
      "carousel.ingredientsAlt": "Fresh ingredients pizza",
      "carousel.restaurantAlt": "Molecola Pizzeria interior",
      
      // Error messages and states
      "error.generic": "An error occurred. Please try again.",
      "error.loading": "Error loading data. Please refresh the page.",
      "loading": "Loading...",
      
      // Common actions
      "action.close": "Close",
      "action.confirm": "Confirm",
      "action.cancel": "Cancel",
      "action.submit": "Submit",
      "action.readMore": "Read More",
    },
  },
  it: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Prenota il tavolo",
      viewMenuButton: "Visualizza il Menù",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Molecola",
      "navbar.toggleMenu": "Mostra/Nascondi menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galleria",
      "navbar.press": "Press",
      "navbar.reservation": "Prenotazioni",
      // HistorySection texts
      "historySection.title": "LA NOSTRA STORIA",
      "historySection.paragraph1":
        "Nel cuore del centro di Palermo, a pochi passi da Piazza Politeama, Molecola è il progetto innovativo nato con l'intento di far vivere un'esperienza di gusto e sperimentazione unica incentrata sulla pizza molecolare.",
      "historySection.paragraph2":
        "In un locale dallo stile moderno e dal carattere personale, la <b>pizza</b> proposta parla un linguaggio contemporaneo. Utilizzando un <b>blend di farine selezionate</b> e un processo di fermentazione speciale, prende vita un impasto leggero dalla texture unica, in grado di conquistare anche i palati più esigenti. Non una semplice pizza ma un <b>racconto gastronomico</b> che porta in tavola tutti i sapori della Sicilia.",
      "historySection.paragraph3":
        "Non mancano opzioni alternative come il <b>Crunch</b>, dalla croccantezza distintiva, o i <b>Padellini</b> che prevedono tecniche speciali di preparazione dell'impasto prima di essere cotti e farciti, rendendo giustizia alle <b>materie prime di alta qualità</b> accuratamente selezionate dai produttori locali.",
      "historySection.shortParagraph1":
        "Nel cuore del centro di Palermo, a pochi passi da Piazza Politeama, Molecola è il progetto innovativo nato con l'intento di far vivere un'esperienza di gusto e sperimentazione unica incentrata sulla pizza molecolare.",
      "historySection.shortParagraph2":
        "In un locale dallo stile moderno e dal carattere personale, la <b>pizza</b> proposta parla un linguaggio contemporaneo. L'impasto unico e leggero conquista anche i palati più esigenti, rendendo giustizia alle <b>materie prime di alta qualità</b>. Non una semplice pizza ma un <b>racconto gastronomico</b> che porta in tavola tutti i sapori della Sicilia.",
      "historySection.image.alt": "Team Pizzeria Molecola",
      "historySection.image.caption": "Il team di Pizzeria Molecola",
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
      "culinaryPhilosophy.title": "LA NOSTRA FILOSOFIA CULINARIA",
      "culinaryPhilosophy.subtitle": "Crediamo che una pizza eccezionale nasca dall'innovazione, dalle tecniche molecolari e dagli ingredienti migliori.",
      "culinaryPhilosophy.quote": "Una pizza ben preparata è più che cibo; è una fusione scientifica di sapori, consistenze ed emozioni - un'esperienza completa da gustare con tutti i sensi.",
      "culinaryPhilosophy.quoteAuthor": "Team Pizzeria Molecola",
      // Footer texts
      "footer.tagline": "Innovazione molecolare in ogni morso.",
      "footer.description":
        "La nostra passione per la sperimentazione della pizza si riflette in ogni piatto che serviamo!",
      "footer.quickLinksHeader": "Link Rapidi",
      "footer.contactHeader": "Contatti",
      "footer.address.line1": "Via Giuseppe Velasquez, 29/35",
      "footer.address.line2": "90141, Palermo, PA",
      "footer.phone": "Tel: +39 375 5600 247",
      "footer.email": "info@molecolapizzeria.it",
      "footer.hours.weekdays": "Lunedì-Giovedì: 17:00-21:30",
      "footer.hours.monday": "Venerdì-Sabato: 17:00-22:00",
      "footer.copyright":
        "© {{year}} Molecola Pizzeria. Tutti i diritti riservati.",
      "footer.about": "Chi Siamo",
      "footer.newsletter.title": "Iscriviti alla Newsletter",
      "footer.newsletter.description": "Ricevi aggiornamenti su eventi speciali, nuovi piatti e offerte stagionali!",
      "footer.newsletter.placeholder": "Il tuo indirizzo email",
      "footer.newsletter.button": "Iscriviti",
      // PressSection texts
      "pressSection.heading": "RICONOSCIMENTI E PRESS",
      "pressSection.subtitle": "Cosa dicono critici e appassionati di gastronomia sulla nostra innovativa pizza molecolare",
      "pressSection.award": "Premio Innovazione",
      "pressSection.leftArticle.title":
        "Premiata per l'Innovazione nella Preparazione della Pizza Siciliana con Tecniche Molecolari",
      "pressSection.leftArticle.preview":
        "Molecola Pizzeria a Palermo è stata riconosciuta per il suo approccio innovativo alla preparazione della pizza utilizzando tecniche di gastronomia molecolare. Il loro creativo menú che include elementi come 'Molecola Fluorescente' e 'Tre Consistenze di Formaggi' ha captato la attenzione di critici gastronomici e appassionati, elogiando la loro dedizione nel superare i confini della pizza tradizionale.",
      "pressSection.leftArticle.imageAlt": "Premio Innovazione Molecola",
      "pressSection.leftArticle.source": "SiciliaGourmet - Dicembre 2023",
      "pressSection.article.readMore": "Leggi l'articolo completo",
      "pressSection.readMoreArticles": "Leggi altri articoli",
      // Team gallery texts
      "teamGallerySection.heading": "GALLERIA",
      "teamGallerySection.viewGallery": "Visualizza Galleria Completa",
      "teamGallerySection.description": "Incontra le persone dietro il successo di Molecola Pizzeria. Il nostro talentuoso team lavora insieme per creare esperienze culinarie indimenticabili attraverso l'innovazione molecolare.",

      // ReservationModal texts
      "reservationModal.title": "Prenota il tuo tavolo",
      "reservationModal.firstNameLabel": "Nome",
      "reservationModal.firstNamePlaceholder": "Inserisci il nome",
      "reservationModal.lastNameLabel": "Cognome",
      "reservationModal.lastNamePlaceholder": "Inserisci il cognome",
      "reservationModal.phoneLabel": "Numero di Telefono",
      "reservationModal.phonePlaceholder": "Inserisci il numero di telefono",
      "reservationModal.dateLabel": "Data",
      "reservationModal.timeLabel": "Ora",
      "reservationModal.timePlaceholder": "Seleziona ora",
      "reservationModal.noTimeSlots": "Nessuna fascia disponibile",
      "reservationModal.peopleLabel": "Numero di Persone",
      "reservationModal.personSingular": "persona",
      "reservationModal.personPlural": "persone",
      "reservationModal.specialRequestsLabel": "Richieste Speciali",
      "reservationModal.specialRequestsPlaceholder": "Eventuali richieste speciali...",
      "reservationModal.submitting": "Prenotazione in corso...",
      "reservationModal.submitButton": "Prenota Ora",
      "reservationModal.error.firstNameRequired": "Nome richiesto",
      "reservationModal.error.lastNameRequired": "Cognome richiesto",
      "reservationModal.error.phoneRequired": "Numero di telefono richiesto",
      "reservationModal.error.dateRequired": "Data richiesta",
      "reservationModal.error.timeRequired": "Ora richiesta",
      "reservationModal.error.general": "Errore durante la prenotazione",
      "reservationModal.successTitle": "Prenotazione Confermata!",
      "reservationModal.successMessage": "Grazie per aver scelto Molecola Pizzeria",
      "reservationModal.holdTimeMessage": "Il tavolo rimarrà riservato per 15 minuti oltre l'orario di prenotazione",
      "reservationModal.closeButton": "Chiudi",
      "reservationModal.contactInfo": "Contáctanos por teléfono: +39 375 5600 247",
      "reservationModal.emailLabel": "Email",
      "reservationModal.emailPlaceholder": "Inserisci la tua email",
      "reservationModal.error.emailRequired": "L'email è obbligatoria",
      "reservationModal.error.emailInvalid": "Inserisci un'email valida",

      // Hero Section / VideoBackground
      "heroSection.title": "INNOVAZIONE PIZZA MOLECOLARE",
      "heroSection.subtitle": "Un'esperienza unica di gusto e innovazione nel cuore di Palermo",
      "scrollDown": "Scorri Giù",
      
      // Gallery Page
      "gallery.title": "QUESTO È MOLECOLA",
      "gallery.subtitle": "Tecniche molecolari innovative, ingredienti di prima scelta e un'atmosfera moderna e accogliente.",
      "gallery.imageAlt": "Immagine galleria",
      "gallery.close": "Chiudi",
      "gallery.next": "Immagine successiva",
      "gallery.previous": "Immagine precedente",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Immagine precedente",
      "carousel.nextImage": "Immagine successiva",
      "carousel.goToImage": "Vai all'immagine {{number}}",
      "carousel.pizzaAlt": "Pizza artigianale italiana",
      "carousel.ingredientsAlt": "Pizza con ingredienti freschi",
      "carousel.restaurantAlt": "Interno pizzeria Molecola",
      
      // Error messages and states
      "error.generic": "Si è verificato un errore. Riprova.",
      "error.loading": "Errore durante il caricamento dei dati. Aggiorna la pagina.",
      "loading": "Caricamento...",
      
      // Common actions
      "action.close": "Chiudi",
      "action.confirm": "Conferma",
      "action.cancel": "Annulla",
      "action.submit": "Invia",
      "action.readMore": "Leggi di più",
    },
  },
  es: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Reservar una Mesa",
      viewMenuButton: "Ver Menú",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Molecola",
      "navbar.toggleMenu": "Alternar menú",
      "navbar.home": "Inicio",
      "navbar.menu": "Menú",
      "navbar.gallery": "Galería",
      "navbar.press": "Prensa",
      "navbar.reservation": "Reservaciones",
      // HistorySection texts
      "historySection.title": "NUESTRA HISTORIA",
      "historySection.paragraph1":
        "En el corazón del centro de Palermo, a pocos pasos de la Plaza Politeama, Molecola es el proyecto innovador que nació con el objetivo de ofrecer una experiencia única de sabor y experimentación centrada en la pizza molecular.",
      "historySection.paragraph2":
        "En un local con estilo moderno y carácter personal, la <b>pizza</b> ofrecida habla un lenguaje contemporáneo. Utilizando una <b>mezcla de harinas seleccionadas</b> y un proceso especial de fermentación, nace una masa ligera con textura única, capaz de satisfacer incluso los paladares más exigentes. No solo una pizza sino una <b>historia gastronómica</b> que trae a la mesa todos los sabores de Sicilia.",
      "historySection.paragraph3":
        "Hay opciones alternativas como el <b>Crunch</b>, con su característico crujiente, o los <b>Padellini</b> (pizzas de sartén pequeñas) que utilizan técnicas especiales de preparación de masa antes de ser cocinadas y cubiertas, haciendo justicia a los <b>ingredientes de alta calidad</b> cuidadosamente seleccionados de productores locales.",
      "historySection.shortParagraph1":
        "En el corazón del centro de Palermo, a pocos pasos de la Plaza Politeama, Molecola es el proyecto innovador que nació con el objetivo de ofrecer una experiencia única de sabor y experimentación centrada en la pizza molecular.",
      "historySection.shortParagraph2":
        "En un local con estilo moderno y carácter personal, la <b>pizza</b> ofrecida habla un lenguaje contemporáneo. La masa única y ligera satisface incluso los paladares más exigentes, haciendo justicia a los <b>ingredientes de alta calidad</b>. No solo una pizza sino una <b>historia gastronómica</b> que trae a la mesa todos los sabores de Sicilia.",
      "historySection.image.alt": "Equipo de Pizzeria Molecola",
      "historySection.image.caption": "El equipo de Pizzeria Molecola",
      // Cookie consent texts
      "cookieConsent.text":
        "Utilizamos cookies para mejorar tu experiencia de navegación. Por favor, elige tus preferencias.",
      "cookieConsent.acceptAll": "Aceptar Todo",
      "cookieConsent.acceptEssential": "Solo Esenciales",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servicio y Hospitalidad",
      "culinaryPhilosophy.item1.description":
        "Nos encanta cuidar a nuestros clientes",
      "culinaryPhilosophy.item2.title": "Ingredientes de Calidad",
      "culinaryPhilosophy.item2.description":
        "Seleccionamos las mejores harinas y elegimos los productos de temporada más finos",
      "culinaryPhilosophy.item3.title": "Maridajes Perfectos",
      "culinaryPhilosophy.item3.description":
        "Nuestra carta de vinos offre muchas opciones, no solo locales",
      "culinaryPhilosophy.title": "NUESTRA FILOSOFÍA CULINARIA",
      "culinaryPhilosophy.subtitle": "Creemos que una pizza excepcional proviene de la innovación, las técnicas moleculares y los mejores ingredientes.",
      "culinaryPhilosophy.quote": "Una pizza bien preparada es más que comida; es una fusión científica de sabores, texturas y emociones - una experiencia completa para saborear con todos tus sentidos.",
      "culinaryPhilosophy.quoteAuthor": "Equipo de Pizzeria Molecola",
      // Footer texts
      "footer.tagline": "Innovación molecular en cada bocado.",
      "footer.description":
        "¡Nuestra pasión por la experimentación de la pizza se refleja en cada plato que servimos!",
      "footer.quickLinksHeader": "Enlaces Rápidos",
      "footer.contactHeader": "Contacto",
      "footer.address.line1": "Via Giuseppe Velasquez, 29/35",
      "footer.address.line2": "90141, Palermo, PA",
      "footer.phone": "Tel: +39 375 5600 247",
      "footer.email": "info@molecolapizzeria.it",
      "footer.hours.weekdays": "Lunes-Jueves: 17:00-21:30",
      "footer.hours.monday": "Viernes-Sábado: 17:00-22:00",
      "footer.copyright":
        "© {{year}} Molecola Pizzeria. Todos los derechos reservados.",
      "footer.about": "Sobre Nosotros",
      "footer.newsletter.title": "Suscríbete a Nuestro Boletín",
      "footer.newsletter.description": "¡Recibe actualizaciones sobre eventos especiales, nuevos platos y ofertas de temporada!",
      "footer.newsletter.placeholder": "Tu dirección de correo electrónico",
      "footer.newsletter.button": "Suscribirse",
      // PressSection texts
      "pressSection.heading": "PRENSA Y RECONOCIMIENTOS",
      "pressSection.subtitle": "Lo que dicen los críticos y entusiastas gastronómicos sobre nuestra innovadora pizza molecular",
      "pressSection.award": "Premio a la Innovación",
      "pressSection.leftArticle.title":
        "Premiados por la Innovación en la Elaboración de Pizza Siciliana con Técnicas Moleculares",
      "pressSection.leftArticle.preview":
        "Molecola Pizzeria en Palermo ha sido reconocida por su enfoque innovante en la elaboración de pizzas utilizando técnicas de gastronomía molecular. Su creativo menú que incluye elementos como 'Molecola Fluorescente' y 'Tres Consistencias de Quesos' ha captado la atención de críticos gastronómicos y entusiastas, elogiando su dedicación para superar los límites de la pizza tradicional.",
      "pressSection.leftArticle.imageAlt": "Premio de Innovación Molecola",
      "pressSection.leftArticle.source": "SiciliaGourmet - Diciembre 2023",
      "pressSection.article.readMore": "Leer artículo completo",
      "pressSection.readMoreArticles": "Leer más artículos",
      // Team gallery texts
      "teamGallerySection.heading": "GALERÍA",
      "teamGallerySection.viewGallery": "Ver Galería Completa",
      "teamGallerySection.description": "Conoce a las personas detrás del éxito de Molecola Pizzeria. Nuestro talentoso equipo trabaja junto para crear experiencias gastronómicas inolvidables a través de la innovación molecular.",

      // ReservationModal texts
      "reservationModal.title": "Reserva Tu Mesa",
      "reservationModal.firstNameLabel": "Nombre",
      "reservationModal.firstNamePlaceholder": "Ingresa tu nombre",
      "reservationModal.lastNameLabel": "Apellido",
      "reservationModal.lastNamePlaceholder": "Ingresa tu apellido",
      "reservationModal.phoneLabel": "Número de Teléfono",
      "reservationModal.phonePlaceholder": "Ingresa tu número de teléfono",
      "reservationModal.dateLabel": "Fecha",
      "reservationModal.timeLabel": "Hora",
      "reservationModal.timePlaceholder": "Selecciona la hora",
      "reservationModal.noTimeSlots": "No hay franjas horarias disponibles",
      "reservationModal.peopleLabel": "Número de Personas",
      "reservationModal.personSingular": "persona",
      "reservationModal.personPlural": "personas",
      "reservationModal.specialRequestsLabel": "Peticiones Especiales",
      "reservationModal.specialRequestsPlaceholder": "Cualquier petición especial...",
      "reservationModal.submitting": "Reservando...",
      "reservationModal.submitButton": "Reservar Ahora",
      "reservationModal.error.firstNameRequired": "El nombre es obligatorio",
      "reservationModal.error.lastNameRequired": "El apellido es obligatorio",
      "reservationModal.error.phoneRequired": "El número de teléfono es obligatorio",
      "reservationModal.error.dateRequired": "La fecha es obligatoria",
      "reservationModal.error.timeRequired": "La hora es obligatoria",
      "reservationModal.error.general": "Error durante la reserva",
      "reservationModal.successTitle": "¡Reserva Confirmada!",
      "reservationModal.successMessage": "Gracias por elegir Molecola Pizzeria",
      "reservationModal.holdTimeMessage": "Tu mesa se mantendrá por 15 minutos después de la hora de reserva",
      "reservationModal.closeButton": "Cerrar",
      "reservationModal.contactInfo": "Contáctanos por teléfono: +39 375 5600 247",
      "reservationModal.emailLabel": "Email",
      "reservationModal.emailPlaceholder": "Ingresa tu email",
      "reservationModal.error.emailRequired": "El email es obligatorio",
      "reservationModal.error.emailInvalid": "Por favor ingresa un email válido",

      // Hero Section / VideoBackground
      "heroSection.title": "MOLECULAR PIZZA INNOVATION",
      "heroSection.subtitle": "A unique experience of taste and innovation in the heart of Palermo",
      "scrollDown": "Desplazarse hacia Abajo",
      
      // Gallery Page
      "gallery.title": "ESTO ES MOLECOLA",
      "gallery.subtitle": "Masa única, ingredientes de calidad y un ambiente cálido y accogliente.",
      "gallery.imageAlt": "Imagen de galería",
      "gallery.close": "Cerrar",
      "gallery.next": "Siguiente imagen",
      "gallery.previous": "Imagen anterior",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Imagen anterior",
      "carousel.nextImage": "Siguiente imagen",
      "carousel.goToImage": "Ir a la imagen {{number}}",
      "carousel.pizzaAlt": "Pizza artesanal italiana",
      "carousel.ingredientsAlt": "Pizza con ingredientes frescos",
      "carousel.restaurantAlt": "Interior de la pizzería Molecola",
      
      // Error messages and states
      "error.generic": "Ocurrió un error. Por favor, inténtalo de nuevo.",
      "error.loading": "Error al cargar datos. Por favor, actualiza la página.",
      "loading": "Cargando...",
      
      // Common actions
      "action.close": "Cerrar",
      "action.confirm": "Confirmar",
      "action.cancel": "Cancelar",
      "action.submit": "Enviar",
      "action.readMore": "Leer Más",
    },
  },
  fr: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Réserver une table",
      viewMenuButton: "Voir le Menu",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Molecola",
      "navbar.toggleMenu": "Basculer le menu",
      "navbar.home": "Accueil",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Réservations",
      // HistorySection texts
      "historySection.title": "NOTRE HISTOIRE",
      "historySection.paragraph1":
        "Au cœur du centre de Palerme, à deux pas de la Place Politeama, Molecola est le projet innovant né avec l'intention de faire vivre une expérience de goût et d'expérimentation unique centrée sur la pizza moléculaire.",
      "historySection.paragraph2":
        "Dans un lieu au style moderne et au caractère personnel, la <b>pizza</b> proposée parle un langage contemporain. À partir d'un <b>mélange de farines sélectionnées</b> et un processus de fermentation spécial, une pâte légère à la texture unique naît, capable de satisfaire même les palais les plus exigeants. Ce n'est pas une simple pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.paragraph3":
        "Des options alternatives ne manquent pas, comme la <b>pizza à texture croquante</b>, ou les <b>Padellini</b> qui utilisent des techniques spéciales de préparation de la pâte avant d'être cuits et garnis, rendant hommage aux <b>ingrédients de haute qualité</b> soigneusement sélectionnés auprès de producteurs locaux.",
      "historySection.shortParagraph1":
        "Au cœur du centre de Palerme, à deux pas de la Place Politeama, Molecola est le projet innovant né avec l'intention de faire vivre une expérience de goût et d'expérimentation unique centrée sur la pizza moléculaire.",
      "historySection.shortParagraph2":
        "Dans un lieu au style moderne et au caractère personnel, la <b>pizza</b> proposée parle un langage contemporain. La pâte unique et légère satisfait même les palais les plus exigeants, rendant hommage aux <b>ingrédients de haute qualité</b>. Ce n'est pas une simple pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.image.alt": "Équipe de Molecola Pizzeria",
      "historySection.image.caption": "L'équipe de Molecola Pizzeria",
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
      "culinaryPhilosophy.title": "NOTRE PHILOSOPHIE CULINAIRE",
      "culinaryPhilosophy.subtitle": "Nous croyons qu'une pizza exceptionnelle provient de la passion, de la tradition et des meilleurs ingrédients.",
      "culinaryPhilosophy.quote": "Une pizza bien préparée est un voyage à travers les saveurs, les textures et les émotions. C'est plus que de la nourriture; c'est une expérience à savourer avec tous vos sens.",
      "culinaryPhilosophy.quoteAuthor": "Les Frères Mirenda",
      // Footer texts
      "footer.tagline": "Authenticité à chaque bouchée.",
      "footer.description":
        "Notre passion pour la pizza se reflète dans chaque plat que nous servons !",
      "footer.quickLinksHeader": "Liens rapides",
      "footer.contactHeader": "Contacts",
      "footer.address.line1": "Via Giuseppe Velasquez, 29",
      "footer.address.line2": "90015, Cefalù, PA",
      "footer.phone": "Tél: +39 331 872 7612",
      "footer.email": "info@fermento2.0.com",
      "footer.hours.weekdays": "Mardi-Dimanche: 19:00-23:00",
      "footer.hours.monday": "Lundi: fermé",
      "footer.copyright":
        "© {{year}} Fermento 2.0. Tous droits réservés.",
      "footer.about": "À Propos",
      "footer.newsletter.title": "Abonnez-vous à Notre Newsletter",
      "footer.newsletter.description": "Recevez des mises à jour sur les événements spéciaux, les nouveaux plats et les offres saisonnières !",
      "footer.newsletter.placeholder": "Votre adresse e-mail",
      "footer.newsletter.button": "S'abonner",
      // PressSection texts
      "pressSection.heading": "RECONNAISSANCES ET PRESSE",
      "pressSection.subtitle": "Ce que disent les critiques et les amateurs de gastronomie sur notre pizza moléculaire innovante",
      "pressSection.award": "Prix de l'Innovation",
      "pressSection.leftArticle.title":
        "Récompensée pour l'Innovation dans la Préparation de la Pizza Sicilienne avec des Techniques Moléculaires",
      "pressSection.leftArticle.preview":
        "Molecola Pizzeria à Palerme a été reconnue pour son approche innovante de la préparation de la pizza utilisant des techniques de gastronomie moléculaire. Leur menu créatif comprenant des éléments comme 'Molecola Fluorescente' et 'Trois Consistences de Fromages' a attiré l'attention des critiques gastronomiques et des passionnés, louant leur dévouement à repousser les limites de la pizza traditionnelle.",
      "pressSection.leftArticle.imageAlt": "Prix d'Innovation Molecola",
      "pressSection.leftArticle.source": "SiciliaGourmet - Décembre 2023",
      "pressSection.article.readMore": "Lire l'article complet",
      "pressSection.readMoreArticles": "Lire plus d'articles",
      // Team gallery texts
      "teamGallerySection.heading": "GALERIE",
      "teamGallerySection.viewGallery": "Voir la Galerie Complète",
      "teamGallerySection.description": "Rencontrez les personnes derrière le succès de Fermento 2.0. Notre équipe talentueuse travaille ensemble pour créer des expériences culinaires inoubliables.",

      // ReservationModal texts
      "reservationModal.title": "Réservez votre table",
      "reservationModal.firstNameLabel": "Prénom",
      "reservationModal.firstNamePlaceholder": "Entrez votre prénom",
      "reservationModal.lastNameLabel": "Nom de famille",
      "reservationModal.lastNamePlaceholder": "Entrez votre nom de famille",
      "reservationModal.phoneLabel": "Numéro de téléphone",
      "reservationModal.phonePlaceholder": "Entrez votre numéro de téléphone",
      "reservationModal.dateLabel": "Date",
      "reservationModal.timeLabel": "Heure",
      "reservationModal.timePlaceholder": "Sélectionnez l'heure",
      "reservationModal.noTimeSlots": "Aucun créneau horaire disponible",
      "reservationModal.peopleLabel": "Nombre de personnes",
      "reservationModal.personSingular": "personne",
      "reservationModal.personPlural": "personnes",
      "reservationModal.specialRequestsLabel": "Demandes spéciales",
      "reservationModal.specialRequestsPlaceholder": "Toute demande spéciale...",
      "reservationModal.submitting": "Réservation en cours...",
      "reservationModal.submitButton": "Réserver maintenant",
      "reservationModal.error.firstNameRequired": "Le prénom est requis",
      "reservationModal.error.lastNameRequired": "Le nom de famille est requis",
      "reservationModal.error.phoneRequired": "Le numéro de téléphone est requis",
      "reservationModal.error.dateRequired": "La date est requise",
      "reservationModal.error.timeRequired": "L'heure est requise",
      "reservationModal.error.general": "Erreur lors de la réservation",
      "reservationModal.successTitle": "Réservation confirmée!",
      "reservationModal.successMessage": "Merci d'avoir choisi Fermento 2.0",
      "reservationModal.holdTimeMessage": "Votre table sera réservée pendant 15 minutes après l'heure de réservation",
      "reservationModal.closeButton": "Fermer",
      "reservationModal.contactInfo": "Contactez-nous par téléphone: +39 375 5600 247",

      // Hero Section / VideoBackground
      "heroSection.title": "AUTHENTIQUE PIZZA NAPOLITAINE",
      "heroSection.subtitle": "Une expérience unique de goût et tradition au cœur de Cefalù",
      "scrollDown": "Défiler vers le bas",
      
      // Gallery Page
      "gallery.title": "C'EST FERMENTO 2.0",
      "gallery.subtitle": "Pâte unique, ingrédients de qualité et une atmosphère chaleureuse et accueillante.",
      "gallery.imageAlt": "Image de galería",
      "gallery.close": "Fermer",
      "gallery.next": "Image suivante",
      "gallery.previous": "Image précédente",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Image précédente",
      "carousel.nextImage": "Image suivante",
      "carousel.goToImage": "Aller à l'image {{number}}",
      "carousel.pizzaAlt": "Pizza artisanale italienne",
      "carousel.ingredientsAlt": "Pizza aux ingrédients frais",
      "carousel.restaurantAlt": "Intérieur de la pizzeria Molecola",
      
      // Error messages and states
      "error.generic": "Une erreur s'est produite. Veuillez réessayer.",
      "error.loading": "Erreur lors du chargement des données. Veuillez rafraîchir la page.",
      "loading": "Chargement...",
      
      // Common actions
      "action.close": "Fermer",
      "action.confirm": "Confirmer",
      "action.cancel": "Annuler",
      "action.submit": "Soumettre",
      "action.readMore": "Lire plus",
    },
  },
  de: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Tisch reservieren",
      viewMenuButton: "Menü anzeigen",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Molecola",
      "navbar.toggleMenu": "Menü umschalten",
      "navbar.home": "Startseite",
      "navbar.menu": "Menü",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Reservierungen",
      // HistorySection texts
      "historySection.title": "UNSERE GESCHICHTE",
      "historySection.paragraph1": "Im Herzen des Zentrums von Palermo, nur wenige Schritte vom Politeama-Platz entfernt, ist Molecola das innovative Projekt, das mit dem Ziel gegründet wurde, ein einzigartiges Geschmacks- und Experimentiererlebnis rund um molekulare Pizza zu bieten.",
      "historySection.paragraph2": "In einem Lokal mit modernem Stil und persönlichem Charakter spricht die <b>Pizza</b> eine zeitgenössische Sprache. Aus einer <b>Mischung ausgewählter Mehle</b> mit einem speziellen Fermentationsprozess entsteht ein leichter Teig mit einzigartiger Textur, der selbst die anspruchsvollsten Gaumen zufriedenstellt. Es ist nicht nur eine Pizza, sondern eine <b>geschmackliche Geschichte</b>, die alle Aromen Siziliens auf den Tisch bringt.",
      "historySection.paragraph3": "Alternative Optionen sind verfügbar, wie der <b>Crunch</b> mit seiner charakteristischen Knusprigkeit oder die <b>Padellini</b>, bei denen spezielle Techniken zur Teigzubereitung vor dem Backen und Belegen verwendet werden, um den <b>hochwertigen Zutaten</b>, die sorgfältig von lokalen Produzenten ausgewählt wurden, gerecht zu werden.",
      "historySection.shortParagraph1": "Im Herzen des Zentrums von Palermo, nur wenige Schritte vom Politeama-Platz entfernt, ist Molecola das innovative Projekt, das mit dem Ziel gegründet wurde, ein einzigartiges Geschmacks- und Experimentiererlebnis rund um molekulare Pizza zu bieten.",
      "historySection.shortParagraph2": "In einem Lokal mit modernem Stil und persönlichem Charakter spricht die <b>Pizza</b> eine zeitgenössische Sprache. Der einzigartige, leichte Teig überzeugt selbst die anspruchsvollsten Gaumen und wird den <b>hochwertigen Zutaten</b> gerecht. Es ist nicht nur eine Pizza, sondern eine <b>geschmackliche Geschichte</b>, die alle Aromen Siziliens auf den Tisch bringt.",
      "historySection.image.alt": "Team von Molecola Pizzeria",
      "historySection.image.caption": "Das Team von Molecola Pizzeria",
      // Cookie consent texts
      "cookieConsent.text": "Wir verwenden Cookies, um Ihre Browser-Erfahrung zu verbessern. Bitte wählen Sie Ihre Präferenzen.",
      "cookieConsent.acceptAll": "Alle akzeptieren",
      "cookieConsent.acceptEssential": "Nur essenzielle",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service und Gastfreundschaft",
      "culinaryPhilosophy.item1.description": "Wir lieben es, uns um unsere Kunden zu kümmern.",
      "culinaryPhilosophy.item2.title": "Qualitätszutaten",
      "culinaryPhilosophy.item2.description": "Wir wählen die besten Mehle aus und verwenden die hochwertigsten saisonalen Produkte.",
      "culinaryPhilosophy.item3.title": "Perfekte Kombinationen",
      "culinaryPhilosophy.item3.description": "Unsere Weinkarte bietet zahlreiche Optionen, nicht nur regionale.",
      "culinaryPhilosophy.title": "UNSERE KULINARISCHE PHILOSOPHIE",
      "culinaryPhilosophy.subtitle": "Wir glauben, dass außergewöhnliche Pizza aus Leidenschaft, Tradition und den besten Zutaten entsteht.",
      "culinaryPhilosophy.quote": "Eine gut zubereitete Pizza ist eine Reise durch Geschmäcker, Texturen und Emotionen. Es ist mehr als Nahrung; es ist ein Erlebnis, das mit allen Sinnen genossen werden sollte.",
      "culinaryPhilosophy.quoteAuthor": "Die Brüder Mirenda",
      // Footer texts
      "footer.tagline": "Authentizität in jedem Biss.",
      "footer.description": "Unsere Leidenschaft für Pizza spiegelt sich in jedem Gericht wider, das wir servieren!",
      "footer.quickLinksHeader": "Schnellzugriffe",
      "footer.contactHeader": "Kontakt",
      "footer.address.line1": "Via Giuseppe Velasquez, 29/35",
      "footer.address.line2": "90141, Palermo, PA",
      "footer.phone": "Tel: +39 375 5600 247",
      "footer.email": "info@molecolapizzeria.it",
      "footer.hours.weekdays": "Montag-Donnerstag: 17:00-21:30",
      "footer.hours.monday": "Freitag-Samstag: 17:00-22:00",
      "footer.copyright": "© {{year}} Molecola Pizzeria. Alle Rechte vorbehalten.",
      "footer.about": "Über Uns",
      "footer.newsletter.title": "Abonnieren Sie Unseren Newsletter",
      "footer.newsletter.description": "Erhalten Sie Updates über spezielle Events, neue Menüpunkte und saisonale Angebote!",
      "footer.newsletter.placeholder": "Ihre E-Mail-Adresse",
      "footer.newsletter.button": "Abonnieren",
      // PressSection texts
      "pressSection.heading": "Presse & Auszeichnungen",
      "pressSection.subtitle": "Was Kritiker und Feinschmecker über unsere innovative molekulare Pizza sagen",
      "pressSection.award": "Innovationspreis",
      "pressSection.leftArticle.title": "Ausgezeichnet für Innovation bei der Herstellung sizilianischer Pizza mit molekularen Techniken",
      "pressSection.leftArticle.preview": "Molecola Pizzeria in Palermo wurde für ihren innovativen Ansatz bei der Pizzaherstellung mit molekularen gastronomischen Techniken ausgezeichnet. Ihr kreatives Menü mit Gerichten wie 'Fluoreszierende Molecola' und 'Drei Käsekonsistenzen' hat die Aufmerksamkeit von Gastronomiekritikern und Enthusiasten auf sich gezogen, die ihr Engagement würdigen, die Grenzen der traditionellen Pizza zu erweitern.",
      "pressSection.leftArticle.imageAlt": "Molecola Innovationspreis",
      "pressSection.leftArticle.source": "SiciliaGourmet - Dezember 2023",
      "pressSection.article.readMore": "Artikel komplett lesen",
      "pressSection.readMoreArticles": "Weitere Artikel lesen",
      // Team Gallery texts
      "teamGallerySection.heading": "GALERIE",
      "teamGallerySection.viewGallery": "Vollständige Galerie anzeigen",
      "teamGallerySection.description": "Lernen Sie die Menschen kennen, die hinter dem Erfolg von Molecola Pizzeria stehen. Unser talentiertes Team arbeitet zusammen, um unvergessliche kulinarische Erlebnisse durch molekulare Innovation zu schaffen.",

      // ReservationModal texts
      "reservationModal.title": "Reservieren Sie Ihren Tisch",
      "reservationModal.firstNameLabel": "Vorname",
      "reservationModal.firstNamePlaceholder": "Geben Sie Ihren Vornamen ein",
      "reservationModal.lastNameLabel": "Nachname",
      "reservationModal.lastNamePlaceholder": "Geben Sie Ihren Nachnamen ein",
      "reservationModal.phoneLabel": "Telefonnummer",
      "reservationModal.phonePlaceholder": "Geben Sie Ihre Telefonnummer ein",
      "reservationModal.dateLabel": "Datum",
      "reservationModal.timeLabel": "Uhrzeit",
      "reservationModal.timePlaceholder": "Wählen Sie eine Uhrzeit",
      "reservationModal.noTimeSlots": "Kein verfügbarer Zeitraum",
      "reservationModal.peopleLabel": "Anzahl der Personen",
      "reservationModal.personSingular": "Person",
      "reservationModal.personPlural": "Personen",
      "reservationModal.specialRequestsLabel": "Sonderwünsche",
      "reservationModal.specialRequestsPlaceholder": "Beliebige Sonderwünsche...",
      "reservationModal.submitting": "Reservierung läuft...",
      "reservationModal.submitButton": "Jetzt reservieren",
      "reservationModal.error.firstNameRequired": "Vorname ist erforderlich",
      "reservationModal.error.lastNameRequired": "Nachname ist erforderlich",
      "reservationModal.error.phoneRequired": "Telefonnummer ist erforderlich",
      "reservationModal.error.dateRequired": "Datum ist erforderlich",
      "reservationModal.error.timeRequired": "Uhrzeit ist erforderlich",
      "reservationModal.error.general": "Fehler bei der Reservierung",
      "reservationModal.successTitle": "Reservierung bestätigt!",
      "reservationModal.successMessage": "Vielen Dank, dass Sie sich für Molecola Pizzeria entschieden haben",
      "reservationModal.holdTimeMessage": "Ihr Tisch bleibt 15 Minuten nach der Reservierungszeit für Sie reserviert",
      "reservationModal.closeButton": "Schließen",

      "reservationModal.emailLabel": "E-Mail",
      "reservationModal.emailPlaceholder": "Geben Sie Ihre E-Mail ein",
      "reservationModal.error.emailRequired": "E-Mail ist erforderlich",
      "reservationModal.error.emailInvalid": "Bitte geben Sie eine gültige E-Mail-Adresse ein",

      // Hero Section / VideoBackground
      "heroSection.title": "AUTHENTISCHE NEAPOLITANISCHE PIZZA",
      "heroSection.subtitle": "Ein einzigartiges Geschmacks- und Traditionserlebnis im Herzen von Cefalù",
      "scrollDown": "Nach unten scrollen",
      
      // Gallery Page
      "gallery.title": "DAS IST FERMENTO 2.0",
      "gallery.subtitle": "Einzigartiger Teig, Qualitätszutaten und eine warme, einladende Atmosphäre.",
      "gallery.imageAlt": "Galeriebild",
      "gallery.close": "Schließen",
      "gallery.next": "Nächstes Bild",
      "gallery.previous": "Vorheriges Bild",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Vorheriges Bild",
      "carousel.nextImage": "Nächstes Bild",
      "carousel.goToImage": "Zu Bild {{number}} gehen",
      "carousel.pizzaAlt": "Handwerkliche italienische Pizza",
      "carousel.ingredientsAlt": "Pizza mit frischen Zutaten",
      "carousel.restaurantAlt": "Innenraum der Pizzeria Molecola",
      
      // Error messages and states
      "error.generic": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      "error.loading": "Fehler beim Laden der Daten. Bitte aktualisieren Sie die Seite.",
      "loading": "Wird geladen...",
      
      // Common actions
      "action.close": "Schließen",
      "action.confirm": "Bestätigen",
      "action.cancel": "Abbrechen",
      "action.submit": "Absenden",
      "action.readMore": "Mehr lesen",
    }
  }
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