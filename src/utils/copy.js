import { showToast } from "./toast.js";

export async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    showToast("COPIED!");
    return true;
  } catch {
    const input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand("copy");
      showToast("COPIED!");
      return true;
    } catch {
      showToast("Copy failed");
      return false;
    } finally {
      document.body.removeChild(input);
    }
  }
}

export function createCopyButton({
  value,
  label = "COPY CA",
  className = "btn btn-ghost",
}) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;

  button.addEventListener("click", async () => {
    const copied = await copyText(value);
    if (!copied) return;
    const original = button.textContent;
    button.textContent = "COPIED!";
    button.classList.add("is-copied");
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-copied");
    }, 1600);
  });

  return button;
}
