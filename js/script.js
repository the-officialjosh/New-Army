const btnEl = document.getElementById("menu-icon-trigger");
const headerEl = document.querySelector(".header");
btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menu-icon-wrapper").classList.toggle("open");
  headerEl.classList.toggle("open");
});

const convertTitleCase = (title) => {
  const nonCapitalizedWords = [
    "a",
    "an",
    "and",
    "as",
    "at",
    "but",
    "by",
    "for",
    "from",
    "in",
    "nor",
    "of",
    "on",
    "or",
    "the",
    "to",
    "with",
  ];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .filter((word) => word)
    .map((word, i) =>
      nonCapitalizedWords.includes(word) && i !== 0
        ? word
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return titleCase;
};

const newTitle = document.querySelector(".header__title--secondary");
const newSub = document.querySelectorAll(".heading-secondary");

newTitle.textContent = convertTitleCase(newTitle.textContent);

newSub.forEach((el) => {
  el.textContent = convertTitleCase(el.textContent);
});
