import React, {useState, useEffect, Suspense} from "react";
import "./App.css";

// Dynamic import all components
const files = import.meta.glob("./components/*.jsx");
const projects = Object.entries(files).map(([path, comp]) => ({
  name: path.replace("./components/", "").replace(".jsx", ""),
  component: React.lazy(comp),
}));

const ITEMS_PER_PAGE = 9;

function App() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [highlightApp, setHighlightApp] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const appName = params.get("app");

    if (appName) {
      setHighlightApp(appName);

      const index = projects.findIndex((p) => p.name === appName);
      if (index !== -1) {
        const page = Math.ceil((index + 1) / ITEMS_PER_PAGE);
        setCurrentPage(page);
      }
    }
  }, []);

  // Filter projects by search
  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Sidebar click
  const handleSidebarClick = (name, index) => {
    const page = Math.ceil((index + 1) / ITEMS_PER_PAGE);
    setCurrentPage(page);
    setHighlightApp(name);

    const params = new URLSearchParams(window.location.search);
    params.set("app", name);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>Mini Projects</h2>
        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        <div className="sidebar-list">
          {filteredProjects.map((p, i) => (
            <button
              key={i}
              className={p.name === highlightApp ? "active" : ""}
              onClick={() => handleSidebarClick(p.name, i)}
            >
              {p.name}
            </button>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main
        className="main-content"
        onClick={() => {
          if (sidebarOpen && window.innerWidth <= 900) setSidebarOpen(false);
        }}
      >
        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <h1 style={{color: "#22c55e", textAlign: "center"}}>
          OneSix - React Mini Projects
        </h1>
        <div className="projects-grid">
          <Suspense fallback={<div>Loading...</div>}>
            {currentProjects.map((p) => (
              <div
                key={p.name}
                className={`project-card ${
                  p.name === highlightApp ? "highlight" : ""
                }`}
              >
                <p.component />
              </div>
            ))}
          </Suspense>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({length: totalPages}, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
