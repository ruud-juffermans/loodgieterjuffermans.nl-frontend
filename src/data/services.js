import ImgZinkwerk from "@assets/home1.jpeg";
import ImgLoodwerk from "@assets/hero1.jpeg";
import ImgLoodwerkDetail from "@assets/hero2.jpeg";
import ImgDakdekken from "@assets/home3.jpeg";

export const SERVICES = [
  {
    slug: "zinkwerk",
    title: "Zinkwerk",
    shortDescription:
      "Met precisie en vakmanschap brengen we duurzaamheid en schoonheid samen in elk zinkwerkproject.",
    metaTitle: "Zinkwerk in Haarlem e.o. | Loodgietersbedrijf Juffermans",
    metaDescription:
      "Specialist in zinkwerk: zinken dakgoten, regenpijpen en maatwerk zetwerk. Vakkundig gezet en gesoldeerd in Haarlem, Heemstede en omgeving. Gratis offerte.",
    intro: [
      "Zink is al generaties lang hét materiaal voor dakgoten en regenwaterafvoer: duurzaam, onderhoudsarm en mooi verouderend. Goed zinkwerk vraagt om vakmanschap — van het zetten van het materiaal tot de laatste soldeernaad.",
      "Als specialist in zinkwerk verzorg ik zowel nieuwe aanleg als reparatie en vervanging, altijd met oog voor detail en afgestemd op uw woning.",
    ],
    tasksTitle: "Wat ik voor u doe",
    tasks: [
      "Zinken dakgoten: aanleg, reparatie en vervanging",
      "Regenpijpen en hemelwaterafvoer",
      "Maatwerk zetwerk, op maat gezet en gesoldeerd",
      "Zinken daken van dakkapellen en erkers",
      "Periodiek onderhoud en inspectie",
    ],
    image: ImgZinkwerk,
    detailImage: ImgZinkwerk,
    imageAlt: "Zinken dakgoot en zinkwerk aan een woning",
  },
  {
    slug: "loodwerk",
    title: "Loodwerk",
    shortDescription:
      "Vertrouw op onze deskundigheid voor nauwkeurig en betrouwbaar loodwerk dat de tand des tijds doorstaat.",
    metaTitle: "Loodwerk in Haarlem e.o. | Loodgietersbedrijf Juffermans",
    metaDescription:
      "Vakkundig loodwerk: loodslabben, schoorsteenlood en loketten. Ook restauratiewerk aan oudere panden in Haarlem, Heemstede en omgeving. Gratis offerte.",
    intro: [
      "Lood zorgt op de kwetsbare overgangen van uw dak — bij schoorstenen, dakkapellen en gevelaansluitingen — voor een blijvend waterdichte afwerking. Verouderd of slecht aangebracht loodwerk is een veelvoorkomende oorzaak van lekkage.",
      "Met ruime ervaring in traditioneel loodwerk help ik u bij zowel nieuw werk als herstel van bestaand werk, ook bij oudere en monumentale panden.",
    ],
    tasksTitle: "Wat ik voor u doe",
    tasks: [
      "Loodslabben en loodaansluitingen vernieuwen",
      "Schoorsteenlood en loketten",
      "Nok- en gevelafwerking in lood",
      "Herstel van loodwerk bij oudere en monumentale panden",
      "Opsporen en verhelpen van lekkages",
    ],
    image: ImgLoodwerk,
    detailImage: ImgLoodwerkDetail,
    imageAlt: "Traditioneel loodwerk rond een schoorsteen",
  },
  {
    slug: "dakdekken",
    title: "Dakdekken",
    shortDescription:
      "Bescherm uw huis met professionele dakdekking, ontworpen voor maximale duurzaamheid en weerbestendigheid.",
    metaTitle: "Dakdekken & dakbedekking | Loodgietersbedrijf Juffermans",
    metaDescription:
      "Dakbedekking voor platte en hellende daken: bitumen, dakreparatie en dakrenovatie. Snel ter plaatse in Haarlem, Heemstede en omgeving. Gratis offerte.",
    intro: [
      "Een goed gelegd dak beschermt uw woning jarenlang tegen weer en wind. Of het nu gaat om een plat dak, een dakkapel of een aanbouw — de kwaliteit zit in de details en de afwerking.",
      "Ik verzorg dakbedekking van A tot Z: van inspectie en advies tot het volledig vernieuwen van uw dakbedekking, inclusief het bijbehorende lood- en zinkwerk.",
    ],
    tasksTitle: "Wat ik voor u doe",
    tasks: [
      "Bitumineuze dakbedekking voor platte daken",
      "Dakrenovatie en dakreparatie",
      "Daken van dakkapellen, aanbouwen en garages",
      "Stormschade en lekkage verhelpen",
      "Dakinspectie en onderhoudsadvies",
    ],
    image: ImgDakdekken,
    detailImage: ImgDakdekken,
    imageAlt: "Plat dak met bitumineuze dakbedekking",
  },
];

export const getServiceBySlug = (slug) =>
  SERVICES.find((service) => service.slug === slug);
