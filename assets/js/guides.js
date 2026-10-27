const searchInput = document.getElementById("guide-search");
const categoryInput = document.getElementById("category-filter");
const difficultyInput = document.getElementById("difficulty-filter");
const guidesGrid = document.getElementById("guides-grid");
const guidesEmpty = document.getElementById("guides-empty");
const resultCount = document.getElementById("result-count");

function renderGuides() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryInput.value;
  const difficulty = difficultyInput.value;
  const filtered = GUIDES_DATA.filter((guide) => {
    const text = `${guide.title} ${guide.summary} ${guide.category}`.toLowerCase();
    return text.includes(query) && (!category || guide.category === category) && (!difficulty || guide.difficulty === difficulty);
  });
  guidesGrid.innerHTML = filtered.map((guide) => createGuideCard(guide)).join("");
  guidesEmpty.classList.toggle("d-none", filtered.length > 0);
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "guide" : "guides"} found`;
}

function clearGuideFilters() {
  searchInput.value = "";
  categoryInput.value = "";
  difficultyInput.value = "";
  renderGuides();
}

const guideParams = new URLSearchParams(location.search);
searchInput.value = guideParams.get("search") || "";
const requestedCategory = guideParams.get("category");
if ([...categoryInput.options].some((option) => option.value === requestedCategory)) categoryInput.value = requestedCategory;

[searchInput, categoryInput, difficultyInput].forEach((input) => {
  input.addEventListener(input === searchInput ? "input" : "change", renderGuides);
});
document.getElementById("clear-filters").addEventListener("click", clearGuideFilters);
document.getElementById("empty-clear").addEventListener("click", clearGuideFilters);
document.addEventListener("click", handleBookmarkClick);
renderGuides();
