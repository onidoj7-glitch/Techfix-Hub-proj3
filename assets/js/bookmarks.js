const bookmarksGrid = document.getElementById("bookmarks-grid");
const bookmarksEmpty = document.getElementById("bookmarks-empty");
const bookmarkCountLabel = document.getElementById("bookmark-count-label");

function renderBookmarks() {
  const saved = new Set(getSavedGuides());
  const guides = GUIDES_DATA.filter((guide) => saved.has(String(guide.id)));
  bookmarksGrid.innerHTML = guides.map((guide) => createGuideCard(guide, { allowRemove: true })).join("");
  bookmarksEmpty.classList.toggle("d-none", guides.length > 0);
  bookmarkCountLabel.textContent = guides.length ? `${guides.length} saved ${guides.length === 1 ? "guide" : "guides"}` : "";
  updateBookmarkCount();
}

document.addEventListener("click", handleBookmarkClick);
window.addEventListener("techfix:bookmarks-updated", renderBookmarks);
renderBookmarks();
