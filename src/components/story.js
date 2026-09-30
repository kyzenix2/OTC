import tokenConfig from "../tokenConfig.js";

const cards = [
  {
    num: "01",
    title: "THE MEME",
    text: "A face the internet already understands. Simple, loud, and impossible to ignore.",
  },
  {
    num: "02",
    title: "THE STORY",
    text: "Born for the timeline. Passed around, remixed, and claimed by the crowd.",
  },
  {
    num: "03",
    title: "THE COMMUNITY",
    text: "Holders, posters, and late-night degenerates building the next chapter together.",
  },
];

export function renderStory() {
  const section = document.createElement("section");
  section.className = "section story";
  section.id = "story";

  const inner = document.createElement("div");
  inner.className = "section-inner fade-in";

  const intro = document.createElement("div");
  intro.className = "section-intro";
  intro.innerHTML = `
    <p class="kicker">$${tokenConfig.ticker}</p>
    <h2>${tokenConfig.name}</h2>
    <p class="lede">${tokenConfig.description}</p>
  `;

  const grid = document.createElement("div");
  grid.className = "card-grid";

  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "story-card";
    article.innerHTML = `
      <span class="card-num">${card.num}</span>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    `;
    grid.appendChild(article);
  });

  inner.append(intro, grid);
  section.appendChild(inner);
  return section;
}
