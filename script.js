// 1. Button actions (Apply, Save, Remove) using one click listener
document.addEventListener("click", (e) => {
  const b = e.target.closest("button[data-action]");
  if (!b) return;
  if (b.dataset.action === "apply") {
    b.textContent = "Applied ✓";
    b.disabled = true;
  }
  if (b.dataset.action === "save") {
    b.classList.toggle("saved");
    b.textContent = b.classList.contains("saved") ? "Saved ★" : "Save ☆";
  }
  if (b.dataset.action === "remove") b.closest(".card").remove();
});
// 2. Search + filters on the Browse page
function filterCards() {
  const q = search.value.toLowerCase(),
    c = category.value,
    t = type.value;
  document.querySelectorAll("[data-category]").forEach((card) => {
    card.hidden = !(
      card.textContent.toLowerCase().includes(q) &&
      (!c || card.dataset.category === c) &&
      (!t || card.dataset.type === t)
    );
  });
}
["search", "category", "type"].forEach((id) =>
  document.getElementById(id)?.addEventListener("input", filterCards),
);
// 3. Save profile name, then show it in the top bar of every page
document.getElementById("profileForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.name = profileForm.querySelector("input").value;
  alert("Profile saved!");
  location.reload();
});
const n = localStorage.name || "Student";
document.querySelector(".me span").textContent = n;
document.querySelector(".me b").textContent = n[0].toUpperCase();
