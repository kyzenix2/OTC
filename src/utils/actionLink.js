import { isLinkReady } from "./links.js";
import { showToast } from "./toast.js";

export function createActionLink({
  href,
  label,
  className = "btn",
  comingSoonText = "Coming soon",
}) {
  const link = document.createElement("a");
  link.className = className;
  link.textContent = label;

  if (isLinkReady(href)) {
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#";
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(comingSoonText);
    });
  }

  return link;
}

export function createIconLink({ href, label, className = "icon-link" }) {
  return createActionLink({ href, label, className });
}
