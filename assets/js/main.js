const BOOKMARKS_KEY = "techfix-hub-bookmarks";

function getSavedGuides() {
  try {
    const saved = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((id) => typeof id === "string" || typeof id === "number").map(String) : [];
  } catch (error) {
    console.error("Unable to read saved guides from localStorage.", error);
    return [];
  }
}

function setSavedGuides(ids) {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...new Set(ids.map(String))]));
    updateBookmarkCount();
    return true;
  } catch (error) {
    console.error("Unable to save guides to localStorage.", error);
    return false;
  }
}

function isGuideBookmarked(id) {
  return getSavedGuides().includes(String(id));
}

function toggleGuideBookmark(id) {
  const saved = getSavedGuides();
  const normalizedId = String(id);
  return setSavedGuides(saved.includes(normalizedId) ? saved.filter((item) => item !== normalizedId) : [...saved, normalizedId]);
}

function updateBookmarkCount() {
  const count = getSavedGuides().length;
  document.querySelectorAll(".bookmark-count").forEach((badge) => {
    badge.textContent = String(count);
    badge.classList.toggle("d-none", count === 0);
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  })[character]);
}

function createGuideCard(guide, options = {}) {
  const removeButton = options.allowRemove
    ? `<button class="btn btn-link card-remove" type="button" data-bookmark-toggle="${escapeHTML(guide.id)}" aria-label="Remove ${escapeHTML(guide.title)} from bookmarks"><i class="fa-solid fa-trash-can"></i><span>Remove</span></button>`
    : `<button class="bookmark-toggle ${isGuideBookmarked(guide.id) ? "is-saved" : ""}" type="button" data-bookmark-toggle="${escapeHTML(guide.id)}" aria-label="${isGuideBookmarked(guide.id) ? "Remove bookmark" : "Bookmark"}: ${escapeHTML(guide.title)}" aria-pressed="${isGuideBookmarked(guide.id)}"><i class="fa-${isGuideBookmarked(guide.id) ? "solid" : "regular"} fa-bookmark"></i></button>`;
  return `<div class="col-md-6 col-xl-4"><article class="guide-card"><div class="guide-card-top"><span class="category-badge">${escapeHTML(guide.category)}</span>${removeButton}</div><div class="badge-row"><span class="difficulty-badge ${guide.difficulty.toLowerCase()}">${escapeHTML(guide.difficulty)}</span></div><h2><a href="guide-details.html?id=${encodeURIComponent(guide.id)}">${escapeHTML(guide.title)}</a></h2><p>${escapeHTML(guide.summary)}</p><a class="btn btn-card" href="guide-details.html?id=${encodeURIComponent(guide.id)}">Read guide <i class="fa-solid fa-arrow-right ms-2"></i></a></article></div>`;
}

function handleBookmarkClick(event) {
  const button = event.target.closest("[data-bookmark-toggle]");
  if (!button) return;
  if (!toggleGuideBookmark(button.dataset.bookmarkToggle)) return;
  if (document.getElementById("bookmarks-grid")) {
    window.dispatchEvent(new CustomEvent("techfix:bookmarks-updated"));
  } else {
    const saved = isGuideBookmarked(button.dataset.bookmarkToggle);
    button.classList.toggle("is-saved", saved);
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute("aria-label", `${saved ? "Remove bookmark" : "Bookmark"}: ${button.getAttribute("aria-label").split(": ").slice(1).join(": ")}`);
    button.innerHTML = `<i class="fa-${saved ? "solid" : "regular"} fa-bookmark"></i>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav .nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
  document.querySelectorAll("[data-current-year]").forEach((element) => { element.textContent = String(new Date().getFullYear()); });
  updateBookmarkCount();
});

window.addEventListener("storage", updateBookmarkCount);
