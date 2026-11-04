export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "Atefia",
    name: "Atefia",
    logo: "/atefia.webp",
    rating: 10,
    bonus: "200% up to $1,800 + 250 FS",
    url: "https://go.driveaffiliates.com/visit/?bta=36349&nci=5480&utm_campaign=Atefia-CA01DD&afp=",
    isMobile: false,
    votes: 1340,
  },
  

  {
    id: "Spinfin",
    name: "Spinfin",
    logo: "/spinfin.webp",
    rating: 9.8,
    bonus: "350% up to $15,000 + 500 FS",
    url: "https://go.driveaffiliates.com/visit/?bta=36349&nci=5473&utm_campaign=Spinfin-CA01DD&afp=",
    isMobile: false,
    votes: 1105,
  },

  {
    id: "HugoCasino",
    name: "HugoCasino",
    logo: "/hugo.png",
    rating: 9.5,
    bonus: "225% up to $5,180 + 275 FS",
    url: "https://hugoredirect.com/d0cx5vwie?subid=HugoCasino-CA01DD&visit_id=",
    isMobile: false,
    votes: 1340,
  },
  
  
];
