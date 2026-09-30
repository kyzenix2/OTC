import tokenConfig from "../tokenConfig.js";
import { createActionLink } from "../utils/actionLink.js";
import { truncateAddress } from "../utils/links.js";

function steps() {
  return [
    {
      num: "01",
      title: "GET A WALLET",
      text: `Install a compatible ${tokenConfig.chain} wallet such as MetaMask or Rabby. Write down your seed phrase and keep it offline.`,
    },
    {
      num: "02",
      title: "GET FUNDS",
      text: `Fund the wallet with ${tokenConfig.chain} native gas so you can pay for the swap.`,
    },
    {
      num: "03",
      title: "OPEN DEX / UNISWAP",
      text: "Open the buy link and connect your wallet. Double-check you are on the official site.",
    },
    {
      num: "04",
      title: "SWAP",
      text: `Paste and verify the contract address before you swap. The ${tokenConfig.name} CA is ${truncateAddress(tokenConfig.contractAddress)}.`,
    },
  ];
}

export function renderHowToBuy() {
  const section = document.createElement("section");
  section.className = "section how-to-buy";
  section.id = "how-to-buy";

  const inner = document.createElement("div");
  inner.className = "section-inner fade-in";

  const intro = document.createElement("div");
  intro.className = "section-intro";
  intro.innerHTML = `
    <p class="kicker">How to buy</p>
    <h2>Four steps to $${tokenConfig.ticker}</h2>
    <p class="lede">Always verify the contract address before swapping. Never buy from a random link in chat.</p>
  `;

  const grid = document.createElement("div");
  grid.className = "step-grid";

  steps().forEach((step) => {
    const article = document.createElement("article");
    article.className = "step-card";
    article.innerHTML = `
      <span class="card-num">${step.num}</span>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    `;
    grid.appendChild(article);
  });

  const actions = document.createElement("div");
  actions.className = "action-row";
  actions.appendChild(
    createActionLink({
      href: tokenConfig.links.buy,
      label: "BUY NOW",
      className: "btn btn-primary",
    })
  );

  inner.append(intro, grid, actions);
  section.appendChild(inner);
  return section;
}
