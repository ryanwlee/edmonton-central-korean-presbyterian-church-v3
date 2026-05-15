export const JUBO_PDF_URL = import.meta.env.VITE_JUBO_PDF_URL || "https://edmontoncc.net/jubofile/jubo.pdf";
export const UPLOAD_API_URL = import.meta.env.VITE_UPLOAD_API_URL || "/server/apis/jubo.php";

export const EXTERNAL_LINKS = {
  spotify: "https://open.spotify.com/show/2Lkolq2OcdFktuWOxbY20d?si=YHcjVU_4QhmF9JKjB1XYyg",
  youtube: "https://www.youtube.com/channel/UCzz-Hi9PzGYiQE0zEOn8idg/live",
  graceChurch: "https://www.grace-central.com/",
  googleCalendar: "https://calendar.google.com/calendar/embed?src=edmontonccreservation%40gmail.com&ctz=America%2FEdmonton&mode=MONTH&showCalendars=0&showTitle=0",
} as const;
