import tokenConfig from "./tokenConfig.js";
import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderStory } from "./components/story.js";
import { renderHowToBuy } from "./components/howToBuy.js";
import { renderChart } from "./components/chart.js";
import { renderCta } from "./components/cta.js";
import { renderFooter } from "./components/footer.js";
import { renderStickyBar } from "./components/stickyBar.js";

function applyDocumentMeta() {
  document.title = `${tokenConfig.name} ($${tokenConfig.ticker})`;

  const icon = document.querySelector('link[rel="icon"]');
  if (icon && tokenConfig.logo) {
    icon.href = tokenConfig.logo;
  }

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", tokenConfig.description);
  }
}

function enableSmoothAnchors() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const app = document.getElementById("app");

applyDocumentMeta();
app.append(
  renderHeader(),
  renderHero(),
  renderStory(),
  renderHowToBuy(),
  renderChart(),
  renderCta(),
  renderFooter(),
  renderStickyBar()
);
enableSmoothAnchors();
