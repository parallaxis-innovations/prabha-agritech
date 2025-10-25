export interface Project {
  id: string;
  location: string;
  state: string;
  focusAreas: string[];
  description: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "banwal",
    location: "Banwal, Ajmer",
    state: "Rajasthan",
    focusAreas: ["Mushroom", "Honey", "Leafy Greens", "Solar Drying", "Nursery"],
    description: [
      "This site is being developed as PRABHA's integrated model farm and demonstration center for Rajasthan.",
    ],
    highlights: [
      "A fully operational Oyster Mushroom cultivation unit with a total capacity of 2,000 bags per cycle",
      "20 active honeybee boxes under the Prabha Hive vertical producing natural, unprocessed honey",
      "Ongoing leafy greens cultivation (spinach, lettuce, and coriander) under open-field sustainable practices",
      "A solar-powered dehydrator under development for drying onions and tomatoes for value-added products",
      "A nursery and training hub is under construction to support sapling and seedling distribution for local farmers"
    ]
  },
  {
    id: "haldwani",
    location: "Haldwani",
    state: "Uttarakhand",
    focusAreas: ["Innovation", "Space Utilization", "Value Addition"],
    description: [
      "The project demonstrates PRABHA's vision of climate-smart, dual-purpose agriculture — energy + food in the same space.",
      "This site acts as a testing and demonstration ground for sustainable agritech innovations in hilly regions."
    ],
    highlights: [
      "An experimental model for Oyster Mushroom cultivation under solar panels — optimizing unused shade space",
      "Current production capacity: 200 bags, scalable up to 2,000 bags per cycle",
      "Ongoing development of value-added mushroom products, including Mushroom Namkeen and Pickles/Aachar"
    ]
  },
  {
    id: "bhilwara",
    location: "Bhilwara",
    state: "Rajasthan",
    focusAreas: ["Nursery", "Training", "Protected Cultivation"],
    description: [
      "This center will become the main training and learning hub for PRABHA Foundation's programs in southern Rajasthan."
    ],
    highlights: [
      "Establishing a Nursery and Farmer Training Center under Prabha Learn",
      "Setting up an NVPH (Naturally Ventilated Polyhouse) for Cucumber and Bell Pepper cultivation",
      "The unit will also act as a demonstration site for polyhouse technology and micro-irrigation systems"
    ]
  },
  {
    id: "lucknow",
    location: "Lucknow",
    state: "Uttar Pradesh",
    focusAreas: ["Collective Development", "FPO Formation"],
    description: [
      "This FPO will serve as the foundation for PRABHA's farmer network in north India."
    ],
    highlights: [
      "Formation of an FPO (Farmer Producer Organization) for Oyster Mushroom farmers under Prabha FPO",
      "Aimed at collective aggregation, brand building, and direct market access for small mushroom growers"
    ]
  },
  {
    id: "ajmer",
    location: "Ajmer",
    state: "Rajasthan",
    focusAreas: ["Research", "Innovation", "Urban Agriculture"],
    description: [
      "This unit operates under PRABHA R&D — linking academic research with on-ground experimentation."
    ],
    highlights: [
      "Setting up a Home Hydroponic testing unit for domestic and small-scale farming applications",
      "Establishing an R&D and Innovation Lab for testing nutrient solutions, automation systems, and farm data monitoring"
    ]
  }
];
