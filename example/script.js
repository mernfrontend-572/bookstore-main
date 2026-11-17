// ============================================================================
// JAVASCRIPT DOM MASTERCLASS — TEACHING SCRIPT
// ============================================================================

// ----------------------------------------------------------------------------
// 1. SELECTING DOM ELEMENTS
// Bookstore Reference:
//   const recommendedList = document.getElementById("recommendedList");
//   document.querySelectorAll("[data-scroll]").forEach(...)
// ----------------------------------------------------------------------------
const demoTitle = document.getElementById("demo-title"); // Single element by ID
const demoCards = document.querySelectorAll(".demo-card"); // NodeList of all matching classes
const specialCard = document.querySelector('[data-role="special"]'); // First match by CSS attribute selector

document.getElementById("btn-select-demo").addEventListener("click", () => {
  demoTitle.classList.add("bg-yellow-100", "px-2", "rounded");

  // NodeList supports .forEach() directly
  demoCards.forEach((card) => {
    card.classList.add("border-blue-500", "bg-blue-50");
  });

  specialCard.classList.add("ring-2", "ring-amber-500");
});

document.getElementById("btn-select-reset").addEventListener("click", () => {
  demoTitle.classList.remove("bg-yellow-100", "px-2", "rounded");
  demoCards.forEach((card) => {
    card.classList.remove(
      "border-blue-500",
      "bg-blue-50",
      "ring-2",
      "ring-amber-500",
    );
  });
});

// ----------------------------------------------------------------------------
// 2. READING & UPDATING CONTENT (textContent vs innerHTML)
// Bookstore Reference:
//   const formatTitle = (title) => title.replace(/\n/g, "<br />");
//   recommendedList.innerHTML += `<article>...</article>`;
// ----------------------------------------------------------------------------
const contentBox = document.getElementById("content-box");
const originalContent = contentBox.textContent;

document.getElementById("btn-text-content").addEventListener("click", () => {
  // Treats HTML tags as literal plain text (Prevents XSS injection)
  contentBox.textContent =
    "<strong>textContent:</strong> Renders <span> tags as plain text!";
});

document.getElementById("btn-inner-html").addEventListener("click", () => {
  // Parses string as real HTML elements
  contentBox.innerHTML =
    "<strong class='text-indigo-600'>innerHTML:</strong> Renders <u>real HTML tags</u> inside the DOM!";
});

document.getElementById("btn-reset-content").addEventListener("click", () => {
  contentBox.textContent = originalContent;
});

// ----------------------------------------------------------------------------
// 3. STYLING, CLASSLIST & GETCOMPUTEDSTYLE
// Bookstore Reference:
//   menu.classList.toggle("hidden");
//   menu.classList.toggle("flex");
//   parseInt(getComputedStyle(track).columnGap || 0);
// ----------------------------------------------------------------------------
const styleBox = document.getElementById("style-box");
const computedOutput = document.getElementById("computed-output");

document.getElementById("btn-toggle-theme").addEventListener("click", () => {
  styleBox.classList.toggle("bg-white");
  styleBox.classList.toggle("text-slate-800");
  styleBox.classList.toggle("bg-slate-900");
  styleBox.classList.toggle("text-white");
  styleBox.classList.toggle("shadow-lg");
});

document.getElementById("btn-check-style").addEventListener("click", () => {
  // Reads final rendered CSS values from the browser
  const styles = getComputedStyle(styleBox);
  computedOutput.textContent = `Computed Padding: ${styles.padding} | Background: ${styles.backgroundColor}`;
});

// ----------------------------------------------------------------------------
// 4. ATTRIBUTES & CUSTOM DATA ATTRIBUTES (dataset)
// Bookstore Reference:
//   <button data-scroll="categoryTrack" data-dir="1">
//   const track = document.getElementById(btn.dataset.scroll);
//   Number(btn.dataset.dir)
// ----------------------------------------------------------------------------
let currentSlide = 0;
const counterDisplay = document.getElementById("counter-value");

document.querySelectorAll(".step-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // btn.dataset.step reads the HTML `data-step` attribute as a string
    const step = Number(btn.dataset.step);
    currentSlide += step;
    counterDisplay.textContent = currentSlide;
  });
});

// ----------------------------------------------------------------------------
// 5. CREATING & REMOVING ELEMENTS (createElement, appendChild, remove)
// ----------------------------------------------------------------------------
const topicInput = document.getElementById("topic-input");
const topicList = document.getElementById("topic-list");

document.getElementById("btn-add-topic").addEventListener("click", () => {
  const value = topicInput.value.trim();
  if (!value) return;

  // Step 1: Create element in memory
  const li = document.createElement("li");
  li.className =
    "flex items-center justify-between p-3 bg-slate-50 border rounded-lg";

  // Step 2: Set inner content safely
  const span = document.createElement("span");
  span.textContent = value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Remove";
  delBtn.className =
    "delete-btn text-xs text-red-600 font-semibold hover:underline";

  // Step 3: Append children & insert into DOM
  li.appendChild(span);
  li.appendChild(delBtn);
  topicList.appendChild(li);

  topicInput.value = "";
});

// Event delegation for removing list items
topicList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove();
  }
});

// ----------------------------------------------------------------------------
// 6. RENDERING ARRAY DATA TO DOM (forEach vs map)
// Bookstore Reference:
//   recommendedBooks.forEach((book) => { recommendedList.innerHTML += ... });
//   bestList.innerHTML = bestBooks.map((book) => `...`).join("");
// ----------------------------------------------------------------------------
const sampleBooks = [
  {
    title: "The World of\nAbstract Art",
    category: "Art & Design",
    price: 25.0,
  },
  { title: "Educated :\na Memoir", category: "Education", price: 28.0 },
  {
    title: "Sprint : Solve,\nTest in 5 Days",
    category: "Business",
    price: 23.0,
  },
];

const formatTitle = (title) => title.replace(/\n/g, "<br />");
const formatPrice = (price) => `$${price.toFixed(2)}`;
const demoBookGrid = document.getElementById("demo-book-grid");

// Method A: forEach with +=
document.getElementById("btn-render-foreach").addEventListener("click", () => {
  demoBookGrid.innerHTML = "";
  sampleBooks.forEach((book) => {
    demoBookGrid.innerHTML += `
      <article class="p-4 rounded-lg border border-slate-200 bg-slate-50">
        <span class="text-xs font-semibold text-blue-600 uppercase">${book.category} (forEach)</span>
        <h3 class="font-bold text-slate-900 mt-1">${formatTitle(book.title)}</h3>
        <p class="text-sm font-semibold text-emerald-600 mt-2">${formatPrice(book.price)}</p>
      </article>
    `;
  });
});

// Method B: map().join("") — Better performance (updates DOM only once!)
document.getElementById("btn-render-map").addEventListener("click", () => {
  demoBookGrid.innerHTML = sampleBooks
    .map(
      (book) => `
      <article class="p-4 rounded-lg border border-purple-200 bg-purple-50">
        <span class="text-xs font-semibold text-purple-700 uppercase">${book.category} (map)</span>
        <h3 class="font-bold text-slate-900 mt-1">${formatTitle(book.title)}</h3>
        <p class="text-sm font-semibold text-emerald-600 mt-2">${formatPrice(book.price)}</p>
      </article>
    `,
    )
    .join("");
});

document.getElementById("btn-clear-books").addEventListener("click", () => {
  demoBookGrid.innerHTML = "";
});

// ----------------------------------------------------------------------------
// 7. DOM TRAVERSING
// Bookstore Reference:
//   const card = track.firstElementChild;
//   const step = card.offsetWidth + parseInt(getComputedStyle(track).columnGap || 0);
// ----------------------------------------------------------------------------
document.getElementById("btn-traverse").addEventListener("click", () => {
  const middle = document.getElementById("middle-child");
  const parent = middle.parentElement;
  const first = parent.firstElementChild;
  const next = middle.nextElementSibling;

  first.classList.add("bg-amber-100");
  next.classList.add("bg-emerald-100");

  document.getElementById("traverse-log").textContent =
    `Parent ID: #${parent.id} | First: "${first.textContent}" | Next: "${next.textContent}"`;
});

// ----------------------------------------------------------------------------
// 8. EVENTS & EVENT DELEGATION
// Bookstore Reference:
//   <form onsubmit="event.preventDefault()">
//   Wishlist heart buttons inside #recommendedList
// ----------------------------------------------------------------------------
document.getElementById("demo-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Stops page reload!
  const email = document.getElementById("email-input").value;
  document.getElementById("form-feedback").textContent =
    `Subscribed successfully with: ${email}`;
  e.target.reset();
});

// Event Delegation: One listener on parent handles all current & future heart buttons
document.getElementById("wishlist-container").addEventListener("click", (e) => {
  const heartBtn = e.target.closest(".heart-btn");
  if (!heartBtn) return;

  heartBtn.classList.toggle("text-slate-400");
  heartBtn.classList.toggle("text-red-500");
});
