export interface City {
  slug: string;
  name: string;
  region: string;
  description: string;
}

// Greater Toronto Area cities — expand this list later
export const cities: City[] = [
  { slug: "toronto", name: "Toronto", region: "Toronto", description: "Serving the heart of the GTA with premium metalwork solutions." },
  { slug: "mississauga", name: "Mississauga", region: "Peel Region", description: "Custom metal fabrication for Mississauga homes and businesses." },
  { slug: "brampton", name: "Brampton", region: "Peel Region", description: "Expert welding and fabrication services in Brampton." },
  { slug: "vaughan", name: "Vaughan", region: "York Region", description: "Serving Vaughan with high-quality security gates and enclosures." },
  { slug: "markham", name: "Markham", region: "York Region", description: "Custom metalwork for residential and commercial Markham properties." },
  { slug: "richmond-hill", name: "Richmond Hill", region: "York Region", description: "Premium metal fabrication in Richmond Hill." },
  { slug: "oakville", name: "Oakville", region: "Halton Region", description: "Elegant ornamental metalwork for Oakville properties." },
  { slug: "burlington", name: "Burlington", region: "Halton Region", description: "Trusted metal fabrication and welding services in Burlington." },
  { slug: "hamilton", name: "Hamilton", region: "Hamilton", description: "Industrial and residential metalwork solutions in Hamilton." },
  { slug: "oshawa", name: "Oshawa", region: "Durham Region", description: "Reliable metal fabrication for Oshawa and Durham Region." },
  { slug: "pickering", name: "Pickering", region: "Durham Region", description: "Custom security gates and metal structures in Pickering." },
  { slug: "ajax", name: "Ajax", region: "Durham Region", description: "Quality metalwork for Ajax homes and businesses." },
  { slug: "whitby", name: "Whitby", region: "Durham Region", description: "Expert welding and custom fabrication in Whitby." },
  { slug: "newmarket", name: "Newmarket", region: "York Region", description: "Serving Newmarket with durable metal products and installations." },
  { slug: "aurora", name: "Aurora", region: "York Region", description: "Custom metal fabrication and ornamental work in Aurora." },
  { slug: "milton", name: "Milton", region: "Halton Region", description: "Growing with Milton — metal fabrication you can count on." },
  { slug: "caledon", name: "Caledon", region: "Peel Region", description: "Rural and residential metalwork for the Caledon community." },
  { slug: "king-city", name: "King City", region: "York Region", description: "Premium estate gates and metalwork in King City." },
  { slug: "stouffville", name: "Stouffville", region: "York Region", description: "Custom metal fabrication for Stouffville and area." },
  { slug: "scarborough", name: "Scarborough", region: "Toronto", description: "Reliable welding and metal services in Scarborough." },
  { slug: "etobicoke", name: "Etobicoke", region: "Toronto", description: "Custom metalwork for Etobicoke residential and commercial properties." },
  { slug: "north-york", name: "North York", region: "Toronto", description: "Expert metal fabrication in North York." },
  { slug: "east-york", name: "East York", region: "Toronto", description: "Quality metal products and installations in East York." },
  { slug: "york", name: "York", region: "Toronto", description: "Trusted metalwork services in York." },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Generate all service×city slug combos */
export function getServiceCitySlugs(serviceSlugs: string[]): string[] {
  const slugs: string[] = [];
  for (const service of serviceSlugs) {
    for (const city of cities) {
      slugs.push(`${service}-in-${city.slug}`);
    }
  }
  return slugs;
}
