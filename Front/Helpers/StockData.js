//Liste des actions avec les données nécessaires (ici en dur mais à changer avec des appels API)

export default data = [
  {
    ticker: "AAPL",
    name: "Apple",
    lastPrice: 135.56,
    isUp: false,
    var24 : '-2.33%',
    description: "Apple est une entreprise américaine proposant des objets technologiques. Smarthones, tablettes ou ordinateurs, Apple s'est imposé comme une des plus grandes entreprises du secteur technoligue.",
    capitalization: 2000000000,
    logo_name: require("../Images/aapl.png"),
    per: 45.6,
    volume: 4.8,
    tags: ["Tech", "Etats-Unis", "NASDAQ"]
  },
  {
    ticker: "MSFT",
    name: "Microsoft",
    isUp: true,
    var24 : '+3.56%',
    lastPrice: 206.19,
    description: "Microsoft est une entreprise américaine du secteur technologique. Appartenant aux GAFAM, Microsoft opère des activités dans les secteur logiciel, cloud, gaming et bien d'autres...",
    capitalization: 2145685487,
    logo_name: require("../Images/msft.png"),
    per: 44.6,
    volume: 4.8,
    tags: ["Tech", "Etats-Unis", "NASDAQ"]

  },
  {
    ticker: "TSLA",
    name: "Tesla",
    isUp: false,
    var24 : '-1.12%',
    lastPrice: 415.22,
    description: "Tesla est un constructeur automobile américain proposant des véhicules haut de gamme éléctriques.",
    capitalization: 65875987,
    logo_name: require("../Images/tsla.png"),
    per: 49.8,
    volume: 4.8,
    tags: ["Automobile", "Tech", "Etats-Unis", "NASDAQ"]

  },
  {
    ticker: "MC",
    name: "LVMH",
    isUp: true,
    var24 : '+4.89%',
    lastPrice: 407.39,
    description: "LVMH est une entreprise française dans le domaine du luxe. Regroupant plusieurs marques de renom (Louis Vuitton, Dior, Givenchy...), LVMH est actuellement la société française la plus valorisée.",
    capitalization: 1545874687,
    logo_name: require("../Images/lvmh.png"),
    per: 26.57,
    volume: 4.8,
    tags: ["Luxe", "France", "CAC40"]
  },
  {
    ticker: "GLE",
    name: "Société Générale",
    isUp: true,
    var24 : '+3.88%',
    lastPrice: 12.594,
    description: "Société Générale est une grande banque française historique. Avec ses filiales françaises (Crédit du Nord, Boursorama...) et internationnales, Société Générale est une des plus grandes banques mondiale.",
    capitalization: 14548656,
    logo_name: require("../Images/gle.png"),
    per: 12.87,
    volume: 4.8,
    tags: ["Banque", "France", "CAC40"]
  },
  {
    ticker: "DB",
    name: "Deutsche Bank",
    isUp: true,
    var24 : '+3.46%',
    lastPrice: 9.39,
    description: "Deutsche Bank est la plus grande banque allemande et européenne.",
    capitalization: 145436545,
    logo_name: require("../Images/db.png"),
    per: 8.98,
    volume: 4.8,
    tags: ["Banque", "Allemagne"]
  },
  {
    ticker: "AF",
    name: "Air France KLM",
    isUp: true,
    var24 : '+1.56%',
    lastPrice: 3.287,
    description: "Air France KLM est un groupe franco-néerlandais né de la fusion entre les compagnies aériennes Air France et KLM.",
    capitalization: 18796547,
    logo_name: require("../Images/af.png"),
    per: 7.54,
    volume: 4.8,
    tags: ["Aéronautique", "France", "CAC40"]
  },
  {
    ticker: "RNO",
    name: "Renault",
    isUp: false,
    var24 : '-1.23%',
    lastPrice: 23.570,
    description: "Renault est une entreprise automobile française. Présent dans plus de cent pays, le groupe Renault comprend également les marques Nissan ou Dacia",
    capitalization: 12456589,
    logo_name: require("../Images/rno.png"),
    per: 6.25,
    volume: 4.8,
    tags: ["Automobile", "France", "CAC40"]
  },
  {
    ticker: "GOOGL",
    name: "Alphabet",
    isUp: false,
    var24 : '-0.09%',
    lastPrice: 1485.56,
    description: "Alphabet est la société mère de Google.",
    capitalization: 25689845,
    logo_name: require("../Images/googl.png"),
    per: 39.59,
    volume: 4.8,
    tags: ["Tech", "Etats-Unis", "NASDAQ"]
  },
  {
    ticker: "AMZN",
    name: "Amazon",
    isUp: true,
    var24 : '+7.27%',
    lastPrice: 3189.28,
    description: "Amazon est une entreprise américaine de commerce en ligne, basée à Seattle.",
    capitalization: 5456585486,
    logo_name: require("../Images/amzn.png"),
    per: 58.41,
    volume: 4.8,
    tags: ["Etats-Unis", "NASDAQ"]
  },
  {
    ticker: "FB",
    name: "Facebook",
    isUp: false,
    var24 : '-10.89%',
    lastPrice: 263.24,
    description: "Facebook est une société américaine. L'entreprise comprend entre autres les réseaux sociaux Facebook, Instagram et Whatsapp",
    capitalization: 24565985,
    logo_name: require("../Images/fb.png"),
    per: 43.75,
    volume: 4.8,
    tags: ["Tech", "Etats-Unis", "NASDAQ"]
  }
]
