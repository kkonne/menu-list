const drinks_data = [
  {
    id: 0,
    slug: "warm-drinks",
    title: "Topli napitci",
    subtitle: "Kave, čajevi i ostale dobrote iz naše kuhinje",
    image_path: "https://cdn-icons-png.flaticon.com/512/766/766044.png",
    drink_list: [
      {
        id: 374,
        name: "Espresso",
        price: "1,50",
      },
      {
        id: 671,
        name: "Machiatto",
        price: "2,00",
      },
      {
        id: 221,
        name: "Capuccino",
        price: "2,00",
      },
      {
        id: 174,
        name: "Velika kava",
        price: "2,50",
      },
      {
        id: 177,
        name: "Nes Čokolada",
        price: "2,00",
      },
      {
        id: 178,
        name: "Nes Vanilija",
        price: "2,00",
      },
      {
        id: 203,
        name: "Čaj",
        price: "1,50",
      },
      {
        id: 208,
        name: "Kakao",
        price: "3,00",
      },
      {
        id: 209,
        name: "Topla čokolada",
        price: "3,50",
      },
    ],
  },
  {
    id: 1,
    slug: "sweets",
    title: "Slastičarna",
    subtitle: "Tu smo da Vam zasladimo dan",
    image_path: "https://cdn-icons-png.flaticon.com/512/766/766044.png",
  },
  {
    id: 2,
    slug: "drinks",
    title: "Osvježavajuća pića",
    subtitle: "Osvježite se nakon napornog dana",
    image_path: "https://cdn-icons-png.flaticon.com/512/766/766044.png",
  },
  {
    id: 3,
    slug: "beer",
    title: "Pivo",
    subtitle: "Svijetlo, tamno, za druženje, za utakmice. Pivo može uvijek",
    image_path: "https://cdn-icons-png.flaticon.com/512/766/766044.png",
  },
  {
    id: 4,
    slug: "alcohol",
    title: "Alkoholna pića",
    subtitle: "Za dobar početak svakog izlaska",
    image_path: "https://cdn-icons-png.flaticon.com/512/766/766044.png",
  },
  {
    id: 5,
    slug: "wine",
    title: "Vino",
    subtitle: "Za osobe s ukusom",
    image_path: "https://cdn-icons-png.flaticon.com/512/766/766044.png",
  },
];

const createNavAnchor = (section) => {
  const anchorLink = document.createElement("a");
  anchorLink.href = `#${section.slug}`;
  anchorLink.className = "nav-icon";

  const sectionImage = document.createElement("img");
  sectionImage.src = section.image_path;
  sectionImage.className = "img";

  const sectionTitle = document.createElement("span");
  sectionTitle.textContent = section.title;
  sectionTitle.className = "title";

  anchorLink.appendChild(sectionImage);
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

  if (!section.drink_list?.length) return sectionDiv;

  const drinksListDiv = document.createElement("div");
  drinksListDiv.className = "section-list";

  section.drink_list.forEach((drink) => {
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

mapDrinks(drinks_data);
