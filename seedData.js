const islands = [
  {
    name: "Havelock Island",
    nativeName: "Swaraj Dweep",
    location: {
      group: "Andaman",
      coordinates: {
        lat: 11.9944,
        lng: 93.0061
      },
      area: "113 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "Havelock Island, now officially known as Swaraj Dweep, is one of the most popular destinations in the Andaman Islands. Famous for its pristine beaches, crystal-clear waters, and vibrant coral reefs, it's a paradise for beach lovers and adventure seekers alike.",
      history: "Originally inhabited by indigenous tribes, the island was later named after British General Henry Havelock during the colonial era. In 2018, it was renamed Swaraj Dweep as part of India's initiative to rename the islands.",
      floraAndFauna: [
        "Vibrant coral reefs with diverse marine life",
        "Sea turtles nesting on beaches",
        "Tropical rainforest with dense vegetation",
        "Colorful reef fish and manta rays",
        "Mangrove forests along the coast"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Fresh Grilled Lobster",
        description: "Locally caught lobster grilled to perfection with garlic butter and lime"
      },
      {
        dishName: "Fish Curry",
        description: "Traditional Andamanese fish curry with coconut milk and aromatic spices"
      },
      {
        dishName: "Seafood Platter",
        description: "A mix of prawns, squid, and fish served with local vegetables"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "May",
      peakSeason: "December to February"
    },
    vibeTags: ["Scuba", "Beach", "Romantic", "Adventure", "Snorkeling"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
        caption: "Radhanagar Beach - Voted Asia's best beach"
      },
      {
        url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=800",
        caption: "Crystal clear waters perfect for diving"
      },
      {
        url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
        caption: "Stunning sunset views"
      },
      {
        url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
        caption: "Lush tropical forests"
      }
    ],
    externalLinks: {
      wikiUrl: "https://en.wikipedia.org/wiki/Havelock_Island",
      govtPortal: "https://andaman.gov.in"
    }
  },
  {
    name: "Neil Island",
    nativeName: "Shaheed Dweep",
    location: {
      group: "Andaman",
      coordinates: {
        lat: 11.8312,
        lng: 93.0476
      },
      area: "18.9 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "Neil Island, officially renamed Shaheed Dweep, is a serene and less crowded alternative to Havelock. Known for its laid-back atmosphere, natural rock formations, and excellent snorkeling spots, it's perfect for those seeking tranquility.",
      history: "Named after British Brigadier General James Neill, the island was renamed Shaheed Dweep (Martyr Island) in 2018 to honor India's freedom fighters.",
      floraAndFauna: [
        "Natural coral formations",
        "Rich marine biodiversity",
        "Coconut palm groves",
        "Tropical birds and butterflies",
        "Sea anemones and starfish"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Coconut Prawn Curry",
        description: "Fresh prawns cooked in rich coconut gravy with local spices"
      },
      {
        dishName: "Grilled Fish",
        description: "Local fish marinated with Indian spices and grilled over charcoal"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "May",
      peakSeason: "November to March"
    },
    vibeTags: ["Quiet", "Snorkeling", "Beach", "Romantic", "Photography"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        caption: "Natural Bridge - A stunning rock formation"
      },
      {
        url: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=800",
        caption: "Peaceful beaches with clear waters"
      },
      {
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
        caption: "Sunset at Laxmanpur Beach"
      }
    ],
    externalLinks: {
      wikiUrl: "https://en.wikipedia.org/wiki/Neil_Island",
      govtPortal: "https://andaman.gov.in"
    }
  },
  {
    name: "Agatti Island",
    nativeName: "Agatti",
    location: {
      group: "Lakshadweep",
      coordinates: {
        lat: 10.8519,
        lng: 72.1920
      },
      area: "7.6 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "Special Permission"
    },
    description: {
      summary: "Agatti Island is the gateway to Lakshadweep, featuring a stunning coral reef surrounding the entire island. With its turquoise lagoons and pristine beaches, it's a paradise for water sports enthusiasts and nature lovers.",
      history: "Agatti has been inhabited for centuries and has a rich maritime history. The island played an important role in ancient Arab trading routes across the Arabian Sea.",
      floraAndFauna: [
        "Extensive coral reefs",
        "Lagoon fish species",
        "Sea turtles",
        "Coconut plantations",
        "Migratory seabirds"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Tuna Curry",
        description: "Fresh tuna prepared with coconut and local spices, a Lakshadweep specialty"
      },
      {
        dishName: "Octopus Fry",
        description: "Crispy fried octopus marinated with turmeric and chili"
      },
      {
        dishName: "Mas Huni",
        description: "Shredded smoked tuna mixed with coconut, onions, and lime"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "March",
      peakSeason: "December to February"
    },
    vibeTags: ["Scuba", "Snorkeling", "Kayaking", "Beach", "Adventure"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800",
        caption: "Turquoise lagoon surrounding Agatti"
      },
      {
        url: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=800",
        caption: "Coral reefs visible from the shore"
      },
      {
        url: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=800",
        caption: "Traditional fishing boats"
      }
    ],
    externalLinks: {
      wikiUrl: "https://en.wikipedia.org/wiki/Agatti_Island",
      govtPortal: "https://lakshadweep.gov.in"
    }
  },
  {
    name: "Diu Island",
    nativeName: "Diu",
    location: {
      group: "Offshore Mainlined",
      coordinates: {
        lat: 20.7144,
        lng: 70.9873
      },
      area: "40 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "Diu is a small island off the coast of Gujarat, known for its Portuguese colonial architecture, beautiful beaches, and historic fortifications. It offers a unique blend of Indian and Portuguese culture, with old churches, forts, and vibrant festivals.",
      history: "Diu was under Portuguese rule from 1535 to 1961, leaving behind a rich cultural heritage. The island features impressive Portuguese fortifications and churches that stand as testimony to its colonial past.",
      floraAndFauna: [
        "Coastal vegetation and palm trees",
        "Migratory birds at Fudam Bird Sanctuary",
        "Marine life in rocky coastal areas",
        "Hog deer population",
        "Medicinal plants and herbs"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Fish Recheiado",
        description: "Portuguese-style stuffed fish with spicy red masala"
      },
      {
        dishName: "Bebinca",
        description: "Traditional Portuguese layered dessert made with coconut milk and eggs"
      },
      {
        dishName: "Crab Xec Xec",
        description: "Goan-Portuguese crab curry with coconut and spices"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "March",
      peakSeason: "December to February"
    },
    vibeTags: ["Historical", "Beach", "Photography", "Cultural", "Architecture"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800",
        caption: "Diu Fort overlooking the sea"
      },
      {
        url: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800",
        caption: "Portuguese colonial architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=800",
        caption: "Nagoa Beach - Popular tourist spot"
      }
    ],
    externalLinks: {
      wikiUrl: "https://en.wikipedia.org/wiki/Diu,_India",
      govtPortal: "https://daman.nic.in"
    }
  },
  {
    name: "Majuli Island",
    nativeName: "Majuli",
    location: {
      group: "Other",
      coordinates: {
        lat: 26.9508,
        lng: 94.1753
      },
      area: "352 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "Majuli is the world's largest river island, formed by the Brahmaputra River in Assam. It's a cultural hub of Assamese civilization, home to ancient monasteries (satras), vibrant festivals, and unique traditions. The island is famous for its mask-making, pottery, and Neo-Vaishnavite culture.",
      history: "Majuli has been the cultural capital of Assamese civilization for over 500 years. It was established as a center of Neo-Vaishnavite culture by Saint Srimanta Sankardeva in the 16th century and houses numerous ancient monasteries.",
      floraAndFauna: [
        "Rich wetland ecosystem",
        "Migratory birds including Siberian cranes",
        "Endangered river dolphins",
        "Diverse aquatic plants",
        "Bamboo groves and paddy fields"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Masor Tenga",
        description: "Traditional Assamese sour fish curry with tomatoes and elephant apple"
      },
      {
        dishName: "Pitha",
        description: "Assamese rice cakes made during festivals, served with jaggery"
      },
      {
        dishName: "Duck Curry",
        description: "Local duck prepared with black sesame and aromatic herbs"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "March",
      peakSeason: "November to February"
    },
    vibeTags: ["Cultural", "Historical", "Bird Watching", "Photography", "Quiet"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800",
        caption: "Brahmaputra River surrounding Majuli"
      },
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
        caption: "Traditional Assamese monastery (satra)"
      },
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        caption: "Sunset over the river island"
      }
    ],
    externalLinks: {
      wikiUrl: "https://en.wikipedia.org/wiki/Majuli",
      govtPortal: "https://majuli.assam.gov.in"
    }
  }
];

module.exports = islands;
