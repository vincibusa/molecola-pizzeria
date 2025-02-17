
import React, { useState, useEffect } from "react";
import { motion,  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUtensils, FaLeaf, FaWineGlass } from "react-icons/fa";
import { IoArrowUp } from "react-icons/io5";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const AboutPage: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);


  useEffect(() => {
    const handleScroll = (): void => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Chef John Doe",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
      bio: "25 years of culinary excellence",
    },
    {
      name: "Sarah Smith",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548",
      bio: "Specializes in French pastries",
    },
    {
      name: "Mike Johnson",
      role: "Sous Chef",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16",
      bio: "Innovation meets tradition",
    },
  ];

  // Definiamo un set di variants per le card
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  // Per la sezione About us, usiamo un ref per l'intersection observer
  const { ref } = useInView({ threshold: 0.5 });

  return (
    <div className="overflow-hidden">
      {/* Artisanal Dough Process Section */}
      <section
        id="about"
        ref={ref}
        className="py-20 bg-background relative"
      >
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-heading font-serif text-center mb-16 text-4xl"
          >
            Our Artisanal Dough Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-opacity-80 p-6"
            >
              <h3 className="text-2xl font-serif mb-4">Traditional Method</h3>
              <p className="text-foreground">
                Our dough is crafted using a century-old recipe, requiring 48
                hours of natural fermentation. This slow process allows the
                flavors to develop fully and creates the perfect texture.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-accent font-semibold">1.</span>
                  <p>Selection of premium 00 flour from Italian mills</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-accent font-semibold">2.</span>
                  <p>Mixing with pure spring water at precise temperatures</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-accent font-semibold">3.</span>
                  <p>Natural levain fermentation process</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f"
                alt="Dough making process"
                className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-heading font-serif text-center mb-16 text-4xl"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const [ref, inView] = useInView({
                threshold: 0.3,
                triggerOnce: true,
              });

              return (
                <motion.div
                  key={member.name}
                  ref={ref}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className=" rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-accent mb-2">{member.role}</p>
                    <p className="text-muted">{member.bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Culinary Philosophy Section */}
      <section className="py-20 bg-background relative">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-heading font-serif text-center mb-16 text-4xl"
          >
            Our Culinary Philosophy
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <FaUtensils className="text-5xl mb-4" />,
                title: "Traditional Techniques",
                description: "Preserving authentic flavors",
              },
              {
                icon: <FaLeaf className="text-5xl mb-4" />,
                title: "Fresh Ingredients",
                description: "Locally sourced produce",
              },
              {
                icon: <FaWineGlass className="text-5xl mb-4" />,
                title: "Perfect Pairings",
                description: "Curated wine selection",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 flex flex-col items-center text-center  bg-opacity-80 "
              >
                <div className="text-accent flex justify-center items-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-heading font-serif text-center mb-16 text-4xl"
          >
            Our Location
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
                alt="Restaurant location"
                className="rounded-lg shadow-xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2  bg-opacity-80 p-6 "
            >
              <h3 className="text-2xl font-serif mb-4">In the Heart of the City</h3>
              <p className="text-foreground mb-4">
                Located in the historic district, our restaurant brings together the rich cultural heritage of the area with modern culinary innovation.
              </p>
              <p className="text-foreground">
                123 Gourmet Street<br />
                Culinary District<br />
                Foodie City, FC 12345
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goToTop}
          className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent transition-colors duration-300"
        >
          <IoArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default AboutPage;
