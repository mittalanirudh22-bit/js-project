let search = document.getElementById("search");
let items = document.querySelectorAll("#list li");
let noResults = document.getElementById("no-results");

search.addEventListener("keyup", function() {
  let value = search.value.toLowerCase();
  let visibleCount = 0;

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = "block";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });

  if (visibleCount === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
});