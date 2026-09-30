let toastEl;
let hideTimer;

export function showToast(message) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    toastEl.setAttribute("role", "status");
    document.body.appendChild(toastEl);
  }

  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    toastEl.classList.remove("is-visible");
  }, 1800);
}
