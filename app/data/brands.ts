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
    id: "bananzia",
    name: "Bananzia",
    logo: "/logos/bananzia.svg",
    rating: 10,
    bonus: "Casino Welcome Bonus 300% up to £3000 + 300 FS!",
    url: "https://go.drctvoodoo.com/click?pid=6&offer_id=12&sub2=Bananzia-GA02&sub1=",
    isMobile: true,
    votes: 1340,
  },
  

  {
    id: "spinpolo",
    name: "SpinPolo",
    logo: "/logos/spinpolo.webp",
    rating: 9.8,
    bonus: "777% Up To £7777 + 385FS + 300k Chips",
    url: "https://direct.reradirectbox.com/click?pid=75&offer_id=857&l=1778754174&sub2=SpinPolo-GA02&sub1=",
    isMobile: true,
    votes: 1105,
  },

  {
    id: "daytonaspin",
    name: "DaytonaSpin",
    logo: "/logos/daytonaspin.svg",
    rating: 9.5,
    bonus: "255% Up To 4500 £ + 255 FS",
    url: "https://direct.reradirectbox.com/click?pid=75&offer_id=345&l=1774277506&sub2=DaytonaSpin-GA02&sub1=",
    isMobile: true,
    votes: 1340,
  },
  
  {
    id: "grosvenor-casinos",
    name: "Grosvenor",
    logo: "/logos/grosvenor.png",
    rating: 10.0,
    bonus: "Play with £40 when you deposit £20",
    url: "https://www.grosvenorcasinos.com/?SUB_ID=NR_79673fd31e5e41a9b31d6c394ea4d&var1=KAR92895826&AFF_ID=10008008011&pid=2340004&utm_source=10008008011&utm_medium=affiliate&utm_channel=affiliate&clickid=",
    isMobile: false,
    votes: 4089,
  }
];
