export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  heroImage: string;
  benefits: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "security-gates",
    name: "Security Gates",
    shortDescription:
      "Custom-built steel security gates to protect your property with style and strength.",
    description:
      "Our security gates are custom-designed and fabricated to provide maximum protection for residential and commercial properties. Built from heavy-gauge steel with precision welding, each gate is engineered for durability and aesthetic appeal. We offer swing gates, sliding gates, and driveway gates with optional automation systems.",
    features: [
      "Custom designs to match your property",
      "Heavy-gauge steel construction",
      "Powder-coated finish for weather resistance",
      "Manual and automated options",
      "Keypad, remote, and intercom integration",
      "Professional installation included",
    ],
    icon: "🔒",
    heroImage: "/images/security-gates-hero.jpg",
    benefits: [
      {
        title: "Enhanced Security",
        description:
          "Deter intruders and control access to your property with solid steel construction.",
      },
      {
        title: "Curb Appeal",
        description:
          "Custom designs that complement your architecture and increase property value.",
      },
      {
        title: "Built to Last",
        description:
          "Powder-coated heavy-gauge steel that withstands Canadian weather for decades.",
      },
    ],
  },
  {
    slug: "window-well-covers",
    name: "Window Well Covers",
    shortDescription:
      "Durable steel window well covers for safety, drainage, and protection.",
    description:
      "Protect your basement windows with our custom-fitted window well covers. Fabricated from strong steel grating or polycarbonate-topped steel frames, our covers prevent debris, animals, and unauthorized entry while maintaining proper drainage and emergency egress compliance.",
    features: [
      "Custom-measured for perfect fit",
      "Steel grating or clear-top options",
      "Supports heavy snow loads",
      "Allows natural light into basement",
      "Emergency egress compliant designs",
      "Rust-resistant powder coating",
    ],
    icon: "🪟",
    heroImage: "/images/window-well-covers-hero.jpg",
    benefits: [
      {
        title: "Safety First",
        description:
          "Prevent falls, keep children and pets safe around window wells.",
      },
      {
        title: "Weather Protection",
        description:
          "Keep leaves, snow, and water out of your window wells year-round.",
      },
      {
        title: "Code Compliant",
        description:
          "Designs that meet Ontario building code requirements for emergency egress.",
      },
    ],
  },
  {
    slug: "sheds",
    name: "Metal Sheds & Structures",
    shortDescription:
      "Custom metal sheds and outdoor structures built for strength and longevity.",
    description:
      "Our custom metal sheds are built to outlast traditional wood structures. Whether you need a backyard storage shed, a workshop, or a larger agricultural structure, we design and fabricate steel-framed buildings that resist rot, pests, and fire. Each structure is engineered for Canadian climate conditions.",
    features: [
      "Custom sizes and layouts",
      "Steel frame construction",
      "Insulation options available",
      "Roll-up and walk-through doors",
      "Ventilation and electrical provisions",
      "Concrete pad coordination",
    ],
    icon: "🏗️",
    heroImage: "/images/sheds-hero.jpg",
    benefits: [
      {
        title: "Superior Durability",
        description:
          "Steel construction outlasts wood — no rot, no termites, no warping.",
      },
      {
        title: "Custom Designed",
        description:
          "Built to your exact specifications for storage, workshop, or equipment housing.",
      },
      {
        title: "Low Maintenance",
        description:
          "Powder-coated steel requires minimal upkeep compared to wood or vinyl.",
      },
    ],
  },
  {
    slug: "enclosures",
    name: "Metal Enclosures",
    shortDescription:
      "Secure metal enclosures for HVAC, waste bins, equipment, and more.",
    description:
      "We fabricate custom metal enclosures for a wide range of applications — from HVAC equipment protection and dumpster enclosures to pool equipment housing and utility screens. Our enclosures are designed for security, ventilation, and visual appeal, meeting municipal bylaws and property standards.",
    features: [
      "HVAC and mechanical equipment enclosures",
      "Dumpster and waste bin corrals",
      "Pool equipment housing",
      "Utility meter screens",
      "Lockable access doors",
      "Bylaw-compliant designs",
    ],
    icon: "📦",
    heroImage: "/images/enclosures-hero.jpg",
    benefits: [
      {
        title: "Property Compliance",
        description:
          "Meet municipal bylaws for waste enclosures and equipment screening.",
      },
      {
        title: "Secure & Ventilated",
        description:
          "Protect equipment while ensuring proper airflow and easy maintenance access.",
      },
      {
        title: "Professional Appearance",
        description:
          "Clean, modern designs that enhance commercial and residential properties.",
      },
    ],
  },
  {
    slug: "welding-fabrication",
    name: "Welding & Fabrication",
    shortDescription:
      "Expert MIG, TIG, and stick welding for custom fabrication and repairs.",
    description:
      "Our certified welders handle projects of all sizes — from small repairs to large-scale custom fabrication. We work with steel, stainless steel, and aluminum using MIG, TIG, and stick welding processes. Whether it's structural steel, custom brackets, frames, or artistic metalwork, we deliver precision results.",
    features: [
      "MIG, TIG, and stick welding",
      "Steel, stainless steel, and aluminum",
      "Structural and architectural fabrication",
      "On-site and in-shop welding",
      "Custom brackets, frames, and mounts",
      "Repair and restoration services",
    ],
    icon: "⚡",
    heroImage: "/images/welding-fabrication-hero.jpg",
    benefits: [
      {
        title: "Certified Expertise",
        description:
          "Licensed welders with years of experience in residential and commercial projects.",
      },
      {
        title: "Versatile Capabilities",
        description:
          "From delicate TIG work on aluminum to heavy structural steel fabrication.",
      },
      {
        title: "On-Site Service",
        description:
          "Mobile welding for repairs, installations, and projects at your location.",
      },
    ],
  },
  {
    slug: "ornamental-decorative",
    name: "Ornamental & Decorative Metalwork",
    shortDescription:
      "Beautiful railings, fences, gates, and decorative ironwork custom crafted.",
    description:
      "Transform your property with our custom ornamental metalwork. From elegant stair railings and balcony balustrades to decorative fences and artistic metal features, we combine traditional craftsmanship with modern fabrication techniques to create stunning pieces that elevate any space.",
    features: [
      "Stair and balcony railings",
      "Decorative fences and panels",
      "Garden gates and arbors",
      "Wall art and sculptures",
      "Fireplace screens and mantels",
      "Custom furniture pieces",
    ],
    icon: "🎨",
    heroImage: "/images/ornamental-decorative-hero.jpg",
    benefits: [
      {
        title: "Unique Designs",
        description:
          "One-of-a-kind pieces tailored to your style and property architecture.",
      },
      {
        title: "Added Value",
        description:
          "Quality ornamental ironwork significantly increases property appeal and value.",
      },
      {
        title: "Timeless Craft",
        description:
          "Combining traditional blacksmithing artistry with modern precision techniques.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
