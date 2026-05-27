const SITE = {
  name: "nombre-del-sitio",
  url: "https://nombre-url",
  description: "...",
  locale: "es_AR",
  image: "...",
};

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateSEO({
  title,
  description,
  path = "/",
  image = SITE.image,
}: SEOOptions = {}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;

  return {
    title: fullTitle,
    description: description || SITE.description,
    canonical: new URL(path, SITE.url).toString(),
    image: new URL(image, SITE.url).toString(),
    locale: SITE.locale,
  };
}
