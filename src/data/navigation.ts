export interface NavItem {
  name: string;
  to?: string;
  href?: string;
  external?: boolean;
  img?: string | null;
}

export const navItems: NavItem[] = [
  { name: "소개", to: "intro" },
  { name: "예배", to: "service" },
  { name: "교육부", to: "education" },
  { name: "사역과 섬김", to: "serving" },
  { name: "주보", to: "jubo" },
  { name: "시설 예약", to: "reserve" },
  {
    name: "주일설교 오디오",
    href: "https://open.spotify.com/show/2Lkolq2OcdFktuWOxbY20d?si=YHcjVU_4QhmF9JKjB1XYyg",
    external: true,
  },
];
