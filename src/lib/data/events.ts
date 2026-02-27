export interface Event {
  id: string;
  title: string;
  date: string;
  dateDisplay: string;
  location: string;
  description: string;
  type: "golf" | "social" | "fundraiser";
  registrationOpen: boolean;
}

export const upcomingEvents: Event[] = [
  {
    id: "golf-tournament-2026",
    title: "Annual FOB Golf Tournament",
    date: "2026-09-21",
    dateDisplay: "September 21, 2026",
    location: "Bellevue Golf Club, 320 Porter St, Melrose, MA",
    description:
      "Join us for our flagship annual golf tournament benefiting Dana-Farber Cancer Institute. A day of golf, camaraderie, and community impact. All skill levels welcome.",
    type: "golf",
    registrationOpen: false,
  },
  {
    id: "fall-social-2026",
    title: "Fall Community Social",
    date: "2026-12-31",
    dateDisplay: "TBA",
    location: "TBA",
    description:
      "An evening of community connection, live music, and celebration of our charitable achievements. Food, drinks, and great company guaranteed. Date and location to be announced.",
    type: "social",
    registrationOpen: false,
  },
];
