const islands = [
  {
    name: "Havelock Island",
    nativeName: "Swaraj Dweep",
    location: {
      group: "Andaman",
      coordinates: { lat: 11.9944, lng: 93.0061 },
      area: "113 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "Havelock Island is one of the most famous islands in the Andaman archipelago known for beaches and coral reefs.",
      history: "Named after British General Henry Havelock and renamed Swaraj Dweep in 2018.",
      floraAndFauna: [
        "Coral reefs",
        "Sea turtles",
        "Mangrove forests",
        "Tropical fish",
        "Dense rainforest vegetation"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Grilled Lobster",
        description: "Fresh lobster grilled with butter and spices"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "May",
      peakSeason: "December to February"
    },
    vibeTags: ["Beach","Scuba","Adventure","Snorkeling"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
        caption: "Radhanagar Beach"
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
      coordinates: { lat: 11.8312, lng: 93.0476 },
      area: "18.9 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "A peaceful island known for coral reefs and natural rock bridges.",
      history: "Renamed Shaheed Dweep in 2018.",
      floraAndFauna: [
        "Coral reefs",
        "Sea anemones",
        "Palm groves",
        "Reef fish",
        "Tropical birds"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Coconut Prawn Curry",
        description: "Fresh prawns cooked in coconut gravy"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "May",
      peakSeason: "November to March"
    },
    vibeTags: ["Quiet","Snorkeling","Beach"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        caption: "Natural rock bridge"
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
      coordinates: { lat: 10.8519, lng: 72.192 },
      area: "7.6 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "Special Permission"
    },
    description: {
      summary: "Gateway island to Lakshadweep with stunning lagoons.",
      history: "Historically connected with Arab trade routes.",
      floraAndFauna: [
        "Coral reefs",
        "Lagoon fish",
        "Sea turtles",
        "Coconut plantations",
        "Seabirds"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Tuna Curry",
        description: "Lakshadweep style tuna cooked with coconut"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "March",
      peakSeason: "December to February"
    },
    vibeTags: ["Scuba","Snorkeling","Beach"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800",
        caption: "Agatti lagoon"
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
      group: "Offshore Mainland",
      coordinates: { lat: 20.7144, lng: 70.9873 },
      area: "40 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "Island off Gujarat famous for beaches and Portuguese architecture.",
      history: "Under Portuguese rule from 1535 to 1961.",
      floraAndFauna: [
        "Coastal palms",
        "Migratory birds",
        "Marine fish",
        "Rocky shore ecosystems",
        "Coastal shrubs"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Fish Recheiado",
        description: "Spicy stuffed fish with Portuguese influence"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "March",
      peakSeason: "December to February"
    },
    vibeTags: ["Historical","Beach","Architecture"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800",
        caption: "Diu Fort"
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
      group: "River Island",
      coordinates: { lat: 26.9508, lng: 94.1753 },
      area: "352 sq km"
    },
    status: {
      isInhabited: true,
      isProtectedArea: false,
      permitRequired: "None"
    },
    description: {
      summary: "Largest river island in the world located in the Brahmaputra River.",
      history: "Cultural center of Assamese Vaishnavite traditions.",
      floraAndFauna: [
        "Wetland ecosystems",
        "Migratory birds",
        "River dolphins",
        "Bamboo groves",
        "Rice fields"
      ]
    },
    culinaryHighlights: [
      {
        dishName: "Masor Tenga",
        description: "Traditional Assamese sour fish curry"
      }
    ],
    bestTimeToVisit: {
      startMonth: "October",
      endMonth: "March",
      peakSeason: "November to February"
    },
    vibeTags: ["Cultural","Bird Watching","Photography"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800",
        caption: "Majuli landscape"
      }
    ],
    externalLinks: {
      wikiUrl: "https://en.wikipedia.org/wiki/Majuli",
      govtPortal: "https://majuli.assam.gov.in"
    }
  },

  { name:"Ross Island", nativeName:"Netaji Subhas Chandra Bose Dweep", location:{ group:"Andaman", coordinates:{ lat:11.6755, lng:92.7626 }, area:"0.6 sq km"}, status:{ isInhabited:false, isProtectedArea:true, permitRequired:"None"}, description:{ summary:"Historic administrative island of the British in Andaman.", history:"Abandoned after 1941 earthquake.", floraAndFauna:["Peacocks","Spotted deer","Tropical trees","Coral reefs","Seabirds"]}, culinaryHighlights:[{dishName:"Grilled Fish",description:"Simple grilled reef fish"}], bestTimeToVisit:{startMonth:"October",endMonth:"May",peakSeason:"December to February"}, vibeTags:["Historical","Nature"], images:[{url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",caption:"Historic ruins"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Ross_Island",govtPortal:"https://andaman.gov.in"} },

  { name:"Baratang Island", nativeName:"Baratang", location:{ group:"Andaman", coordinates:{ lat:12.1176, lng:92.7427 }, area:"238 sq km"}, status:{ isInhabited:true, isProtectedArea:true, permitRequired:"Special Permission"}, description:{ summary:"Island famous for limestone caves and mangrove creeks.", history:"Known for mud volcanoes and tribal reserves.", floraAndFauna:["Mangroves","Crocodiles","Tropical birds","Mud volcanoes","Dense forests"]}, culinaryHighlights:[{dishName:"Fish Curry",description:"Local Andaman style fish curry"}], bestTimeToVisit:{startMonth:"November",endMonth:"April",peakSeason:"December to February"}, vibeTags:["Adventure","Caves"], images:[{url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",caption:"Mangrove waterways"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Baratang_Island",govtPortal:"https://andaman.gov.in"} },

  { name:"Little Andaman", nativeName:"Little Andaman", location:{ group:"Andaman", coordinates:{ lat:10.757, lng:92.515 }, area:"707 sq km"}, status:{ isInhabited:true, isProtectedArea:false, permitRequired:"Special Permission"}, description:{ summary:"Island known for waterfalls and surfing beaches.", history:"Traditional home of the Onge tribe.", floraAndFauna:["Rainforests","Sea turtles","Waterfalls","Mangroves","Birdlife"]}, culinaryHighlights:[{dishName:"Coconut Fish Curry",description:"Island style fish curry"}], bestTimeToVisit:{startMonth:"October",endMonth:"April",peakSeason:"December to February"}, vibeTags:["Surfing","Adventure"], images:[{url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",caption:"Pristine beach"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Little_Andaman",govtPortal:"https://andaman.gov.in"} },

  { name:"Minicoy Island", nativeName:"Maliku", location:{ group:"Lakshadweep", coordinates:{ lat:8.2955, lng:73.0483 }, area:"4.8 sq km"}, status:{ isInhabited:true, isProtectedArea:false, permitRequired:"Special Permission"}, description:{ summary:"Southernmost Lakshadweep island known for lighthouse.", history:"Strong cultural links with Maldives.", floraAndFauna:["Coral reefs","Lagoon fish","Sea turtles","Coconut palms","Seabirds"]}, culinaryHighlights:[{dishName:"Tuna Mas",description:"Traditional tuna preparation"}], bestTimeToVisit:{startMonth:"October",endMonth:"March",peakSeason:"December to February"}, vibeTags:["Scuba","Beach"], images:[{url:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",caption:"Minicoy lagoon"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Minicoy",govtPortal:"https://lakshadweep.gov.in"} },

  { name:"Kavaratti Island", nativeName:"Kavaratti", location:{ group:"Lakshadweep", coordinates:{ lat:10.5667, lng:72.6417 }, area:"3.9 sq km"}, status:{ isInhabited:true, isProtectedArea:false, permitRequired:"Special Permission"}, description:{ summary:"Capital island of Lakshadweep known for lagoons.", history:"Administrative center of Lakshadweep.", floraAndFauna:["Coral reefs","Sea turtles","Reef fish","Palm trees","Lagoon ecosystems"]}, culinaryHighlights:[{dishName:"Spicy Tuna Curry",description:"Popular Lakshadweep dish"}], bestTimeToVisit:{startMonth:"October",endMonth:"March",peakSeason:"December to February"}, vibeTags:["Snorkeling","Beach"], images:[{url:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",caption:"Lagoon waters"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Kavaratti",govtPortal:"https://lakshadweep.gov.in"} },

  { name:"Bangaram Island", nativeName:"Bangaram", location:{ group:"Lakshadweep", coordinates:{ lat:10.9401, lng:72.2871 }, area:"1.2 sq km"}, status:{ isInhabited:false, isProtectedArea:false, permitRequired:"Special Permission"}, description:{ summary:"Luxury resort island famous for coral lagoons.", history:"Popular eco tourism destination.", floraAndFauna:["Coral reefs","Turtles","Lagoon fish","Palm trees","Seabirds"]}, culinaryHighlights:[{dishName:"Seafood Grill",description:"Fresh seafood grilled near beach"}], bestTimeToVisit:{startMonth:"October",endMonth:"March",peakSeason:"December to February"}, vibeTags:["Luxury","Beach","Scuba"], images:[{url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",caption:"Bangaram beach"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Bangaram_Atoll",govtPortal:"https://lakshadweep.gov.in"} },

  { name:"Kadmat Island", nativeName:"Kadmat", location:{ group:"Lakshadweep", coordinates:{ lat:11.224, lng:72.776 }, area:"3.2 sq km"}, status:{ isInhabited:true, isProtectedArea:false, permitRequired:"Special Permission"}, description:{ summary:"Island with long sandy beaches and coral reefs.", history:"Fishing and coconut farming community.", floraAndFauna:["Coral reefs","Sea turtles","Lagoon fish","Palm trees","Seabirds"]}, culinaryHighlights:[{dishName:"Coconut Fish Fry",description:"Fresh fish fried with coconut spices"}], bestTimeToVisit:{startMonth:"October",endMonth:"March",peakSeason:"December to February"}, vibeTags:["Snorkeling","Beach"], images:[{url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",caption:"Kadmat lagoon"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Kadmat_Island",govtPortal:"https://lakshadweep.gov.in"} },

  { name:"Elephanta Island", nativeName:"Gharapuri", location:{ group:"Arabian Sea", coordinates:{ lat:18.9633, lng:72.9315 }, area:"10 sq km"}, status:{ isInhabited:true, isProtectedArea:true, permitRequired:"None"}, description:{ summary:"Island near Mumbai known for UNESCO cave temples.", history:"Caves date back to 5th century dedicated to Shiva.", floraAndFauna:["Tropical trees","Monkeys","Birds","Rocky hills","Shrubs"]}, culinaryHighlights:[{dishName:"Street Seafood",description:"Simple fried seafood sold near ferry jetty"}], bestTimeToVisit:{startMonth:"November",endMonth:"March",peakSeason:"January to February"}, vibeTags:["Historical","Architecture"], images:[{url:"https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",caption:"Elephanta caves"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/Elephanta_Island",govtPortal:"https://maharashtratourism.gov.in"} },

  { name:"St Mary's Island", nativeName:"St Mary's", location:{ group:"Arabian Sea", coordinates:{ lat:13.379, lng:74.673 }, area:"0.5 sq km"}, status:{ isInhabited:false, isProtectedArea:true, permitRequired:"None"}, description:{ summary:"Island known for unique basalt rock formations.", history:"Linked to Vasco da Gama landing.", floraAndFauna:["Coastal shrubs","Seabirds","Rock formations","Marine life","Shellfish"]}, culinaryHighlights:[{dishName:"Seafood Fry",description:"Typical coastal Karnataka seafood"}], bestTimeToVisit:{startMonth:"October",endMonth:"February",peakSeason:"December"}, vibeTags:["Geology","Photography"], images:[{url:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800",caption:"Basalt columns"}], externalLinks:{wikiUrl:"https://en.wikipedia.org/wiki/St._Mary's_Islands",govtPortal:"https://karnatakatourism.org"} }

];

module.exports = islands;