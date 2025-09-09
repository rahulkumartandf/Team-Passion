// Define page content
const pages = {
  home: `
    <h1>Welcome to My Website</h1>
    <p>This is the home page. Use the tabs above to explore Blogs and News.</p>
  `,
  blogs: `
    <h1>Blogs</h1>
    <p>Here you can add your blog posts.</p>
  `,
  news: `
    <h1>News</h1>
    <p>Here you can publish latest news and updates.</p>
  `
};

// Load a page
function loadPage(page) {
  document.getElementById("content").innerHTML = pages[page];

  // Update active tab
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  // Save current page in URL hash
  window.location.hash = page;
}

// Setup navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage(link.dataset.page);
  });
});

// Load page from hash or default to home
window.addEventListener("load", () => {
  const page = window.location.hash.replace("#", "") || "home";
  loadPage(page);
});
