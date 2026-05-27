export const SITE_CONFIG = {
  name: "Nombre de la tienda",
  description: "Descripcón de la tienda",
  url: "https://sportzone.com",
  ogImage: "/images/og.jpg" /* Portada visual de 1200 x 630 */,

  contact: {
    phone: "telefono de la tienda",
    email: "email de la tienda",
    address: "Córdoba, Argentina",
  },

  socials: {
    instagram: "https://instagram.com/...",
    facebook: "https://facebook.com/...",
  },

  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/Productos" },
    { label: "Terminos y Condiciones", href: "/Terminos" },
  ],

  whatsapp: {
    phone: "cel de la tienda",
    messages: {
      general: () => "Hola! Quiero más información",
      reserva: () => "Hola! Quiero hacer una reserva",
      producto: (name: string) => `Hola! Estoy interesado en ${name}`,
    },
  },

  features: {
    blog: false,
    ecommerce: true,
  },
};
