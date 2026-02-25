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
    id: "golf-tournament-2025",
    title: "Annual FOB Golf Tournament",
    date: "2025-09-13",
    dateDisplay: "September 13, 2025",
    location: "Bellevue Golf Club, Melrose, MA",
    description:
      "Join us for our flagship annual golf tournament benefiting Dana-Farber Cancer Institute. A day of golf, camaraderie, and community impact. All skill levels welcome.",
    type: "golf",
    registrationOpen: false,
  },
  {
    id: "fall-social-2025",
    title: "Fall Community Social",
    date: "2025-10-18",
    dateDisplay: "October 18, 2025",
    location: "Bellevue Golf Club, Melrose, MA",
    description:
      "An evening of community connection, live music, and celebration of our charitable achievements. Food, drinks, and great company guaranteed.",
    type: "social",
    registrationOpen: false,
  },
];
