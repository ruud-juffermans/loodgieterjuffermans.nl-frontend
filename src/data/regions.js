export const REGIONS = [
  {
    slug: "haarlem",
    name: "Haarlem",
    metaTitle: "Loodgieter in Haarlem | Loodgietersbedrijf Juffermans",
    metaDescription:
      "Loodgieter in Haarlem nodig? Juffermans verzorgt lood-, zink- en dakwerk, dakgoten en lekkageherstel. Snel ter plaatse, gratis offerte, één vast aanspreekpunt.",
    intro: [
      "Loodgietersbedrijf Juffermans werkt dagelijks in Haarlem en omgeving. Van spoedklussen zoals lekkage tot compleet nieuw zink- of loodwerk: u spreekt altijd direct met de vakman zelf en weet vooraf waar u aan toe bent.",
      "Juist in een stad als Haarlem, met veel karakteristieke en oudere panden, is traditioneel lood- en zinkwerk onmisbaar. Ik ken de bouwstijlen en werk met respect voor het origineel.",
    ],
  },
  {
    slug: "heemstede",
    name: "Heemstede",
    metaTitle: "Loodgieter in Heemstede | Loodgietersbedrijf Juffermans",
    metaDescription:
      "Loodgieter in Heemstede nodig? Juffermans verzorgt lood-, zink- en dakwerk, dakgoten en lekkageherstel. Snel ter plaatse, gratis offerte, één vast aanspreekpunt.",
    intro: [
      "Loodgietersbedrijf Juffermans werkt dagelijks in Heemstede en omgeving. Van spoedklussen zoals lekkage tot compleet nieuw zink- of loodwerk: u spreekt altijd direct met de vakman zelf en weet vooraf waar u aan toe bent.",
      "Heemstede kent veel vrijstaande en half-vrijstaande woningen met dakkapellen, erkers en royale dakgoten — precies het werk waarin ik gespecialiseerd ben.",
    ],
  },
  {
    slug: "bennebroek",
    name: "Bennebroek",
    metaTitle: "Loodgieter in Bennebroek | Loodgietersbedrijf Juffermans",
    metaDescription:
      "Loodgieter in Bennebroek nodig? Juffermans verzorgt lood-, zink- en dakwerk, dakgoten en lekkageherstel. Snel ter plaatse, gratis offerte, één vast aanspreekpunt.",
    intro: [
      "Loodgietersbedrijf Juffermans werkt dagelijks in Bennebroek en omgeving. Van spoedklussen zoals lekkage tot compleet nieuw zink- of loodwerk: u spreekt altijd direct met de vakman zelf en weet vooraf waar u aan toe bent.",
      "Ook in Bennebroek en de omliggende dorpen ben ik snel ter plaatse, voor zowel kleine reparaties als groot onderhoud aan dak, dakgoten en zinkwerk.",
    ],
  },
];

export const getRegionBySlug = (slug) =>
  REGIONS.find((region) => region.slug === slug);
