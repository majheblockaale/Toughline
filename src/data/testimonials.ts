export interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "James R.",
    location: "Toronto, ON",
    text: "Toughline built a custom driveway gate for us and the quality is outstanding. Solid steel, beautiful design, and the automated opener works flawlessly. Highly recommend!",
    service: "Security Gates",
    rating: 5,
  },
  {
    name: "Sarah M.",
    location: "Mississauga, ON",
    text: "We needed window well covers for our new basement windows. Toughline measured, fabricated, and installed them within two weeks. Perfect fit and great quality.",
    service: "Window Well Covers",
    rating: 5,
  },
  {
    name: "David P.",
    location: "Vaughan, ON",
    text: "Had a custom metal shed built for my workshop. The steel framing is rock solid and the build quality exceeded my expectations. These guys know their craft.",
    service: "Metal Sheds",
    rating: 5,
  },
  {
    name: "Michelle L.",
    location: "Oakville, ON",
    text: "Beautiful ornamental railing for our front porch. The design was exactly what we envisioned and the installation was clean and professional.",
    service: "Ornamental Metalwork",
    rating: 5,
  },
  {
    name: "Robert K.",
    location: "Brampton, ON",
    text: "Toughline fabricated custom enclosures for our commercial HVAC units. Professional, on-time, and the finished product looks great. Will use again.",
    service: "Metal Enclosures",
    rating: 5,
  },
  {
    name: "Priya S.",
    location: "Markham, ON",
    text: "Emergency welding repair on our warehouse racking. They came out the next morning and had everything fixed by afternoon. Saved us from a major downtime situation.",
    service: "Welding & Fabrication",
    rating: 5,
  },
];
