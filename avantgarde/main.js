const drinks_data = [
  {
    id: "0",
    slug: "alcohol",
    title: "Alkoholna pića",
    subtitle: "Za dobar početak svakog izlaska",
    icon_path: "https://cdn-icons-png.flaticon.com/512/766/766044.png",
    image_path: "./../assets/alcohol.webp",
    items_list: [
      {
        id: "0033",
        name: "Jack Daniels",
        price: "4,50",
      },
      {
        id: "0034",
        name: "Johnnie Walker",
        price: "3,50",
      },
      {
        id: "0035",
        name: "Chivas",
        price: "5,50",
      },
      {
        id: "0036",
        name: "Ballantines",
        price: "2,50",
      },
      {
        id: "0038",
        name: "Stock",
        price: "2,50",
      },
      {
        id: "0039",
        name: "Jagermeister",
        price: "3,50",
      },
      {
        id: "0040",
        name: "Pelinkovac",
        price: "2,50",
      },
      {
        id: "0041",
        name: "Baileys",
        price: "3,00",
      },
      {
        id: "0042",
        name: "Lavov",
        price: "2,50",
      },
      {
        id: "0043",
        name: "Višnja",
        price: "2,50",
      },
      {
        id: "0044",
        name: "Orahovac",
        price: "2,50",
      },
      {
        id: "0045",
        name: "Underberg",
        price: "3,50",
      },
      {
        id: "0046",
        name: "Kruškovac",
        price: "2,50",
      },
      {
        id: "0047",
        name: "Gin",
        price: "3,00",
      },
      {
        id: "0048",
        name: "Martini",
        price: "4,00",
      },
      {
        id: "0049",
        name: "Asbach",
        price: "3,00",
      },
      {
        id: "0050",
        name: "Malibu",
        price: "3,00",
      },
      {
        id: "0052",
        name: "Vodka",
        price: "2,50",
      },
      {
        id: "0053",
        name: "Dalmatino",
        price: "3,00",
      },
      {
        id: "0054",
        name: "Martel",
        price: "5,00",
      },
      {
        id: "0056",
        name: "Rum",
        price: "2,00",
      },
      {
        id: "0057",
        name: "Konjak",
        price: "2,50",
      },
      {
        id: "0058",
        name: "Tequila",
        price: "4,00",
      },
      {
        id: "0059",
        name: "Sherry",
        price: "2,00",
      },
      {
        id: "0060",
        name: "Lozovača",
        price: "2,00",
      },
      {
        id: "0061",
        name: "Viljamovka",
        price: "4,50",
      },
      {
        id: "0062",
        name: "Travarica",
        price: "2,00",
      },
      {
        id: "0063",
        name: "Vlahov",
        price: "2,50",
      },
      {
        id: "0093",
        name: "Crna Vodka",
        price: "3,00",
      },
      {
        id: "0104",
        name: "Belvedere Vodka",
        price: "5,00",
      },
      {
        id: "167",
        name: "Smirnoff",
        price: "3,00",
      },
      {
        id: "179",
        name: "Needle Gin",
        price: "4,00",
      },
      {
        id: "191",
        name: "Jameson",
        price: "3,50",
      },
      {
        id: "219",
        name: "Sax Pink Gin",
        price: "2,00",
      },
      {
        id: "228",
        name: "Tanqueray Gin",
        price: "3,50",
      },
      {
        id: "234",
        name: "Rakija Šljiva",
        price: "2,00",
      },
      {
        id: "235",
        name: "Pelinkovac Antique",
        price: "3,50",
      },
      {
        id: "236",
        name: "Medovača",
        price: "2,50",
      },
    ],
  },

  {
    id: "1",
    slug: "drinks",
    title: "Bezalkoholna pića",
    subtitle: "Osvježite se nakon napornog dana",
    icon_path:
      "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/016/117/original/carbonated-drinks_6284235.png",
    image_path: "./../assets/soda.webp",
    items_list: [
      { id: "0013", name: "Coca-Cola 0,25l", price: "3,00" },
      { id: "0014", name: "Fanta 0,25l", price: "3,00" },
      { id: "0015", name: "Sprite 0,25l", price: "3,00" },
      { id: "0020", name: "Pipi 0,25l", price: "2,50" },
      { id: "0022", name: "Cockta 0,275l", price: "3,00" },
      { id: "0023", name: "Red Bull 0,25l", price: "4,50" },
      { id: "0025", name: "Brusnica 0,25l", price: "3,00" },
      { id: "0026", name: "Orangina 0,25l", price: "3,00" },
      { id: "0027", name: "Sensation 0,25l", price: "2,00" },
      { id: "0028", name: "Mineralna voda 0,25l", price: "2,00" },
      { id: "0031", name: "Cedevita 0,30l", price: "2,50" },
      { id: "0032", name: "Cedevita 0,50l", price: "3,50" },
      { id: "0090", name: "Mali sok 0,10l", price: "1,00" },
      { id: "0094", name: "Mineralna voda 0,1l", price: "0,50" },
      { id: "182", name: "Dvojni C 0,33l", price: "3,00" },
      { id: "183", name: "Rose lemonade 0,125l", price: "4,00" },
      { id: "184", name: "Coca-Cola Zero 0,25l", price: "3,00" },
      { id: "185", name: "Jabuka 100%", price: "2,50" },
      { id: "198", name: "Pago Jabuka 0,2l", price: "3,00" },
      { id: "199", name: "Pago Naranča 0,2l", price: "3,00" },
      { id: "200", name: "Pago Breskva 0,2l", price: "3,00" },
      { id: "201", name: "Pago Ananas 0,2l", price: "3,00" },
      { id: "202", name: "Pago Jagoda 0,2l", price: "3,00" },
      { id: "203", name: "Pago Višnja 0,2l", price: "3,00" },
      { id: "204", name: "Pago Borovnica 0,2l", price: "3,00" },
      { id: "205", name: "Schweppes Tangarine 0,25l", price: "3,00" },
      { id: "206", name: "Schweppes Tonic 0,25l", price: "3,00" },
      { id: "207", name: "Schweppes Bitter Lemon 0,25l", price: "3,00" },
      { id: "208", name: "Jana Šumsko Voće 0,33l", price: "3,00" },
      { id: "209", name: "Jana Breskva 0,33l", price: "3,00" },
      { id: "210", name: "Jana Limun 0.33l", price: "3,00" },
      { id: "211", name: "Jana Naranča 0,33l", price: "3,00" },
      { id: "212", name: "Pago Crni Ribiz 0,2l", price: "3,00" },
      { id: "213", name: "Pago Multivitamin 0,2l", price: "3,00" },
      { id: "215", name: "Leda voda 0,25l", price: "2,00" },
      { id: "220", name: "Sanpellegrino Naranča 0,2l", price: "3,00" },
      { id: "221", name: "Sanpellegrino Crvena Naranča 0,2l", price: "3,00" },
      { id: "222", name: "Sanpellegrino Limun 0,2l", price: "3,00" },
      { id: "226", name: "Sanpellegrino Tonic 0,2l", price: "3,00" },
      { id: "233", name: "Spezi 0,33l", price: "2,50" },
      { id: "239", name: "Fast Energy 0,25l", price: "2,50" },
    ],
  },

  {
    id: "2",
    slug: "addons",
    title: "Dodaci",
    subtitle: "Sve ostale sitnice koje bi mogli poželjeti",
    icon_path: "https://cdn-icons-png.flaticon.com/512/66/66451.png",
    image_path: "./../assets/cake.webp",
    items_list: [
      { id: "0011", name: "Šlag dodatak", price: "0,50" },
      { id: "0064", name: "Sok dodatak", price: "0,50" },
      { id: "0119", name: "Kolač torta", price: "4,00" },
      { id: "218", name: "Monoporcija", price: "4,00" },
      { id: "238", name: "Kolač mali", price: "3,50" },
    ],
  },

  {
    id: "3",
    slug: "summer",
    title: "Ljetna ponuda",
    subtitle: "Dokazana pomoć u borbi s vrućinom!",
    icon_path:
      "https://iconarchive.com/download/i96349/iconsmind/outline/Ice-Cream.ico",
    image_path: "./../assets/ice-cream.webp",
    items_list: [
      { id: "0087", name: "Sladoled kugla", price: "2,00" },
      { id: "0088", name: "Limunada 0,30l", price: "3,50" },
      { id: "0089", name: "Cijeđena naranča", price: "3,50" },
      { id: "0100", name: "Sladoledni kup", price: "4,50" },
      { id: "0101", name: "Plazma štapić", price: "2,00" },
      { id: "0102", name: "Prirodni sok mix 0,30l", price: "4,00" },
      { id: "190", name: "Plazma Sandwich", price: "2,50" },
      { id: "223", name: "King Čokolada čaša", price: "3,00" },
      { id: "224", name: "King Vanilija čaša", price: "3,00" },
      { id: "231", name: "Plazma čaša", price: "2,50" },
      { id: "232", name: "Lino Lada", price: "2,50" },
    ],
  },

  {
    id: "4",
    slug: "beer",
    title: "Pivo",
    subtitle:
      "Svijetlo, tamno, za druženje, za utakmice. Za pivo uvijek postoji prigoda!",
    icon_path: "https://cdn-icons-png.flaticon.com/512/761/761856.png",
    image_path: "./../assets/beer.webp",
    items_list: [
      { id: "0078", name: "Heineken 0,33l", price: "3,50" },
      { id: "0079", name: "Ožujsko 0,33l", price: "3,00" },
      { id: "0080", name: "Karlovačko 0,33l", price: "3,00" },
      { id: "0081", name: "Staropramen 0,33l", price: "3,00" },
      { id: "0082", name: "Paulaner svjetli 0,33l", price: "4,00" },
      { id: "0083", name: "Paulaner pšenični", price: "4,00" },
      { id: "0084", name: "Somersby 0,33l", price: "3,50" },
      { id: "0085", name: "Točeno pivo 0,33l", price: "2,50" },
      { id: "0086", name: "Točeno pivo 0,5l", price: "3,50" },
      { id: "0117", name: "Becks 0,33l", price: "2,50" },
      { id: "0118", name: "Stella Artois 0,33l", price: "3,50" },
      { id: "168", name: "Staropramen Tamni 0,33l", price: "3,00" },
      { id: "177", name: "Bavaria bezalkoholno 0,33l", price: "2,50" },
      { id: "178", name: "Ožujsko limun 0,33l", price: "2,50" },
      { id: "216", name: "Heineken točeno 0,25l", price: "3,50" },
      { id: "240", name: "Karlovačko Radler 0,33l", price: "3,00" },
    ],
  },

  {
    id: "5",
    slug: "warm-drinks",
    title: "Topli napitci",
    subtitle: "Kave, čajevi i ostale dobrote iz naše kuhinje",
    icon_path: "https://cdn-icons-png.flaticon.com/512/633/633652.png",
    image_path: "./../assets/coffee.webp",
    items_list: [
      { id: "0001", name: "Kava s mlijekom mala", price: "2,00" },
      { id: "0002", name: "Kava s mlijekom velika", price: "2,50" },
      { id: "0003", name: "Cappuccino", price: "2,00" },
      { id: "0004", name: "Nesscafe Classic", price: "2,00" },
      { id: "0005", name: "Nesscafe 3in1", price: "2,00" },
      { id: "0006", name: "Nesscafe Vanilija", price: "2,00" },
      { id: "0007", name: "Nesscafe Čokolada", price: "2,00" },
      { id: "0008", name: "Gusta čokolada", price: "3,00" },
      { id: "0009", name: "Topla čokolada", price: "2,00" },
      { id: "0010", name: "Čaj", price: "2,00" },
      { id: "181", name: "Latte macchiato", price: "3,00" },
      { id: "241", name: "Kava Espresso", price: "1,50" },
    ],
  },

  {
    id: "6",
    slug: "wine",
    title: "Vino",
    subtitle: "Za osobe s ukusom",
    icon_path: "https://cdn-icons-png.flaticon.com/512/1942/1942436.png",
    image_path: "./../assets/wine.webp",
    items_list: [
      { id: "0066", name: "Blatina 0,10l", price: "1,50" },
      { id: "0067", name: "Blatina 0,20l", price: "2,50" },
      { id: "0068", name: "Žilavka 0,10l", price: "1,50" },
      { id: "0069", name: "Žilavka 0,20l", price: "2,50" },
      { id: "0070", name: "Graševina 0,10l", price: "1,50" },
      { id: "0071", name: "Graševina 0,20l", price: "2,50" },
      { id: "0072", name: "Domaće bijelo 0,20l", price: "2,00" },
      { id: "0073", name: "Domaće crno 0,20l", price: "2,00" },
      { id: "0074", name: "Gemišt 0,25l", price: "2,50" },
      { id: "0075", name: "Bambus 0,25l", price: "2,50" },
      { id: "0076", name: "Pinot 0,25l", price: "4,00" },
      { id: "0077", name: "Vino boca 1L", price: "15,00" },
      { id: "169", name: "Nuić blatina 0,75l", price: "23,00" },
      { id: "170", name: "Nuić žilavka 0,75l", price: "23,00" },
      { id: "171", name: "Keža blatina 0,75l", price: "23,00" },
      { id: "172", name: "Keža žilavka 0,75l", price: "23,00" },
      { id: "173", name: "Zadro blatina 0,75l", price: "23,00" },
      { id: "174", name: "Zadro žilavka 0,75l", price: "23,00" },
      { id: "175", name: "Zadro merlot", price: "25,00" },
      { id: "176", name: "Zadro chardonnay", price: "25,00" },
      { id: "229", name: "Domaće bijelo 0,10l", price: "1,50" },
      { id: "230", name: "Domaće crno 0,20l", price: "1,50" },
    ],
  },
];

const createNavAnchor = (section) => {
  const anchorLink = document.createElement("a");
  anchorLink.href = `#${section.slug}`;
  anchorLink.className = "nav-icon";
  anchorLink.style.backgroundImage = `linear-gradient(to top, #191919, transparent), 
    url('${section.image_path}')`;

  const sectionTitle = document.createElement("span");
  sectionTitle.textContent = section.title;
  sectionTitle.className = "title";

  anchorLink.appendChild(sectionTitle);
  return anchorLink;
};

const createSectionDiv = (section) => {
  const sectionDiv = document.createElement("section");
  sectionDiv.className = "drink-section";
  sectionDiv.id = section.slug;

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = section.title;
  sectionTitle.className = "section-title";

  const sectionSubtitle = document.createElement("h5");
  sectionSubtitle.textContent = section.subtitle;
  sectionSubtitle.className = "section-subtitle";

  sectionDiv.appendChild(sectionTitle);
  sectionDiv.appendChild(sectionSubtitle);

  if (!section.items_list?.length) return sectionDiv;

  const drinksListDiv = document.createElement("div");
  drinksListDiv.className = "section-list";

  section.items_list.forEach((drink) => {
    const drinkDiv = document.createElement("div");
    drinkDiv.className = "item";

    const drinkName = document.createElement("span");
    drinkName.textContent = drink.name;
    drinkName.className = "title";

    const drinkPrice = document.createElement("span");
    drinkPrice.textContent = drink.price;
    drinkPrice.className = "price";

    drinkDiv.appendChild(drinkName);
    drinkDiv.appendChild(drinkPrice);
    drinksListDiv.appendChild(drinkDiv);
  });

  sectionDiv.appendChild(drinksListDiv);
  return sectionDiv;
};

const mapDrinks = (sectionsData) => {
  const navMenu = document.getElementById("navigation");
  const sectionsContainer = document.getElementById("sections");

  sectionsData.forEach((section) => {
    const anchorLink = createNavAnchor(section);
    const sectionDiv = createSectionDiv(section);
    navMenu.appendChild(anchorLink);
    sectionsContainer.appendChild(sectionDiv);
  });
};

const handleScroll = () => {
  const scrollTopButton = document.querySelector(".scroll-top");

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  document.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      if (scrollTopButton.classList.contains("visible")) return;
      scrollTopButton.classList.add("visible");
    } else {
      if (!scrollTopButton.classList.contains("visible")) return;
      scrollTopButton.classList.remove("visible");
    }
  });
};

const onInit = () => {
  mapDrinks(drinks_data);
  handleScroll();
};

onInit();
